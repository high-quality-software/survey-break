use REGFIELDTRIALS
go

  update db_version set db_version = '1.1', Active = 0 where db_version_id = 3
 
  INSERT INTO [REGFIELDTRIALS].[dbo].[DB_Version]
           ([DB_Version]
           ,[Comment]
           ,[Active]
           ,[UpdateDateTime]
           ,[UpdateUserID]
           ,[IsDeleted])
     VALUES
           ('1.1.1', 'Updates made to correct issues for phase 2',1,getdate(),'JASPAR',0)
           




  