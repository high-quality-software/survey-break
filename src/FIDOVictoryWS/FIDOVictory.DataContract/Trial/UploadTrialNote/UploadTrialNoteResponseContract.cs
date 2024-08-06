using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Trial.UploadTrialNote
{
    public class UploadTrialNoteResponseContract : BaseResponseContract
    {
        public UploadTrialNoteResponseContract()
        {
            this.Data = new TrialNoteContract();
        }

        public TrialNoteContract Data { get; set; }
    }
}
