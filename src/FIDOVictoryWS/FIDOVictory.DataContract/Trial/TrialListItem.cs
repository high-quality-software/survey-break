using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Trial
{
    public class TrialListItem : TrialItem
    {
        public String FarmName { get; set; }
        public String CropName { get; set; }
        public String TraitName { get; set; }
        public String SiteName { get; set; }
        public Int32 TrialYear { get; set; }
        public String PrimarySRR { get; set; }


    }
}
