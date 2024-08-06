using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class TrialNoteRepository
    {
        public List<FIDOVictory.Common.Data.TrialNote> GetNotes(String userAlias, DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var notes = from t in ec.TrialNotes
                            join x in ec.v_UserTrials on t.Trial_ID equals x.Trial_ID
                            where x.UserAlias == userAlias &&
                               t.IsDeleted == false &&
                               t.UpdateDateTime >= lastSync
                            orderby t.UpdateDateTime
                            select t;

                return notes.ToList();
            }
        }

        public List<FIDOVictory.Common.Data.TrialNote> GetNotes(int trialID)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var notes = from t in ec.TrialNotes
                            where t.Trial_ID == trialID && t.IsDeleted == false
                            orderby t.UpdateDateTime
                            select t;

                return notes.ToList();
            }
        }

        public FIDOVictory.Common.Data.TrialNote GetNoteByID(Guid trialNoteID) 
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var notes = from t in ec.TrialNotes
                            where t.TrialNote_ID == trialNoteID && t.IsDeleted == false
                            orderby t.UpdateDateTime
                            select t;

                return notes.FirstOrDefault();
            } 

        }

        public void Insert(FIDOVictory.Common.Data.TrialNote note)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                ec.TrialNotes.Add(note);
                ec.SaveChanges();
            }
        }

        public void Update(FIDOVictory.Common.Data.TrialNote note)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var noteToUpdate = ec.TrialNotes.SingleOrDefault(s => s.TrialNote_ID == note.TrialNote_ID);

                if (noteToUpdate != null)
                {
                    noteToUpdate.Trial_ID = note.Trial_ID;
                    noteToUpdate.NoteContent = note.NoteContent;
                    noteToUpdate.UpdateUserID = note.UpdateUserID;
                    noteToUpdate.UpdateDateTime = DateTime.Now;

                    ec.SaveChanges();
                }
                else
                {
                    throw new ApplicationException(string.Format("Trial Note with TrialNoteID = {0} don't exists", note.TrialNote_ID));
                }
            }
        }


        public void Delete(Guid trialNoteID, String currentUserAlias)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {

                var note = ec.TrialNotes.SingleOrDefault(s => s.TrialNote_ID == trialNoteID);

                if (note != null)
                {
                    note.IsDeleted = true;
                    note.UpdateDateTime = DateTime.Now;
                    note.UpdateUserID = currentUserAlias;

                    ec.SaveChanges();
                }
                else
                {
                    throw new ApplicationException(string.Format("Trial Note with TrialNoteID = {0} don't exists", trialNoteID));
                }
            }
        }
    }
}
