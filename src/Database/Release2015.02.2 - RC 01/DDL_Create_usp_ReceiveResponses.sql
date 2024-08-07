USE [REGFIELDTRIALS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_ReceiveResponses]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_ReceiveResponses]
GO


-- =============================================
-- Author:		Hernan Casado
-- Create date: Feb 12, 2015
-- Description: take all data from a form and save into database
CREATE PROCEDURE [dbo].[usp_ReceiveResponses]
(
	@trialID int,
	@workflowID int,
	@locked bit,
	@updateUserID nvarchar(500),
	@responses xml
)
AS
BEGIN
 
DECLARE @ipad AS TABLE (
	[Workflow_ID] [int] NOT NULL,
	[Trial_ID] [int] NOT NULL,
	[Question_ID] [int] NOT NULL,
	[User_ID] [int] NOT NULL,
	[ResponseValue] [nvarchar](100) NOT NULL,
	[FollowupRequired] [bit] NULL,
	[VerifiedDate] [datetime] NULL)
    
INSERT INTO @ipad (Workflow_ID, Trial_ID, Question_ID, [User_ID], [ResponseValue])
SELECT 
	@workflowID as Workflow_ID,
	@trialID as Trial_ID, 
	Child.value('(QuestionID)[1]', 'varchar(200)') as Question_ID,
	Child.value('(UserID)[1]', 'varchar(200)') as [User_ID], 
	Child.value('(ResponseValue)[1]', 'varchar(200)') as ResponseValue
	
FROM 
	@responses.nodes('/Responses/Response') as N(Child)
	
--SELECT * FROM @ipad

/* 
* NOT WORKING BECAUSE MERGE EITHER UPDATE OR INSERT NOT BOTH

MERGE INTO Response AS TARGET
USING 
-- Source
(SELECT  Workflow_ID, Trial_ID, Question_ID, [User_ID],UpdateUserID, ResponseValue FROM #ipad)  AS SOURCE        
ON (SOURCE.Workflow_ID = TARGET.Workflow_ID AND SOURCE.Trial_ID = TARGET.Trial_ID 
AND SOURCE.Question_ID = TARGET.Question_ID AND TARGET.IsDeleted = 0)
WHEN MATCHED THEN
-- Row found, do UPDATE (I have to think abou this a bit more, it might be better for us to update existing row to isDeleted =1, then insert new row)
UPDATE SET TARGET.IsDeleted = 1
WHEN NOT MATCHED THEN
-- Row NOT found, do Insert
INSERT (Response_ID, Workflow_ID, Trial_ID, Question_ID, [User_ID], ResponseValue, UpdateUserID)
VALUES (NEWID(), SOURCE.Workflow_ID, SOURCE.Trial_ID, SOURCE.Question_ID, SOURCE.[User_ID], SOURCE.ResponseValue, SOURCE.UpdateUserID);
*/

--update all previous responses for a workflow in a trial, this take in care when a workflow change questions (name and quantity)
UPDATE Response
SET IsDeleted = 1, UpdateDateTime = getdate(), UpdateUserID = @updateUserID
WHERE Trial_ID = @trialID 
	AND Workflow_ID = @workflowID
	AND IsDeleted = 0
	
--update previous trial progress record
UPDATE TrialProgress
SET IsDeleted = 1, UpdateDateTime = getdate(), UpdateUserID = @updateUserID
WHERE
	Trial_ID = @trialID
	AND IsDeleted = 0

-- insert new responses
INSERT INTO Response (Response_ID, Workflow_ID, Trial_ID, Question_ID, [User_ID], ResponseValue, UpdateUserID)
SELECT NEWID(), Workflow_ID, Trial_ID, Question_ID, [User_ID], ResponseValue, @updateUserID
FROM @ipad

DECLARE @SRRUserID int
select top 1 @SRRUserID = SRRUser_ID 
from SRRUser_Trial_Xref 
where Trial_ID = @trialID and PrimarySRR = 1 and IsDeleted = 0 

DECLARE @workflowCompleteDate datetime
IF @locked = 1 
BEGIN
	select @workflowCompleteDate = getdate()
END


-- insert trial progress
INSERT INTO TrialProgress (Trial_ID, SRRUser_ID, Workflow_ID, WorkflowComplete, WorkflowCompleteDate, UpdateUserID)
VALUES (@trialID, @SRRUserID, @workflowID, @locked, @workflowCompleteDate, @updateUserID)

END
GO

GRANT EXEC ON [dbo].[usp_ReceiveResponses] TO db_FieldTrials_App
GO