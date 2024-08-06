using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using FIDOVictory.DataContract.Form;

namespace FIDOVictoryWS.Tools.Xml
{
    public class XmlSqlParameterSerializer
    {


        /// <summary>
        /// http://www.w3.org/TR/xml11/#sec-predefined-ent
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        private static string Escape(string text)
        {
            return text.Replace("\"", "&quot;")
                        .Replace("&", "&amp;")
                        .Replace("'", "&apos;")
                        .Replace("<", "&lt;")
                        .Replace(">", "&gt;");
        }

        public static string GetXml(IList<FormResponseContract> responses)
        {
            StringBuilder sb = new StringBuilder();

            sb.Append("<Responses>");
            foreach (var r in responses)
            {
                sb.Append("<Response>");
                sb.Append(string.Format("<QuestionID>{0}</QuestionID>", r.QuestionID));
                sb.Append(string.Format("<ResponseValue>{0}</ResponseValue>", Escape(r.ResponseValue)));

                sb.Append("</Response>");
            }


            sb.Append("</Responses>");

            return sb.ToString();
        }
    }
}