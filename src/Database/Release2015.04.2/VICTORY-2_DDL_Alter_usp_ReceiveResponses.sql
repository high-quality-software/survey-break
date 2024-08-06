USE [REGFIELDTRIALS]
GO

/****** Object:  StoredProcedure [dbo].[usp_ReceiveResponses]    Script Date: 04/22/2015 12:12:42 ******/
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
-- Modified by JASPAR on 4/22/2015 to increase ResponseValue length from 100 to 1000 
ALTER PROCEDURE [dbo].[usp_ReceiveResponses]
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
	[ResponseValue] [nvarchar](1000) NOT NULL,
	[FollowupRequired] [bit] NULL,
	[VerifiedDate] [datetime] NULL)
    
INSERT INTO @ipad (Workflow_ID, Trial_ID, Question_ID, [ResponseValue])
SELECT 
	@workflowID as Workflow_ID,
	@trialID as Trial_ID, 
	Child.value('(QuestionID)[1]', 'nvarchar(1000)') as Question_ID,
	Child.value('(ResponseValue)[1]', 'nvarchar(1000)') as ResponseValue
	
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

GRANT EXECUTE ON [dbo].[usp_ReceiveResponses] TO [db_FieldTrials_App] AS [dbo]
GO


