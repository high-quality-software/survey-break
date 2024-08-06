using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.Common.Repository;
using FIDOVictoryWS.Models.Security;

namespace FIDOVictoryWS.Validators
{
    public class BaseValidator
    {
        protected ValidationResult ValidateUserAliasImpl(String userAlias)
        {
            var response = new ValidationResult();
            response.Success = false;

            //parameters validation
            if (string.IsNullOrEmpty(userAlias))
            {
                response.ErrorCode = "1";
                response.ErrorDescription = "UserAlias must have a value";
                return response;
            }

            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);
            if (userContract == null)
            {
                response.ErrorCode = "2";
                response.ErrorDescription = "Do not exists a user with UserAlias";
                return response;
            }

            if (userContract.UserType_ID != (int)UserTypeEnum.SRR)
            {
                response.ErrorCode = "3";
                response.ErrorDescription = "UserAlias must be a SRR";
                return response;
            }

            response.Success = true;

            return response;
        }
    }
}