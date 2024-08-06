using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Common.Data;
using FIDOVictory.Common.Repository;
using FIDOVictoryWS.Models.Security;

namespace FIDOVictoryWS.Tests.TestData
{
    public class UserTestRepository : UserRepository
    {
        public FIDOVictory.Common.Data.User GetAnyUser()
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var count = ec.Users.Count(u => u.IsDeleted == false);
                var r = new Random();

                var users = ec.Users
                    .Where(u => u.IsDeleted == false)
                    .OrderBy(u => u.User_ID)
                    .Skip(r.Next(0, count))
                    .Take(1);


                return users.First();
            }
        }

        public FIDOVictory.Common.Data.User GetAnyUser(TrialCatalog trial)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var count = ec.v_UserTrials.Count(u => u.Trial_ID == trial.Trial_ID);
                var r = new Random();

                var usertrial = ec.v_UserTrials
                    .Where(u => u.Trial_ID == trial.Trial_ID)
                    .OrderBy(u => u.User_ID)
                    .Skip(r.Next(0, count))
                    .Take(1);

                var userAlias = usertrial.First().UserAlias;

                var user = ec.Users.Single(u => u.UserAlias == userAlias);

                return user;

            }
        }

        public FIDOVictory.Common.Data.User GetAnySRRUser()
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var count = ec.Users.Count(u => u.IsDeleted == false && u.UserType_ID == (int)UserTypeEnum.SRR);
                var r = new Random();

                var users = ec.Users
                    .Where(u => u.IsDeleted == false && u.UserType_ID == (int)UserTypeEnum.SRR)
                    .OrderBy(u => u.User_ID)
                    .Skip(r.Next(0, count))
                    .Take(1);


                return users.First();
            }
        }
    }
}
