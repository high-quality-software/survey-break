USE [REGFIELDTRIALS]
GO
/****** Object:  ForeignKey [FK_ChemicalMaster_ChemicalType]    Script Date: 03/30/2015 11:30:39 ******/
ALTER TABLE [dbo].[ChemicalMaster] DROP CONSTRAINT [FK_ChemicalMaster_ChemicalType]
GO
/****** Object:  ForeignKey [FK_Response_Question]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_Question]
GO
/****** Object:  ForeignKey [FK_Response_TrialProgress]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_TrialProgress]
GO
/****** Object:  ForeignKey [FK_SRR_EvalResponse_User]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[SRR_EvalResponse] DROP CONSTRAINT [FK_SRR_EvalResponse_User]
GO
/****** Object:  ForeignKey [FK_SRRUserTrial_Trial]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [FK_SRRUserTrial_Trial]
GO
/****** Object:  ForeignKey [FK_SRRUserTrial_User]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [FK_SRRUserTrial_User]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_Crop]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_Crop]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_SiteMaster]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_SiteMaster]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_TraitMaster]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_TraitMaster]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_UserIRP]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_UserIRP]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_UserSRR]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_UserSRR]
GO
/****** Object:  ForeignKey [FK_TrialProgress_TrialCatalog]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [FK_TrialProgress_TrialCatalog]
GO
/****** Object:  ForeignKey [FK_TrialProgress_User]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [FK_TrialProgress_User]
GO
/****** Object:  ForeignKey [FK_TrialProgress_Workflow]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [FK_TrialProgress_Workflow]
GO
/****** Object:  ForeignKey [FK_TrialWorkflowAttachment_AttachmentType]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [FK_TrialWorkflowAttachment_AttachmentType]
GO
/****** Object:  ForeignKey [FK_TrialWorkflowAttachment_Trial]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [FK_TrialWorkflowAttachment_Trial]
GO
/****** Object:  ForeignKey [FK_TrialWorkflowAttachment_Workflow]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [FK_TrialWorkflowAttachment_Workflow]
GO
/****** Object:  ForeignKey [FK_User_Manager]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[User] DROP CONSTRAINT [FK_User_Manager]
GO
/****** Object:  ForeignKey [FK_User_UserType]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[User] DROP CONSTRAINT [FK_User_UserType]
GO
/****** Object:  ForeignKey [FK_WorkflowQuestion_DataTypesMaster]    Script Date: 03/30/2015 11:30:42 ******/
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster]
GO
/****** Object:  ForeignKey [FK_WorkflowQuestion_Question]    Script Date: 03/30/2015 11:30:42 ******/
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_Question]
GO
/****** Object:  ForeignKey [FK_WorkflowQuestion_Workflow]    Script Date: 03/30/2015 11:30:42 ******/
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_Workflow]
GO
/****** Object:  StoredProcedure [dbo].[usp_DeleteTrialProgress_Response]    Script Date: 03/30/2015 11:30:45 ******/
DROP PROCEDURE [dbo].[usp_DeleteTrialProgress_Response]
GO
/****** Object:  StoredProcedure [dbo].[usp_ReceiveResponses]    Script Date: 03/30/2015 11:30:45 ******/
DROP PROCEDURE [dbo].[usp_ReceiveResponses]
GO
/****** Object:  View [dbo].[v_TrialWorkflowResponse_Summary]    Script Date: 03/30/2015 11:30:43 ******/
DROP VIEW [dbo].[v_TrialWorkflowResponse_Summary]
GO
/****** Object:  View [dbo].[v_WorkflowQuestions]    Script Date: 03/30/2015 11:30:43 ******/
DROP VIEW [dbo].[v_WorkflowQuestions]
GO
/****** Object:  View [dbo].[v_UserTrials]    Script Date: 03/30/2015 11:30:43 ******/
DROP VIEW [dbo].[v_UserTrials]
GO
/****** Object:  Table [dbo].[Response]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_Question]
GO
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_TrialProgress]
GO
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [DF_Response_UpdateDateTime]
GO
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [DF_Response_IsDeleted]
GO
DROP TABLE [dbo].[Response]
GO
/****** Object:  Table [dbo].[TrialProgress]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [FK_TrialProgress_TrialCatalog]
GO
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [FK_TrialProgress_User]
GO
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [FK_TrialProgress_Workflow]
GO
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [DF_TrialProgress_WorkFlowComplete]
GO
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [DF_TrialProgress_UpdateDateTime]
GO
ALTER TABLE [dbo].[TrialProgress] DROP CONSTRAINT [DF_TrialProgress_IsDeleted]
GO
DROP TABLE [dbo].[TrialProgress]
GO
/****** Object:  Table [dbo].[TrialWorkflowAttachment]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [FK_TrialWorkflowAttachment_AttachmentType]
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [FK_TrialWorkflowAttachment_Trial]
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [FK_TrialWorkflowAttachment_Workflow]
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [DF_TrialWorkflowAttachment_UpdateDateTime]
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] DROP CONSTRAINT [DF_TrialWorkflowAttachment_IsDeleted]
GO
DROP TABLE [dbo].[TrialWorkflowAttachment]
GO
/****** Object:  Table [dbo].[SRRUser_Trial_Xref]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [FK_SRRUserTrial_Trial]
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [FK_SRRUserTrial_User]
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [DF_SRRUser_Trial_Xref_UpdateDateTime]
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [DF_SRRUser_Trial_Xref_IsDeleted]
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] DROP CONSTRAINT [DF_SRRUser_Trial_Xref_PrimarySRR]
GO
DROP TABLE [dbo].[SRRUser_Trial_Xref]
GO
/****** Object:  Table [dbo].[TrialCatalog]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_Crop]
GO
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_SiteMaster]
GO
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_TraitMaster]
GO
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_UserIRP]
GO
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [FK_TrialCatalog_UserSRR]
GO
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [DF_TrialCatalog_UpdateDateTime]
GO
ALTER TABLE [dbo].[TrialCatalog] DROP CONSTRAINT [DF_TrialCatalog_IsDeleted]
GO
DROP TABLE [dbo].[TrialCatalog]
GO
/****** Object:  Table [dbo].[SRR_EvalResponse]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[SRR_EvalResponse] DROP CONSTRAINT [FK_SRR_EvalResponse_User]
GO
ALTER TABLE [dbo].[SRR_EvalResponse] DROP CONSTRAINT [DF_SRR_EvalResponse_UpdateDateTime]
GO
ALTER TABLE [dbo].[SRR_EvalResponse] DROP CONSTRAINT [DF_SRR_EvalResponse_IsDeleted]
GO
DROP TABLE [dbo].[SRR_EvalResponse]
GO
/****** Object:  Table [dbo].[WorkflowQuestion]    Script Date: 03/30/2015 11:30:42 ******/
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster]
GO
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_Question]
GO
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_Workflow]
GO
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [DF_WorkflowQuestion_UpdateDateTime]
GO
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [DF_WorkflowQuestion_IsDeleted]
GO
DROP TABLE [dbo].[WorkflowQuestion]
GO
/****** Object:  Table [dbo].[User]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[User] DROP CONSTRAINT [FK_User_Manager]
GO
ALTER TABLE [dbo].[User] DROP CONSTRAINT [FK_User_UserType]
GO
ALTER TABLE [dbo].[User] DROP CONSTRAINT [DF_User_UpdateDateTime]
GO
ALTER TABLE [dbo].[User] DROP CONSTRAINT [DF_User_IsDeleted]
GO
DROP TABLE [dbo].[User]
GO
/****** Object:  Table [dbo].[ChemicalMaster]    Script Date: 03/30/2015 11:30:39 ******/
ALTER TABLE [dbo].[ChemicalMaster] DROP CONSTRAINT [FK_ChemicalMaster_ChemicalType]
GO
ALTER TABLE [dbo].[ChemicalMaster] DROP CONSTRAINT [DF_ChemicalMaster_UpdateDateTime]
GO
ALTER TABLE [dbo].[ChemicalMaster] DROP CONSTRAINT [DF_ChemicalMaster_IsDeleted]
GO
DROP TABLE [dbo].[ChemicalMaster]
GO
/****** Object:  Table [dbo].[ChemicalType]    Script Date: 03/30/2015 11:30:39 ******/
ALTER TABLE [dbo].[ChemicalType] DROP CONSTRAINT [DF_ChemicalType_UpdateDateTime]
GO
ALTER TABLE [dbo].[ChemicalType] DROP CONSTRAINT [DF_ChemicalType_IsDeleted]
GO
DROP TABLE [dbo].[ChemicalType]
GO
/****** Object:  Table [dbo].[Crop]    Script Date: 03/30/2015 11:30:39 ******/
ALTER TABLE [dbo].[Crop] DROP CONSTRAINT [DF_Crop_UpdateDateTime]
GO
ALTER TABLE [dbo].[Crop] DROP CONSTRAINT [DF_Crop_IsDeleted]
GO
DROP TABLE [dbo].[Crop]
GO
/****** Object:  Table [dbo].[DataTypesMaster]    Script Date: 03/30/2015 11:30:39 ******/
ALTER TABLE [dbo].[DataTypesMaster] DROP CONSTRAINT [DF_DataTypesMaster_UpdateDateTime]
GO
ALTER TABLE [dbo].[DataTypesMaster] DROP CONSTRAINT [DF_DataTypesMaster_IsDeleted]
GO
DROP TABLE [dbo].[DataTypesMaster]
GO
/****** Object:  Table [dbo].[DB_Version]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[DB_Version] DROP CONSTRAINT [DF_DB_Version_UpdateDateTime]
GO
ALTER TABLE [dbo].[DB_Version] DROP CONSTRAINT [DF_DB_Version_IsDeleted]
GO
DROP TABLE [dbo].[DB_Version]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[Question] DROP CONSTRAINT [DF_Question_UpdateDateTime]
GO
ALTER TABLE [dbo].[Question] DROP CONSTRAINT [DF_Question_IsDeleted]
GO
DROP TABLE [dbo].[Question]
GO
/****** Object:  Table [dbo].[SiteMaster]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[SiteMaster] DROP CONSTRAINT [DF_SiteMaster_UpdateDateTime]
GO
ALTER TABLE [dbo].[SiteMaster] DROP CONSTRAINT [DF_SiteMaster_IsDeleted]
GO
DROP TABLE [dbo].[SiteMaster]
GO
/****** Object:  Table [dbo].[UserType]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[UserType] DROP CONSTRAINT [DF_UserType_UpdateDateTime]
GO
ALTER TABLE [dbo].[UserType] DROP CONSTRAINT [DF_UserType_IsDeleted]
GO
DROP TABLE [dbo].[UserType]
GO
/****** Object:  Table [dbo].[AttachmentType]    Script Date: 03/30/2015 11:30:39 ******/
ALTER TABLE [dbo].[AttachmentType] DROP CONSTRAINT [DF_AttachmentType_UpdateDateTime]
GO
ALTER TABLE [dbo].[AttachmentType] DROP CONSTRAINT [DF_AttachmentType_IsDeleted]
GO
DROP TABLE [dbo].[AttachmentType]
GO
/****** Object:  Table [dbo].[Workflow]    Script Date: 03/30/2015 11:30:41 ******/
ALTER TABLE [dbo].[Workflow] DROP CONSTRAINT [DF_Workflow_UpdateDateTime]
GO
ALTER TABLE [dbo].[Workflow] DROP CONSTRAINT [DF_Workflow_IsDeleted]
GO
DROP TABLE [dbo].[Workflow]
GO
/****** Object:  Table [dbo].[TraitMaster]    Script Date: 03/30/2015 11:30:40 ******/
ALTER TABLE [dbo].[TraitMaster] DROP CONSTRAINT [DF_TraitMaster_UpdateDateTime]
GO
ALTER TABLE [dbo].[TraitMaster] DROP CONSTRAINT [DF_TraitMaster_IsDeleted]
GO
DROP TABLE [dbo].[TraitMaster]
GO
GRANT EXECUTE ON [dbo].[usp_ReceiveResponses] TO [db_FieldTrials_App] AS [dbo]
GO
