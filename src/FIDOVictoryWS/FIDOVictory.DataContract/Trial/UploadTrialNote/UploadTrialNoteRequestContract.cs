using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Trial.UploadTrialNote
{
    public class UploadTrialNoteRequestContract
    {
        public String CurrentUserAlias { get; set; }
        public TrialNoteContract Data { get; set; }
    }
}
