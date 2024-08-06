using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Attachment.DeleteAttachment
{
    public class DeleteAttachmentRequest
    {
        public String CurrentUserAlias { get; set; }
        public AttachmentItem Data { get; set; }
    }
}
