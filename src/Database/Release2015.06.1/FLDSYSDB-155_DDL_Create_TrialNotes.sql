USE [REGFIELDTRIALS]
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- FLDSYSDB-155
CREATE TABLE [dbo].[TrialNote](
	[TrialNote_ID] [uniqueidentifier] NOT NULL,
	[Trial_ID] [int] NOT NULL, -- FK to TrialCatalog.Trial_ID
	[NoteCategory] [INT] NULL, -- Possible FK relationship to new table NoteCategory
	[NoteContent] [nvarchar](1000) NOT NULL,
	[UpdateDateTime] [datetime] NOT NULL,
	[UpdateUserID] [nvarchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_TrialNote] PRIMARY KEY CLUSTERED 
(
	[TrialNote_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = ON, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[TrialNote]  WITH CHECK ADD  CONSTRAINT [FK_TrialNote_TrialCatalog] FOREIGN KEY([Trial_ID])
REFERENCES [dbo].[TrialCatalog] ([Trial_ID])
GO

ALTER TABLE [dbo].[TrialNote] CHECK CONSTRAINT [FK_TrialNote_TrialCatalog]
GO


ALTER TABLE [dbo].[TrialNote] ADD  CONSTRAINT [DF_TrialNote_UpdateDateTime] DEFAULT (getdate()) FOR [UpdateDateTime]

ALTER TABLE [dbo].[TrialNote] ADD  CONSTRAINT [DF_TrialNote_IsDeleted] DEFAULT (0) FOR [isDeleted]
