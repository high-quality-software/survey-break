using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.DataContract.Attachment;

namespace FIDOVictory.DataContract.Form.DownloadForm
{
    public class DownloadFormResponseContract
    {
        public Int32 TrialID { get; set; }
        public Int32? WorkflowID { get; set; }
        public Int32 UserID { get; set; }
        public Boolean Locked { get; set; }

        //TODO: In future versions force not null
        public DateTime? DueDate { get; set; }

        public List<FormResponseContract> Responses { get; set; }
        public List<AttachmentItemWithID> Attachments { get; set; }

        public DownloadFormResponseContract()
        {
            this.Responses = new List<FormResponseContract>();
            this.Attachments = new List<AttachmentItemWithID>();
        }
    }
}
