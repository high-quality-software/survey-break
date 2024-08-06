USE RegFieldTrials
GO

--[ChemicalMaster]
ALTER TABLE [dbo].[ChemicalMaster]  WITH CHECK ADD  CONSTRAINT [FK_ChemicalMaster_ChemicalType] FOREIGN KEY( [ChemicalType_ID])
REFERENCES [dbo]. [ChemicalType] ( [ChemicalType_ID])
GO

ALTER TABLE [dbo].[ChemicalMaster] CHECK CONSTRAINT [FK_ChemicalMaster_ChemicalType]
GO



--User
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_UserType] FOREIGN KEY( [UserType_ID])
REFERENCES [dbo]. [UserType] ( [UserType_ID])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_UserType]
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Manager] FOREIGN KEY( [Manager_ID])
REFERENCES [dbo]. [User] ( [User_ID])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Manager]
GO


--WorkflowQuestion
ALTER TABLE [dbo].[WorkflowQuestion]  WITH CHECK ADD  CONSTRAINT [FK_WorkflowQuestion_Workflow] FOREIGN KEY( [Workflow_ID])
REFERENCES [dbo]. [Workflow] ( [Workflow_ID])
GO

ALTER TABLE [dbo].[WorkflowQuestion] CHECK CONSTRAINT [FK_WorkflowQuestion_Workflow]
GO

ALTER TABLE [dbo].[WorkflowQuestion]  WITH CHECK ADD  CONSTRAINT [FK_WorkflowQuestion_Question] FOREIGN KEY( [Question_ID])
REFERENCES [dbo]. [Question] ( [Question_ID])
GO

ALTER TABLE [dbo].[WorkflowQuestion] CHECK CONSTRAINT [FK_WorkflowQuestion_Question]
GO



--TrailCatalog
ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_Crop] FOREIGN KEY( [Crop_ID])
REFERENCES [dbo]. [Crop] ( [Crop_ID])
GO

ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_Crop]
GO

ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_UserSRR] FOREIGN KEY( [SRRLeadUser_ID])
REFERENCES [dbo]. [User] ( [User_ID])
GO

ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_UserSRR]
GO


ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_UserIRP] FOREIGN KEY( [IRPUser_ID])
REFERENCES [dbo]. [User] ( [User_ID])
GO

ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_UserIRP]
GO

ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_TraitMaster] FOREIGN KEY( [Trait_ID])
REFERENCES [dbo]. [TraitMaster] ( [Trait_ID])
GO

ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_TraitMaster]
GO

ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_SiteMaster] FOREIGN KEY( [Site_ID])
REFERENCES [dbo]. [SiteMaster] ( [Site_ID])
GO

ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_SiteMaster]
GO


--Response
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Workflow] FOREIGN KEY( [Workflow_ID])
REFERENCES [dbo]. [Workflow] ( [Workflow_ID])
GO

ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Workflow]
GO

ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Question] FOREIGN KEY( [Question_ID])
REFERENCES [dbo]. [Question] ( [Question_ID])
GO

ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Question]
GO


--TrialProgress
ALTER TABLE [dbo].[TrialProgress]  WITH CHECK ADD  CONSTRAINT [FK_TrialProgress_TrialCatalog] FOREIGN KEY( [Trial_ID])
REFERENCES [dbo]. [TrialCatalog] ( [Trial_ID])
GO

ALTER TABLE [dbo].[TrialProgress] CHECK CONSTRAINT [FK_TrialProgress_TrialCatalog]
GO

ALTER TABLE [dbo].[TrialProgress]  WITH CHECK ADD  CONSTRAINT [FK_TrialProgress_User] FOREIGN KEY( [SRRUser_ID])
REFERENCES [dbo]. [User] ( [User_ID])
GO

ALTER TABLE [dbo].[TrialProgress] CHECK CONSTRAINT [FK_TrialProgress_User]
GO


ALTER TABLE [dbo].[TrialProgress]  WITH CHECK ADD  CONSTRAINT [FK_TrialProgress_Workflow] FOREIGN KEY( [Workflow_ID])
REFERENCES [dbo]. [Workflow] ( [Workflow_ID])
GO

ALTER TABLE [dbo].[TrialProgress] CHECK CONSTRAINT [FK_TrialProgress_Workflow]
GO


--Reponse
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_User] FOREIGN KEY( [User_ID])
REFERENCES [dbo]. [User] ( [User_ID])
GO

ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_User]
GO

ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Trial] FOREIGN KEY( [Trial_ID])
REFERENCES [dbo]. [TrialCatalog] ( [Trial_ID])
GO

ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Trial]
GO

--[SRRUser_Trial_Xref]
ALTER TABLE [dbo].[SRRUser_Trial_Xref]  WITH CHECK ADD  CONSTRAINT [FK_SRRUserTrial_User] FOREIGN KEY( [SRRUser_ID])
REFERENCES [dbo]. [User] ( [User_ID])
GO

ALTER TABLE [dbo].[SRRUser_Trial_Xref] CHECK CONSTRAINT [FK_SRRUserTrial_User]
GO


ALTER TABLE [dbo].[SRRUser_Trial_Xref]  WITH CHECK ADD  CONSTRAINT [FK_SRRUserTrial_Trial] FOREIGN KEY( [Trial_ID])
REFERENCES [dbo]. [TrialCatalog] ( [Trial_ID])
GO

ALTER TABLE [dbo].[SRRUser_Trial_Xref] CHECK CONSTRAINT [FK_SRRUserTrial_Trial]
GO
 