using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class ChemicalRepository
    {
        public List<FIDOVictory.Common.Data.ChemicalType> GetChemicalTypes(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var ctypes = from ct in ec.ChemicalTypes
                             where ct.IsDeleted == false &&
                             ct.UpdateDateTime >= lastSync
                             select ct;

                return ctypes.ToList();
            }
        }

        public List<FIDOVictory.Common.Data.ChemicalMaster> GetChemicals(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var chemicals = from cm in ec.ChemicalMasters
                                where cm.IsDeleted == false &&
                                cm.UpdateDateTime >= lastSync
                                select cm;

                return chemicals.ToList();
            }
        }

    }
}
