-- created by gio on 5/8/2015 to update master data
-- ran in prod at 
use REGFIELDTRIALS
go

--User to trial deletes
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2798 and SRRUser_ID = 38
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2799 and SRRUser_ID = 38
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 3142 and SRRUser_ID = 60
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 1087 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2795 and SRRUser_ID = 38


--TrialCatalog Deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='jaspar_05082015' where Trial_ID = 3142;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='jaspar_05082015' where Trial_ID = 2799;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='jaspar_05082015' where Trial_ID = 2798;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='jaspar_05082015' where Trial_ID = 1087;
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='jaspar_05082015' where Trial_ID = 2795;


--TrialCatalog Inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3194,10,17,2015,'SE 12-109-56','DeSmet','SD','57231','Kingsbury ','Jeff Gruenhagen ',1,0,31,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3195,10,17,2015,'NE 12-109-56','DeSmet','SD','57231','Kingsbury ','Jeff Gruenhagen ',1,0,31,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3196,10,17,2015,'NW 12-109-56','DeSmet','SD','57231','Kingsbury ','Jeff Gruenhagen ',1,0,31,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3197,10,17,2015,'11.09.56','DeSmet','SD','57231','Kingsbury ','Jeff Gruenhagen ',1,0,31,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3198,10,17,2015,'27-109-56','DeSmet','SD','57231','Kingsbury ','Jeff Gruenhagen ',1,0,31,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3199,11,23,2015,'Eric Cox 2 ','Norris City','IL','62869','White ','Sutton Farms',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3200,11,23,2015,'Harlow','Norris City','IL','62869','White ','Sutton Farms',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3201,11,23,2015,'Sheep Barn 108','Evansville','IN','47701','Vanderburgh','Kleinknecht',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3202,11,23,2015,'Old Henderson River','Evansville','IN','47701','Vanderburgh','Steinkamp',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3203,11,23,2015,'Eisterhild/Naab','Evansville','IN','47701','Vanderburgh','Steinkamp',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3204,11,23,2015,'Happe Place','Evansville','IN','47701','Vanderburgh','Steinkamp',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3205,11,23,2015,'Homer Ms Hahn/Louis Big 76','Evansville','IN','47701','Vanderburgh','Steinkamp',1,0,19,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3206,11,17,2015,'Railroad','Verona','ND','58490','Lamoure','Travis Wiemann ',1,0,24,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3207,11,17,2015,'Chucks North 1/4','Verona','ND','58490','Lamoure','Travis Wiemann ',1,0,24,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3208,11,17,2015,'Tree Grove','Verona','ND','58490','Lamoure','Travis Wiemann ',1,0,24,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3209,11,17,2015,'School','Verona','ND','58490','Lamoure','Travis Wiemann ',1,0,24,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3210,11,17,2015,'Alberts 1/2','Verona','ND','58490','Lamoure','Travis Wiemann ',1,0,24,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3211,11,17,2015,'Alberts Highway','Verona','ND','58490','Lamoure','Travis Wiemann ',1,0,24,'VELIS_20150505',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3212,11,23,2015,'South of Ralph H 3','Sumner','IL','62466','Lawrence','Hasewinkle',1,0,19,'VELIS_20150505',0)

commit tran

--User - TrialCatalog Inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (57,3194,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (57,3195,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (57,3196,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (57,3197,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (57,3198,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3199,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3200,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (38,3201,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (38,3202,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (38,3203,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (38,3204,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (38,3205,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3206,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3207,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3208,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3209,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3210,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3211,1,'JASPAR_05082015')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (23,3212,1,'JASPAR_05082015')

commit tran
rollback tran


--TrialCatalog Name Updates
begin tran
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2264
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2272
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2271
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2270
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2269
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2268
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2267
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2265
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2273
update TrialCatalog set Site_Id = 19 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2794
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2266
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2274
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2275
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2276
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2277
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2278
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2162
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2280
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2282
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2263
update TrialCatalog set Site_Id = 23 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2895
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2238
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2281
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2162
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2240
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2243
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2242
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2241
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2239
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2237
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2245
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2235
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2246
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2233
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2232
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2231
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2230
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2229
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2228
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2236
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2253
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2261
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2260
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2259
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2258
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2257
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2256
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2244
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2254
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2262
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2252
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2251
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2250
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2249
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2248
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2247
update TrialCatalog set Site_Id = 17 , UpdateDateTime=GETDATE(), UpdateUserID = 'jaspar_05082015' where Trial_ID = 2255

commit tran
rollback tran

-- Vin started here
--TrialCatalog Site Updates
begin tran
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
commit tran
rollback tran


--SRRUser_Trial_xref inserts
begin tran
commit tran
rollback tran

select @@TRANCOUNT



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
	
	