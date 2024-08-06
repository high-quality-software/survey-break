using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Trait;

namespace FIDOVictory.AdminTool.Managers
{
    public class TraitManager
    {
        public List<TraitItem> GetAllTraitItems()
        {
            var list = new List<TraitItem>();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = from t in ec.TraitMasters
                             where t.IsDeleted == false
                             select t;

                foreach (var r in result)
                {
                    list.Add(new TraitItem()
                    {
                        TraitID = r.Trait_ID,
                        Name = r.TraitName,
                    });
                }
            }

            return list;
        }
    }
}