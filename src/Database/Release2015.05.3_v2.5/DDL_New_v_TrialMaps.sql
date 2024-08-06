USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[v_TrialMaps]'))
DROP VIEW [dbo].[v_TrialMaps]
GO

-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 15, 2015
-- Description: list trials with maps and their maps
-- =============================================
CREATE VIEW [dbo].[v_TrialMaps] AS
	SELECT 
		tc.TrialYear as Trial_Year,
		tc.Trial_ID, 
		tc.Name AS Trial_Name, 
		tc.FarmName as Farm_Name,
		c.CropName as Crop_Name, 
		s.SiteName as Site_Name, 
		tc.City as City_Name, 
		tc.State as State_Name,
		u.UserAlias as LeadSRR_UserAlias, 
		twa.Attachment_ID as Image_ID
	FROM 
		TrialCatalog tc
		INNER JOIN Crop c ON c.Crop_ID = tc.Crop_ID
		INNER JOIN [SiteMaster] s ON s.Site_ID = tc.Site_ID
		INNER JOIN [User] u ON u.User_ID = tc.SRRLeadUser_ID
		INNER JOIN TrialWorkflowAttachment twa 
			ON twa.Trial_ID = tc.Trial_ID and twa.Workflow_ID = 6 --Compliance Map
	WHERE 
		tc.IsDeleted = 0 
		and tc.Archive = 0 
		and twa.IsDeleted = 0

GO

