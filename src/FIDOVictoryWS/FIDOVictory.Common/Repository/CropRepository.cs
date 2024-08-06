using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class CropRepository
    {
        public List<FIDOVictory.Common.Data.Crop> GetCrops(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var crops = from c in ec.Crops
                            where c.IsDeleted == false &&
                            c.UpdateDateTime >= lastSync
                            select c;

                return crops.ToList();
            }
        }
    }
}
