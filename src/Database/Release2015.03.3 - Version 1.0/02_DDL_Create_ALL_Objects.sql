/****** Object:  Table [dbo].[TraitMaster]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraitMaster](
	[Trait_ID] [int] IDENTITY(1,1) NOT NULL,
	[TraitName] [nvarchar](100) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_TraitMaster_ID] PRIMARY KEY CLUSTERED 
(
	[Trait_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Workflow]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Workflow](
	[Workflow_ID] [int] IDENTITY(1,1) NOT NULL,
	[WorkflowName] [nvarchar](50) NOT NULL,
	[WorkflowOrder] [int] NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Workflow_ID] PRIMARY KEY CLUSTERED 
(
	[Workflow_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttachmentType]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
/****** Object:  Table [dbo].[UserType]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserType](
	[UserType_ID] [int] IDENTITY(1,1) NOT NULL,
	[UserTypeName] [nvarchar](50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_UserType_ID] PRIMARY KEY CLUSTERED 
(
	[UserType_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SiteMaster]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SiteMaster](
	[Site_ID] [int] IDENTITY(1,1) NOT NULL,
	[SiteName] [nvarchar](100) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_SiteMaster_ID] PRIMARY KEY CLUSTERED 
(
	[Site_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[Question_ID] [int] NOT NULL,
	[QuestionName] [nvarchar](100) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[QuestionText] [nvarchar](1000) NULL,
 CONSTRAINT [PK_Question_ID] PRIMARY KEY CLUSTERED 
(
	[Question_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DB_Version]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DB_Version](
	[DB_Version_ID] [int] IDENTITY(1,1) NOT NULL,
	[DB_Version] [nvarchar](50) NOT NULL,
	[Comment] [nvarchar](1000) NULL,
	[Active] [bit] NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_DB_Version_ID] PRIMARY KEY CLUSTERED 
(
	[DB_Version_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DataTypesMaster]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DataTypesMaster](
	[DataType_ID] [int] IDENTITY(1,1) NOT NULL,
	[DataType] [nvarchar](50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_DataTypesMaster_ID] PRIMARY KEY CLUSTERED 
(
	[DataType_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Crop]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Crop](
	[Crop_ID] [int] IDENTITY(1,1) NOT NULL,
	[CropName] [nvarchar](50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Crop_ID] PRIMARY KEY CLUSTERED 
(
	[Crop_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChemicalType]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChemicalType](
	[ChemicalType_ID] [int] IDENTITY(1,1) NOT NULL,
	[ChemicalTypeName] [nvarchar](50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_ChemicalMasterType_ID] PRIMARY KEY CLUSTERED 
(
	[ChemicalType_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChemicalMaster]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChemicalMaster](
	[Chemical_ID] [int] IDENTITY(1,1) NOT NULL,
	[ChemicalName] [nvarchar](100) NOT NULL,
	[ChemicalType_ID] [int] NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_ChemicalMaster_ID] PRIMARY KEY CLUSTERED 
(
	[Chemical_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 03/30/2015 11:33:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[User](
	[User_ID] [int] IDENTITY(1,1) NOT NULL,
	[UserType_ID] [int] NOT NULL,
	[FName] [nvarchar](50) NOT NULL,
	[LName] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NULL,
	[OfficeNumber] [varchar](25) NULL,
	[CellNumber] [varchar](25) NULL,
	[SiteLocation] [nvarchar](100) NULL,
	[Manager_ID] [int] NULL,
	[Internal] [bit] NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[UserAlias] [nvarchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[User_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
CREATE UNIQUE NONCLUSTERED INDEX [idx_User_UserAlias] ON [dbo].[User] 
(
	[UserAlias] ASC,
	[IsDeleted] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WorkflowQuestion]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkflowQuestion](
	[WorkflowQuestion_ID] [int] IDENTITY(1,1) NOT NULL,
	[Workflow_ID] [int] NOT NULL,
	[Question_ID] [int] NOT NULL,
	[AcceptableAnswers] [nvarchar](100) NULL,
	[AcceptableLowRange] [int] NULL,
	[AcceptableHighRange] [int] NULL,
	[NotAcceptableAnswers] [nvarchar](100) NULL,
	[NotAcceptableLowRange] [int] NULL,
	[NotAcceptableHighRange] [int] NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[AcceptableDataType] [int] NULL,
 CONSTRAINT [PK_WorkflowQuestion_ID] PRIMARY KEY CLUSTERED 
(
	[WorkflowQuestion_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [UNQ_WorkflowID_QuestionID_IsDeleted] ON [dbo].[WorkflowQuestion] 
(
	[Workflow_ID] ASC,
	[Question_ID] ASC,
	[IsDeleted] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRR_EvalResponse]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRR_EvalResponse](
	[EvalResponse_ID] [int] IDENTITY(1,1) NOT NULL,
	[SRR_ID] [int] NOT NULL,
	[YearsExperience_SRR] [int] NULL,
	[YearsExperience_SiteLeadSRR] [int] NULL,
	[NumFieldsReponsibleFor] [int] NULL,
	[NumAcresSRRManages] [decimal](12, 2) NULL,
	[BackupSRRIdentified] [bit] NULL,
	[BackupSRR_ID] [int] NULL,
	[BackupSRRInformed] [bit] NULL,
	[ComplianceQuestion1] [bit] NULL,
	[ComplianceQuestion2] [bit] NULL,
	[ComplianceQuestion3] [bit] NULL,
	[ComplianceQuestion4] [bit] NULL,
	[ComplianceQuestion5] [bit] NULL,
	[ComplianceQuestion6] [bit] NULL,
	[Flagged] [bit] NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[CompletedYear] [int] NULL,
	[ComplianceResponse1] [nvarchar](1000) NULL,
	[ComplianceResponse2] [nvarchar](1000) NULL,
	[ComplianceResponse3] [nvarchar](1000) NULL,
	[ComplianceResponse4] [nvarchar](1000) NULL,
	[ComplianceResponse5] [nvarchar](1000) NULL,
	[ComplianceResponse6] [nvarchar](1000) NULL,
	[LastTrainingYear] [int] NULL,
 CONSTRAINT [PK_SRR_EvalResponse_ID] PRIMARY KEY CLUSTERED 
(
	[EvalResponse_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrialCatalog]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TrialCatalog](
	[Trial_ID] [int] NOT NULL,
	[SRRLeadUser_ID] [int] NOT NULL,
	[IRPUser_ID] [int] NULL,
	[Crop_ID] [int] NOT NULL,
	[Trait_ID] [int] NULL,
	[Site_ID] [int] NULL,
	[TrialYear] [int] NULL,
	[AgencyApprovalNo] [nvarchar](50) NULL,
	[Name] [nvarchar](50) NOT NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Zip] [nvarchar](16) NULL,
	[County] [nvarchar](50) NULL,
	[FarmName] [nvarchar](100) NULL,
	[Internal] [bit] NULL,
	[GPSLat1] [decimal](18, 12) NULL,
	[GPSLong1] [decimal](18, 12) NULL,
	[GPSLat2] [decimal](18, 12) NULL,
	[GPSLong2] [decimal](18, 12) NULL,
	[GPSLat3] [decimal](18, 12) NULL,
	[GPSLong3] [decimal](18, 12) NULL,
	[GPSLat4] [decimal](18, 12) NULL,
	[GPSLong4] [decimal](18, 12) NULL,
	[Approved_Area] [decimal](18, 12) NULL,
	[Approved_Area_UOM] [int] NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[Archive] [bit] NOT NULL,
	[ComplianceStatus] [varchar](50) NULL,
 CONSTRAINT [PK_Trial_ID] PRIMARY KEY CLUSTERED 
(
	[Trial_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
CREATE NONCLUSTERED INDEX [idxSRRLeadUser_ID] ON [dbo].[TrialCatalog] 
(
	[SRRLeadUser_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRRUser_Trial_Xref]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRRUser_Trial_Xref](
	[SRRUser_Trial_Xref] [int] IDENTITY(1,1) NOT NULL,
	[SRRUser_ID] [int] NOT NULL,
	[Trial_ID] [int] NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[PrimarySRR] [bit] NOT NULL,
 CONSTRAINT [PK_Batch_Pesticide_Xref] PRIMARY KEY CLUSTERED 
(
	[SRRUser_Trial_Xref] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = ON, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [idx_SRRUserID_TrialID] ON [dbo].[SRRUser_Trial_Xref] 
(
	[SRRUser_ID] ASC,
	[Trial_ID] ASC,
	[IsDeleted] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = ON, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrialWorkflowAttachment]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TrialWorkflowAttachment](
	[Attachment_ID] [uniqueidentifier] NOT NULL,
	[Trial_ID] [int] NOT NULL,
	[Workflow_ID] [int] NOT NULL,
	[AttachmentName] [nvarchar](50) NOT NULL,
	[Attachment] [varbinary](max) NULL,
	[AttachmentType_ID] [int] NOT NULL,
	[Comment] [nvarchar](1000) NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_TrialWorkflowAttachment] PRIMARY KEY CLUSTERED 
(
	[Attachment_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = ON, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
CREATE NONCLUSTERED INDEX [idx_TrialID_WorkflowID] ON [dbo].[TrialWorkflowAttachment] 
(
	[Trial_ID] ASC,
	[Workflow_ID] ASC
)
INCLUDE ( [AttachmentName],
[AttachmentType_ID]) WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = ON, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrialProgress]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrialProgress](
	[TrialProgress_ID] [int] IDENTITY(1,1) NOT NULL,
	[Trial_ID] [int] NOT NULL,
	[SRRUser_ID] [int] NOT NULL,
	[Workflow_ID] [int] NULL,
	[WorkflowComplete] [bit] NULL,
	[WorkflowCompleteDate] [datetime] NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[DueDate] [datetime] NULL,
 CONSTRAINT [PK_TrialProgress_ID] PRIMARY KEY CLUSTERED 
(
	[TrialProgress_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Response]    Script Date: 03/30/2015 11:33:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Response](
	[Response_ID] [uniqueidentifier] NOT NULL,
	[Question_ID] [int] NOT NULL,
	[TrialProgress_ID] [int] NOT NULL,
	[ResponseValue] [nvarchar](100) NOT NULL,
	[FollowupRequired] [bit] NULL,
	[VerifiedDate] [datetime] NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Response] PRIMARY KEY CLUSTERED 
(
	[Response_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[v_UserTrials]    Script Date: 03/30/2015 11:33:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[v_UserTrials]
AS
-- Created by gio on 3/9/2015.   View will identify all trials associated to a user, along with User's role.
-- Modified by gio on 3/12/2015 to remove the possibility of dups (by Trial_ID + Workflow_ID) from being returned
--
-- NOTE: This view will return lots of rows, so its important to include useralias or user_id in WHERE predicate
-- USAGE: UserAlias = 'NTUserID' OR [User_ID] = 123 (User's PK) 

	-- 1. Select ALL trials if user is Admin
	SELECT	t.Trial_ID,
			t.Name,
			0 AS PrimarySRR, --srr_xref.PrimarySRR,
			'Admin' AS UserTypeName, --ut.UserTypeName,
			u.[User_ID],
			u.LName,
			u.FName,
			u.UserAlias,
			4 AS UserType_ID
	FROM TrialCatalog t
		CROSS JOIN [User] u 
	WHERE t.IsDeleted = 0 
		AND u.IsDeleted = 0
		AND u.UserType_ID = (SELECT UserType_ID FROM UserType WHERE UserTypeName = 'Admin')

	UNION ALL

	-- 2. SELECT all trials associated to SRR
	SELECT	t.Trial_ID,
			t.Name,
			srr_xref.PrimarySRR,
			ut.UserTypeName,
			u.[User_ID],
			u.LName,
			u.FName,
			u.UserAlias,
			ut.UserType_ID
	FROM TrialCatalog t
		INNER JOIN SRRUser_Trial_Xref srr_xref on srr_xref.Trial_ID = T.Trial_ID AND srr_xref.IsDeleted = 0 
		INNER JOIN [User] u on u.[User_ID] = srr_xref.SRRUser_ID and u.IsDeleted = 0
		INNER JOIN UserType ut ON ut.UserType_ID = u.UserType_ID and ut.IsDeleted = 0
	WHERE t.IsDeleted = 0 
		AND ut.UserTypeName <> 'Admin'
		AND u.[User_ID] NOT IN (SELECT [USER_ID] FROM [User] WHERE IsDeleted = 0 AND UserType_ID = (SELECT UserType_ID FROM UserType WHERE UserTypeName = 'Admin')) -- 3/12/2015: Do NOT include admins
	
	UNION ALL

	-- 3. SELECT all trials associated to LeadSRR 
	SELECT  t.Trial_ID,
			t.Name,
			0, -- PrimarySRR
			'LeadSRR', --UserTypeName
			u.[User_ID],
			u.LName,
			u.FName,
			u.UserAlias,
			999
	FROM TrialCatalog t
		INNER JOIN [User] u ON u.[User_ID] = t.SRRLeadUser_ID AND u.IsDeleted = 0 
		LEFT OUTER JOIN SRRUser_Trial_Xref srr_xref on srr_xref.Trial_ID = t.Trial_ID AND srr_xref.SRRUser_ID = u.[User_ID] AND srr_xref.IsDeleted = 0 
	WHERE t.IsDeleted = 0
		AND u.[User_ID] NOT IN (SELECT [USER_ID] FROM [User] WHERE IsDeleted = 0 AND UserType_ID = (SELECT UserType_ID FROM UserType WHERE UserTypeName = 'Admin')) -- 3/12/2015: Do NOT include admins
		AND srr_xref.SRRUser_Trial_Xref IS NULL	 -- 3/12/2015 Do NOT include uses assigned to trials in SRRUser_Trial_Xref
GO
/****** Object:  View [dbo].[v_WorkflowQuestions]    Script Date: 03/30/2015 11:33:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_WorkflowQuestions]
-- Created by gio on 2/11/2015 to capture trial, workflow and questions for forms that have been filled out
AS
SELECT t.Name as TrialName,
	c.CropName,
	u.FName AS SRR_FName,
	u.LName AS SRR_LName,
	mgr.LName AS Mgr_LName,
	mgr.FName AS Mgr_FName,
	w.WorkflowName,
	w.WorkflowOrder,
	q.QuestionName,
	r.ResponseValue,
	r.[User_ID], -- User who entered data into this form.
	r.FollowupRequired,
	tp.WorkflowComplete,
	tp.WorkflowCompleteDate
FROM TrialCatalog t 
	INNER JOIN TrialProgress tp on tp.Trial_ID = t.Trial_ID and tp.isdeleted = 0
	INNER JOIN Workflow w on w.Workflow_ID = tp.Workflow_ID and w.IsDeleted = 0 	
	INNER JOIN WorkflowQuestion wq on wq.Workflow_ID = w.Workflow_ID and wq.IsDeleted = 0 
	INNER JOIN Question q on q.Question_ID = wq.Question_ID and q.IsDeleted = 0 
	INNER JOIN Response r on r.Workflow_ID = tp.Workflow_ID
			AND r.Trial_ID = tp.Trial_ID
			AND r.Question_ID = wq.Question_ID
			AND r.IsDeleted = 0 
	INNER JOIN Crop c ON c.Crop_ID = t.Crop_ID AND c.IsDeleted = 0 	
	INNER JOIN [User] u ON u.User_ID = t.SRRUser_ID AND u.IsDeleted = 0 
	LEFT OUTER JOIN [User] mgr on mgr.User_ID = u.Manager_ID AND U.IsDeleted = 0 
WHERE t.IsDeleted = 0
--ORDER BY t.Name, w.WorkflowOrder
GO
/****** Object:  View [dbo].[v_TrialWorkflowResponse_Summary]    Script Date: 03/30/2015 11:33:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[v_TrialWorkflowResponse_Summary]
AS
--Created by gio on 3/9/2015 to create view that connects Trial, Workflow, Questions and responses.   Comprehensive view.
-- Modified by gio on 3/23/2015 to add Trial_ID column per Cathy Buenzow
	SELECT TP.TrialProgress_ID,
		t.Trial_ID,
		t.Name as TrialName,
		t.TrialYear,
		t.Internal,
		t.FarmName,
		c.CropName,
		tm.TraitName, 
		sm.SiteName,
		w.WorkflowName,
		w.WorkflowOrder,
		tp.[SRRUser_ID], -- User who entered data into this form.
		LeadSRR.LName as LeadSRR_LName,
		LeadSRR.FName as LeadSRR_FName,
		u.FName AS SRR_FName,
		u.LName AS SRR_LName,
		tp.WorkflowComplete,
		tp.WorkflowCompleteDate,
		tp.DueDate,
		mgr.LName AS Mgr_LName,
		mgr.FName AS Mgr_FName,
		q.QuestionName,
		r.Response_ID,
		r.ResponseValue,
		r.FollowupRequired
	FROM TrialCatalog t 
		INNER JOIN TrialProgress tp on tp.Trial_ID = t.Trial_ID and tp.isdeleted = 0
		INNER JOIN Workflow w on w.Workflow_ID = tp.Workflow_ID and w.IsDeleted = 0 	
		INNER JOIN WorkflowQuestion wq on wq.Workflow_ID = w.Workflow_ID and wq.IsDeleted = 0 
		INNER JOIN Question q on q.Question_ID = wq.Question_ID and q.IsDeleted = 0 
		INNER JOIN Response r on r.TrialProgress_ID = tp.TrialProgress_ID 
			AND r.Question_ID = wq.Question_ID
			AND r.IsDeleted = 0 
		INNER JOIN Crop c ON c.Crop_ID = t.Crop_ID AND c.IsDeleted = 0 	
		INNER JOIN [User] u ON u.[User_ID] = tp.SRRUser_ID and u.IsDeleted = 0	-- join to user on the TrialProgress table, ie person who is working on this particular Trial + Workflow
		LEFT OUTER JOIN [User] mgr on mgr.[User_ID] = u.Manager_ID AND mgr.IsDeleted = 0 
		LEFT OUTER JOIN [User] LeadSRR ON LeadSRR.User_ID = T.SRRLeadUser_ID AND Leadsrr.IsDeleted = 0 
		LEFT OUTER JOIN TraitMaster tm on tm.Trait_ID = t.Trait_ID and tm.IsDeleted = 0
		LEFT OUTER JOIN SiteMaster sm on sm.Site_ID = t.Site_ID and sm.IsDeleted = 0
	WHERE t.IsDeleted = 0
GO
/****** Object:  StoredProcedure [dbo].[usp_ReceiveResponses]    Script Date: 03/30/2015 11:33:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Hernan Casado (HCASA)
-- Create date: Feb 12, 2015
-- Description: take all data from a form and save into database
-- Modified by HCASA on 3/3/2015 - add duaDate to trial + workflow combination (trialprogress table)
-- Modified by HCASA on 3/5/2015 - fix changes on Response and TrialProgress tables (Trial_ID and Workflow_ID fields)
CREATE PROCEDURE [dbo].[usp_ReceiveResponses]
(
	@trialID int,
	@workflowID int,
	@locked bit,
	@dueDate datetime = null,
	@SRRUserID int,
	@updateUserID nvarchar(500),
	@responses xml
)
AS
BEGIN
 
DECLARE @ipad AS TABLE (
	[Workflow_ID] [int] NOT NULL,
	[Trial_ID] [int] NOT NULL,
	[Question_ID] [int] NOT NULL,
	[ResponseValue] [nvarchar](100) NOT NULL,
	[FollowupRequired] [bit] NULL,
	[VerifiedDate] [datetime] NULL)
    
INSERT INTO @ipad (Workflow_ID, Trial_ID, Question_ID, [ResponseValue])
SELECT 
	@workflowID as Workflow_ID,
	@trialID as Trial_ID, 
	Child.value('(QuestionID)[1]', 'varchar(200)') as Question_ID,
	Child.value('(ResponseValue)[1]', 'varchar(200)') as ResponseValue
	
FROM 
	@responses.nodes('/Responses/Response') as N(Child)

--update previous trial progress record
UPDATE TrialProgress
SET IsDeleted = 1, UpdateDateTime = getdate(), UpdateUserID = @updateUserID
WHERE
	Trial_ID = @trialID
	AND Workflow_ID = @workflowID
	AND IsDeleted = 0

--update all previous responses for a workflow in a trial, this take in care when a workflow change questions (name and quantity)
UPDATE Response
SET Response.IsDeleted = 1, Response.UpdateDateTime = getdate(), Response.UpdateUserID = @updateUserID
FROM Response INNER JOIN TrialProgress ON Response.TrialProgress_ID = TrialProgress.TrialProgress_ID
WHERE 
	TrialProgress.Trial_ID = @trialID AND
	TrialProgress.Workflow_ID = @workflowID AND
	TrialProgress.IsDeleted = 0 AND	
	Response.IsDeleted = 0
	
DECLARE @workflowCompleteDate datetime
IF @locked = 1 
BEGIN
	select @workflowCompleteDate = getdate()
END

-- insert trial progress
INSERT INTO TrialProgress (Trial_ID, SRRUser_ID, Workflow_ID, WorkflowComplete, WorkflowCompleteDate, DueDate, UpdateUserID)
VALUES (@trialID, @SRRUserID, @workflowID, @locked, @workflowCompleteDate, @dueDate, @updateUserID)

DECLARE @TrialProgress_ID INT
SELECT @TrialProgress_ID = SCOPE_IDENTITY()

-- insert new responses
INSERT INTO Response (Response_ID, TrialProgress_ID, Question_ID, ResponseValue, UpdateUserID)
SELECT NEWID(), @TrialProgress_ID, Question_ID, ResponseValue, @updateUserID
FROM @ipad


END
GO
/****** Object:  StoredProcedure [dbo].[usp_DeleteTrialProgress_Response]    Script Date: 03/30/2015 11:33:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  PROCEDURE [dbo].[usp_DeleteTrialProgress_Response]
-- =============================================
-- Author: John Sparks    
-- Create date: 3/23/2015 
-- Used to delete TrialProgress and Response data for trial_ID argument
-- FUTURE: pass in argument Userid to delete only those responses for that UserID.  Will have to check if value is NULL and have separate delete statements.
-- FUTURE: pass in argument to hard delete (DELETE) or soft-delete rows (UPDATE SET isDeleted = 1)
-- =============================================
/* INVOKE Stored Proc BY NAME -- TESTING data

	@arg_Trial_ID INT,
	@arg_Userid  varchar(50) = NULL

	EXECUTE @RC = [FIDO].[dbo].[usp_DeleteTrialProgress_Response] 
	   @arg_Trial_ID
	  ,@arg_Userid
	GO
*/

