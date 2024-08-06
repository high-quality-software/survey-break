using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Trial
{
    public class TrialNoteContract
    {
        public Guid TrialNoteID { get; set; }
        public Int32 TrialID { get; set; }
        public String Content { get; set; }
    }
}
