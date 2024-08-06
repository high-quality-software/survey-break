using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace FIDOVictory.AdminTool.Tools.Reflection
{

    public static class ObjectExtension
    {
        public static T1 CopyFrom<T1, T2>(this T1 target, T2 source)
            where T1 : class
            where T2 : class
        {
            PropertyInfo[] srcFields = source.GetType().GetProperties(
                BindingFlags.Instance | BindingFlags.Public | BindingFlags.GetProperty);

            PropertyInfo[] destFields = target.GetType().GetProperties(
                BindingFlags.Instance | BindingFlags.Public | BindingFlags.SetProperty);

            foreach (var property in srcFields)
            {
                var dest = destFields.FirstOrDefault(x => x.Name == property.Name);
                if (dest != null && dest.CanWrite)
                    dest.SetValue(target, property.GetValue(source, null), null);
            }

            return target;
        }
    }
}