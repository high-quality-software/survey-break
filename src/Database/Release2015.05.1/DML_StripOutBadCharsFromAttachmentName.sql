--194 rows
--special characters "$-_.+!*'(),&",		
SELECT Attachment_ID,
	   AttachmentName
FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
WHERE IsDeleted = 0 
	AND 
	(CHARINDEX('$', AttachmentName, 1) > 0 
		or CHARINDEX('-', AttachmentName, 1) > 0 
		or CHARINDEX('.', AttachmentName, 1) > 0 
		or CHARINDEX('+', AttachmentName, 1) > 0 				
		or CHARINDEX('!', AttachmentName, 1) > 0 				
		or CHARINDEX('*', AttachmentName, 1) > 0 				
		or CHARINDEX('''', AttachmentName, 1) > 0 				
		or CHARINDEX('(', AttachmentName, 1) > 0 				
		or CHARINDEX(')', AttachmentName, 1) > 0 				
		or CHARINDEX(',', AttachmentName, 1) > 0 				
		or CHARINDEX('&', AttachmentName, 1) > 0 						
		or CHARINDEX('#', AttachmentName, 1) > 0 						
		or CHARINDEX('''', AttachmentName, 1) > 0 						
	)
	
begin tran		
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '$', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('$', AttachmentName, 1) > 0
)
	
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '-', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('-', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '.', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('.', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '+', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('+', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '!', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('!', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '*', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('*', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '''', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('''', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '(', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('(', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, ')', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX(')', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, ',', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX(',', AttachmentName, 1) > 0
)

UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '#', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('#', AttachmentName, 1) > 0
)
UPDATE TrialWorkflowAttachment 
SET AttachmentName = REPLACE(AttachmentName, '&', ''), UpdateDateTime = GETDATE()		
WHERE Attachment_ID IN 
(
	SELECT Attachment_ID
	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
	WHERE IsDeleted = 0 
		AND CHARINDEX('&', AttachmentName, 1) > 0
)
commit tran