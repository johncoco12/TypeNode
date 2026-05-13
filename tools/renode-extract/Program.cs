using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TypeNode.RenodeExtract;

internal static class Program
{
    private const string PeripheralNamespacePrefix = "Antmicro.Renode.Peripherals";

    public static int Main(string[] args)
    {
        var renodeRoot = args.Length > 0 ? args[0] : "/opt/renode";
        var outPath = args.Length > 1 ? args[1] : "peripherals.json";
        var binDir = Path.Combine(renodeRoot, "bin");

        if (!Directory.Exists(binDir))
        {
            Console.Error.WriteLine($"Renode bin directory not found: {binDir}");
            return 1;
        }

        var renodeDlls = Directory.GetFiles(binDir, "*.dll");
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        var runtimeDlls = Directory.GetFiles(runtimeDir, "*.dll");

        // Runtime dlls FIRST so System.* types resolve from the runtime, not from any
        // shimmed copies Renode may bundle (avoids version conflicts).
        var resolver = new PathAssemblyResolver(runtimeDlls.Concat(renodeDlls));
        using var mlc = new MetadataLoadContext(resolver, "System.Private.CoreLib");

        var assemblies = new List<Assembly>();
        foreach (var dll in renodeDlls)
        {
            try { assemblies.Add(mlc.LoadFromAssemblyPath(dll)); }
            catch (Exception ex) { Console.Error.WriteLine($"skip {Path.GetFileName(dll)}: {ex.Message}"); }
        }

        Type? iPeripheral = null;
        foreach (var asm in assemblies)
        {
            try
            {
                iPeripheral = asm.GetType("Antmicro.Renode.Peripherals.IPeripheral");
                if (iPeripheral != null) break;
            }
            catch { /* ignore */ }
        }
        if (iPeripheral == null)
        {
            Console.Error.WriteLine("Could not locate Antmicro.Renode.Peripherals.IPeripheral");
            return 1;
        }

        // Collect enum types referenced by peripheral constructors.
        var enums = new Dictionary<string, List<string>>();

        var peripherals = new List<PeripheralInfo>();
        foreach (var asm in assemblies)
        {
            Type[] types;
            try { types = asm.GetTypes(); }
            catch (ReflectionTypeLoadException ex) { types = ex.Types.Where(t => t != null).ToArray()!; }

            foreach (var t in types)
            {
                if (t == null) continue;
                try
                {
                    if (t.IsAbstract || t.IsInterface || !t.IsClass) continue;
                    if (t.IsGenericTypeDefinition) continue;
                    if (t.FullName == null) continue;
                    if (!t.FullName.StartsWith(PeripheralNamespacePrefix)) continue;
                    if (!ImplementsInterface(t, iPeripheral)) continue;

                    peripherals.Add(BuildInfo(t, enums));
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine($"skip type {t.FullName ?? t.Name}: {ex.GetType().Name}: {ex.Message}");
                }
            }
        }

        peripherals = peripherals
            .GroupBy(p => p.FullName)
            .Select(g => g.First())
            .OrderBy(p => p.ShortName, StringComparer.Ordinal)
            .ToList();

        var output = new ExtractOutput
        {
            RenodeRoot = renodeRoot,
            ExtractedAt = DateTime.UtcNow.ToString("O"),
            Peripherals = peripherals,
            Enums = enums,
        };

        var json = JsonSerializer.Serialize(output, new JsonSerializerOptions
        {
            WriteIndented = true,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        });

        File.WriteAllText(outPath, json);
        Console.Error.WriteLine($"Wrote {peripherals.Count} peripherals ({enums.Count} enum types) to {outPath}");
        return 0;
    }

    private static bool ImplementsInterface(Type t, Type iface)
    {
        for (var cur = t; cur != null; cur = cur.BaseType!)
        {
            foreach (var i in cur.GetInterfaces())
            {
                if (i.FullName == iface.FullName) return true;
            }
            if (cur.BaseType == null) break;
        }
        return false;
    }

