using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract
{
    /// <summary>
    /// Base class that represent a web api http response 
    /// </summary>
    public class BaseResponseContract
    {
        public Boolean Success { get; set; }
        public String ErrorCode { get; set; }
        public String ErrorDescription { get; set; }
        public String ExceptionMessage { get; set; }
    }
}