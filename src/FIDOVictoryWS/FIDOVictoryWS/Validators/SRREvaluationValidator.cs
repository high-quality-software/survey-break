using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictoryWS.Managers;
using FIDOVictoryWS.Models.Security;

namespace FIDOVictoryWS.Validators
{
    public class SRREvaluationValidator : BaseValidator
    {
        public ValidationResult ValidateUserAlias(String userAlias)
        {
            return this.ValidateUserAliasImpl(userAlias);
        }

    }
}