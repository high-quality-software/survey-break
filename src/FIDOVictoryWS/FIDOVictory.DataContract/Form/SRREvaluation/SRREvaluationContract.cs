using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Form.SRREvaluation
{
    public class SRREvaluationContract
    {
        public Int32 SRRUserID { get; set; }
        public Int32? SRRYearsExperience { get; set; }
        public Int32? SiteLeadSRRYearsOfExperience { get; set; }
        public Int32? NumFieldsReponsibleFor { get; set; }
        public Decimal? NumAcresSRRManages { get; set; }

        public Boolean? BackupSRRIdentified { get; set; }
        public Int32? BackupSRRUserID { get; set; }
        public Boolean? BackupSRRInformed { get; set; }

        public Int32? LastTrainingYear { get; set; }

        public Boolean? ComplianceQuestion1 { get; set; }
        public Boolean? ComplianceQuestion2 { get; set; }
        public Boolean? ComplianceQuestion3 { get; set; }
        public Boolean? ComplianceQuestion4 { get; set; }
        public Boolean? ComplianceQuestion5 { get; set; }
        public Boolean? ComplianceQuestion6 { get; set; }

        public Boolean? Flagged { get; set; }

        public Int32? CompletedYear { get; set; }

        public String ComplianceResponse1 {get;set;}
        public String ComplianceResponse2 {get;set;}
        public String ComplianceResponse3 {get;set;}
        public String ComplianceResponse4 {get;set;}
        public String ComplianceResponse5 {get;set;}
        public String ComplianceResponse6 {get;set;}


    }
}