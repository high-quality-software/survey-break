using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Form.SRREvaluation
{
    public class DownloadSRREvaluationResponse : BaseResponseContract
    {
        public List<SRREvaluationContract> Data { get; set; }

        public DownloadSRREvaluationResponse()
        { 
            this.Data = new List<SRREvaluationContract>();
        }
        
    }
}