-- created by gio on 6/3/2015 to update master data
-- ran in prod at 10:46 on 6/3/2015
use REGFIELDTRIALS
go


--- New users, verify number
--select max([user_id]) from [user] 
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation],[Manager_ID]) VALUES (1,'Barnes','Josh','josh.barnes@agstewards.com',0,'JASPAR','JBARN4','870-227-1447','870-227-1447','Wynne, AR',24)
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'AHMED FARUK','ABDULLH','',1,'JASPAR','AFABDU','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'Thomas','BAKER','',1,'JASPAR','TGBAKE','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'MARK','BURRIS','',1,'JASPAR','MWBURR','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'ANDREW','ELZEIN','',1,'JASPAR','AAELZE','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'GHAFFAR','GLENN','',1,'JASPAR','GGLEN','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'JENNIFER','GREENE','',1,'JASPAR','JAGREE1','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'ALEX','MANZO','',1,'JASPAR','AMANZ2','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'ANDI','MCLAUGHLIN','',1,'JASPAR','AMCLA','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'ANDREW','ROTHERMICH','',1,'JASPAR','AJROTH1','','','Support')
INSERT INTO [REGFIELDTRIALS].[dbo] .[User] ([UserType_ID], [FName],[LName] ,[Email], [Internal],[UpdateUserID] ,[UserAlias],[OfficeNumber],[CellNumber],[SiteLocation]) VALUES (4,'JANICE','SPILLER','',1,'JASPAR','JLSPIL','','','Support')
commit tran
rollback tran
select @@TRANCOUNT
--TrialCatalog Deletes
-- stop here, but finished
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID in (3065,3066,1649,1651,1658)

--TrialCatalog inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3245,163,129,2015,'H Inman #28','Poplar Bluff','MO','63901','Butler','Hughey Inman',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3246,163,129,2015,'H Inman #47','Poplar Bluff','MO','63901','Butler','Hughey Inman',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3247,163,129,2015,'Byrd 100% John','Sikeston','MO','63901','Scott','John Byrd Farms',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3248,163,129,2015,'J/A Johnson Big Vedder','Advance','MO','63730','Bollinger','John F Johnson',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3249,163,129,2015,'J Johnson Cowhill','Oran','MO','63730','Stoddard','John F Johnson',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3250,163,129,2015,'Watkins Darnell South','Portageville','MO','63873','Pemiscot','Steve Watkins Farms',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3251,163,129,2015,'Watkins Summer East','Hayti','MO','63851','Pemiscot','Steve Watkins Farms',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3252,163,129,2015,'Hequembourg Virginia Dare North Center','East Prairie','MO','63845','Mississippi','Brad Hequembourg',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3253,163,129,2015,'Hequembourg Virginia Dare South','East Prairie','MO','63845','Mississippi','Brad Hequembourg',1,1,8,'JASPAR',0)
select @@TRANCOUNT
commit tran


--SRRUser_Trial_Xref deletes
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3065 and SRRUser_ID = 42
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3066 and SRRUser_ID = 42
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1649 and SRRUser_ID = 42
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1651 and SRRUser_ID = 42
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1658 and SRRUser_ID = 42

--SRRUser_Trial_Xref inserts
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (45,3245,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (45,3246,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (132,3247,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (44,3248,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (44,3249,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3250,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3251,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (39,3252,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (39,3253,1,'JASPAR')

COMMIT TRAN
ROLLBACK TRAN

--TrialCatalog Name Updates
begin tran
update TrialCatalog set Name = 'Byrd Roth 1' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1600
update TrialCatalog set Name = 'Byrd Roth 2' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1601
update TrialCatalog set Name = 'Byrd Fuchs' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1602
update TrialCatalog set Name = ' J/A Johnson Little Vedder' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1535
update TrialCatalog set Name = 'J Johnson Cowhill Pasture E & W' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1531
update TrialCatalog set Name = 'Karkosh, Al - Taylors Home NW' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1040
update TrialCatalog set Name = 'Karkosh, Al - Taylors Home SW' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1041

commit tran
rollback tran


--TrialCatalog IPRUserid updates
begin tran
commit tran


--Unlock WorkflowComplete/unlock request
--select count(*) from trialprogress WHERE TRIAL_ID = 1 AND WORKFLOW_ID = 2 AND IsDeleted=0 --cannot update userid and usertime
--LOCKED: SET WorkflowComplete = 1 
--UNLOCKED: SET WorkflowComplete = 0
begin tran

commit tran
rollback tran

	