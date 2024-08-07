USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_PaginatedList_Trials]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_PaginatedList_Trials]
GO


-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: May 20, 2015
-- Description: list trials filtering by trial id and trial name
-- =============================================
CREATE PROCEDURE [dbo].[usp_PaginatedList_Trials]
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
		Trait_Name,
		PrimarySRR
	FROM (
		SELECT 
			ROW_NUMBER() OVER(ORDER BY tc.Trial_ID	ASC) AS RowNumber, 
			COUNT(tc.Trial_ID) OVER() AS [RowCount],
			tc.TrialYear as Trial_Year,
			tc.Trial_ID, 
			tc.Name as Trial_Name, 
			tc.FarmName as Farm_Name,
			c.CropName as Crop_Name,
			s.SiteName as Site_Name,
			t.TraitName as Trait_Name,
			vut_sps.FName + ' ' + vut_sps.LName as PrimarySRR
		FROM 
			TrialCatalog tc
		INNER JOIN
			Crop c ON c.Crop_ID = tc.Crop_ID
		INNER JOIN
			SiteMaster s ON s.Site_ID = tc.Site_ID
		INNER JOIN
			TraitMaster t ON t.Trait_ID = tc.Trait_ID
		INNER JOIN 
			v_UserTrials vut_cus --user trials view used for current user scope
			ON vut_cus.Trial_ID = tc.Trial_ID 
		LEFT JOIN 
			v_UserTrials vut_sps --user trials view used for show primary srr
			ON vut_sps.Trial_ID = tc.Trial_ID  
			and vut_sps.PrimarySRR = 1
		WHERE
			tc.IsDeleted = 0 and tc.Archive = 0
			and vut_cus.UserAlias = @userAlias 
			and (@trialID_Filter is null or tc.Trial_ID = @trialID_Filter)
			and (@trialName_Filter is null 
				or tc.Name like '%' + @trialName_Filter + '%') 
		) t
	WHERE 
		RowNumber between @StartRow and (@StartRow + @PageSize - 1)
		
		
END
GO

GRANT EXECUTE ON [dbo].[usp_PaginatedList_Trials] TO [db_FieldTrials_App] AS [dbo]
GO

