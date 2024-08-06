using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Health.GetStatus
{
    public class GetStatusResponseContract : BaseResponseContract
    {
        public StatusContract Status { get; set; }

        public GetStatusResponseContract()
        {
            this.Status = new StatusContract();
        }
        
    }
}
