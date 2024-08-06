USE [REGFIELDTRIALS]
GO

/****** Object:  StoredProcedure [dbo].[usp_GetFormData]    Script Date: 5/22/2015 9:37:36 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 8, 2015
-- Description: returns form data since last sync, use v_usertrials view.
-- Last Modified by gio on 5/22/2015 to change join to response table to LEFT OUTER JOIN, JIRA: FLDSYSDB-174
-- =============================================
ALTER PROCEDURE [dbo].[usp_GetFormData]
(
	@userAlias nvarchar(50),
	@lastSync datetime
)
AS
BEGIN
	--DECLARE @userAlias nvarchar(50) = 'TTHOUS'
	--DECLARE @lastSync datetime = CAST('1/29/2014' AS DATETIME)

	SELECT 
		tp.Trial_ID, 
		tp.Workflow_ID, 
		tp.WorkflowComplete, 
		tp.DueDate, 
		tp.SRRUser_ID, 
		r.Question_ID, 
		r.ResponseValue, 
		CASE isnull(twa.Trial_ID, 0) WHEN 0 THEN 0 ELSE 1 END as HasAttachments
	FROM 
		TrialCatalog tc
		INNER JOIN v_UserTrials ut ON ut.Trial_ID = tc.Trial_ID
		INNER JOIN  TrialProgress tp ON tp.Trial_ID = tc.Trial_ID  
			and tp.IsDeleted = 0
		LEFT OUTER JOIN Response r ON tp.TrialProgress_ID = r.TrialProgress_ID
			and r.IsDeleted = 0 
		LEFT OUTER JOIN (
			SELECT DISTINCT Trial_ID, Workflow_ID 
			FROM TrialWorkflowAttachment 
			WHERE IsDeleted = 0) twa ON tp.Trial_ID = twa.Trial_ID 
										and tp.Workflow_ID = twa.Workflow_ID
	WHERE 
		ut.UserAlias = @userAlias
		--and r.IsDeleted = 0 
		--and tp.IsDeleted = 0 
		and tc.IsDeleted = 0 
		and tc.Archive = 0 
		and (tp.UpdateDateTime >= @lastSync or tc.UpdateDateTime >= @lastSync)
	ORDER BY 
		tp.Trial_ID, 
		tp.Workflow_ID, 
		r.Question_ID
		
END


GO


