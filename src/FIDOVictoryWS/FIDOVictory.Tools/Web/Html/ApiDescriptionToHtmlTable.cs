using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Description;
using Newtonsoft.Json;

namespace FIDOVictory.Tools.Web.Html
{
    public class ApiDescriptionToHtmlTable
    {
        private ApiDescription apiDescription;

        public ApiDescriptionToHtmlTable(ApiDescription apiDescription)
        {
            this.apiDescription = apiDescription;
        }

        private string GetParameterSourceString(ApiParameterSource source)
        {
            if (source == ApiParameterSource.FromBody)
            {
                return "Body";
            }
            else if (source == ApiParameterSource.FromUri)
            {
                return "Uri";
            }
            else
            {
                return "Unknown";
            }
        }

        private string GetBodyParameterJson(Collection<ApiParameterDescription> parameters)
        {
            var bodyParameters = parameters.Where(p => p.Source == ApiParameterSource.FromBody).ToList();
            if (bodyParameters.Count > 0)
            {
                var objectType = bodyParameters[0].ParameterDescriptor.ParameterType;
                var instance = Activator.CreateInstance(objectType);
                var json = JsonConvert.SerializeObject(instance);
                return json;
            }

            return string.Empty;
        }

        private string GetUriParametersTable(Collection<ApiParameterDescription> parameters)
        {
            StringBuilder sb = new StringBuilder();
            
            if (parameters.Where(p => p.Source == ApiParameterSource.FromUri).Count() > 0)
            {
                sb.Append("<table>");

                sb.Append("<tr>");
                sb.Append("<td><i>Name</i></td>");
                sb.Append("<td><i>Type</i></td>");
                sb.Append("</tr>");

                foreach (var p in parameters)
                {
                    if (p.Source == ApiParameterSource.FromUri)
                    {
                        sb.Append("<tr>");
                        sb.Append(string.Format("<td>{0}</td>", p.ParameterDescriptor.ParameterName));
                        sb.Append(string.Format("<td>{0}</td>", p.ParameterDescriptor.ParameterType));
                        sb.Append("</tr>");
                    }
                }

                sb.Append("</table>");
            }
            else
            {
                sb.Append("<span>None</span>");
            }

            return sb.ToString();
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<table>");

            sb.Append("<tr>");
            sb.Append("<td></td>");
            sb.Append("<td></td>");
            sb.Append("<td><b>Request Body</b></td>");
            sb.Append("</tr>");

            sb.Append("<tr>");
            sb.Append("<td><b>URL:</b></td>");
            sb.Append("<td>");
            sb.Append(apiDescription.RelativePath);
            sb.Append("</td>");
            sb.Append(string.Format("<td rowspan='2'>{0}</td>", GetBodyParameterJson(apiDescription.ParameterDescriptions)));
            sb.Append("</tr>");

            sb.Append("<tr>");
            sb.Append("<td><b>Method:</b></td>");
            sb.Append("<td>");
            sb.Append(apiDescription.HttpMethod.Method);
            sb.Append("</td>");
            sb.Append("</tr>");

            sb.Append("<tr>");
            sb.Append("<td><b>Parameters:</b></td>");
            sb.Append(string.Format("<td>{0}</td>", this.GetUriParametersTable(apiDescription.ParameterDescriptions)));
            sb.Append("</tr>");

            sb.Append("</table>");
            return sb.ToString();

            /*
             *                 htmlListBuilder.Append("<li>");
                htmlListBuilder.Append(i.RelativePath);
                if (i.ParameterDescriptions.Count > 0)
                {
                    foreach (var p in i.ParameterDescriptions)
                    {
                        htmlListBuilder.Append("<div>");
                        htmlListBuilder.Append("<bold>");
                        htmlListBuilder.Append(p.ParameterDescriptor.ParameterName + " (" + this.GetParameterSourceString(p.Source) + ") " );
                        htmlListBuilder.Append("</bold>");
                        htmlListBuilder.Append("&nbsp;");
                        htmlListBuilder.Append("<span>");
                        htmlListBuilder.Append(p.ParameterDescriptor.ParameterType);
                        htmlListBuilder.Append("</span>");
                        htmlListBuilder.Append("</div>");
                    }
                }
                htmlListBuilder.Append("</li>");
             */
        }

    }
}


