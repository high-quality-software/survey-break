USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[v_WorkflowQuestions]'))
DROP VIEW [dbo].[v_WorkflowQuestions]
GO

USE [REGFIELDTRIALS]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE VIEW [dbo].[v_WorkflowQuestions]
-- Created by gio on 2/11/2015 to capture trial, workflow and questions for forms that have been filled out
AS
SELECT t.Name as TrialName,
	c.CropName,
	u.FName AS SRR_FName,
	u.LName AS SRR_LName,
	mgr.LName AS Mgr_LName,
	mgr.FName AS Mgr_FName,
	w.WorkflowName,
	w.WorkflowOrder,
	q.QuestionName,
	r.ResponseValue,
	r.[User_ID], -- User who entered data into this form.
	r.FollowupRequired,
	tp.WorkflowComplete,
	tp.WorkflowCompleteDate
FROM TrialCatalog t 
	INNER JOIN TrialProgress tp on tp.Trial_ID = t.Trial_ID and tp.isdeleted = 0
	INNER JOIN Workflow w on w.Workflow_ID = tp.Workflow_ID and w.IsDeleted = 0 	
	INNER JOIN WorkflowQuestion wq on wq.Workflow_ID = w.Workflow_ID and wq.IsDeleted = 0 
	INNER JOIN Question q on q.Question_ID = wq.Question_ID and q.IsDeleted = 0 
	INNER JOIN Response r on r.Workflow_ID = tp.Workflow_ID
			AND r.Trial_ID = tp.Trial_ID
			AND r.Question_ID = wq.Question_ID
			AND r.IsDeleted = 0 
	INNER JOIN Crop c ON c.Crop_ID = t.Crop_ID AND c.IsDeleted = 0 	
	INNER JOIN [User] u ON u.User_ID = t.SRRUser_ID AND u.IsDeleted = 0 
	LEFT OUTER JOIN [User] mgr on mgr.User_ID = u.Manager_ID AND U.IsDeleted = 0 
WHERE t.IsDeleted = 0
--ORDER BY t.Name, w.WorkflowOrder
GO