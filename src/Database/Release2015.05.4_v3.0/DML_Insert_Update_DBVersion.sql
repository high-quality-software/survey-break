use REGFIELDTRIALS
go

  update db_version set Active = 0 where active  = 1
 
  INSERT INTO [REGFIELDTRIALS].[dbo].[DB_Version]
           ([DB_Version]
           ,[Comment]
           ,[Active]
           ,[UpdateDateTime]
           ,[UpdateUserID]
           ,[IsDeleted])
     VALUES
           ('1.3', 'Updates made to implement Phase 3.0 requirements',1,getdate(),'JASPAR',0)
           




  