USE [REGFIELDTRIALS]
GO

/****** Object:  View [dbo].[v_WorkflowQuestions]    Script Date: 04/01/2015 14:33:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



ALTER VIEW [dbo].[v_WorkflowQuestions]
-- Created by gio on 2/11/2015 to capture trial, workflow and questions for forms that have been filled out
-- Modified by gio on 4/1/2015 to accomodate latest changes for lookup functionality and add joins to TraitMaster and SiteMaster tables
AS
SELECT t.Name as TrialName,
	c.CropName,
	tm.TraitName,
	srr.LName AS SRR_LName,
	srr.FName AS SRR_FName,
	u.FName AS SRR_Lead_FName,
	u.LName AS SRR_Lead_LName,
	mgr.LName AS Mgr_LName,
	mgr.FName AS Mgr_FName,
	w.WorkflowName,
	w.WorkflowOrder,
	q.QuestionName,
	tp.WorkflowComplete,
	tp.WorkflowCompleteDate
FROM TrialCatalog t 
	INNER JOIN TrialProgress tp on tp.Trial_ID = t.Trial_ID and tp.isdeleted = 0
	LEFT OUTER JOIN TraitMaster tm on tm.Trait_ID = t.Trait_ID and tm.IsDeleted =0
	LEFT OUTER JOIN SiteMaster sm on sm.Site_ID = t.Site_ID and sm.IsDeleted = 0 
	INNER JOIN Workflow w on w.Workflow_ID = tp.Workflow_ID and w.IsDeleted = 0 	
	INNER JOIN WorkflowQuestion wq on wq.Workflow_ID = w.Workflow_ID and wq.IsDeleted = 0 
	INNER JOIN Question q on q.Question_ID = wq.Question_ID and q.IsDeleted = 0 
	INNER JOIN Crop c ON c.Crop_ID = t.Crop_ID AND c.IsDeleted = 0 	
	INNER JOIN [User] u ON u.User_ID = t.SRRLeadUser_ID   AND u.IsDeleted = 0 
	LEFT OUTER JOIN [User] srr ON srr.User_ID = tp.SRRUser_ID and srr.IsDeleted =0
	LEFT OUTER JOIN [User] mgr on mgr.User_ID = u.Manager_ID AND mgr.IsDeleted = 0 
WHERE t.IsDeleted = 0
--ORDER BY T.Name, W.WorkflowOrder, W.WorkflowName

GO


