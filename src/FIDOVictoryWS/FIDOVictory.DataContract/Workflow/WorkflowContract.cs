using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.DataContract.Question;

namespace FIDOVictory.DataContract.Workflow
{
    public class WorkflowContract : WorkflowItem
    {
        public IList<QuestionItem> Questions { get; set; }

        public WorkflowContract()
        {
            this.Questions = new List<QuestionItem>();
        }
    }
}