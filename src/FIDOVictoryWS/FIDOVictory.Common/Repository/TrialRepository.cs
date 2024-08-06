using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class TrialRepository
    {
        public List<FIDOVictory.Common.Data.TrialCatalog> GetTrials(DateTime lastSync, String userAlias)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var trials = from tc in ec.TrialCatalogs
                             join ut in ec.v_UserTrials on tc.Trial_ID equals ut.Trial_ID
                             where tc.UpdateDateTime >= lastSync && ut.UserAlias == userAlias
                             select tc;

                return trials.ToList();
            }
        }

        public List<Data.usp_PaginatedList_Trials_Result> ListTrials(String userAlias, Int32? workflowId, Int32? statusId)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var trials = ec.usp_PaginatedList_Trials(1, 1000, null, null, string.Empty, workflowId, statusId, userAlias);

                return trials.ToList();
            }
        }

        public List<FIDOVictory.Common.Data.SiteMaster> GetSites(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var sites = from sm in ec.SiteMasters
                            where sm.IsDeleted == false &&
                            sm.UpdateDateTime >= lastSync
                            select sm;

                return sites.ToList();
            }
        }

        public List<FIDOVictory.Common.Data.TraitMaster> GetTraits(DateTime lastSync)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var traits = from t in ec.TraitMasters
                             where t.IsDeleted == false &&
                             t.UpdateDateTime >= lastSync
                             select t;

                return traits.ToList();
            }
        }

        public List<FIDOVictory.Common.Data.usp_Get_FormStatus_ByTrialID_Result> GetFormStatusByTrialID(Int32 trialId, string userAlias) 
        {
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);

            List<FIDOVictory.Common.Data.usp_Get_FormStatus_ByTrialID_Result> list = new List<FIDOVictory.Common.Data.usp_Get_FormStatus_ByTrialID_Result>();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {

                var result = ec.usp_Get_FormStatus_ByTrialID(trialId, userAlias);
                foreach (var r in result)
                {
                    list.Add(new Data.usp_Get_FormStatus_ByTrialID_Result()
                    {
                        Workflow_ID = r.Workflow_ID,
                        WorkflowName = r.WorkflowName,
                        WorkflowOrder = r.WorkflowOrder,
                        WorkflowAnswered = r.WorkflowAnswered,
                        WorkflowComplete = r.WorkflowComplete,

                    });
                }
            }

            return list;

        }

        public List<FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result> GetComplianceStatus(string userAlias)
        {
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);

            List<FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result> list = new List<FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result>();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {

                var result = ec.usp_Get_Compliance_Status(userContract.UserAlias);
                foreach (var r in result)
                {
                    list.Add(new FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result()
                    {
                        WorkflowId = r.WorkflowId,
                        WorkflowName = r.WorkflowName,
                        WorkflowOrder = r.WorkflowOrder,
                        InBlank = r.InBlank,
                        InProgress = r.InProgress,
                        PendingForApproval = r.PendingForApproval,
                        PendingForLock = r.PendingForLock,
                        Completed = r.Completed,
                        Total = r.Total,
                    });
                }
            }

            return list;
        }

        public FIDOVictory.Common.Data.TrialCatalog GetTrialById(int id)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                return ec.TrialCatalogs.Where(t => t.IsDeleted == false && t.Trial_ID == id).FirstOrDefault();
            }
        }
    }
}
