USE REGFIELDTRIALS
GO

--DB_Version
CREATE TABLE [dbo].[DB_Version](
	[DB_Version_ID] [int] IDENTITY(1,1) NOT NULL,
	[DB_Version] [nvarchar](50) NOT NULL,
	[Comment] nvarchar(1000) NULL,
	[Active] BIT NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_DB_Version_ID] PRIMARY KEY CLUSTERED 
(
	[DB_Version_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[DB_Version] ADD  CONSTRAINT [DF_DB_Version_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[DB_Version] ADD  CONSTRAINT [DF_DB_Version_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

-- Insert 
INSERT INTO [DB_Version] ([DB_Version], [Comment], [Active], [UpdateUserID])
     VALUES ('RC 01', 'First stable version that will be applied to DEV and TEST environments', 1, 'JASPAR') 
GO



-- TrialCatalog work
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'TrialCatalog' AND COLUMN_NAME ='Archive' )
ALTER TABLE [dbo].[TrialCatalog] ADD Archive BIT NULL;
GO

UPDATE TrialCatalog
SET Archive = 0
GO

ALTER TABLE [dbo].[TrialCatalog] ALTER COLUMN Archive BIT NOT NULL;
GO

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'TrialCatalog' AND COLUMN_NAME ='ComplianceStatus' )
ALTER TABLE [dbo].[TrialCatalog] ADD ComplianceStatus varchar(50) NULL;
Go

-- [SRRUser_Trial_Xref] work
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRRUser_Trial_Xref' AND COLUMN_NAME ='PrimarySRR' )
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD PrimarySRR BIT NULL;
go

UPDATE SRRUser_Trial_Xref
SET PrimarySRR = 0
go

ALTER TABLE [dbo].[SRRUser_Trial_Xref] ALTER COLUMN PrimarySRR BIT NOT NULL;
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_PrimarySRR] DEFAULT (0) FOR [PrimarySRR]
GO

ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_IsDeleted] DEFAULT (0) FOR [IsDeleted]
GO

ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_UpdateDateTime] DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO


--TrialProgress
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'TrialProgress' AND COLUMN_NAME ='DueDate' )
ALTER TABLE [dbo].[TrialProgress] ADD DueDate DATETIME NULL;


--AttachmentType
CREATE TABLE [dbo].[AttachmentType](
	[AttachmentType_ID] [int] IDENTITY(1,1) NOT NULL,
	[AttachmentTypeName] [nvarchar](50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_AttachmentType_ID] PRIMARY KEY CLUSTERED 
(
	[AttachmentType_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttachmentType] ADD  CONSTRAINT [DF_AttachmentType_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[AttachmentType] ADD  CONSTRAINT [DF_AttachmentType_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

BEGIN TRAN
INSERT INTO [AttachmentType]  ([AttachmentTypeName], [UpdateUserID])
     VALUES ('JPG', 'JASPAR'), ('PDF', 'JASPAR'), ('GIF', 'JASPAR')
commit tran



--TrialWorkflowAttachment
CREATE TABLE [dbo].[TrialWorkflowAttachment](
	[Attachment_ID] [uniqueidentifier] NOT NULL, -- I'm thinking this is needed to ensure uniqueness
	[Trial_ID] [INT] NOT NULL,	-- Natural Key is Trail_ID + Workflow_ID
	[Workflow_ID] [INT] NOT NULL,
	[AttachmentName] nvarchar(50) NOT NULL, -- to be displayed on 
	[Attachment] [varbinary](max) NULL,
	[AttachmentType_ID] INT NOT NULL,
	[Comment] [nvarchar](1000) NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_TrialWorkflowAttachment] PRIMARY KEY CLUSTERED 
(
	[Attachment_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[TrialWorkflowAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialWorkflowAttachment_Trial] FOREIGN KEY([Trial_ID])
REFERENCES [dbo].[TrialCatalog] ([Trial_ID])
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] CHECK CONSTRAINT [FK_TrialWorkflowAttachment_Trial]
GO

ALTER TABLE [dbo].[TrialWorkflowAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialWorkflowAttachment_Workflow] FOREIGN KEY([Workflow_ID])
REFERENCES [dbo].[Workflow] ([Workflow_ID])
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] CHECK CONSTRAINT [FK_TrialWorkflowAttachment_Workflow]
GO


ALTER TABLE [dbo].[TrialWorkflowAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialWorkflowAttachment_AttachmentType] FOREIGN KEY([AttachmentType_ID])
REFERENCES [dbo].[AttachmentType] ([AttachmentType_ID])
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] CHECK CONSTRAINT [FK_TrialWorkflowAttachment_AttachmentType]
GO

ALTER TABLE [dbo].[TrialWorkflowAttachment] ADD  CONSTRAINT [DF_TrialWorkflowAttachment_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[TrialWorkflowAttachment] ADD  CONSTRAINT [DF_TrialWorkflowAttachment_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

CREATE NONCLUSTERED INDEX idx_TrialID_WorkflowID ON TrialWorkflowAttachment (Trial_ID, Workflow_ID)
   INCLUDE (AttachmentName, AttachmentType_ID )
GO



--SRR_EvalResponse
USE [REGFIELDTRIALS]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SRR_EvalResponse](
	[EvalResponse_ID] [int] IDENTITY(1,1) NOT NULL,
	[SRR_ID] [int] NOT NULL,
	[YearsExperience_SRR] INT NULL, 
	[YearsExperience_SiteLeadSRR] INT NULL,
	[NumFieldsReponsibleFor] DECIMAL (12,2) NULL,
	[NumAcresSRRManages] DECIMAL (12,2) NULL,
	[BackupSRRIdentified] BIT NULL,
	[BackupSRR_ID] INT NULL,
	[BackupSRRInformed] BIT NULL,
	[LastTrainingDate] DATETIME NULL,
	[ComplianceQuestion1] BIT NULL,
	[ComplianceQuestion2] BIT NULL,
	[ComplianceQuestion3] BIT NULL,
	[ComplianceQuestion4] BIT NULL,
	[ComplianceQuestion5] BIT NULL,
	[ComplianceQuestion6] BIT NULL,
	[Flagged] BIT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_SRR_EvalResponse_ID] PRIMARY KEY CLUSTERED 
(
	[EvalResponse_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[SRR_EvalResponse] ADD  CONSTRAINT [DF_SRR_EvalResponse_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[SRR_EvalResponse] ADD  CONSTRAINT [DF_SRR_EvalResponse_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

