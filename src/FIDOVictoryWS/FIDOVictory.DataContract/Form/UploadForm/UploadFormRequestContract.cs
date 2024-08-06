using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Form.UploadForm
{
    public class UploadFormRequestContract
    {
        public Int32 TrialID { get; set; }
        public Int32? WorkflowID { get; set; }
        public Int32 UserID { get; set; }
        public Boolean Locked { get; set; }
        public Boolean? Answered { get; set; }

        //TODO: In future versions force not null
        public DateTime? DueDate { get; set; }

        public String CurrentUserAlias { get; set; }

        public List<FormResponseContract> Responses { get; set; }

        public UploadFormRequestContract()
        {
            this.Responses = new List<FormResponseContract>();
        }
    }
}
