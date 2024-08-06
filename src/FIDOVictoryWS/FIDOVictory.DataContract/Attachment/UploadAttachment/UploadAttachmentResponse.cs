using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Attachment.UploadAttachment
{
    public class UploadAttachmentResponse : BaseResponseContract
    {
        public Guid AttachmentID { get; set; }
    }
}
