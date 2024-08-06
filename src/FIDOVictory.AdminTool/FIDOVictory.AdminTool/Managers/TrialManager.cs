using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Trial;

namespace FIDOVictory.AdminTool.Managers
{
    public class TrialManager
    {
        public TrialModel GetTrialByID(int trialID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var row = ec.usp_Get_Trial_ByTrialID(trialID).SingleOrDefault();
                if (row != null)
                {
                    var model = new TrialModel();

                    model.TrialID = row.Trial_ID;
                    model.Name = row.Name;
                    model.Farm = row.FarmName;
                    model.CropID = row.Crop_ID;
                    model.City = row.City;
                    model.County = row.County;
                    model.Year = row.TrialYear.HasValue ? row.TrialYear.Value : 0;
                    model.TraitID = row.Trait_ID.HasValue ? row.Trait_ID.Value: 0;
                    model.State = row.State;
                    model.Zip = row.Zip;
                    model.ComplianceStatus = row.ComplianceStatus;

                    model.SRRLeadUserID = row.SRRLeadUser_ID;
                    model.IRPUserID = row.IRPUser_ID.HasValue ? row.IRPUser_ID.Value : 0;
                    model.SiteID = row.Site_ID.HasValue ? row.Site_ID.Value : 0;


                    model.InternalOption = (Int32)Models.LookupEnum.No;
                    if (row.Internal.HasValue && row.Internal.Value == true)
                    {
                        model.InternalOption = (Int32)Models.LookupEnum.Yes;
                    }


                    return model;
                }
            }

            return null;
        }
    }
}