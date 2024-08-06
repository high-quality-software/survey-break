USE [REGFIELDTRIALS]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[LookupMaster](
	[Lookup_ID] [int] IDENTITY(1,1) NOT NULL,
	[ShortName] [nvarchar](50) NOT NULL,
	[LongName] [nvarchar](1000) NULL,
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


-- Alter Response table
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'Response' AND COLUMN_NAME ='Lookup_ID' )
ALTER TABLE [dbo].[Response] ADD Lookup_ID INT;


--Alter WorkflowQuestion table  -> not necessary but would provide documenation which question (for a given workflow) uses a lookup value.  
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'WorkflowQuestion' AND COLUMN_NAME ='IsLookup' )
ALTER TABLE [dbo].[WorkflowQuestion] ADD IsLookup BIT;

--FK constraints

ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Lookup] FOREIGN KEY([Lookup_ID])
REFERENCES [dbo].[LookupMaster] ([Lookup_ID])
GO

ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Lookup]
GO