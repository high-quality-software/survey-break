-- per daily meeting we decided to have default constraint on WorkflowComplete to eliminate ambiguity when/if there are NULL values in this column
-- gio 2/19/2015

USE [REGFIELDTRIALS]
GO

IF  NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_TrialProgress_WorkFlowComplete]') AND type = 'D')
BEGIN
	ALTER TABLE [dbo].[TrialProgress] ADD  CONSTRAINT [DF_TrialProgress_WorkFlowComplete]  DEFAULT ((0)) FOR [WorkFlowComplete]
END

UPDATE TrialProgress
SET WorkflowComplete = 0 
WHERE WorkflowComplete IS NULL AND IsDeleted = 0