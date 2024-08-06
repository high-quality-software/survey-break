USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_FormStatus_ByTrialID]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_FormStatus_ByTrialID]
GO


-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 21, 2015
-- Description: Get status for all forms into a particular trial
-- =============================================
CREATE PROCEDURE [dbo].[usp_Get_FormStatus_ByTrialID]
(
	@trialID int,
	@userAlias nvarchar(50)
)
AS
BEGIN

	--DECLARE @trialID int
	--DECLARE @userAlias nvarchar(50) = 'HCASA'
	
	SELECT 
		tp.Workflow_ID, 
		w.WorkflowName, 
		tp.WorkflowComplete
	FROM 
		TrialCatalog tc
		INNER JOIN TrialProgress tp ON tp.Trial_ID = tc.Trial_ID
		INNER JOIN Workflow w ON w.Workflow_ID = tp.Workflow_ID
		INNER JOIN v_UserTrials vut ON vut.Trial_ID = tc.Trial_ID
	WHERE 
		tc.Trial_ID = @trialID
		and tc.IsDeleted = 0 and tc.Archive = 0
		and tp.IsDeleted = 0
		and vut.UserAlias = @userAlias
	ORDER BY
		w.WorkflowOrder


END
GO

GRANT EXECUTE ON [dbo].[usp_Get_FormStatus_ByTrialID] TO [db_FieldTrials_App] AS [dbo]
GO
