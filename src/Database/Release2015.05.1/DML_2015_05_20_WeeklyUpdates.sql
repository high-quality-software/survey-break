-- created by gio on 5/13/2015 to update master data
-- ran in prod at 
use REGFIELDTRIALS
go

--TrialCatalog Deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2829;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2990;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2794;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2890;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2889;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2691;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 29140;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1409;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 28995;

--TrialCatalog inserts
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3222,10,24,2015,'Wandas','Cardwell','MO','63829','Dunklin','Brad McPherson',1,0,27,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3223,11,18,2015,'Cass County Farm','Walnut','IA','51577','Cass','Brad Kay',1,0,23,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3224,11,21,2015,'Kathy','Greenville','OH','45331','Darke','Josh Hines',1,0,17,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3225,163,114,2015,'Hild Hinrich S- DT','Illiopolis','IL','62539','Sangamon','Hild Hinrich S- DT',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3226,163,114,2015,'Hild Hinrich S- VG','Illiopolis','IL','62539','Sangamon','Hild Hinrich S- VG',2,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3227,163,114,2015,'Koehler Riely 2059','Roanoke','IL','61561','Woodford','Koehler Riely 2059',2,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3228,163,114,2015,'Durdle Natrona 180','San Jose','IL','62682','Mason','Durdle Natrona 180',2,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3229,163,114,2015,'Lynn, Jeff Gerdes 397','Chandlerville','IL','62627','Cass','Lynn, Jeff Gerdes 397',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3230,11,18,2015,'Fertilizer Plant West','Templeton','IA','51463','Carroll','Bruce Irlmeier',1,0,23,'JASPAR',0)


--SRRUser_Trial_Xref deletes
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2691 and SRRUser_ID = 35
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2829 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2794 and SRRUser_ID = 56
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2794 and SRRUser_ID = 23
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2889 and SRRUser_ID = 55
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 29140 and SRRUser_ID = 140
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 28995 and SRRUser_ID = 140
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1409 and SRRUser_ID = 60
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1197 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 7883207 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 7920954 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 7921772 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8165609 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8049066 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2890 and SRRUser_ID = 55
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8172998 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8059817 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8060417 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8049052 and SRRUser_ID = 155
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8049544 and SRRUser_ID = 155
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8049438 and SRRUser_ID = 155
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8053283 and SRRUser_ID = 155
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8172965 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8138621 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8173256 and SRRUser_ID = 157
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 8138623 and SRRUser_ID = 157

