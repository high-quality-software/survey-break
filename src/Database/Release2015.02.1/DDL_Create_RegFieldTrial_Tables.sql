--Created by gio on 2/5/2015
USE RegFieldTrials
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[UserType](
	[UserType_ID] INT IDENTITY (1,1) NOT NULL,
	[UserTypeName] NVARCHAR(50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_UserType_ID] PRIMARY KEY CLUSTERED 
(
	[UserType_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[UserType] ADD  CONSTRAINT [DF_UserType_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[UserType] ADD  CONSTRAINT [DF_UserType_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
-- Insert
INSERT INTO [UserType] (UserTypeName, UpdateUserID) VALUES ('SRR', 'JASPAR')
INSERT INTO [UserType] (UserTypeName, UpdateUserID) VALUES ('IRP', 'JASPAR')
INSERT INTO [UserType] (UserTypeName, UpdateUserID) VALUES ('LeadSRR', 'JASPAR')
INSERT INTO [UserType] (UserTypeName, UpdateUserID) VALUES ('Admin', 'JASPAR')
GO


-- User
CREATE TABLE [dbo].[User](
	[User_ID] INT IDENTITY (1,1) NOT NULL,
	[UserType_ID] INT NOT NULL, -- IRP bit flag/role/srr or irp
	[FName] NVARCHAR(50) NOT NULL,
	[LName] NVARCHAR(50) NOT NULL,
	[Email] NVARCHAR(50) NULL,
	[OfficeNumber] VARCHAR(25) NULL,
	[CellNumber] VARCHAR(25) NULL,
	[SiteLocation] NVARCHAR (100) NULL,
	[Manager_ID] INT NULL, -- FK to User_ID
	[Internal] BIT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[User_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO


--Crop ID
CREATE TABLE [dbo].[Crop](
	[Crop_ID] INT IDENTITY (1,1) NOT NULL,
	[CropName] NVARCHAR(50) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_Crop_ID] PRIMARY KEY CLUSTERED 
(
	[Crop_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Crop] ADD  CONSTRAINT [DF_Crop_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[Crop] ADD  CONSTRAINT [DF_Crop_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
--Insert
INSERT INTO [Crop] (CropName, UpdateUserID) 
VALUES 
	('Soybean', 'JASPAR'), 
	('Cotton', 'JASPAR')
GO

--Question ID
CREATE TABLE [dbo].[Question](
	[Question_ID] INT NOT NULL,  -- Cannot use IDENTITY column since values will be provided by Victor
	[QuestionName] NVARCHAR(1000) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_Question_ID] PRIMARY KEY CLUSTERED 
(
	[Question_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
--Inserts 
INSERT INTO [Question] (Question_ID, QuestionName, UpdateUserID) 
VALUES 
	(1, 'Date_of_Burn_Down', 'JASPAR'),
	(2, 'Method_of_Burn_Down', 'JASPAR'),
	(3, 'Method_of_Burn_Down_Herbicide', 'JASPAR'),
	(4,'Method_of_Burn_Down_TDR', 'JASPAR'),
	(5, 'Method_of_Burn_Down_TDR_Herbicide', 'JASPAR'),
	(6, 'Date_of_Preemergence', 'JASPAR'),
	(7, 'Method_of_Preemergence_Herbicide', 'JASPAR'),
	(8, 'Method_of_Preemergence_TDR', 'JASPAR'),
	(9, 'Method_of_Preemergence_TDR_Herbicide', 'JASPAR'),
	(10,'Date_of_Postemergence', 'JASPAR'),
	(11,'Method_of_Postemergence_Herbicide', 'JASPAR'),
	(12, 'Method_of_Postemergence_TDR', 'JASPAR'),
	(13, 'Method_of_Postemergence_TDR_Herbicide', 'JASPAR'),
	(14, 'Date_of_Effectiveness', 'JASPAR'),
	(15, 'App_Effective', 'JASPAR'),
	(16, 'Date_of_Postemergence2', 'JASPAR'),
	(17, 'Method_of_Postemergence2_Herbicide', 'JASPAR'),
	(18, 'Method_of_Postemergence2_TDR', 'JASPAR'),
	(19, 'Method_of_Postemergence2_TDR_Herbicide', 'JASPAR'),
	(20, 'App_Effective2', 'JASPAR'),
	(21, 'App_Effective_Approved2', 'JASPAR'),
	(22, 'Date_of_Postemergence3', 'JASPAR'),
	(23, 'Method_of_Postemergence3_Herbicide', 'JASPAR'),
	(24, 'Method_of_Postemergence3_TDR', 'JASPAR'),
	(25, 'Method_of_Postemergence3_TDR_Herbicide', 'JASPAR'),
	(26, 'App_Effective3', 'JASPAR'),
	(27, 'App_Effective_Approved3', 'JASPAR'),
	(28, 'Date_of_Postemergence4', 'JASPAR'),
	(29, 'Method_of_Postemergence4_Herbicide', 'JASPAR'),
	(30, 'Method_of_Postemergence4_TDR', 'JASPAR'),
	(31, 'Method_of_Postemergence4_TDR_Herbicide', 'JASPAR'),
	(32, 'App_Effective4', 'JASPAR'),
	(33, 'App_Effective_Approved4', 'JASPAR'),
	(34, 'Date_of_Postemergence5', 'JASPAR'),
	(35, 'Method_of_Postemergence5_Herbicide', 'JASPAR'),
	(36, 'Method_of_Postemergence5_TDR', 'JASPAR'),
	(37, 'Method_of_Postemergence5_TDR_Herbicide', 'JASPAR'),
	(38, 'App_Effective5', 'JASPAR'),
	(39, 'App_Effective_Approved5', 'JASPAR')

--Workflow
CREATE TABLE [dbo].[Workflow](
	[Workflow_ID] INT IDENTITY (1,1) NOT NULL,
	[WorkflowName] NVARCHAR(50) NOT NULL,
	[WorkflowOrder] INT NOT NULL, 
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_Workflow_ID] PRIMARY KEY CLUSTERED 
(
	[Workflow_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Workflow] ADD  CONSTRAINT [DF_Workflow_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[Workflow] ADD  CONSTRAINT [DF_Workflow_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

--Inserts
INSERT INTO [Workflow] (WorkflowName, WorkflowOrder, UpdateUserID)  
VALUES 
	('Trial Info', 1, 'JASPAR'), 
	('SRR Evaluation', 2, 'JASPAR'), 
	('Site Selection Checklist', 3, 'JASPAR'), 
	('Land Contracts', 4, 'JASPAR'), 
	('Compliance Exceptions', 5, 'JASPAR'), 
	('Compliance Map', 6, 'JASPAR'), 
	('Trial Risk Evaluation', 7, 'JASPAR'), 
	('CQA', 8, 'JASPAR'), 
	('Cleanouts', 9, 'JASPAR'), 
	('Dicamba Applications', 10, 'JASPAR'), 
	('In-Season Monitoring', 11, 'JASPAR'), 
	('Harvest and Destruct', 12, 'JASPAR'), 
	('Drip Tape Verification', 13, 'JASPAR'), 
	('Bin Inspections', 14, 'JASPAR'), 
	('Post Harvest SRR Evaluation', 15, 'JASPAR'), 
	('Volunteer Monitoring', 16, 'JASPAR')
	--('Replant', 17, 'JASPAR')
GO


--WorkflowQuestions: all questions comprising each form/workflow/module
-- Natural key is  Workflow_ID + Question_ID + isDeleted
CREATE TABLE [dbo].[WorkflowQuestion] (
	[WorkflowQuestion_ID] INT IDENTITY (1,1) NOT NULL,
	[Workflow_ID] INT NOT NULL, --FK
	[Question_ID] INT NOT NULL,  --mapped to a question on ipad program
	[AcceptableAnswers] NVARCHAR(100) NULL,
	[AcceptableLowRange] INT NULL,
	[AcceptableHighRange] INT NULL,
	[NotAcceptableAnswers] NVARCHAR(100) NULL,
	[NotAcceptableLowRange] INT NULL,
	[NotAcceptableHighRange] INT NULL,	
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_WorkflowQuestion_ID] PRIMARY KEY CLUSTERED 
(
	[WorkflowQuestion_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[WorkflowQuestion] ADD  CONSTRAINT [DF_WorkflowQuestion_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[WorkflowQuestion] ADD  CONSTRAINT [DF_WorkflowQuestion_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO


--[ChemicalMasterType]
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

ALTER TABLE [dbo].[ChemicalType] ADD  CONSTRAINT [DF_ChemicalType_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[ChemicalType] ADD  CONSTRAINT [DF_ChemicalType_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

--[ChemicalMaster]
CREATE TABLE [dbo].[ChemicalMaster](
	[Chemical_ID] [int] IDENTITY(1,1) NOT NULL,
	[ChemicalName] [nvarchar](100) NOT NULL,
	[ChemicalType_ID] INT NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_ChemicalMaster_ID] PRIMARY KEY CLUSTERED 
(
	[Chemical_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[ChemicalMaster] ADD  CONSTRAINT [DF_ChemicalMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[ChemicalMaster] ADD  CONSTRAINT [DF_ChemicalMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO


--[TraitMaster]
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

ALTER TABLE [dbo].[TraitMaster] ADD  CONSTRAINT [DF_TraitMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[TraitMaster] ADD  CONSTRAINT [DF_TraitMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO



--[SiteMaster]
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

ALTER TABLE [dbo].[SiteMaster] ADD  CONSTRAINT [DF_SiteMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[SiteMaster] ADD  CONSTRAINT [DF_SiteMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

--[TrialCatalog]
CREATE TABLE [dbo].[TrialCatalog](
	[Trial_ID] [int] NOT NULL,
	[SRRLeadUser_ID] [int] NOT NULL,
	[IRPUser_ID] [int] NULL,
	[Crop_ID] [int] NOT NULL,
	[Trait_ID] [int] NULL,
	[Site_ID] [int] NULL,
	[TrialYear] INT NULL,
	[AgencyApprovalNo] [nvarchar](50) NULL,
	[Name] [nvarchar](50) NOT NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Zip] [nvarchar](16) NULL,
	[County] [nvarchar](50) NULL,
	[FarmName] [nvarchar](100) NULL,
	[Internal] BIT null,
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
 CONSTRAINT [PK_Trial_ID] PRIMARY KEY CLUSTERED 
(
	[Trial_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[TrialCatalog] ADD  CONSTRAINT [DF_TrialCatalog_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[TrialCatalog] ADD  CONSTRAINT [DF_TrialCatalog_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

CREATE  NONCLUSTERED INDEX [idxSRRLeadUser_ID] ON [dbo].[TrialCatalog]
(
      [SRRLeadUser_ID] ASC
)
WITH (PAD_INDEX   = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF , ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON , FILLFACTOR = 100 ) ON [PRIMARY]
GO



--[SRRUser_Trial_Xref]
CREATE TABLE [dbo].[SRRUser_Trial_Xref](
	[SRRUser_Trial_Xref] [int] IDENTITY(1,1) NOT NULL,
	[SRRUser_ID] INT NOT NULL,
	[Trial_ID] INT NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Batch_Pesticide_Xref] PRIMARY KEY CLUSTERED 
(
	[SRRUser_Trial_Xref] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = ON, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

CREATE  NONCLUSTERED INDEX [idx_SRRUserID_TrialID] ON [dbo].[SRRUser_Trial_Xref]
(
      [SRRUser_ID] ASC,
      [Trial_ID] ASC
)
WITH (PAD_INDEX   = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF , ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON , FILLFACTOR = 100 ) ON [PRIMARY]
GO




--Responses
-- Natural Key is Workflow_ID + Trial_ID + Question_ID + User_ID + isDeleted, create nonclustered index
--Merge 
--	if found, then update existing record, set isDeleted flag to 1, THEN Insert a new row
--	if not found, insert new record for that Workflow_ID + Question_ID + User_ID 

--When joining to table Response, join with all these columns: Workflow_ID, Question_ID, User_ID where IsDeleted = 0 
CREATE TABLE [dbo].[Response] (
	[Response_ID] UNIQUEIDENTIFIER, -- surrogate key
	[Workflow_ID] INT NOT NULL, 
	[Trial_ID] INT NOT NULL,
	[Question_ID] INT NOT NULL,  --mapped to a question on ipad program
	[User_ID] INT NOT NULL,		-- not sure who this person will be (irp, srr or maybe data entry person???)
	[ResponseValue] NVARCHAR(100) NOT NULL,
	[FollowupRequired] BIT NULL,
	[VerifiedDate] DATETIME NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_Response] PRIMARY KEY CLUSTERED 
(
	[Response_ID] ASC
	--[Workflow_ID] ASC,
	--[Trial_ID] ASC,
	--[Question_ID] ASC,
	--[User_ID] ASC,
	--[IsDeleted]
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Response] ADD  CONSTRAINT [DF_Response_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[Response] ADD  CONSTRAINT [DF_Response_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO


--TrialProgress
-- Natural Key: Trial_ID + Workflow_ID + SRRUser_ID
-- Will allow user to assign different SRR's (User_ID) to each Workflow.  
-- For ex, SRR1 was assigned to Workflow 1-4, then SRR2 assigned to Workflow 5-18 
-- Another ex, SRR leaves company and we want to know which SRR was assigned to the completed Workflow 1 (and we're now on Workflow 9)
CREATE TABLE [dbo].[TrialProgress] (
	[TrialProgress_ID] INT IDENTITY (1,1) NOT NULL,
	[Trial_ID] INT NOT NULL, -- FK
	[SRRUser_ID] INT NOT NULL, -- represents SRR_ID
	[Workflow_ID] INT NULL,  -- represents the in-progress workflow_id 
	[WorkflowComplete] BIT NULL,  
	[WorkflowCompleteDate] DATETIME NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL
 CONSTRAINT [PK_TrialProgress_ID] PRIMARY KEY CLUSTERED 
(
	[TrialProgress_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TrialProgress] ADD  CONSTRAINT [DF_TrialProgress_UpdateDateTime]  DEFAULT (GETDATE()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[TrialProgress] ADD  CONSTRAINT [DF_TrialProgress_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

