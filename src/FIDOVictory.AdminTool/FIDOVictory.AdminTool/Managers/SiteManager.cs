using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Managers.Results;
using FIDOVictory.AdminTool.Models.Site;

namespace FIDOVictory.AdminTool.Managers
{
    public class SiteManager
    {
        public List<SiteItem> GetAllSiteItems()
        {
            var list = new List<SiteItem>();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = from s in ec.SiteMasters
                             where s.IsDeleted == false
                             select s;

                foreach (var r in result)
                {
                    list.Add(new SiteItem()
                    {
                        SiteID = r.Site_ID,
                        Name = r.SiteName,
                    });
                }
            }

            return list;
        }

        public SiteModel GetSiteByID(int siteID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var row = ec.SiteMasters
                                .Where(s => s.IsDeleted == false
                                    && s.Site_ID == siteID)
                                .FirstOrDefault();

                if (row != null)
                {
                    var model = new SiteModel();

                    model.SiteID = row.Site_ID;
                    model.Name = row.SiteName;

                    return model;
                }
            }

            return null;
        }

        public ListSiteResult List(int page, int pageSize, string filter = null)
        {

            var listResult = new ListSiteResult();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var resultCount = ec.SiteMasters
                                .Where(s => s.IsDeleted == false
                                    && (string.IsNullOrEmpty(filter)
                                    || s.SiteName.Contains(filter)))
                                    .Count();

                var resultPage = ec.SiteMasters
                                .Where(s => s.IsDeleted == false
                                    && (string.IsNullOrEmpty(filter)
                                    || s.SiteName.Contains(filter)))
                                    .OrderBy(s => s.SiteName)
                                    .Skip((page - 1) * pageSize)
                                    .Take(pageSize);

                listResult.RowCount = resultCount;
                foreach (var r in resultPage)
                {
                    listResult.List.Add(new SiteItem()
                    {
                        SiteID = r.Site_ID,
                        Name = r.SiteName,
                    });
                }
            }

            return listResult;
        }

        public TransactionResult Create(SiteModel site, string updateUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = new TransactionResult();
                try
                {
                    ec.SiteMasters.Add(new Data.SiteMaster()
                    {
                        SiteName = site.Name,
                        IsDeleted = false,
                        UpdateDateTime = DateTime.Now,
                        UpdateUserID = updateUserID,
                    });

                    ec.SaveChanges();
                }
                catch (Exception ex)
                {
                    result.ReturnCode = -1;
                    result.ErrorMessage = ex.Message;
                }

                return result;

            }
        }

        public TransactionResult Delete(int id, string updateUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = new TransactionResult();
                try
                {
                    var data = ec.SiteMasters.Where(s => s.Site_ID == id).FirstOrDefault();
                    if (data != null)
                    {
                        data.IsDeleted = true;
                        data.UpdateDateTime = DateTime.Now;
                        data.UpdateUserID = updateUserID;
                    }

                    ec.SaveChanges();

                }
                catch (Exception ex)
                {
                    result.ReturnCode = -1;
                    result.ErrorMessage = ex.Message;
                }

                return result;

            }
        }

        public TransactionResult Update(SiteModel site, string updateUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = new TransactionResult();
                try
                {
                    var data = ec.SiteMasters.Where(s => s.Site_ID == site.SiteID).FirstOrDefault();
                    if (data != null)
                    {
                        data.SiteName = site.Name;
                        data.UpdateDateTime = DateTime.Now;
                        data.UpdateUserID = updateUserID;
                    }

                    ec.SaveChanges();
                }
                catch (Exception ex)
                {
                    result.ReturnCode = -1;
                    result.ErrorMessage = ex.Message;
                }

                return result;

            }
        }
    }
}