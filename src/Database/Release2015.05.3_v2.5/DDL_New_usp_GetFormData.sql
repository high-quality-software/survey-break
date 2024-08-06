USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFormData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetFormData]
GO


-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 8, 2015
-- Description: returns form data since last sync, use v_usertrials view.
-- =============================================
CREATE PROCEDURE [dbo].[usp_GetFormData]
(
	@userAlias nvarchar(50),
	@lastSync datetime
)
AS
BEGIN

	--DECLARE @userAlias nvarchar(50) = 'HCASA'
	--DECLARE @lastSync datetime = CAST('1/1/2014' AS DATETIME)

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
		INNER JOIN Response r ON tp.TrialProgress_ID = r.TrialProgress_ID
		LEFT JOIN (
			SELECT DISTINCT Trial_ID, Workflow_ID 
			FROM TrialWorkflowAttachment 
			WHERE IsDeleted = 0) twa ON tp.Trial_ID = twa.Trial_ID 
										and tp.Workflow_ID = twa.Workflow_ID
	WHERE 
		ut.UserAlias = @userAlias
		and r.IsDeleted = 0 
		and tp.IsDeleted = 0 
		and tc.IsDeleted = 0 
		and tc.Archive = 0 
		and (tp.UpdateDateTime >= @lastSync or tc.UpdateDateTime >= @lastSync)
	ORDER BY 
		tp.Trial_ID, 
		tp.Workflow_ID, 
		r.Question_ID
		
END

GO

GRANT EXECUTE ON [dbo].[usp_GetFormData] TO [db_FieldTrials_App] AS [dbo]
GO