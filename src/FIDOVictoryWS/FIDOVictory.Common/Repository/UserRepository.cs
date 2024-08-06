using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class UserRepository
    {
        public FIDOVictory.Common.Data.User GetPrimarySRRUser(FIDOVictory.Common.Data.TrialCatalog trial)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var users = from x in ec.SRRUser_Trial_Xref
                            where x.Trial_ID == trial.Trial_ID
                                && x.IsDeleted == false && x.PrimarySRR == true
                            select x.User;

                return users.FirstOrDefault();
            }
        }

        public FIDOVictory.Common.Data.User GetUserByAlias(string userAlias)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var users = from u in ec.Users
                            where u.IsDeleted == false &&
                            userAlias == u.UserAlias
                            select u;

                if (users.Count() == 0)
                {
                    throw new ApplicationException("You do not have access to the Victory Application, please contact the super user at your site");
                }
                else if (users.Count() > 1)
                {
                    throw new ApplicationException("There are more than one user with UserAlias=" + userAlias);
                }

                return users.First();
            }
        }

        public FIDOVictory.Common.Data.User GetUserByID(int userID)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var users = from u in ec.Users
                            where u.IsDeleted == false &&
                            u.User_ID == userID
                            select u;

                return users.FirstOrDefault();
            }
        }

        public List<FIDOVictory.Common.Data.User> GetUsers(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var users = from u in ec.Users
                            where u.IsDeleted == false &&
                            u.UpdateDateTime >= lastSync
                            select u;

                return users.ToList();
            }
        }

        public bool HasTrialAssigned(string userAlias)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var assignedTrialsCount = ec.v_UserTrials
                                            .Where( u=> u.UserAlias == userAlias)
                                            .Select( u => u.Trial_ID)
                                            .Count();

                return assignedTrialsCount > 0;
            }            
        }
    }
}
