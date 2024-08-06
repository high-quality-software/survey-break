-- created by gio on 4/24/2015 to update master data
-- ran in prod at 10:55
use REGFIELDTRIALS
go

select * from TrialCatalog where Trial_ID in (2079,1998)
--trialcatalog deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID in (2079,1998)

--TrialCatalog Inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,2813,163,114,2015,'KIMPLING TIMBER','LONG POINT','IL','61333','Livingston','KIMPLING TIMBER',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,2814,163,114,2015,'SCHAFER WATKINS TR North 40','SAN JOSE','IL','62682','MASON','SCHAFER WATKINS TR North 40',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,2815,163,114,2015,'SCHAFER WATKINS TR South 20','SAN JOSE','IL','62682','MASON','SCHAFER WATKINS TR South 20',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,2816,163,114,2015,'KOPP BROWN GIRLS','FARMER CITY','IL','61842','DEWITT','KOPP BROWN GIRLS',1,1,13,'JASPAR',0)

commit tran


--TrialCatalog Name Updates
begin tran
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1020
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1021
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1022
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1023
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1024
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1025
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1026
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1031
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1034
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1036
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1037
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1038
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1039
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1040
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1041
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1043
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1044
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1046
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1047
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1048
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1049
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1053
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1054
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1055
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1063
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1064
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1065
update TrialCatalog set Site_ID =16 , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1066
commit tran

--SRRUser_Trial_xref delete
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2079 and SRRUser_ID = 120
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1998 and SRRUser_ID = 112

--SRRUser_Trial_xref inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (118,2813,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (120,2814,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (120,2815,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (112,2816,1,'JASPAR')
commit tran

select @@TRANCOUNT
select * from [SRRUser_Trial_Xref] where SRRUser_ID = 151

