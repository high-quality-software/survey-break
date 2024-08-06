using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Form
{
    public class FormResponseContract
    {
        public Int32 QuestionID { get; set; }
        public String ResponseValue { get; set; }

        public FormResponseContract()
        {
            this.ResponseValue = string.Empty;
        }
    }
}
