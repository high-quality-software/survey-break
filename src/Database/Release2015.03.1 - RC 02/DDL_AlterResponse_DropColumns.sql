use REGFIELDTRIALS
go

-- Drop FK constraints
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Response_Trial]') AND parent_object_id = OBJECT_ID(N'[dbo].[Response]'))
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_Trial]
GO

IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Response_Workflow]') AND parent_object_id = OBJECT_ID(N'[dbo].[Response]'))
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_Workflow]
GO


-- Drop columns
IF EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'Response' AND COLUMN_NAME ='Workflow_ID' )
ALTER TABLE [dbo].[Response] DROP COLUMN Workflow_ID;

IF EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'Response' AND COLUMN_NAME ='Trial_ID' )
ALTER TABLE [dbo].[Response] DROP COLUMN Trial_ID;