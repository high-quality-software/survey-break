USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFormStatusForAdminRoleSince]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetFormStatusForAdminRoleSince]
GO


-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 4, 2015
-- Description: returns form status since last sync for admin users
-- Modified by gio on May 4, 2015 to enter test case to prove this works.  Also changed line in WHERE clause to read ut.UserAlias = @userAlias 
-- =============================================
CREATE PROCEDURE [dbo].[usp_GetFormStatusForAdminRoleSince]
(
	@userAlias nvarchar(50),
	@lastSync datetime
)
AS
BEGIN
	--DECLARE @userAlias nvarchar(50) = 'JASPAR'
	--DECLARE @lastSync datetime = CAST('1/1/2014' AS DATETIME)

	SELECT 
		tp.Trial_ID, 
		tp.Workflow_ID, 
		tp.SRRUser_ID, 		
		tp.WorkflowComplete
	FROM 
		TrialCatalog tc
		INNER JOIN v_UserTrials ut ON ut.Trial_ID = tc.Trial_ID
		INNER JOIN  TrialProgress tp ON tp.Trial_ID = tc.Trial_ID 
	WHERE 
		ut.UserAlias = @userAlias
		and tp.IsDeleted = 0 
		and tc.IsDeleted = 0 
		and tc.Archive = 0 
		and (tp.UpdateDateTime >= @lastSync or tc.UpdateDateTime >= @lastSync)
	ORDER BY 
		tp.Trial_ID, 
		tp.Workflow_ID
 
END

GO


GRANT EXECUTE ON [dbo].[usp_GetFormStatusForAdminRoleSince] TO [db_FieldTrials_App] AS [dbo]
GO
