using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using log4net;

namespace FIDOVictoryWS.Tools.Web.Http.Filters
{
    public class VictoryLoggingFilter : IExceptionFilter, IActionFilter
    {
        private readonly ILog log;

        public VictoryLoggingFilter(ILog log)
        {
            if (log == null)
            {
                throw new ArgumentNullException("log");
            }

            this.log = log;
        }

        public bool AllowMultiple
        {
            get { return false; }
        }

        Task IExceptionFilter.ExecuteExceptionFilterAsync(HttpActionExecutedContext actionContext, CancellationToken cancellationToken)
        {
            if (actionContext == null)
            {
                throw new ArgumentNullException("actionContext");
            }

            this.log.Error(string.Format("Unexpected error while executing {0}", this.BuildLogEntry(actionContext.ActionContext)), actionContext.Exception);
            return TaskHelpers.Completed();
        }

        Task<HttpResponseMessage> IActionFilter.ExecuteActionFilterAsync(HttpActionContext actionContext, CancellationToken cancellationToken, Func<Task<HttpResponseMessage>> continuation)
        {
            if (actionContext == null)
            {
                throw new ArgumentNullException("actionContext");
            }

            if (continuation == null)
            {
                throw new ArgumentNullException("continuation");
            }

            if (!this.log.IsDebugEnabled)
            {
                // no point running at all if logging isn't currently enabled
                return continuation();
            }

            string logEntry = this.BuildLogEntry(actionContext);

            Task<string> requestContent;
            if (actionContext.Request.Content != null)
            {
                requestContent = actionContext.Request.Content.ReadAsStringAsync().ContinueWith(requestResult => string.IsNullOrEmpty(requestResult.Result) ? "N/A" : requestResult.Result);
            }
            else
            {
                requestContent = TaskHelpers.FromResult("N/A");
            }

            return requestContent.ContinueWith(
                requestResult =>
                {
                    this.log.DebugFormat("{0}, Request = {1}", logEntry, requestResult.Result);

                    return continuation()
                        .ContinueWith(t =>
                            {
                                Task<string> responseContent;
                                if (t.IsCompleted && t.Result.Content != null)
                                {
                                    responseContent = t.Result.Content.ReadAsStringAsync().ContinueWith(responseResult => string.IsNullOrEmpty(responseResult.Result) ? "N/A" : responseResult.Result);
                                }
                                else
                                {
                                    responseContent = TaskHelpers.FromResult("N/A");
                                }

                                return responseContent.ContinueWith(
                                    responseResult =>
                                    {
                                        this.log.DebugFormat("{0}, Status Code: {1}, Response = {2}", logEntry, t.Result.StatusCode, responseResult.Result);
                                        return t.Result;
                                    });
                            }).Unwrap();
                }).Unwrap();
        }

        /// <summary>
        /// Builds log data about the request.
        /// </summary>
        /// <param name="actionContext">Data associated with the call</param>
        private string BuildLogEntry(HttpActionContext actionContext)
        {
            string route = actionContext.Request.GetRouteData().Route.RouteTemplate;
            string method = actionContext.Request.Method.Method;
            string url = actionContext.Request.RequestUri.AbsoluteUri;
            string controllerName = actionContext.ActionDescriptor.ControllerDescriptor.ControllerName;
            string actionName = actionContext.ActionDescriptor.ActionName;
            string userAgent = actionContext.Request.Headers.UserAgent.ToString();

            return string.Format("{0} {1}, useragent: {2}, route: {3}, controller:{4}, action:{5}", method, url, userAgent, route, controllerName, actionName);
        }
        
    }
}