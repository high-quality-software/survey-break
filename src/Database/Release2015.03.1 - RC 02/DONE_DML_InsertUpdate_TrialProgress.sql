-- created by gio on 3/10/2015 and ran on 3/10/2015
-- 1. SOFT DELETE ALL ROWS FROM Trialprogress for 2014 trials that are not deleted
BEGIN TRAN
UPDATE TrialProgress
SET IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID = 'JASPAR'
WHERE Trial_ID IN 
	(
		SELECT Trial_ID FROM TrialCatalog WHERE TrialYear = 2014 AND IsDeleted =0
	) AND IsDeleted = 0 
commit tran

-- 2. ran insert statement TO trialprogress to complete all 2014 trials, except for workflow_id = 16
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialProgress]
           ([Trial_ID]
           ,[SRRUser_ID]
           ,[Workflow_ID]
           ,[WorkflowComplete]
           ,[WorkflowCompleteDate]
           ,[UpdateDateTime]
           ,[UpdateUserID])
SELECT T.Trial_ID, x.SRRUser_ID, w.Workflow_ID, 1, GETDATE(), GETDATE(), 'JASPAR'
FROM [REGFIELDTRIALS].[dbo].[TrialCatalog] T
	left outer join
		 SRRUser_Trial_Xref x on x.Trial_ID = t.Trial_ID and x.IsDeleted = 0 
	CROSS JOIN workflow w 
WHERE T.TrialYear = 2014 
	AND T.IsDeleted = 0 
	AND W.ISDELETED =0
	AND W.Workflow_ID <> 16     

commit tran
-- 3. delete any forms for trial 2015
UPDATE TrialProgress
SET IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID = 'JASPAR'
WHERE Trial_ID IN 
	(
		SELECT Trial_ID FROM TrialCatalog WHERE TrialYear = 2015 AND IsDeleted =0
	) AND IsDeleted = 0 

	
