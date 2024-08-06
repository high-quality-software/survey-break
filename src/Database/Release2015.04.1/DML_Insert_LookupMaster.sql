begin tran
-- MUST START WITH 1001
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1001, 'Yes', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1002, 'No', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1003, 'High', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1004, 'Med', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1005, 'Low', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1006, '30 ft ', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1007,'Natural Barrier', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1008,'None Needed', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1009, 'Moved to Another Stewarded Field', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1010, 'Returned', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1011, 'Placed in Trial Area', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1012, 'Herbicide', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1013, 'Tillage', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1014, 'Approved', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1015, '','JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1016, 'Commercial Soybeans', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1017, 'Stewarded Soybeans', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1018, 'Corn', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1019, 'Cotton', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (1020, 'Rice', 'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[LookupMaster] ([Lookup_ID], [LookupName] ,[UpdateUserID]) VALUES (99999, 'Other','JASPAR')
commit tran

UPDATE Question
SET IsLookup=1, UpdateUserID='JASPAR', UpdateDateTime=GETDATE() 
WHERE Question_ID IN (2,15,20,21,26,27,32,33,38,39,73,40,41,42,43,44,45,46,48,50,55,72,75,76,77,78,79,83,84,86,87,88,91,94,96) and ISNULL(IsLookup,0) = 0 





BEGIN TRAN
update Response set ResponseValue = 1015 where Question_ID = 2 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1012 where Question_ID = 2 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1013 where Question_ID = 2 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 15 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 15 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 15 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 20 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 20 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 20 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 21 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1014 where Question_ID = 21 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 26 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 26 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 26 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 27 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1014 where Question_ID = 27 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 32 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 32 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 32 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 33 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1014 where Question_ID = 33 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 38 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 38 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 38 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 39 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1014 where Question_ID = 39 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 40 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 40 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 40 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 41 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1003 where Question_ID = 41 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1004 where Question_ID = 41 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1005 where Question_ID = 41 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 42 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 42 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 42 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 43 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 43 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 43 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 44 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 44 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 44 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 45 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 45 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 45 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 46 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 46 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 46 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 48 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 48 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 48 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 50 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 50 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 50 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 55 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1006 where Question_ID = 55 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1007 where Question_ID = 55 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1008 where Question_ID = 55 and ResponseValue = '3' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 72 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 72 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 72 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 73 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1016 where Question_ID = 73 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1017 where Question_ID = 73 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1018 where Question_ID = 73 and ResponseValue = '3' and isdeleted = 0 
update Response set ResponseValue = 1019 where Question_ID = 73 and ResponseValue = '4' and isdeleted = 0 
update Response set ResponseValue = 1020 where Question_ID = 73 and ResponseValue = '5' and isdeleted = 0 
update Response set ResponseValue = 99999 where Question_ID = 73 and ResponseValue = '99999' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 75 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 75 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 75 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 76 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 76 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 76 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 77 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 77 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 77 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 78 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 78 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 78 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 79 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 79 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 79 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 83 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 83 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 83 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 84 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1006 where Question_ID = 84 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1007 where Question_ID = 84 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 86 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 86 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 86 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 87 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 87 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 87 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 88 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 88 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 88 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1009 where Question_ID = 88 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 91 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 91 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 91 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1009 where Question_ID = 91 and ResponseValue = '2' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 94 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1002 where Question_ID = 94 and ResponseValue = '0' and isdeleted = 0 
update Response set ResponseValue = 1001 where Question_ID = 94 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1015 where Question_ID = 96 and ResponseValue = '-1' and isdeleted = 0 
update Response set ResponseValue = 1010 where Question_ID = 96 and ResponseValue = '1' and isdeleted = 0 
update Response set ResponseValue = 1011 where Question_ID = 96 and ResponseValue = '2' and isdeleted = 0 
COMMIT TRAN