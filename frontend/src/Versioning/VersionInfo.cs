namespace Versioning
{
    public static class VersionInfo
    {
        public static string GetVersion()
        {
            var assemblyLocation = System.Reflection.Assembly.GetExecutingAssembly().Location;
            var version = System.Diagnostics.FileVersionInfo.GetVersionInfo(assemblyLocation).ProductVersion;
            return version;
        }
    }
}
