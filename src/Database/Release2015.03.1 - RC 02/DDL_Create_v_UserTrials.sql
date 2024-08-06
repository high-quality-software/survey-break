USE [REGFIELDTRIALS]
GO

/****** Object:  View [dbo].[v_UserTrials]    Script Date: 03/09/2015 10:48:39 ******/
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[v_UserTrials]'))
DROP VIEW [dbo].[v_UserTrials]
GO

USE [REGFIELDTRIALS]
GO

/****** Object:  View [dbo].[v_UserTrials]    Script Date: 03/09/2015 10:48:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[v_UserTrials]
AS
-- Created by gio on 3/9/2015.   View will identify all trials associated to a user, along with User's role.
-- NOTE: This view will return lots of rows, so its important to include useralias or user_id in WHERE predicate
-- USAGE: UserAlias = 'NTUserID' OR [User_ID] = 123 (User's PK) 

-- 1. Select ALL trials if user is Admin
	SELECT	t.Trial_ID,
			t.Name,
			0 AS PrimarySRR, --srr_xref.PrimarySRR,
			'Admin' AS UserTypeName, --ut.UserTypeName,
			u.[User_ID],
			u.LName,
			u.FName,
			u.UserAlias,
			4 AS UserType_ID
	FROM TrialCatalog t
		CROSS JOIN [User] u 
	WHERE t.IsDeleted = 0 
		AND u.IsDeleted = 0
		AND u.UserType_ID = (SELECT UserType_ID FROM UserType WHERE UserTypeName = 'Admin')

	UNION ALL

	-- 2. SELECT all trials associated to SRR
	SELECT	t.Trial_ID,
			t.Name,
			srr_xref.PrimarySRR,
			ut.UserTypeName,
			u.[User_ID],
			u.LName,
			u.FName,
			u.UserAlias,
			ut.UserType_ID
	FROM TrialCatalog t
		INNER JOIN SRRUser_Trial_Xref srr_xref on srr_xref.Trial_ID = T.Trial_ID AND srr_xref.IsDeleted = 0 
		INNER JOIN [User] u on u.[User_ID] = srr_xref.SRRUser_ID and u.IsDeleted = 0
		INNER JOIN UserType ut ON ut.UserType_ID = u.UserType_ID and ut.IsDeleted = 0
	WHERE t.IsDeleted = 0 
		AND ut.UserTypeName <> 'Admin'
		--AND u.UserAlias = 'HCASA'		-- be sure to include value here
		--AND t.Trait_ID = 27507
		--AND u.User_ID = 20

	UNION ALL

	-- 3. SELECT all trials associated to LeadSRR 
	SELECT  t.Trial_ID,
			t.Name,
			0, -- PrimarySRR
			'LeadSRR', --UserTypeName
			u.[User_ID],
			u.LName,
			u.FName,
			u.UserAlias,
			999
	FROM TrialCatalog t
		INNER JOIN [User] u ON u.User_ID = t.SRRLeadUser_ID AND u.IsDeleted = 0 
	WHERE t.IsDeleted = 0

GO
