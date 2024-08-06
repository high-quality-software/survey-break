-- created by gio on 4/28/2015 to update master data
-- ran in prod at 5/6 at 10:10am
use REGFIELDTRIALS
go

--trialcatalog deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='VELIS_20150506' 
where Trial_ID in (1949,1951,2019,2635,3035,3036,3037,3038,3039,2314,2315,2316,2317)

--TrialCatalog Inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3168,11,21,2015,'Swenden','Tipp City','Ohio','45371','Miami','Eldon Wray',1,0,17,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3169,11,17,2015,'1 South','Hancock','MN','56244','Stevens','Roger Blair',1,0,24,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3170,11,17,2015,'Yard','Big Stone','SD','57216','Grant','Richard Stei',1,0,24,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3171,11,17,2015,'Cloos 40','Big Stone','SD','57217','Grant','Richard Stei',1,0,24,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3172,11,23,2015,'WF 3','Edwardsport ','IN','47528','Knox','Villwock Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3173,11,23,2015,'WF 246710111219','Edwardsport ','IN','47528','Knox','Villwock Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3174,11,23,2015,'Noel Pond','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3175,11,23,2015,'Hill Field','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3176,11,23,2015,'Hancock','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3177,11,23,2015,'Steve Kerley','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3178,11,23,2015,'Billy Jo Kerley','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3179,11,23,2015,'Parrish Ground','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3180,11,23,2015,'Big Field','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3181,11,23,2015,'Hayes Issac','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3182,11,23,2015,'Cogdill','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3183,11,23,2015,'Old Bin Ground','Benton','IL','62812','Franklin','Hood Farms',1,0,19,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3184,10,24,2015,'NV5','Wheatly','AR','72392','St Francis','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3185,10,24,2015,'Pecan Middle','Wheatly','AR','72392','St Francis','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3186,10,24,2015,'Charles','Wheatly','AR','72392','St Francis','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3187,10,24,2015,'East 4','Wheatly','AR','72392','St Francis','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3188,10,24,2015,'2 north Level to F','Penrose','AR','72101','Cross','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3189,10,24,2015,'Strip West','Penrose','AR','72101','Cross','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3190,10,24,2015,'Strip East','Penrose','AR','72101','Cross','Leslie Brown',1,0,27,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3191,10,24,2015,'G2a','Harrisburg','AR','72432','Poinsett','Whit Walls',1,0,26,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3192,163,114,2015,'KOEHLER OLTMAN 150','ROANOKE','IL','61561','WOODFORD','KOEHLER OLTMAN 150',1,1,13,'VELIS_20150506',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3193,163,114,2015,'MILLER HOME 2500','TOWANDA','IL','61776','MCLEAN','MILLER HOME 2500',1,1,13,'VELIS_20150506',0)
commit tran
rollback tran

--TrialCatalog Name Updates
begin tran
update TrialCatalog set Name = 'Ferree 1 Field 8' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3115
update TrialCatalog set Name = 'Ferree 2 Field 9' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3116
update TrialCatalog set Name = 'Ferree 3 Field 2' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3117
update TrialCatalog set Name = 'Ferree 4 Field 4' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3118
commit tran
rollback tran

-- Vin started here
--TrialCatalog Site Updates
begin tran
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2342
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2343
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2344
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2345
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2346
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2347
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2348
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2349
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2350
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2351
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2352
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2353
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2354
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2355
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2356
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2357
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2358
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2359
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2360
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2361
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2362
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2363
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2364
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2365
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2366
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2367
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2368
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2369
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2370
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2371
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2372
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2373
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2374
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2375
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2376
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2377
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2378
update TrialCatalog set Site_Id = 26 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2379
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2961
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2962
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2963
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2964
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2965
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2794
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2967
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2968
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2969
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2970
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2971
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2972
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2973
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2974
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2975
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2976
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2977
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2978
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2979
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2980
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2981
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2982
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2983
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2984
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2985
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2986
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2987
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2988
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2989
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2990
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2991
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2992
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2993
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2994
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2995
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2996
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2997
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2998
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2999
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3000
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3001
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3002
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3003
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3004
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3005
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3006
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3007
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3008
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3009
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3010
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3011
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3012
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3013
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3014
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3015
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3016
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3017
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3018
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3019
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3020
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3021
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3022
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3023
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3024
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3025
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3026
commit tran
rollback tran

--TrialCatalog Zip Updates
--begin tran
--commit tran
--rollback tran


--TrialCatalog County Updates
--begin tran
--commit tran
--rollback tran


--TrialCatalog FarmName updates
--begin tran
--commit tran
--rollback tran




--SRRUser_Trial_xref delete
begin tran
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2635 and SRRUser_ID = 24
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3035 and SRRUser_ID = 33
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3036 and SRRUser_ID = 33
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3037 and SRRUser_ID = 33
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3038 and SRRUser_ID = 33
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3039 and SRRUser_ID = 33
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2314 and SRRUser_ID = 52
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2315 and SRRUser_ID = 52
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2316 and SRRUser_ID = 52
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2317 and SRRUser_ID = 52
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1949 and SRRUser_ID = 118
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1951 and SRRUser_ID = 118
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2019 and SRRUser_ID = 108
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1170 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1171 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1172 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1185 and SRRUser_ID = 91
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1196 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1198 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1199 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1200 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1186 and SRRUser_ID = 91
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 1201 and SRRUser_ID = 89
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2961 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2962 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2963 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2964 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2965 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2794 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2967 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2968 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2969 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2970 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2971 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2972 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2973 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2974 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2975 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2976 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2977 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2978 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2979 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2980 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2981 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2982 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2983 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2984 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2985 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2986 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2987 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2988 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2989 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2990 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 2991 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3103 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3104 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3105 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3106 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3107 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3108 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3109 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3110 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3111 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3112 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3113 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3114 and SRRUser_ID = 40
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS_20150506' where Trial_ID = 3140 and SRRUser_ID = 53
commit tran
rollback tran


--SRRUser_Trial_xref inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (29,3168,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (60,3169,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (60,3170,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (60,3171,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (37,3172,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (37,3173,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3174,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3175,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3176,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3177,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3178,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3179,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3180,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3181,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3182,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3183,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3184,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3185,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3186,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3187,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3188,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3189,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (33,3190,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (24,3191,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (110,3192,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (108,3193,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,1271,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,1272,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,1273,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (87,1170,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (87,1171,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (87,1172,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (87,1185,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (88,1196,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (88,1198,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (88,1199,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (88,1200,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (87,1186,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (88,1201,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2961,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2962,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2963,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2964,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2965,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2794,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2967,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2968,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2969,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2970,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2971,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2972,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2973,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2974,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2975,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2976,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2977,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2978,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2979,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2980,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2981,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2982,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2983,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2984,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2985,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2986,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2987,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2988,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2989,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2990,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,2991,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3103,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3104,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3105,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3106,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3107,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3108,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3109,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3110,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3111,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3112,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3113,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3114,1,'VELIS_20150506')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (54,3140,1,'VELIS_20150506')
commit tran
rollback tran

select @@TRANCOUNT

