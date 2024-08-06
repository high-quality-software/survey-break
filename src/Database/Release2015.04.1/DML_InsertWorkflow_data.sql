USE REGFIELDTRIALS
GO
-- entered in dev on 3/31 for phase 2.
-- [Question]
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (73,'Previous_Crop_Replant','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (74,'Previous_Crop_Replant_Date','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (75,'Previous_Trained_and_Recorded','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (76,'Contained_of_Material','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (77,'Received_Good_Condition','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (78,'Received_Seed_Labeled','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (79,'Physical_Markers','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (80,'Planting_Start_Date','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (81,'Planting_End_Date','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (82,'Actual_Planted_Acres','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (83,'Commercial_Soybeans_Planted','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (84,'Type_of_Isolation','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (85,'Natural_Barrier','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (86,'SRR_or_Delegate_Present','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (87,'Seed_Tender_Used','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (88,'Seed_Tender_Cleaned_Out','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (89,'Date_of_Verbal_or_Visual_Confirm_1','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (90,'Equip_Cleanout_Contact_Person_1','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (91,'Planter_Cleaned_Out','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (92,'Date_of_Verbal_or_Visual_Confirm_2','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (93,'Equip_Cleanout_Contact_Person_2','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (94,'Seed_Leftover_after_Planting','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (95,'Amount_of_Material_Leftover','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (96,'Disposition_of_Leftover','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (97,'Next_Planted_FIeld','JASPAR')

--[WorkflowQuestion]
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (16,73,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (16,74,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (18,75,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (18,76,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (18,77,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (18,78,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,79,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,80,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,81,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,82,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,83,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,84,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,85,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,86,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,87,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,88,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,89,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,90,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,91,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,92,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,93,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,94,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,95,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,96,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (19,97,'JASPAR')



commit tran
--rollback tran