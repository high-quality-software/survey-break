using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Crop;

namespace FIDOVictory.AdminTool.Managers
{
    public class CropManager
    {
        public List<CropItem> GetAllCropItems()
        {
            var list = new List<CropItem>();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = from c in ec.Crops
                             where c.IsDeleted == false
                             select c;

                foreach (var r in result)
                {
                    list.Add(new CropItem()
                    {
                        CropID = r.Crop_ID,
                        Name = r.CropName,
                    });
                }
            }

            return list;
        }
    }
}