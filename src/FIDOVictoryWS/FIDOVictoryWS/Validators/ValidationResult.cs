using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.DataContract;

namespace FIDOVictoryWS.Validators
{
    /// <summary>
    /// Represent a result from a data input validation
    /// </summary>
    public class ValidationResult : BaseResponseContract
    {
        public Int32 UserID { get; set; }
    }
}