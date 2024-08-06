using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class LookupRepository
    {
        public List<FIDOVictory.Common.Data.LookupMaster> GetLookups(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var lookups = from l in ec.LookupMasters
                            where l.IsDeleted == false &&
                            l.UpdateDateTime >= lastSync
                            select l;

                return lookups.ToList();
            }
        }
    }
}
