using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FIDOVictory.Common.Repository;
using FIDOVictory.Common.Tools;
using FIDOVictory.DataContract.Trial;
using FIDOVictory.DataContract.Trial.DeleteTrialNote;
using FIDOVictory.DataContract.Trial.UploadTrialNote;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/trial/note")]
    public class TrialNoteController : ApiController
    {
        [Route("")]
        public List<TrialNoteContract> GetNotes(String userAlias, DateTime lastSync)
        {
            //parameters validation
            if (string.IsNullOrEmpty(userAlias))
            {
                throw new ApplicationException("userAlias must have a value");
            }

            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var list = new List<TrialNoteContract>();
            var repo = new TrialNoteRepository();
            var notes = repo.GetNotes(userAlias, lastSync);

            foreach (var n in notes)
            {
                list.Add(new TrialNoteContract()
                {
                    TrialNoteID = n.TrialNote_ID,
                    TrialID = n.Trial_ID,
                    Content = n.NoteContent,
                });
            }

            return list;

        }

        [Route("{trialID}")]
        public List<TrialNoteContract> GetNotes(Int32 trialID)
        {

            var list = new List<TrialNoteContract>();
            var repo = new TrialNoteRepository();
            var notes = repo.GetNotes(trialID);

            foreach (var n in notes)
            {
                list.Add(new TrialNoteContract()
                {
                    TrialNoteID = n.TrialNote_ID,
                    TrialID = n.Trial_ID,
                    Content = n.NoteContent,
                });
            }

            return list;

        }

        [Route("detail/{trialNoteID}")]
        public TrialNoteContract GetNotes(string trialNoteID)
        {
            var repo = new TrialNoteRepository();
            var n = repo.GetNoteByID(Guid.Parse(trialNoteID));
                        
            return new TrialNoteContract() {
                    TrialNoteID = n.TrialNote_ID,
                    TrialID = n.Trial_ID,
                    Content = n.NoteContent,
                };


        }

        [Route("")]
        public UploadTrialNoteResponseContract PostNote(UploadTrialNoteRequestContract req)
        {
            var response = new UploadTrialNoteResponseContract();

            //parameters validation
            if (string.IsNullOrEmpty(req.CurrentUserAlias))
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "CurrentUserAlias must have a value";
            }
            else if (req.Data.TrialNoteID != Guid.Empty)
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "Data.TrialNoteID must be empty";
            }
            else if (req.Data.TrialID == 0)
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "Data.TrialID must have a value";
            }

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

            try
            {
                req.Data.TrialNoteID = Guid.NewGuid();
                var repo = new TrialNoteRepository();

                var note = new FIDOVictory.Common.Data.TrialNote()
                    {
                        IsDeleted = false,
                        Trial_ID = req.Data.TrialID,
                        NoteContent = req.Data.Content,
                        TrialNote_ID = req.Data.TrialNoteID,
                        UpdateUserID = req.CurrentUserAlias,
                        UpdateDateTime = DateTime.Now
                    };

                repo.Insert(note);

                response.Success = true;
                response.Data = req.Data;

            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by TrialController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;

        }

        [Route("")]
        public UploadTrialNoteResponseContract PutNote(UploadTrialNoteRequestContract req)
        {

            var response = new UploadTrialNoteResponseContract();

            //parameters validation
            if (string.IsNullOrEmpty(req.CurrentUserAlias))
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "CurrentUserAlias must have a value";
                return response;
            }
            else if (req.Data.TrialNoteID == Guid.Empty)
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "Data.TrialNoteID must have a value";
                return response;
            }
            else if (req.Data.TrialID == 0)
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "Data.TrialID must have a value";
                return response;
            }

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

            try
            {
                var repo = new TrialNoteRepository();

                var note = new FIDOVictory.Common.Data.TrialNote()
                {
                    IsDeleted = false,
                    Trial_ID = req.Data.TrialID,
                    NoteContent = req.Data.Content,
                    TrialNote_ID = req.Data.TrialNoteID,
                    UpdateUserID = req.CurrentUserAlias,
                    UpdateDateTime = DateTime.Now
                };

                repo.Update(note);

                response.Success = true;
                response.Data = req.Data;
            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by TrialController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;
        }

        [Route("")]
        public DeleteTrialNoteResponseContract DeleteNote(DeleteTrialNoteRequestContract req)
        {

            var response = new DeleteTrialNoteResponseContract();

            //parameters validation
            if (string.IsNullOrEmpty(req.CurrentUserAlias))
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "CurrentUserAlias must have a value";
                return response;
            }
            else if (req.TrialNoteID == Guid.Empty)
            {
                response.ErrorCode = "UNEXPECTED";
                response.ErrorDescription = "Data.TrialNoteID must have a value";
                return response;
            }

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

            try
            {
                var repo = new TrialNoteRepository();
                repo.Delete(req.TrialNoteID, req.CurrentUserAlias);

                response.Success = true;

            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by TrialController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;
        }
    }
}