--SRRUser_Trial_Xref inserts
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8059817,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8060417,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8049066,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8049052,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8049544,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8049438,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8053283,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8172965,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8138621,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8173256,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8138623,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8172998,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,8165609,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,7921772,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,7920954,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,7883207,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (88,1197,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (35,3222,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (55,3223,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (30,3224,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (109,3225,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (109,3226,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (110,3227,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (120,3228,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (120,3229,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (56,3230,1,'JASPAR')

COMMIT TRAN
ROLLBACK TRAN

--TrialCatalog Name Updates
begin tran
update TrialCatalog set Site_ID = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2279
update TrialCatalog set Site_ID = 23 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2794

commit tran
rollback tran


--Unlock WorkflowComplete/unlock request
--select count(*) from trialprogress WHERE TRIAL_ID = 1 AND WORKFLOW_ID = 2 AND IsDeleted=0 --cannot update userid and usertime
--LOCKED: SET WorkflowComplete = 1 
--UNLOCKED: SET WorkflowComplete = 0
begin tran
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2689 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2688 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2687 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2681 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2682 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2680 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2679 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2683 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2678 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2692 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2693 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2694 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2695 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2690 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2684 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2686 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2685 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2651 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2664 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2666 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2665 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2647 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2660 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2654 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2645 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2648 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2658 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2657 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2659 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2663 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2650 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2646 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2644 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2649 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2661 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2652 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2656 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2653 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2655 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2662 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2667 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2670 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2674 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2675 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2676 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2677 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2672 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2671 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2669 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2673 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2668 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2447 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2449 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2450 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2451 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2452 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2453 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2454 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2438 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2439 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2440 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2459 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2473 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2472 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2464 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1254 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1255 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1256 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1257 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2459 AND WORKFLOW_ID = 19 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2473 AND WORKFLOW_ID = 19 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2472 AND WORKFLOW_ID = 19 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2464 AND WORKFLOW_ID = 19 AND IsDeleted=0

commit tran
rollback tran


-- we needed to set all of the forms for 2014 trials to completed EXCEPT for workflow_id =  16.  These 2 trials will need to have all the forms set to completed EXCEPT for form 16 (Volunteer Monitoring form)
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialProgress]
           ([Trial_ID]
           ,[SRRUser_ID]
           ,[Workflow_ID]
           ,[WorkflowComplete]
           ,[WorkflowCompleteDate]
           ,[UpdateDateTime]
           ,[UpdateUserID])
SELECT T.Trial_ID, ISNULL(x.SRRUser_ID,4), w.Workflow_ID, 1, GETDATE(), GETDATE(), 'JASPAR'
FROM [REGFIELDTRIALS].[dbo].[TrialCatalog] T
	left outer join
		 SRRUser_Trial_Xref x on x.Trial_ID = t.Trial_ID and x.IsDeleted = 0 
	CROSS JOIN workflow w 
WHERE T.Trial_ID IN (286370,286770)
	AND T.IsDeleted = 0 
	AND W.ISDELETED =0
	AND W.Workflow_ID <> 16     

rollback tran
commit tran

--Map file change
begin tran
delete from [TrialWorkflowAttachment] where Attachment_ID= '3D641E0A-3534-464A-B8A0-BCE95104126A'
commit tran
SELECT Attachment_ID,
	   AttachmentName
FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
WHERE IsDeleted = 0 
	AND TRIAL_ID = 1918
	--AND 
	--(CHARINDEX('$', AttachmentName, 1) > 0 
	--	or CHARINDEX('-', AttachmentName, 1) > 0 
	--	or CHARINDEX('.', AttachmentName, 1) > 0 
	--	or CHARINDEX('+', AttachmentName, 1) > 0 				
	--	or CHARINDEX('!', AttachmentName, 1) > 0 				
	--	or CHARINDEX('*', AttachmentName, 1) > 0 				
	--	or CHARINDEX('''', AttachmentName, 1) > 0 				
	--	or CHARINDEX('(', AttachmentName, 1) > 0 				
	--	or CHARINDEX(')', AttachmentName, 1) > 0 				
	--	or CHARINDEX(',', AttachmentName, 1) > 0 				
	--	or CHARINDEX('&', AttachmentName, 1) > 0 						
	--	or CHARINDEX('#', AttachmentName, 1) > 0 						
	--	or CHARINDEX('''', AttachmentName, 1) > 0 						
	--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '$', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('$', AttachmentName, 1) > 0
--)
	
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '-', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('-', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '.', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('.', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '+', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('+', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '!', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('!', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '*', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('*', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '''', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('''', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '(', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('(', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, ')', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX(')', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, ',', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX(',', AttachmentName, 1) > 0
--)

--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '#', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('#', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '&', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('&', AttachmentName, 1) > 0
--)





select @@TRANCOUNT


begin tran
UPDATE SRRUser_Trial_Xref 
SET ISDELETED = 1 
WHERE ISDELETED = 0 
	AND TRIAL_ID IN 
		(
			SELECT t.TRIAL_ID FROM dbo.TrialCatalog t
				INNER JOIN SRRUser_Trial_Xref x ON x.trial_id = t.trial_id 
			WHERE t.isdeleted = 1	-- TRIAL DELETED
				AND x.isdeleted = 0  -- USER TO TRIAL not DELETED 
		)
commit tran

--2: -- hard delete user-trial associations that are soft-deleted	
 DELETE FROM dbo.SRRUser_Trial_Xref WHERE ISDELETED = 1 and srruser_id in 
	(
		SELECT USER_ID FROM [USER] where useralias in ('DWBRICK','GMCNUTT') and isdeleted = 0 
	)  
	
	