(
	@arg_Trial_ID INT,
	@arg_Userid  varchar(50) = NULL
) 
AS

SET NOCOUNT ON;

BEGIN
     BEGIN TRY
		BEGIN TRAN tran_Trial_Reponses
			--Delete responses
			DELETE FROM Response
			WHERE IsDeleted = 0 AND  TrialProgress_ID in 
				(  
				 SELECT TrialProgress_ID 
				 FROM trialprogress 
				 WHERE Trial_ID IN 
					(
					-- Trials from Test 1 thru Test 100 & Test105
					SELECT [Trial_ID]
					FROM [REGFIELDTRIALS].[dbo].[TrialCatalog]
					WHERE Trial_ID = @arg_Trial_ID 
					)
				)

			--Delete TrialProgress rows
			DELETE FROM trialprogress 
			WHERE IsDeleted = 0 AND Trial_ID IN 
				(
				-- Trials from Test 1 thru Test 100 & Test105
				SELECT [Trial_ID]
				FROM [REGFIELDTRIALS].[dbo].[TrialCatalog]
				WHERE Trial_ID = @arg_Trial_ID
				)	
	     COMMIT TRAN tran_Trial_Reponses
     END TRY 
   
     BEGIN CATCH
			ROLLBACK TRAN tran_Trial_Reponses
            PRINT 'ERROR Caught: ' + ERROR_MESSAGE() 
            RETURN - 1   /* return error */
     END CATCH        

     --SELECT @@TRANCOUNT
     SET NOCOUNT OFF;
	 RETURN 0   /* return success */

