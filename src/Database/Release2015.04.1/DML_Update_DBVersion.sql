use REGFIELDTRIALS
go



---- update db_version
UPDATE [DB_Version] SET ACTIVE = 0 WHERE Active  = 1
Go

-- Insert into db_version
INSERT INTO [dbo].[DB_Version] ([DB_Version],[Comment],[Active],[UpdateUserID])
     VALUES
	    ('1.1', 'Contains Phase 2 functionality' , 1, 'JASPAR')

--Phase 3 will be 1.2

select * from DB_Version