-- created by gio on 5/13/2015 to update master data
-- ran in prod at 
use REGFIELDTRIALS
go

--TrialCatalog Deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1951;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1087;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1013;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1014;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2545;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2600;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 3043;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2611;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 2410;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1269;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 3085;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID = 1949;

--TrialCatalog inserts
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3213,10,24,2015,'Smokey Alley Field','Earle','AR','72331','Crittenden','Ray Sneed',1,0,27,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3214,11,18,2015,'Home West','Harlan','IA','51537','Shelby','Brad Sorenson',1,0,23,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3215,10,24,2015,'S160 HI25','McClure','IL','62957','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3216,10,24,2015,'S160 LO50','McClure','IL','62958','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3217,10,24,2015,'HWY 50','McClure','IL','62959','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3218,10,24,2015,'East160/West 80','McClure','IL','62960','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3219,10,24,2015,'T&M','McClure','IL','62961','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3220,10,24,2015,'MC West','McClure','IL','62962','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3221,163,114,2015,'STOLLER ARTS 70','BELLFLOWER','IL','61724','MCLEAN','STOLLER ARTS 70',1,1,13,'JASPAR',0)


--SRRUser_Trial_Xref deletes
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1951 and SRRUser_ID = 118
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1087 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1949 and SRRUser_ID = 118
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1269 and SRRUser_ID = 98
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2410 and SRRUser_ID = 102
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1249 and SRRUser_ID = 94
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1248 and SRRUser_ID = 94
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3043 and SRRUser_ID = 33
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2600 and SRRUser_ID = 57
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2545 and SRRUser_ID = 173
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1014 and SRRUser_ID = 56
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1013 and SRRUser_ID = 56
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2611 and SRRUser_ID = 59
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3085 and SRRUser_ID = 111

--SRRUser_Trial_Xref inserts
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (24,3213,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (56,3214,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3215,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3216,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3217,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3218,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3219,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3220,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (96,1248,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (96,1249,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (105,3221,1,'JASPAR')

COMMIT TRAN
ROLLBACK TRAN

--TrialCatalog Name Updates
begin tran
update TrialCatalog set City = 'Gridley' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2094
update TrialCatalog set FarmName = 'Stoller Uncle Wayne 4054' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2094
update TrialCatalog set Name = '7489-AG12X6' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1272
update TrialCatalog set Name = '684-AG12X6' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1271
update TrialCatalog set Name = 'Stoller Uncle Wayne 4054' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2094
update TrialCatalog set Name = '7488-AG12X6' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1273
update TrialCatalog set Name = 'EJ BLAIR SHOP' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3086
update TrialCatalog set Name = 'Strasburger-X8' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2846
update TrialCatalog set Zip = '61744' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2094

commit tran
rollback tran


--Unlock WorkflowComplete/unlock request
--select count(*) from trialprogress WHERE TRIAL_ID = 1 AND WORKFLOW_ID = 2 AND IsDeleted=0 --cannot update userid and usertime
--LOCKED: SET WorkflowComplete = 1 
--UNLOCKED: SET WorkflowComplete = 0
begin tran
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1080 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1089 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1321 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1311 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1312 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1315 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1316 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1317 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1313 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 2291 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1166 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1167 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1168 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1169 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1170 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1171 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1172 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1185 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1186 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1193 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1193 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1194 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1195 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1196 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1197 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1198 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1199 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1200 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1201 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 1941 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 2044 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 3086 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 3087 AND WORKFLOW_ID = 6 AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID = 3088 AND WORKFLOW_ID = 6 AND IsDeleted=0
commit tran
rollback tran

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
	
	