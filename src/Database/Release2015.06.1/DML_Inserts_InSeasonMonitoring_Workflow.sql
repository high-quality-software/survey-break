-- inserts for In-Season Monitoring workflow/form
-- run in dev on 5/21

use REGFIELDTRIALS
go


INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (158,'Ft_Isolation_Planting','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (159,'PP_Record_Isolation_Date','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (160,'PP_Isolation_Area_Inspected','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (161,'PP_Compatible_Plants_Found','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (162,'PP_Compatible_Plants_Destroyed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (163,'PP_Compatible_Plants_Destruction_Method','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (164,'PH_Record_Isolation_Date','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (165,'PH_Isolation_Area_Inspected','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (166,'PH_Compatible_Plants_Found','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (167,'PH_Compatible_Plants_Destroyed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (168,'PH_Compatible_Plants_Destruction_Method','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (169,'SRR_Confirmation','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (170,'Cover_Crops_Destroyed','JASPAR')

select * from [WorkflowQuestion] where Workflow_ID=11
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,158,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,159,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,160,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,161,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,162,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,163,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,164,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,165,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,166,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,167,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,168,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,169,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (11,170,'JASPAR')


update question set IsLookup = 1 where question_id in (158,160,161,162,163,165,166,167,168,169,170)

INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1039,'Hand Pulled','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1040,'Chemical','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID],[LookupName],[UpdateUserID]) VALUES (1041,'Tilled','JASPAR')

