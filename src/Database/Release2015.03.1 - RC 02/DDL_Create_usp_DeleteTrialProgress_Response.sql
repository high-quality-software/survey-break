USE REGFIELDTRIALS
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_DeleteTrialProgress_Response]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_DeleteTrialProgress_Response]
GO


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

	EXEC usp_DeleteTrialProgress_Response 52282850
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
