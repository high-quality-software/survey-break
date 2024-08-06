-- created on 4/20/2015 for 'Dicamba Spray Tracking form
-- ran in dev on 4/20/2015
USE REGFIELDTRIALS
GO

--Workflow
UPDATE [REGFIELDTRIALS].[dbo].[Workflow] SET WorkflowName= 'Dicamba Spray Tracking', UpdateDateTime = GETDATE() WHERE WORKFLOW_ID = 10


--Question
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (98,'Field_Sprayed_M1691_Burndown','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (99,'BD_SRR_Present','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (100,'BD_Applicator_FN','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (101,'BD_Applicator_LN','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (102,'BD_Applicator_Trained','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (103,'BD_Applicator_Possession_M1691_Label','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (104,'BD_Crop_Stage','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (105,'BD_Adjacent_Non_RR2X','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (106,'BD_Growth_Stage_Non_RR2X_Soybean','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (107,'BD_Growth_Stage_Flowering','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (108,'BD_Herbicide','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (109,'BD_Mon_10_Used','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (110,'BD_Drift_Reduction','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (111,'BD_DateTime','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (112,'BD_Nozzle_Type','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (113,'BD_Nozzle_Spacing','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (114,'BD_Boom_Length','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (115,'BD_Boom_Height','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (116,'BD_Hooded','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (117,'BD_Operating_Pressure_PSI','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (118,'BD_Ground_Speed_MPH','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (119,'BD_GPA','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (120,'BD_Treated_Acreage','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (121,'BD_Equipment_Triple_Rinsed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (122,'BD_Additional_App_Notes','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (123,'BD_Wind_Speed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (124,'BD_Wind_Direction','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (125,'BD_Air_Temp','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (126,'BD_Percent_Relative_Humidity','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (127,'BD_Additional_Notes_Comments','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (128,'Field_Sprayed_M1691_In_Season','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (129,'IS_SRR_Present','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (130,'IS_Applicator_FN','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (131,'IS_Applicator_LN','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (132,'IS_Applicator_Trained','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (133,'IS_Applicator_Possession_M1691_Label','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (134,'IS_Crop_Stage','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (135,'IS_Adjacent_Non_RR2X','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (136,'IS_Growth_Stage_Non_RR2X_Soybean','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (137,'IS_Growth_Stage_Flowering','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (138,'IS_Herbicide','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (139,'IS_Mon_10_Used','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (140,'IS_Drift_Reduction','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (141,'IS_DateTime','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (142,'IS_Nozzle_Type','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (143,'IS_Nozzle_Spacing','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (144,'IS_Boom_Length','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (145,'IS_Boom_Height','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (146,'IS_Hooded','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (147,'IS_Operating_Pressure_PSI','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (148,'IS_Ground_Speed_MPH','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (149,'IS_GPA','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (150,'IS_Treated_Acreage','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (151,'IS_Equipment_Triple_Rinsed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (152,'IS_Additional_App_Notes','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (153,'IS_Wind_Speed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (154,'IS_Wind_Direction','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (155,'IS_Air_Temp','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (156,'IS_Percent_Relative_Humidity','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (157,'IS_Additional_Notes_Comments','JASPAR')
commit tran

--insert workflowquestion
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,98,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,99,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,100,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,101,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,102,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,103,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,104,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,105,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,106,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,107,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,108,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,109,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,110,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,111,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,112,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,113,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,114,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,115,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,116,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,117,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,118,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,119,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,120,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,121,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,122,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,123,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,124,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,125,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,126,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,127,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,128,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,129,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,130,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,131,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,132,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,133,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,134,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,135,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,136,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,137,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,138,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,139,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,140,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,141,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,142,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,143,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,144,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,145,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,146,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,147,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,148,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,149,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,150,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,151,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,152,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,153,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,154,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,155,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,156,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (10,157,'JASPAR')

--update question
UPDATE Question SET IsLookup = 1 WHERE Question_ID IN (98,99,102,103,104,105,106,109,110,113,117,122,129,132,133,134,135,136,139,140,142,146,151) and IsLookup IS NULL
BEGIN TRAN
UPDATE Question SET IsLookup = 0 WHERE IsLookup IS NULL
COMMIT TRAN

select * from LookupMaster where Lookup_ID > 1020
-- lookupmaster
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1021,'Not Emerged','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1022,'VE','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1023,'V1','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1024,'V2','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1025,'V3','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1026,'V4','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1027,'V5','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1028,'V6','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1029,'Pre-Flowering','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1030,'Flowering','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1031,'BORDER EG�','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1032,'Downdraft�','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1033,'Grounded�','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1034,'InterLock�','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1035,'Lock Tight�','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1036,'Sedate� Max','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1037,'Strike Force�','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1038,'TTI-TeeJet 11004','JASPAR')


ALTER TABLE [dbo].[Question] Alter COLUMN IsLookup BIT NOT NULL;
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_IsLookup]  DEFAULT ((0)) FOR [IsLookup]
GO

