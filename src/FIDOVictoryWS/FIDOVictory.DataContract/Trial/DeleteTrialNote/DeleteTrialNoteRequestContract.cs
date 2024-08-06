using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Trial.DeleteTrialNote
{
    public class DeleteTrialNoteRequestContract
    {
        public String CurrentUserAlias { get; set; }
        public Guid TrialNoteID { get; set; }
    }
}
