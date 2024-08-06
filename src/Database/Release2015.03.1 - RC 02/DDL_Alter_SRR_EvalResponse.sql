-- Written by gio
-- 3/6/2015 changes to  SRR_EvalResponse  per emails.  

use REGFIELDTRIALS
go

ALTER TABLE [dbo].[SRR_EvalResponse] ALTER COLUMN NumFieldsReponsibleFor INT  NULL;
GO
IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRR_EvalResponse' AND COLUMN_NAME ='ComplianceResponse1' )
ALTER TABLE [dbo].[SRR_EvalResponse] ADD ComplianceResponse1 nvarchar(1000);


IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRR_EvalResponse' AND COLUMN_NAME ='ComplianceResponse2' )
ALTER TABLE [dbo].[SRR_EvalResponse] ADD ComplianceResponse2 nvarchar(1000);

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRR_EvalResponse' AND COLUMN_NAME ='ComplianceResponse3' )
ALTER TABLE [dbo].[SRR_EvalResponse] ADD ComplianceResponse3 nvarchar(1000);


IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRR_EvalResponse' AND COLUMN_NAME ='ComplianceResponse4' )
ALTER TABLE [dbo].[SRR_EvalResponse] ADD ComplianceResponse4 nvarchar(1000);

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRR_EvalResponse' AND COLUMN_NAME ='ComplianceResponse5' )
ALTER TABLE [dbo].[SRR_EvalResponse] ADD ComplianceResponse5 nvarchar(1000);

IF NOT EXISTS ( SELECT * FROM INFORMATION_SCHEMA . COLUMNS WHERE      TABLE_NAME= 'SRR_EvalResponse' AND COLUMN_NAME ='ComplianceResponse6' )
ALTER TABLE [dbo].[SRR_EvalResponse] ADD ComplianceResponse6 nvarchar(1000);


-- 3/9/2015


ALTER TABLE [dbo].[SRR_EvalResponse] DROP COLUMN LastTrainingYear;
GO
ALTER TABLE [dbo].[SRR_EvalResponse] ADD LastTrainingYear INT NULL
GO
