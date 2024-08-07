USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_PaginatedList_TrialMaps]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_PaginatedList_TrialMaps]
GO


-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 20, 2015
-- Description: list trials with maps and their maps filtering by trial id and trial name
-- =============================================
CREATE PROCEDURE [dbo].[usp_PaginatedList_TrialMaps]
(
	@page int = 1,
	@pageSize int = 10,
	@trialID_Filter int = null,
	@trialName_Filter nvarchar(50) = null,
	@userAlias nvarchar(50)
)
AS
BEGIN
	--DECLARE @page = 1
	--DECLARE @pageSize = 10
	--DECLARE @trialID_Filter int = null
	--DECLARE @trialName_Filter nvarchar(50) = null
	--DECLARE @userAlias nvarchar(50) = 'HCASA'
	
	SET @page = CASE WHEN @page is null THEN 1 ELSE @page END
	SET @pageSize = CASE WHEN @pageSize is null THEN 10 ELSE @pageSize END

	DECLARE @startRow INT
	SET @startRow = ((@page - 1) * @pageSize) + 1


	SELECT 
		RowNumber, 
		[RowCount],
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
			COUNT(vtm.Trial_ID) OVER() AS [RowCount],
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
			vut.UserAlias = @userAlias 
			and (@trialID_Filter is null or vtm.Trial_ID = @trialID_Filter)
			and (@trialName_Filter is null 
				or vtm.Trial_Name like '%' + @trialName_Filter + '%') 
		) t
	WHERE 
		RowNumber between @StartRow and (@StartRow + @PageSize - 1)
		
		
END
GO

GRANT EXECUTE ON [dbo].[usp_PaginatedList_TrialMaps] TO [db_FieldTrials_App] AS [dbo]
GO

