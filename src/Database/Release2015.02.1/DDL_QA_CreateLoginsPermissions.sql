-- Create User in QA
USE [RegFieldTrials]
GO
CREATE USER [ASIA-PACIFIC\AP-0000-FIDO-DB-DEVL-G] FOR LOGIN [ASIA-PACIFIC\AP-0000-FIDO-DB-DEVL-G]
CREATE USER [LAWA-SOUTH\LA-0000-FIDO-DB-DEVL-G] FOR LOGIN [LAWA-SOUTH\LA-0000-FIDO-DB-DEVL-G]
CREATE USER [NORTH_AMERICA\NA1000App_fidosync] FOR LOGIN [NORTH_AMERICA\NA1000App_fidosync]
CREATE USER [NORTH_AMERICA\NA1000APP-FIDO2-P] FOR LOGIN [NORTH_AMERICA\NA1000APP-FIDO2-P]
CREATE USER [NORTH_AMERICA\NA-1000-FIDO_DEVL-L] FOR LOGIN [NORTH_AMERICA\NA-1000-FIDO_DEVL-L]
CREATE USER [NORTH_AMERICA\NA-1000-FIDO-APP-Q-G] FOR LOGIN [NORTH_AMERICA\NA-1000-FIDO-APP-Q-G]
CREATE USER [NORTH_AMERICA\NA-1000-FIDO-SUPPORT-G] FOR LOGIN [NORTH_AMERICA\NA-1000-FIDO-SUPPORT-G]
CREATE USER [NORTH_AMERICA\NA-1000-FIDO-APPDBA-G] FOR LOGIN [NORTH_AMERICA\NA-1000-FIDO-APPDBA-G]
GO


-- Create role
USE [RegFieldTrials]
GO

/****** Object:  DatabaseRole [db_FIDO_Desktop]    Script Date: 02/16/2015 12:11:30 ******/
CREATE ROLE [db_FieldTrials_App] AUTHORIZATION [dbo]
GO

-- Add users to specific database role.
USE [RegFieldTrials]
GO
EXEC sp_addrolemember N'db_datareader' , N'ASIA-PACIFIC\AP-0000-FIDO-DB-DEVL-G'

EXEC sp_addrolemember N'db_datareader' , N'LAWA-SOUTH\LA-0000-FIDO-DB-DEVL-G'

EXEC sp_addrolemember N'db_datareader' , N'NORTH_AMERICA\NA1000App_fidosync'

EXEC sp_addrolemember N'db_datareader' , N'NORTH_AMERICA\NA1000APP-FIDO2-P'

EXEC sp_addrolemember N'db_datareader' , N'NORTH_AMERICA\NA-1000-FIDO_DEVL-L'

EXEC sp_addrolemember N'db_datareader' , N'NORTH_AMERICA\NA-1000-FIDO-APP-Q-G'

EXEC sp_addrolemember N'db_datareader' , N'NORTH_AMERICA\NA-1000-FIDO-SUPPORT-G'

EXEC sp_addrolemember N'db_datareader' , N'NORTH_AMERICA\NA-1000-FIDO-APPDBA-G'
EXEC sp_addrolemember N'db_datawriter' , N'NORTH_AMERICA\NA-1000-FIDO-APPDBA-G'
EXEC sp_addrolemember N'db_owner' , N'NORTH_AMERICA\NA-1000-FIDO-APPDBA-G'
GO

-- added by gio on  2/17/2015 
-- Grant execute rights to new role, db_FieldTrials_App
USE REGFIELDTRIALS
GO

SET NOCOUNT ON

-- 1 - Declaration statements for all variables
DECLARE @TableName varchar (128)
DECLARE @OwnerName varchar (128)
DECLARE @CMD1 varchar (8000)
DECLARE @TableListLoop int
DECLARE @TableListTable table
(UIDTableList int IDENTITY ( 1,1 ),
OwnerName varchar( 128),
TableName varchar( 128));

-- 2 - Outer loop for populating the database names
INSERT INTO @TableListTable(OwnerName , TableName)
SELECT u. [Name], o .[Name]
FROM sys .objects o
INNER JOIN sys. schemas u
ON o. schema_id  = u.schema_id
WHERE o. Type in ('P' , 'FN' )
ORDER BY o.[Type] ,o. [Name]

-- 3 - Determine the highest UIDDatabaseList to loop through the records
SELECT @TableListLoop = MAX( UIDTableList) FROM @TableListTable

-- 4 - While condition for looping through the database records
WHILE @TableListLoop > 0
BEGIN

       -- 5 - Set the @DatabaseName parameter
       SELECT @TableName = TableName,
      @OwnerName = OwnerName
       FROM @TableListTable
       WHERE UIDTableList = @TableListLoop

       -- 6 - String together the final backup command
       SELECT @CMD1 = 'GRANT EXEC ON [dbo].[' + @TableName + '] TO db_FieldTrials_App' + char (13)

       -- 7 - Execute the final string to complete the backups
       --SELECT @CMD1
       EXEC (@CMD1 )

       -- 8 - Descend through the database list
       SELECT @TableListLoop = @TableListLoop - 1
END

SET NOCOUNT OFF

GO