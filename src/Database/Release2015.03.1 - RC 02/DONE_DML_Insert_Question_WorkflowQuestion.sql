begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (40,'Located_Flood_Plain','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (41,'Trial_Site_Sloped_Surface','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (42,'Washout_5_Years','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (43,'Site_Located_Area','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (44,'Drains_Site_Alleyway','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (45,'Outlet_Drain_Area','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (46,'Drip_Tube_Tape_Monitoring','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (47,'Mitigation_Controls','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (48,'Contract_Signed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (49,'Date_of_Contract','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (50,'Compliance_Exceptions_Needed','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (51,'Date_of_Exception','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (52,'Duration_of_Exception','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (53,'Trial_type','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (54,'Exception_Description','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (55,'Isolation_Method','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (56,'GPS_1_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (57,'GPS_1_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (58,'GPS_2_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (59,'GPS_2_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (60,'GPS_3_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (61,'GPS_3_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (62,'GPS_4_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (63,'GPS_4_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (64,'GPS_5_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (65,'GPS_5_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (66,'GPS_6_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (67,'GPS_6_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (68,'GPS_7_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (69,'GPS_7_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (70,'GPS_8_lat','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (71,'GPS_8_long','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[Question] ([Question_ID],[QuestionName],[UpdateUserID]) VALUES (72,'Certification_Agreement','JASPAR')
commit tran
--
-- ADD UNIQUE CONSTRAINT

CREATE UNIQUE NONCLUSTERED INDEX
UNQ_WorkflowID_QuestionID_IsDeleted ON dbo.WorkflowQuestion
(
	[Workflow_ID],
	[Question_ID],
	[IsDeleted]
) ON [PRIMARY]

begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,40,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,41,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,42,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,43,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,44,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,45,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,46,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (3,47,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (4,48,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (4,49,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (5,50,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (5,51,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (5,52,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (5,53,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (5,54,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,55,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,56,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,57,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,58,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,59,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,60,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,61,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,62,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,63,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,64,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,65,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,66,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,67,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,68,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,69,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,70,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,71,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[WorkflowQuestion] ([Workflow_ID],[Question_ID],[UpdateUserID]) VALUES (6,72,'JASPAR')
commit tran