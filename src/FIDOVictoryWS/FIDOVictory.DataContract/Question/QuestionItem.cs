using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Question
{
    public class QuestionItem
    {
        public Int32 QuestionID { get; set; }
        public String Name { get; set; }
        public Boolean IsLookup { get; set; }
    }
}