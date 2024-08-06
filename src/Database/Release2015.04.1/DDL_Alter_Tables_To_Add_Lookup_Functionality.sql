-- What Cathy/Victor need to do:
--Identify which questions have lookup values.  Let me know and I can update the table Questions
--Populate the table LookupMaster

USE REGFIELDTRIALS
GO

-- drop FK constraint to DatatTypeMaster table
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_WorkflowQuestion_DataTypesMaster]') AND parent_object_id = OBJECT_ID(N'[dbo].[WorkflowQuestion]'))
ALTER TABLE [dbo].[WorkflowQuestion] DROP CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster]
GO


-- Drop DataTypesMaster table
	IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_DataTypesMaster_UpdateDateTime]') AND type = 'D')
	BEGIN
	ALTER TABLE [dbo].[DataTypesMaster] DROP CONSTRAINT [DF_DataTypesMaster_UpdateDateTime]
	END

	GO

	IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_DataTypesMaster_IsDeleted]') AND type = 'D')
	BEGIN
	ALTER TABLE [dbo].[DataTypesMaster] DROP CONSTRAINT [DF_DataTypesMaster_IsDeleted]
	END

	GO

	USE [REGFIELDTRIALS]
	GO

	IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DataTypesMaster]') AND type in (N'U'))
	DROP TABLE [dbo].[DataTypesMaster]
	GO


-- Drop column
IF EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'WorkflowQuestion' AND COLUMN_NAME ='AcceptableDataType' )
ALTER TABLE [dbo].[WorkflowQuestion] DROP COLUMN AcceptableDataType;
GO

-- Add Column: 
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'Question' AND COLUMN_NAME ='IsLookup' )
ALTER TABLE [dbo].[Question] ADD IsLookup BIT ;
GO



CREATE TABLE [dbo].[LookupMaster](
	[Lookup_ID] [int] NOT NULL,
	[LookupName] [nvarchar](50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_LookupMaster_ID] PRIMARY KEY CLUSTERED 
(
	[Lookup_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[LookupMaster] ADD  CONSTRAINT [DF_LookupMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[LookupMaster] ADD  CONSTRAINT [DF_LookupMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

