using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;

namespace Portfolio;

[SupportedOSPlatform("browser")]
public partial class Interop
{
    [JSImport("getTheme", "Interop")]
    internal static partial string GetTheme();

    [JSImport("toggleTheme", "Interop")]
    internal static partial void ToggleTheme();
}