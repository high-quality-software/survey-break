-- created by gio on 5/29/2015 to update master data
-- ran in prod at 
use REGFIELDTRIALS
go

--TrialCatalog Deletes
-- stop here, but finished
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID in (2548,2306,2456,2253,2730)

--TrialCatalog inserts
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3236,10,17,2015,'Monson','Harwood','ND','58042','Cass','Carl Peterson',1,0,30,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3237,10,17,2015,'Short 1/4','Harwood','ND','58043','Cass','Carl Peterson',1,0,30,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3238,10,17,2015,'13 Acr','Harwood','ND','58044','Cass','Carl Peterson',1,0,30,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3239,10,17,2015,'Justines','Harwood','ND','58045','Cass','Carl Peterson',1,0,30,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3240,10,17,2015,'Harrys','Harwood','ND','58046','Cass','Carl Peterson',1,0,30,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3241,163,130,2015,'Rothlisberger','Arlington','Ohio','45814','Hancock','Matthew Smalley',2,1,34,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3242,163,130,2015,'Elzzy','West Liberty','Ohio','43357','Logan','Mark Dowden',2,1,34,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3243,163,129,2015,'Harper North','East Prairie','MO','63845','Mississippi','Brad Hequembourg',1,1,8,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3244,163,114,2015,'Kopp Ellen Reed','FARMER CITY','IL','61842','DEWITT','Kopp Ellen Reed',2,1,13,'JASPAR',0)


--SRRUser_Trial_Xref deletes
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2548 and SRRUser_ID = 173
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2306 and SRRUser_ID = 52
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2456 and SRRUser_ID = 38
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2253 and SRRUser_ID = 30
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2730 and SRRUser_ID = 29
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1248 and SRRUser_ID = 94
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1249 and SRRUser_ID = 94

