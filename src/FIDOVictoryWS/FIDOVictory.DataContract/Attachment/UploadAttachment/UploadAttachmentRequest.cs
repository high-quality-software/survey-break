using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Attachment.UploadAttachment
{
    public class UploadAttachmentRequest
    {
        public String CurrentUserAlias { get; set; }
        public AttachmentContract Data { get; set; }
    }
}
