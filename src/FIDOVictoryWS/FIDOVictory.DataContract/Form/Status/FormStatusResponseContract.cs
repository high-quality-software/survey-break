using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Form.Status
{
    public class FormStatusResponseContract : BaseResponseContract
    {
        public FormStatusResponseContract()
        {
            this.Data = new List<FormStatusContract>();
        }

        public List<FormStatusContract> Data { get; set; }
    }
}