--SRRUser_Trial_Xref inserts
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (96,1248,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (96,1249,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3236,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3237,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3238,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3239,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3240,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,3241,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (28,3242,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (39,3243,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (112,3244,1,'JASPAR')

COMMIT TRAN
ROLLBACK TRAN

--TrialCatalog Name Updates
begin tran
update TrialCatalog set Name = 'BUDDY STRICKLAND NORTH' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1846

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
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1957 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1958 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1956 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1959 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1960 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1961 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1965 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2092 AND WORKFLOW_ID = 6  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2198 AND WORKFLOW_ID = 7  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2199 AND WORKFLOW_ID = 8  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2200 AND WORKFLOW_ID = 9  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2201 AND WORKFLOW_ID = 10  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2202 AND WORKFLOW_ID = 11  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2203 AND WORKFLOW_ID = 12  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2204 AND WORKFLOW_ID = 13  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2205 AND WORKFLOW_ID = 14  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2213 AND WORKFLOW_ID = 15  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2214 AND WORKFLOW_ID = 16  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2215 AND WORKFLOW_ID = 17  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2216 AND WORKFLOW_ID = 18  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2217 AND WORKFLOW_ID = 19  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2218 AND WORKFLOW_ID = 20  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2222 AND WORKFLOW_ID = 21  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2223 AND WORKFLOW_ID = 22  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2224 AND WORKFLOW_ID = 23  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2225 AND WORKFLOW_ID = 24  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2226 AND WORKFLOW_ID = 25  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2227 AND WORKFLOW_ID = 26  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2411 AND WORKFLOW_ID = 27  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2412 AND WORKFLOW_ID = 28  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2413 AND WORKFLOW_ID = 29  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2414 AND WORKFLOW_ID = 30  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2415 AND WORKFLOW_ID = 31  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2416 AND WORKFLOW_ID = 32  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2417 AND WORKFLOW_ID = 33  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2418 AND WORKFLOW_ID = 34  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2421 AND WORKFLOW_ID = 35  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2422 AND WORKFLOW_ID = 36  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2423 AND WORKFLOW_ID = 37  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2424 AND WORKFLOW_ID = 38  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2425 AND WORKFLOW_ID = 39  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2426 AND WORKFLOW_ID = 40  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2433 AND WORKFLOW_ID = 41  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2434 AND WORKFLOW_ID = 42  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2435 AND WORKFLOW_ID = 43  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2436 AND WORKFLOW_ID = 44  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2437 AND WORKFLOW_ID = 45  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2457 AND WORKFLOW_ID = 46  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2458 AND WORKFLOW_ID = 47  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2461 AND WORKFLOW_ID = 48  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2462 AND WORKFLOW_ID = 49  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2466 AND WORKFLOW_ID = 50  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2467 AND WORKFLOW_ID = 51  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2468 AND WORKFLOW_ID = 52  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2469 AND WORKFLOW_ID = 53  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2471 AND WORKFLOW_ID = 54  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2476 AND WORKFLOW_ID = 55  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2511 AND WORKFLOW_ID = 56  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2512 AND WORKFLOW_ID = 57  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2513 AND WORKFLOW_ID = 58  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2696 AND WORKFLOW_ID = 59  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2697 AND WORKFLOW_ID = 60  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2698 AND WORKFLOW_ID = 61  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2699 AND WORKFLOW_ID = 62  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2700 AND WORKFLOW_ID = 63  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2716 AND WORKFLOW_ID = 64  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2717 AND WORKFLOW_ID = 65  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2718 AND WORKFLOW_ID = 66  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2719 AND WORKFLOW_ID = 67  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2720 AND WORKFLOW_ID = 68  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2721 AND WORKFLOW_ID = 69  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2847 AND WORKFLOW_ID = 70  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2848 AND WORKFLOW_ID = 71  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2849 AND WORKFLOW_ID = 72  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2850 AND WORKFLOW_ID = 73  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2851 AND WORKFLOW_ID = 74  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2865 AND WORKFLOW_ID = 75  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2866 AND WORKFLOW_ID = 76  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2867 AND WORKFLOW_ID = 77  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2868 AND WORKFLOW_ID = 78  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2869 AND WORKFLOW_ID = 79  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2870 AND WORKFLOW_ID = 80  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2993 AND WORKFLOW_ID = 81  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2993 AND WORKFLOW_ID = 82  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2994 AND WORKFLOW_ID = 83  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2994 AND WORKFLOW_ID = 84  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2995 AND WORKFLOW_ID = 85  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2995 AND WORKFLOW_ID = 86  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2996 AND WORKFLOW_ID = 87  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2996 AND WORKFLOW_ID = 88  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2997 AND WORKFLOW_ID = 89  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2997 AND WORKFLOW_ID = 90  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2998 AND WORKFLOW_ID = 91  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2998 AND WORKFLOW_ID = 92  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2999 AND WORKFLOW_ID = 93  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2999 AND WORKFLOW_ID = 94  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3000 AND WORKFLOW_ID = 95  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3000 AND WORKFLOW_ID = 96  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3001 AND WORKFLOW_ID = 97  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3001 AND WORKFLOW_ID = 98  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3002 AND WORKFLOW_ID = 99  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3002 AND WORKFLOW_ID = 100  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3003 AND WORKFLOW_ID = 101  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3003 AND WORKFLOW_ID = 102  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3004 AND WORKFLOW_ID = 103  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3004 AND WORKFLOW_ID = 104  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3005 AND WORKFLOW_ID = 105  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3005 AND WORKFLOW_ID = 106  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3006 AND WORKFLOW_ID = 107  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3006 AND WORKFLOW_ID = 108  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3007 AND WORKFLOW_ID = 109  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3007 AND WORKFLOW_ID = 110  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3008 AND WORKFLOW_ID = 111  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3008 AND WORKFLOW_ID = 112  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3009 AND WORKFLOW_ID = 113  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3009 AND WORKFLOW_ID = 114  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3010 AND WORKFLOW_ID = 115  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3010 AND WORKFLOW_ID = 116  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3011 AND WORKFLOW_ID = 117  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3011 AND WORKFLOW_ID = 118  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3012 AND WORKFLOW_ID = 119  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3012 AND WORKFLOW_ID = 120  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3013 AND WORKFLOW_ID = 121  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3013 AND WORKFLOW_ID = 122  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3014 AND WORKFLOW_ID = 123  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3014 AND WORKFLOW_ID = 124  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3015 AND WORKFLOW_ID = 125  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3015 AND WORKFLOW_ID = 126  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3016 AND WORKFLOW_ID = 127  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3016 AND WORKFLOW_ID = 128  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3017 AND WORKFLOW_ID = 129  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3017 AND WORKFLOW_ID = 130  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3018 AND WORKFLOW_ID = 131  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3018 AND WORKFLOW_ID = 132  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3019 AND WORKFLOW_ID = 133  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3019 AND WORKFLOW_ID = 134  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3020 AND WORKFLOW_ID = 135  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3020 AND WORKFLOW_ID = 136  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3021 AND WORKFLOW_ID = 137  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3021 AND WORKFLOW_ID = 138  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3022 AND WORKFLOW_ID = 139  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3022 AND WORKFLOW_ID = 140  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3023 AND WORKFLOW_ID = 141  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3023 AND WORKFLOW_ID = 142  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3024 AND WORKFLOW_ID = 143  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3024 AND WORKFLOW_ID = 144  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3025 AND WORKFLOW_ID = 145  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3025 AND WORKFLOW_ID = 146  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3026 AND WORKFLOW_ID = 147  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3026 AND WORKFLOW_ID = 148  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3115 AND WORKFLOW_ID = 149  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3115 AND WORKFLOW_ID = 150  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3116 AND WORKFLOW_ID = 151  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3116 AND WORKFLOW_ID = 152  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3117 AND WORKFLOW_ID = 153  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3117 AND WORKFLOW_ID = 154  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3118 AND WORKFLOW_ID = 155  AND IsDeleted=0 and WorkflowComplete <> 0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3118 AND WORKFLOW_ID = 156  AND IsDeleted=0 and WorkflowComplete <> 0

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
	
	