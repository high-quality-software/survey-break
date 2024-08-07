USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_ListTrialMaps]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_ListTrialMaps]
GO


-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 15, 2015
-- Description: list trials with maps and their maps
-- =============================================
CREATE PROCEDURE [dbo].[usp_ListTrialMaps]
(
	@page int = 1,
	@userAlias nvarchar(50)
)
AS
BEGIN
	--DECLARE @page = 1
	--DECLARE @userAlias nvarchar(50) = 'HCASA'
	
	DECLARE @pageSize INT 
	DECLARE @startRow INT

	SELECT @pageSize = 5
	SELECT @startRow = ((@page - 1) * @pageSize) + 1;


	SELECT 
		Trial_Year,
		Trial_ID, 
		Trial_Name, 
		Farm_Name,
		Crop_Name, 
		Site_Name, 
		City_Name, 
		State_Name,
		LeadSRR_UserAlias, 
		Image_ID	
	FROM (
		SELECT 
			ROW_NUMBER() OVER(ORDER BY vtm.Trial_ID	ASC) AS RowNumber, 
			vtm.Trial_Year,
			vtm.Trial_ID, 
			vtm.Trial_Name, 
			vtm.Farm_Name,
			vtm.Crop_Name, 
			vtm.Site_Name, 
			vtm.City_Name, 
			vtm.State_Name,
			vtm.LeadSRR_UserAlias, 
			vtm.Image_ID	
		FROM 
			v_TrialMaps vtm
		INNER JOIN
			v_UserTrials vut
			ON vut.Trial_ID = vtm.Trial_ID
		WHERE
			vut.UserAlias = @userAlias ) t
	WHERE 
		RowNumber between @StartRow and @StartRow + @PageSize
		
END
GO

GRANT EXECUTE ON [dbo].[usp_ListTrialMaps] TO [db_FieldTrials_App] AS [dbo]
GO

