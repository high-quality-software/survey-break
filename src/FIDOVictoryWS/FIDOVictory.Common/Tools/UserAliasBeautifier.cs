using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Tools
{
    public class UserAliasBeautifier
    {
        public static string Apply(string userAlias)
        {
            return userAlias.Trim().ToUpper();
        }
    }
}
