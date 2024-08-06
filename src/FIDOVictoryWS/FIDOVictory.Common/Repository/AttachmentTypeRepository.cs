using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class AttachmentTypeRepository
    {
        public List<Data.AttachmentType> GetList(DateTime lastSync)
        {
            using (var ec = new Data.EntityContainer())
            {
                var types = from t in ec.AttachmentTypes
                            where t.IsDeleted == false &&
                            t.UpdateDateTime >= lastSync
                            select t;

                return types.ToList();
            }
        }

        public bool Exists(int attachmentTypeID)
        {
            using (var ec = new Data.EntityContainer())
            {
                var types = from t in ec.AttachmentTypes
                            where t.IsDeleted == false &&
                            t.AttachmentType_ID == attachmentTypeID
                            select t;

                return types.Count() > 0;
            }            
        }
    }
}
