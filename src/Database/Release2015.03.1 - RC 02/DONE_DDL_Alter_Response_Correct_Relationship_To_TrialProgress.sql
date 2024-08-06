-- written by gio on 3/4/2015 to correct response relationships, see email below:
--Victor,
--Did you write logic that allows a user to edit and submit changes to a completed form?  

--Victor, Hernan:
--I’d like to alter the Response table to:
--Drop  User_ID column 
--Add a Trial_Progress_ID column

--This will link ALL responses to a TrialProgress row (ie  anytime that a user works on form for a given Trial)

USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Response_User]') AND parent_object_id = OBJECT_ID(N'[dbo].[Response]'))
ALTER TABLE [dbo].[Response] DROP CONSTRAINT [FK_Response_User]
GO


EXEC sp_rename '[dbo].Response.User_ID', 'TrialProgress_ID', 'COLUMN'; -- will rename column Result_ID to zzzResult_ID
GO


DELETE FROM Response WHERE IsDeleted = 1

USE [REGFIELDTRIALS]
GO

ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_TrialProgress] FOREIGN KEY([TrialProgress_ID])
REFERENCES [dbo].[TrialProgress] ([TrialProgress_ID])
GO

ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_TrialProgress]
GO


