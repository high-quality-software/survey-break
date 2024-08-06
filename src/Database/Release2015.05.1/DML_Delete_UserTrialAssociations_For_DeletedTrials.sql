-- deleted trials that have active user-trial associations -- do these need to be deleted

--1 
-- Delete these rows from SRRUser_Trial_Xref

UPDATE SRRUser_Trial_Xref 
SET ISDELETED = 1 
WHERE ISDELETED = 0 
	AND TRIAL_ID IN 
		(
			SELECT t.TRIAL_ID FROM dbo.TrialCatalog t
				INNER JOIN SRRUser_Trial_Xref x ON x.trial_id = t.trial_id 
			WHERE t.isdeleted = 1	-- TRIAL DELETED
				AND x.isdeleted = 0  -- USER TO TRIAL not DELETED 
		)

--2: -- hard delete user-trial associations that are soft-deleted	
 DELETE FROM dbo.SRRUser_Trial_Xref WHERE ISDELETED = 1 and srruser_id in 
	(
		SELECT USER_ID FROM [USER] where useralias in ('DWBRICK','GMCNUTT') and isdeleted = 0 
	)  
	
	
--3. 
NOTES:
every two days i perform cleanup

TRIGGER: 
when soft delete trial, soft delete the user-trial associations
do i need to hard-delete user-trial associations

	
	
CREATE TRIGGER [dbo].[tgU_TrailCatalog] ON [dbo]. [TrailCatalog] AFTER UPDATE
AS BEGIN
-- =============================================
-- Author:       Gio Sparks
-- Create date: 5/8/2015
-- Description:   Whenever trial is deleted, soft-delete the user-trial associations.
-- Modified Date: 
-- =============================================
SET NOCOUNT ON;

IF ((SELECT TRIGGER_NESTLEVEL()) > 1 ) return ;
DECLARE @UPDATE_USERID nvarchar (50) = 'tgU_TrailCatalog'

IF (SELECT 1 FROM Inserted i WHERE IsDeleted = 1)
BEGIN
 UPDATE SET IsDeleted = 1, UpdateDatetime = GETDATE(), UpdateUserid = @UPDATE_USERID
 FROM dbo.SRRUser_Trial_Xref 

		INNER JOIN inserted i on ( i.FieldInspection_ID = d.FieldInspection_ID)
		INNER JOIN deleted d on ( i.FieldInspection_ID = d.FieldInspection_ID)
WHERE IsDeleted = 0   
	
END
