using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Managers.Results;
using FIDOVictory.AdminTool.Models.Chemical;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Managers
{
    public class ChemicalManager
    {
        public List<ChemicalTypeItem> GetAllChemicalTypes()
        {
            List<ChemicalTypeItem> list = new List<ChemicalTypeItem>();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = from ct in ec.ChemicalTypes
                             where ct.IsDeleted == false
                             select ct;

                foreach (var r in result)
                {
                    list.Add(new ChemicalTypeItem()
                    {
                        ChemicalTypeID = r.ChemicalType_ID,
                        Name = r.ChemicalTypeName,
                    });
                }
            }

            return list;
        }

        public ChemicalModel GetChemicalByID(int chemicalID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var row = ec.ChemicalMasters
                                .Where(c => c.IsDeleted == false
                                    && c.Chemical_ID == chemicalID)
                                .FirstOrDefault();

                if (row != null)
                {
                    var model = new ChemicalModel();

                    model.ChemicalID = row.Chemical_ID;
                    model.ChemicalTypeID = row.ChemicalType_ID;
                    model.ChemicalType = row.ChemicalType.ChemicalTypeName;
                    model.Name = row.ChemicalName;

                    return model;
                }
            }

            return null;
        }

        public ListChemicalResult List(int page, int pageSize, string filter = null)
        {

            var listResult = new ListChemicalResult();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var resultCount = ec.ChemicalMasters
                                .Where(c => c.IsDeleted == false
                                    && (string.IsNullOrEmpty(filter)
                                    || c.ChemicalName.Contains(filter)))
                                    .Count();

                var resultPage = ec.ChemicalMasters
                                .Where(c => c.IsDeleted == false
                                    && (string.IsNullOrEmpty(filter)
                                    || c.ChemicalName.Contains(filter)))
                                    .OrderBy(c => c.ChemicalName)
                                    .Skip((page - 1) * pageSize)
                                    .Take(pageSize);

                listResult.RowCount = resultCount;
                foreach (var r in resultPage)
                {
                    listResult.List.Add(new ChemicalItem()
                    {
                        ChemicalID = r.Chemical_ID,
                        ChemicalType = r.ChemicalType.ChemicalTypeName,
                        Name = r.ChemicalName,
                    });
                }
            }

            return listResult;
        }

        public TransactionResult Create(ChemicalModel chemical, string updateUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = new TransactionResult();
                try
                {
                    ec.ChemicalMasters.Add(new Data.ChemicalMaster()
                    {
                        ChemicalName = chemical.Name,
                        ChemicalType_ID = chemical.ChemicalTypeID,
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
                    var data = ec.ChemicalMasters.Where(c => c.Chemical_ID == id).FirstOrDefault();
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

        public TransactionResult Update(ChemicalModel chemical, string updateUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = new TransactionResult();
                try
                {
                    var data = ec.ChemicalMasters.Where(c => c.Chemical_ID == chemical.ChemicalID).FirstOrDefault();
                    if (data != null)
                    {
                        data.ChemicalName = chemical.Name;
                        data.ChemicalType_ID = chemical.ChemicalTypeID;
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