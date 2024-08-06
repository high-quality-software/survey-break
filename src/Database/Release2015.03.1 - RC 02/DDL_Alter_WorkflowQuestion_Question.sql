-- 3/10/2015 Created by gio to add AcceptableDataType to WorkflowQuestion tbl

USE [REGFIELDTRIALS]
GO

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

ALTER TABLE [dbo].[DataTypesMaster] ADD  CONSTRAINT [DF_DataTypesMaster_UpdateDateTime]  DEFAULT (getdate()) FOR [UpdateDateTime]
GO

ALTER TABLE [dbo].[DataTypesMaster] ADD  CONSTRAINT [DF_DataTypesMaster_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO

begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[DataTypesMaster]
           ([DataType],[UpdateUserID])
     VALUES ('INT', 'JASPAR'), ('VARCHAR', 'JASPAR'), ('DECIMAL', 'JASPAR'), ('DATETIME', 'JASPAR'), ('BIT', 'JASPAR')
commit tran

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'Question' AND COLUMN_NAME ='QuestionText' )
ALTER TABLE [dbo].[Question] ADD QuestionText nvarchar(1000);
go

ALTER TABLE [dbo].[Question] ALTER COLUMN QuestionName [nvarchar](100) NOT NULL;
go

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'WorkflowQuestion' AND COLUMN_NAME ='AcceptableDataType' )
ALTER TABLE [dbo].[WorkflowQuestion] ADD AcceptableDataType INT ;
go

ALTER TABLE [dbo].[WorkflowQuestion]  WITH CHECK ADD  CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster] FOREIGN KEY([AcceptableDataType])
REFERENCES [dbo].[DataTypesMaster] ([DataType_ID])
GO

ALTER TABLE [dbo].[WorkflowQuestion] CHECK CONSTRAINT [FK_WorkflowQuestion_DataTypesMaster]
GO