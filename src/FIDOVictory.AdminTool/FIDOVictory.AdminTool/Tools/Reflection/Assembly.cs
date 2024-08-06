using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Tools.Reflection
{
    public class Assembly
    {
        public static string GetCustomVersion()
        {
            var version = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version;
            return version.Major.ToString() + "." + version.Minor.ToString() + "." + version.Build.ToString();
        }
    }
}