using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Data.Specialized
{
    /// <summary>
    /// Represent a abbreviated representation of TrialWorkflowAttachment
    /// 
    /// It's needed because DB Model stores in same table content and container 
    /// and retrieve from database the content only for list attachment name goes againts performance
    /// 
    /// Use this class only inner a Repository class to compliant DataContracts are instantiated only in Controllers classes
    /// 
    /// A better database model which cares EF C# layer should store content and container separately
    /// 
    /// </summary>
    public class LightweightAttachment
    {
        public System.Guid Attachment_ID { get; set; }
        public string AttachmentName { get; set; }
    }
}
