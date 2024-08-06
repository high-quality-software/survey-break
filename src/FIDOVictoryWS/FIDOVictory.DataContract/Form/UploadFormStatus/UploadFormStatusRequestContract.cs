using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Form.UploadFormStatus
{
    public class UploadFormStatusRequestContract
    {
        public Int32 TrialID { get; set; }
        public Int32 WorkflowID { get; set; }
        public Boolean Locked { get; set; }
        public String CurrentUserAlias { get; set; }
    }
}
