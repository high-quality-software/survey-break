using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Attachment
{
    public class AttachmentItemWithID : AttachmentItem
    {
        public Guid AttachmentID { get; set; }
    }
}
