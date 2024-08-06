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

ALTER TABLE [dbo].[TrialCatalog] ALTER COLUMN Archive BIT NOT NULL;

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'TrialCatalog' AND COLUMN_NAME ='ComplianceStatus' )
ALTER TABLE [dbo].[TrialCatalog] ADD ComplianceStatus varchar(50) NULL;

-- [SRRUser_Trial_Xref] work
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRRUser_Trial_Xref' AND COLUMN_NAME ='PrimarySRR' )
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD PrimarySRR BIT NULL;

UPDATE SRRUser_Trial_Xref
SET PrimarySRR = 0

ALTER TABLE [dbo].[SRRUser_Trial_Xref] ALTER COLUMN PrimarySRR BIT NOT NULL;
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_PrimarySRR] DEFAULT (0) FOR [PrimarySRR]
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





--TrialAttachment
CREATE TABLE [dbo].[TrialAttachment](
	[TrialAttachment_ID] [uniqueidentifier] NOT NULL, -- I'm thinking this is needed to ensure uniqueness
	[Trial_ID] [INT] NOT NULL,
	[Attachment] [varbinary](max) NULL,
	[AttachmentType_ID] INT NOT NULL,
	[Comment] [nvarchar](1000) NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_TrialAttachment] PRIMARY KEY CLUSTERED 
(
	[TrialAttachment_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[TrialAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialAttachment_Trial] FOREIGN KEY([Trial_ID])
REFERENCES [dbo].[TrialCatalog] ([Trial_ID])
GO
ALTER TABLE [dbo].[TrialAttachment] CHECK CONSTRAINT [FK_TrialAttachment_Trial]
GO


ALTER TABLE [dbo].[TrialAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialAttachment_AttachmentType] FOREIGN KEY([AttachmentType_ID])
REFERENCES [dbo].[AttachmentType] ([AttachmentType_ID])
GO
ALTER TABLE [dbo].[TrialAttachment] CHECK CONSTRAINT [FK_TrialAttachment_AttachmentType]
GO

ALTER TABLE [dbo].[TrialAttachment] ADD  CONSTRAINT [DF_TrialAttachment_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[TrialAttachment] ADD  CONSTRAINT [DF_TrialAttachment_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
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


