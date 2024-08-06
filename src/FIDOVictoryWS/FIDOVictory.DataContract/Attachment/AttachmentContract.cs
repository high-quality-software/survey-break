using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Attachment
{
    public class AttachmentContract : AttachmentItem
    {
        public Int32 AttachmentTypeID { get; set; }
        public String Comment { get; set; }
        public String ContentAsBase64 { get; set; }
    }
}