END
GO
/****** Object:  Default [DF_TraitMaster_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[TraitMaster] ADD  CONSTRAINT [DF_TraitMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_TraitMaster_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[TraitMaster] ADD  CONSTRAINT [DF_TraitMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_Workflow_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[Workflow] ADD  CONSTRAINT [DF_Workflow_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_Workflow_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[Workflow] ADD  CONSTRAINT [DF_Workflow_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_AttachmentType_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[AttachmentType] ADD  CONSTRAINT [DF_AttachmentType_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_AttachmentType_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[AttachmentType] ADD  CONSTRAINT [DF_AttachmentType_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_UserType_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[UserType] ADD  CONSTRAINT [DF_UserType_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_UserType_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[UserType] ADD  CONSTRAINT [DF_UserType_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_SiteMaster_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[SiteMaster] ADD  CONSTRAINT [DF_SiteMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_SiteMaster_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[SiteMaster] ADD  CONSTRAINT [DF_SiteMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_Question_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_Question_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_DB_Version_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[DB_Version] ADD  CONSTRAINT [DF_DB_Version_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_DB_Version_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[DB_Version] ADD  CONSTRAINT [DF_DB_Version_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_DataTypesMaster_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[DataTypesMaster] ADD  CONSTRAINT [DF_DataTypesMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_DataTypesMaster_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[DataTypesMaster] ADD  CONSTRAINT [DF_DataTypesMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_Crop_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[Crop] ADD  CONSTRAINT [DF_Crop_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_Crop_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[Crop] ADD  CONSTRAINT [DF_Crop_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_ChemicalType_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[ChemicalType] ADD  CONSTRAINT [DF_ChemicalType_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_ChemicalType_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[ChemicalType] ADD  CONSTRAINT [DF_ChemicalType_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_ChemicalMaster_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[ChemicalMaster] ADD  CONSTRAINT [DF_ChemicalMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_ChemicalMaster_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[ChemicalMaster] ADD  CONSTRAINT [DF_ChemicalMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_User_UpdateDateTime]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_User_IsDeleted]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_WorkflowQuestion_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[WorkflowQuestion] ADD  CONSTRAINT [DF_WorkflowQuestion_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_WorkflowQuestion_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[WorkflowQuestion] ADD  CONSTRAINT [DF_WorkflowQuestion_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_SRR_EvalResponse_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRR_EvalResponse] ADD  CONSTRAINT [DF_SRR_EvalResponse_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_SRR_EvalResponse_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRR_EvalResponse] ADD  CONSTRAINT [DF_SRR_EvalResponse_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_TrialCatalog_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog] ADD  CONSTRAINT [DF_TrialCatalog_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_TrialCatalog_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog] ADD  CONSTRAINT [DF_TrialCatalog_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_SRRUser_Trial_Xref_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_SRRUser_Trial_Xref_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_SRRUser_Trial_Xref_PrimarySRR]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref] ADD  CONSTRAINT [DF_SRRUser_Trial_Xref_PrimarySRR]  DEFAULT ((0)) FOR [PrimarySRR]
GO
/****** Object:  Default [DF_TrialWorkflowAttachment_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment] ADD  CONSTRAINT [DF_TrialWorkflowAttachment_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_TrialWorkflowAttachment_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment] ADD  CONSTRAINT [DF_TrialWorkflowAttachment_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_TrialProgress_WorkFlowComplete]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialProgress] ADD  CONSTRAINT [DF_TrialProgress_WorkFlowComplete]  DEFAULT ((0)) FOR [WorkflowComplete]
GO
/****** Object:  Default [DF_TrialProgress_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialProgress] ADD  CONSTRAINT [DF_TrialProgress_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_TrialProgress_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialProgress] ADD  CONSTRAINT [DF_TrialProgress_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  Default [DF_Response_UpdateDateTime]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[Response] ADD  CONSTRAINT [DF_Response_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO
/****** Object:  Default [DF_Response_IsDeleted]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[Response] ADD  CONSTRAINT [DF_Response_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  ForeignKey [FK_ChemicalMaster_ChemicalType]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[ChemicalMaster]  WITH CHECK ADD  CONSTRAINT [FK_ChemicalMaster_ChemicalType] FOREIGN KEY([ChemicalType_ID])
REFERENCES [dbo].[ChemicalType] ([ChemicalType_ID])
GO
ALTER TABLE [dbo].[ChemicalMaster] CHECK CONSTRAINT [FK_ChemicalMaster_ChemicalType]
GO
/****** Object:  ForeignKey [FK_User_Manager]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Manager] FOREIGN KEY([Manager_ID])
REFERENCES [dbo].[User] ([User_ID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Manager]
GO
/****** Object:  ForeignKey [FK_User_UserType]    Script Date: 03/30/2015 11:33:36 ******/
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_UserType] FOREIGN KEY([UserType_ID])
REFERENCES [dbo].[UserType] ([UserType_ID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_UserType]
GO
/****** Object:  ForeignKey [FK_WorkflowQuestion_DataTypesMaster]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[WorkflowQuestion]  WITH CHECK ADD  CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster] FOREIGN KEY([AcceptableDataType])
REFERENCES [dbo].[DataTypesMaster] ([DataType_ID])
GO
ALTER TABLE [dbo].[WorkflowQuestion] CHECK CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster]
GO
/****** Object:  ForeignKey [FK_WorkflowQuestion_Question]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[WorkflowQuestion]  WITH CHECK ADD  CONSTRAINT [FK_WorkflowQuestion_Question] FOREIGN KEY([Question_ID])
REFERENCES [dbo].[Question] ([Question_ID])
GO
ALTER TABLE [dbo].[WorkflowQuestion] CHECK CONSTRAINT [FK_WorkflowQuestion_Question]
GO
/****** Object:  ForeignKey [FK_WorkflowQuestion_Workflow]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[WorkflowQuestion]  WITH CHECK ADD  CONSTRAINT [FK_WorkflowQuestion_Workflow] FOREIGN KEY([Workflow_ID])
REFERENCES [dbo].[Workflow] ([Workflow_ID])
GO
ALTER TABLE [dbo].[WorkflowQuestion] CHECK CONSTRAINT [FK_WorkflowQuestion_Workflow]
GO
/****** Object:  ForeignKey [FK_SRR_EvalResponse_User]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRR_EvalResponse]  WITH CHECK ADD  CONSTRAINT [FK_SRR_EvalResponse_User] FOREIGN KEY([SRR_ID])
REFERENCES [dbo].[User] ([User_ID])
GO
ALTER TABLE [dbo].[SRR_EvalResponse] CHECK CONSTRAINT [FK_SRR_EvalResponse_User]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_Crop]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_Crop] FOREIGN KEY([Crop_ID])
REFERENCES [dbo].[Crop] ([Crop_ID])
GO
ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_Crop]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_SiteMaster]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_SiteMaster] FOREIGN KEY([Site_ID])
REFERENCES [dbo].[SiteMaster] ([Site_ID])
GO
ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_SiteMaster]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_TraitMaster]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_TraitMaster] FOREIGN KEY([Trait_ID])
REFERENCES [dbo].[TraitMaster] ([Trait_ID])
GO
ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_TraitMaster]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_UserIRP]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_UserIRP] FOREIGN KEY([IRPUser_ID])
REFERENCES [dbo].[User] ([User_ID])
GO
ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_UserIRP]
GO
/****** Object:  ForeignKey [FK_TrialCatalog_UserSRR]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialCatalog]  WITH CHECK ADD  CONSTRAINT [FK_TrialCatalog_UserSRR] FOREIGN KEY([SRRLeadUser_ID])
REFERENCES [dbo].[User] ([User_ID])
GO
ALTER TABLE [dbo].[TrialCatalog] CHECK CONSTRAINT [FK_TrialCatalog_UserSRR]
GO
/****** Object:  ForeignKey [FK_SRRUserTrial_Trial]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref]  WITH CHECK ADD  CONSTRAINT [FK_SRRUserTrial_Trial] FOREIGN KEY([Trial_ID])
REFERENCES [dbo].[TrialCatalog] ([Trial_ID])
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] CHECK CONSTRAINT [FK_SRRUserTrial_Trial]
GO
/****** Object:  ForeignKey [FK_SRRUserTrial_User]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[SRRUser_Trial_Xref]  WITH CHECK ADD  CONSTRAINT [FK_SRRUserTrial_User] FOREIGN KEY([SRRUser_ID])
REFERENCES [dbo].[User] ([User_ID])
GO
ALTER TABLE [dbo].[SRRUser_Trial_Xref] CHECK CONSTRAINT [FK_SRRUserTrial_User]
GO
/****** Object:  ForeignKey [FK_TrialWorkflowAttachment_AttachmentType]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialWorkflowAttachment_AttachmentType] FOREIGN KEY([AttachmentType_ID])
REFERENCES [dbo].[AttachmentType] ([AttachmentType_ID])
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] CHECK CONSTRAINT [FK_TrialWorkflowAttachment_AttachmentType]
GO
/****** Object:  ForeignKey [FK_TrialWorkflowAttachment_Trial]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialWorkflowAttachment_Trial] FOREIGN KEY([Trial_ID])
REFERENCES [dbo].[TrialCatalog] ([Trial_ID])
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] CHECK CONSTRAINT [FK_TrialWorkflowAttachment_Trial]
GO
/****** Object:  ForeignKey [FK_TrialWorkflowAttachment_Workflow]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialWorkflowAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TrialWorkflowAttachment_Workflow] FOREIGN KEY([Workflow_ID])
REFERENCES [dbo].[Workflow] ([Workflow_ID])
GO
ALTER TABLE [dbo].[TrialWorkflowAttachment] CHECK CONSTRAINT [FK_TrialWorkflowAttachment_Workflow]
GO
/****** Object:  ForeignKey [FK_TrialProgress_TrialCatalog]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialProgress]  WITH CHECK ADD  CONSTRAINT [FK_TrialProgress_TrialCatalog] FOREIGN KEY([Trial_ID])
REFERENCES [dbo].[TrialCatalog] ([Trial_ID])
GO
ALTER TABLE [dbo].[TrialProgress] CHECK CONSTRAINT [FK_TrialProgress_TrialCatalog]
GO
/****** Object:  ForeignKey [FK_TrialProgress_User]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialProgress]  WITH CHECK ADD  CONSTRAINT [FK_TrialProgress_User] FOREIGN KEY([SRRUser_ID])
REFERENCES [dbo].[User] ([User_ID])
GO
ALTER TABLE [dbo].[TrialProgress] CHECK CONSTRAINT [FK_TrialProgress_User]
GO
/****** Object:  ForeignKey [FK_TrialProgress_Workflow]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[TrialProgress]  WITH CHECK ADD  CONSTRAINT [FK_TrialProgress_Workflow] FOREIGN KEY([Workflow_ID])
REFERENCES [dbo].[Workflow] ([Workflow_ID])
GO
ALTER TABLE [dbo].[TrialProgress] CHECK CONSTRAINT [FK_TrialProgress_Workflow]
GO
/****** Object:  ForeignKey [FK_Response_Question]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Question] FOREIGN KEY([Question_ID])
REFERENCES [dbo].[Question] ([Question_ID])
GO
ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Question]
GO
/****** Object:  ForeignKey [FK_Response_TrialProgress]    Script Date: 03/30/2015 11:33:37 ******/
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_TrialProgress] FOREIGN KEY([TrialProgress_ID])
REFERENCES [dbo].[TrialProgress] ([TrialProgress_ID])
GO
ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_TrialProgress]
GO

--USE [REGFIELDTRIALS]
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'ASIA-PACIFIC\AP-0000-FIDO-DB-DEVL-G'
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'LAWA-SOUTH\LA-0000-FIDO-DB-DEVL-G'
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'NORTH_AMERICA\NA1000App_fidosync'
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'NORTH_AMERICA\NA1000APP-FIDO2-P'
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'NORTH_AMERICA\NA-1000-FIDO_DEVL-L'
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'NORTH_AMERICA\NA-1000-FIDO-APP-Q-G'
--GO
--EXEC dbo.sp_addrolemember @rolename=N'db_FieldTrials_App', @membername=N'NORTH_AMERICA\NA-1000-FIDO-SUPPORT-G'
--GO
GRANT EXECUTE ON [dbo].[usp_ReceiveResponses] TO [db_FieldTrials_App] AS [dbo]
GO
