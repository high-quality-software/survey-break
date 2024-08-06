using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Form.SRREvaluation
{
    public class UploadSRREvaluationRequest
    {
        public String CurrentUserAlias { get; set; }
        public SRREvaluationContract Data { get; set; }
    }
}