    private static PeripheralInfo BuildInfo(Type t, Dictionary<string, List<string>> enums)
    {
        var shortName = t.FullName!.Substring(PeripheralNamespacePrefix.Length + 1);

        var ctors = new List<ConstructorInfoDto>();
        foreach (var c in t.GetConstructors(BindingFlags.Public | BindingFlags.Instance))
        {
            var ps = c.GetParameters().Select(p =>
            {
                CollectEnums(p.ParameterType, enums);
                return new ParameterInfoDto
                {
                    Name = p.Name ?? "_",
                    Type = TypeRef(p.ParameterType),
                    Optional = p.HasDefaultValue,
                    DefaultValue = p.HasDefaultValue ? FormatDefault(p.RawDefaultValue) : null,
                };
            }).ToList();
            ctors.Add(new ConstructorInfoDto { Parameters = ps });
        }

        var props = new List<PropertyInfoDto>();
        foreach (var p in t.GetProperties(BindingFlags.Public | BindingFlags.Instance))
        {
            if (p.GetSetMethod() == null) continue;
            if (p.GetIndexParameters().Length > 0) continue;
            props.Add(new PropertyInfoDto
            {
                Name = p.Name,
                Type = TypeRef(p.PropertyType),
            });
        }

        return new PeripheralInfo
        {
            FullName = t.FullName!,
            ShortName = shortName,
            Constructors = ctors,
            Properties = props,
        };
    }

    /// <summary>
    /// If <paramref name="t"/> is an enum (or Nullable&lt;TEnum&gt;), record its members.
    /// </summary>
    private static void CollectEnums(Type t, Dictionary<string, List<string>> enums)
    {
        // Unwrap Nullable<T>
        if (t.IsGenericType)
        {
            var def = t.GetGenericTypeDefinition();
            if (def.FullName == "System.Nullable`1")
            {
                var inner = t.GetGenericArguments()[0];
                CollectEnums(inner, enums);
                return;
            }
        }

        if (!t.IsEnum) return;
        var key = t.FullName ?? t.Name;
        if (enums.ContainsKey(key)) return;

        try
        {
            var members = t
                .GetFields(BindingFlags.Static | BindingFlags.Public)
                .Select(f => f.Name)
                .ToList();
            enums[key] = members;
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"skip enum {key}: {ex.Message}");
        }
    }

    private static string TypeRef(Type t)
    {
        if (t.IsByRef) return TypeRef(t.GetElementType()!);
        if (t.IsArray) return TypeRef(t.GetElementType()!) + "[]";
        if (t.IsGenericType)
        {
            var generic = t.GetGenericTypeDefinition().FullName ?? t.Name;
            var args = string.Join(",", t.GetGenericArguments().Select(TypeRef));
            return $"{generic}<{args}>";
        }
        return t.FullName ?? t.Name;
    }

    private static string? FormatDefault(object? v)
    {
        if (v == null) return null;
        return v is string s ? $"\"{s}\"" : v.ToString();
    }
}

internal sealed class ExtractOutput
{
    public string RenodeRoot { get; set; } = "";
    public string ExtractedAt { get; set; } = "";
    public List<PeripheralInfo> Peripherals { get; set; } = new();
    /// <summary>
    /// All enum types referenced by peripheral constructors.
    /// Key = full C# type name.  Value = ordered list of member names.
    /// </summary>
    public Dictionary<string, List<string>> Enums { get; set; } = new();
}

internal sealed class PeripheralInfo
{
    public string FullName { get; set; } = "";
    public string ShortName { get; set; } = "";
    public List<ConstructorInfoDto> Constructors { get; set; } = new();
    public List<PropertyInfoDto> Properties { get; set; } = new();
}

internal sealed class ConstructorInfoDto
{
    public List<ParameterInfoDto> Parameters { get; set; } = new();
}

internal sealed class ParameterInfoDto
{
    public string Name { get; set; } = "";
    public string Type { get; set; } = "";
    public bool Optional { get; set; }
    public string? DefaultValue { get; set; }
}

internal sealed class PropertyInfoDto
{
    public string Name { get; set; } = "";
    public string Type { get; set; } = "";
}
