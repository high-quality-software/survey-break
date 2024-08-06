USE [REGFIELDTRIALS]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



ALTER view [dbo].[v_TrialWorkflowResponse_Summary]
AS
--Created by gio on 3/9/2015 to create view that connects Trial, Workflow, Questions and responses.   Comprehensive view.
-- Modified by gio on 3/23/2015 to add Trial_ID column per Cathy Buenzow
-- Modified by gio on 4/1/2015 to add join to LookupMaster table and LookupName in ResponseValue attribute
-- Modified by gio on 4/3/2015 to correct how we pull lm.LookupName
-- Modified by gio on 4/14/2015 to change JOIN to LookupMaster to CAST(lm.Lookup_ID AS NVARCHAR(100)) = r.ResponseValue 
	SELECT TP.TrialProgress_ID,
		t.Trial_ID,
		t.Name as TrialName,
		t.TrialYear,
		t.Internal,
		t.FarmName,
		c.CropName,
		tm.TraitName, 
		sm.SiteName,
		w.WorkflowName,
		w.WorkflowOrder,
		tp.[SRRUser_ID], -- User who entered data into this form.
		LeadSRR.LName as LeadSRR_LName,
		LeadSRR.FName as LeadSRR_FName,
		u.FName AS SRR_FName,
		u.LName AS SRR_LName,
		tp.WorkflowComplete,
		tp.WorkflowCompleteDate,
		tp.DueDate,
		mgr.LName AS Mgr_LName,
		mgr.FName AS Mgr_FName,
		q.QuestionName,
		r.Response_ID,
		COALESCE(lm.LookupName, r.ResponseValue) AS ResponseValue,
		r.FollowupRequired
	FROM TrialCatalog t 
		INNER JOIN TrialProgress tp on tp.Trial_ID = t.Trial_ID and tp.isdeleted = 0
		INNER JOIN Workflow w on w.Workflow_ID = tp.Workflow_ID and w.IsDeleted = 0 	
		INNER JOIN WorkflowQuestion wq on wq.Workflow_ID = w.Workflow_ID and wq.IsDeleted = 0 
		INNER JOIN Question q on q.Question_ID = wq.Question_ID and q.IsDeleted = 0 
		INNER JOIN Response r on r.TrialProgress_ID = tp.TrialProgress_ID 
			AND r.Question_ID = wq.Question_ID
			AND r.IsDeleted = 0 
		INNER JOIN Crop c ON c.Crop_ID = t.Crop_ID AND c.IsDeleted = 0 	
		INNER JOIN [User] u ON u.[User_ID] = tp.SRRUser_ID and u.IsDeleted = 0	-- join to user on the TrialProgress table, ie person who is working on this particular Trial + Workflow
		LEFT OUTER JOIN [User] mgr on mgr.[User_ID] = u.Manager_ID AND mgr.IsDeleted = 0 
		LEFT OUTER JOIN [User] LeadSRR ON LeadSRR.User_ID = T.SRRLeadUser_ID AND Leadsrr.IsDeleted = 0 
		LEFT OUTER JOIN TraitMaster tm on tm.Trait_ID = t.Trait_ID and tm.IsDeleted = 0
		LEFT OUTER JOIN SiteMaster sm on sm.Site_ID = t.Site_ID and sm.IsDeleted = 0
		LEFT OUTER JOIN LookupMaster lm on CAST(lm.Lookup_ID AS NVARCHAR(100)) = r.ResponseValue -- changed by gio on 4/14 to CAST to the datatype for Response.ResponseValue
			AND lm.IsDeleted = 0	
			AND q.IsLookup = 1	-- added on 4/3/2015
	WHERE t.IsDeleted = 0




GO


