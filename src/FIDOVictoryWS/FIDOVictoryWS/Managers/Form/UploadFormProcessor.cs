using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.Common.Repository;
using FIDOVictory.DataContract.Form;
using FIDOVictory.DataContract.Form.UploadForm;

namespace FIDOVictoryWS.Managers.Form
{
    public class UploadFormProcessor : IDisposable
    {
        private FIDOVictory.Common.Data.EntityContainer ec = null;

        public UploadFormProcessor()
        {
            ec = new FIDOVictory.Common.Data.EntityContainer();
        }


        public UploadFormResponseContract Execute(UploadFormRequestContract form)
        {
            var uploadResponse = new UploadFormResponseContract();
            using (var tx = ec.Database.BeginTransaction())
            {

                var userRepository = new UserRepository();
                var user = userRepository.GetUserByID(form.UserID);
                if (user == null)
                {
                    uploadResponse.Success = false;
                    uploadResponse.ErrorCode = "1";
                    uploadResponse.ErrorDescription = string.Format("UserID {0} doesn't exists", form.UserID);
                    return uploadResponse;
                }

                try
                {
                    string xmlResponses = FIDOVictoryWS.Tools.Xml.XmlSqlParameterSerializer.GetXml(form.Responses);
                    var result = ec.usp_ReceiveResponses(form.TrialID, form.WorkflowID, form.Answered, form.Locked, form.DueDate, form.UserID, form.CurrentUserAlias, xmlResponses);
                    tx.Commit();

                    uploadResponse.Success = true;

                }
                catch (Exception ex)
                {
                    Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                    var logger = log4net.LogManager.GetLogger(typeof(UploadFormProcessor));

                    logger.Error("Error calling usp_ReceiveResponses", ex);

                    var ve = ec.GetValidationErrors();
                    if (ve != null && ve.Count() > 0)
                    {
                        logger.ErrorFormat("UserID: {0} | UserAlias: {1} | TrialID: {2} | WorkflowID: {3} | Message: ValidationErrors - {4}", form.UserID, form.CurrentUserAlias, form.TrialID, form.WorkflowID, ve.ToArray().ToString());
                    }

                    logger.Error(
                        string.Format(
                            "UserID: {0} | UserAlias: {1} | TrialID: {2} | WorkflowID: {3} | Message: Dumpping full exception content ", form.UserID, form.CurrentUserAlias, form.TrialID, form.WorkflowID)
                        , ex);

                    tx.Rollback();

                    throw ex;
                }

            }

            return uploadResponse;
        }

        public void Dispose()
        {
            ec.Dispose();
        }
    }
}