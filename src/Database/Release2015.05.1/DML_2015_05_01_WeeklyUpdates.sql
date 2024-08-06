-- created by gio on 5/1/2015 to update master data
-- ran in prod at 10:30am
use REGFIELDTRIALS
go

--trialcatalog deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='VELIS' 
where Trial_ID in (1093, 1096, 1097, 1098, 1099, 1117, 1118, 1119, 1430, 1831, 2069, 2127, 2521, 2817)

--TrialCatalog Inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3126,163,114,2015,'SOMMER COUNTRY DELIGHT 80','BELLFLOWER','IL','61724','MCLEAN','SOMMER COUNTRY DELIGHT 80',2,1,13,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3127,163,114,2015,'SOMMER COUNTRY DELIGHT 38','BELLFLOWER','IL','61724','MCLEAN','SOMMER COUNTRY DELIGHT 38',2,1,13,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3128,163,114,2015,'SASSE DIERKER','BEASON','IL','61723','LOGAN','SASSE DIERKER',1,1,13,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3129,163,114,2015,'DUFFY 2508 TUCKER ','PONTIAC','IL','61764','LIVINGSTON','DUFFY 2508 TUCKER ',1,1,13,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3130,163,147,2015,'Henderson - North','Redwood Falls','MN','56283','Redwood','Raddatz, Ron',1,1,15,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3131,163,147,2015,'Henderson - South','Redwood Falls','MN','56283','Redwood','Raddatz, Ron',1,1,15,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3132,163,147,2015,'Henderson - East','Redwood Falls','MN','56283','Redwood','Raddatz, Ron',1,1,15,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3133,10,18,2015,'Home Farm #1','Evansville','WI','53536','Rock','Nick Vines',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3134,10,18,2015,'Trippi','Watertown','WI','53094','Jefferson','Tony Schadt',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3135,10,18,2015,'Mather Airport  ','York','WI','53925','Dane','William Hoffman',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3136,10,18,2015,'Bryans','Bristol','WI','53590','Dane','Brett Renk',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3137,10,18,2015,'Bennesh','Bristol','WI','53590','Dane','Brett Renk',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3138,10,18,2015,'Marsh','Bristol','WI','53590','Dane','Brett Renk',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3139,11,18,2015,'Brads North','New Hartford','IA','50660','Butler','Brad Feckers',1,0,22,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3140,11,18,2015,'Home','Atkinson','IL','61235','Henry','Tim Holmstrom',1,0,21,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3141,10,18,2015,'Home','Stockton','WI','61085','Jo Daviess','Rodney Rodgers',1,0,29,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3142,11,17,2015,'1 South','Hancock','MN','56244','Stevens','Roger Blair',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3143,10,17,2015,'Home 1/4','Glyndon','MN','56547','Clay','Curt/Chad Leach',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3144,10,17,2015,'Kuehl North','Glyndon','MN','56548','Clay','Curt/Chad Leach',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3145,10,17,2015,'Kuehl South','Glyndon','MN','56549','Clay','Curt/Chad Leach',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3146,10,17,2015,'Butch','Glyndon','MN','56550','Clay','Curt/Chad Leach',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3147,10,17,2015,'Jepson','Glyndon','MN','56551','Clay','Curt/Chad Leach',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3148,10,17,2015,'Cummings 1/4','Hillsboro','ND','58045','Traill','Glen Hultin',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3149,10,17,2015,'Baldwins','Harwood','ND','58042','Cass','Dale Rust',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3150,10,17,2015,'Half Section','Barnesville','MN','56514','Wilkin','Maier Farms',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3151,10,17,2015,'Garvens','Barnesville','MN','56514','Wilkin','Maier Farms',1,0,30,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3152,11,17,2015,'E-34','Portland ','ND','56274','Steele','Jason/Merle Strand',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3153,11,17,2015,'GL-26-10','Portland ','ND','56275','Steele','Jason/Merle Strand',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3154,11,17,2015,'Finley','Portland ','ND','56276','Steele','Jason/Merle Strand',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3155,11,17,2015,'R17-3','Portland ','ND','56277','Steele','Jason/Merle Strand',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3156,11,17,2015,'Christine North','Christine','ND','58077','Richland','Vance Johnson',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3157,11,17,2015,'N of Hospital','Breckenridge','MN','56520','Wilkin','Vance Johnson',1,0,25,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3158,10,17,2015,'Section 36, NW 1/4','Jud','ND','57454','LaMoure','Rob Hess',1,0,31,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3159,11,23,2015,'Omaha 40','Omaha ','IL','62871','Gallatin ','Jackson Farms',1,0,19,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3160,11,23,2015,'Omaha 20','Omaha ','IL','62872','Gallatin ','Jackson Farms',1,0,19,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3161,11,23,2015,'Saline County','Eldorado','IL','62873','Gallatin ','Jackson Farms',1,0,19,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3162,163,61,2015,'SHOP DIRT RD','NEWTON GROVE','NC','28366','SAMPSON','STRICKLAND FARMING',1,0,12,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3163,163,61,2015,'WOODS PATH','NEWTON GROVE','NC','28366','SAMPSON','STRICKLAND FARMING',1,0,12,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3164,163,129,2015,'Sullenger Kramer Field','NEW MADRID','MO','63869','NEW MADRID','JESSIE SULLENGER FARMS',1,1,14,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3165,163,129,2015,'Lankheit Genes West','Bertrand','MO','63823','Mississippi','Steven Lankheit',1,1,8,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3166,163,129,2015,'Lankheit Blackman','Bertrand','MO','63823','Mississippi','Steven Lankheit',1,1,8,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,286370,163,147,2014,'Bruce Tiffany - South Weeks','REDWOOD FALLS','MN','56283','Redwood','BRUCE TIFFANY WEEKS',1,1,15,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,286770,163,147,2014,'Steve MacHolda - South Cleo/Veenstras','CLEMENTS','MN','56224','Redwood','CLEMENTS FIELDS 4 GROWERS',1,1,15,'VELIS',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3167,163,95,2015,'7462-AG06X6','Oriska','ND','58063','Barnes','John Triebold',1,1,5,'VELIS',0)
commit tran
rollback tran

--TrialCatalog Name Updates
begin tran
update TrialCatalog set Name = 'SULLIVAN' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1885
update TrialCatalog set Name = 'HOG HOUSE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1896
update TrialCatalog set Name = 'BUDDY STRICKLAND NORTH' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846
update TrialCatalog set Name = 'SPRUILL- GA ROAD' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1842
update TrialCatalog set Name = 'JACKSON' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1845
update TrialCatalog set Name = 'STARLYN' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846
update TrialCatalog set Name = 'KEY' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1883
update TrialCatalog set Name = 'BG LEFT - STORE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1895
update TrialCatalog set Name = 'REGINALD MCKINNEY' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1878
update TrialCatalog set Name = 'BIG DITCH' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1887
update TrialCatalog set Name = 'US 264 RIDGE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1861
update TrialCatalog set Name = 'NEW LAKE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1870
update TrialCatalog set Name = 'BONE YARD' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1893
update TrialCatalog set Name = 'Bruce Tiffany - North Weeks' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 28637
update TrialCatalog set Name = 'Steve MacHolda - North Cleo/Veenstras' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 28677
commit tran
rollback tran

-- Vin started here
--TrialCatalog city Updates
begin tran
update TrialCatalog set City = 'PINELEVEL' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1885
update TrialCatalog set City = 'NEWTON GROVE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1896
update TrialCatalog set City = 'NEWTON GROVE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846
update TrialCatalog set City = 'ELIZABETH CITY' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1883
update TrialCatalog set City = 'ENGELHARD' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1878
commit tran
rollback tran

--TrialCatalog Zip Updates
begin tran
update TrialCatalog set Zip = '27576' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1885
update TrialCatalog set Zip = '28366' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1896
update TrialCatalog set Zip = '28366' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846
update TrialCatalog set Zip = '27909' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1883
update TrialCatalog set Zip = '27824' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1878
commit tran
rollback tran


--TrialCatalog County Updates
begin tran
update TrialCatalog set County = 'JOHNSTON' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1885
update TrialCatalog set County = 'SAMPSON' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1896
update TrialCatalog set County = 'SAMPSON' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846
update TrialCatalog set County = 'PASQUOTANK' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1883
update TrialCatalog set County = 'HYDE' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1878
commit tran
rollback tran


--TrialCatalog FarmName updates
begin tran
update TrialCatalog set FarmName = 'BROOKS PEEDIN' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1885
update TrialCatalog set FarmName = 'STRICKLAND FARMING' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1896
update TrialCatalog set FarmName = 'STRICKLAND FARMING' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846
update TrialCatalog set FarmName = 'BRIAN STALLINGS' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1883
update TrialCatalog set FarmName = 'BLACKGOLD FARMS' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1895
update TrialCatalog set FarmName = 'EARL DAWSON PUGH' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1878
update TrialCatalog set FarmName = 'GARY COMSTOCK' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1887
update TrialCatalog set FarmName = 'CHERRY FARMS LLC' , UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1893
commit tran
rollback tran




--SRRUser_Trial_xref delete
begin tran
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1846 and SRRUser_ID = 66
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1878 and SRRUser_ID = 171
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1883 and SRRUser_ID = 66
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1885 and SRRUser_ID = 66
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1887 and SRRUser_ID = 170
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1895 and SRRUser_ID = 169
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1896 and SRRUser_ID = 62
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1093 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1096 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1097 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1098 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1099 and SRRUser_ID = 28
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1117 and SRRUser_ID = 130
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1118 and SRRUser_ID = 130
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1119 and SRRUser_ID = 130
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1430 and SRRUser_ID = 59
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 1831 and SRRUser_ID = 132
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 2069 and SRRUser_ID = 106
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 2127 and SRRUser_ID = 121
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 2521 and SRRUser_ID = 41
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'VELIS' where Trial_ID = 2817 and SRRUser_ID = 28
commit tran
rollback tran


--SRRUser_Trial_xref inserts
begin tran
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1117,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1118,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1119,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1120,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1121,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1122,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (130,1123,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1202,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1203,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1204,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1226,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1227,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1228,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1229,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1230,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1231,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1232,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1235,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1236,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1237,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1238,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1239,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1244,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (158,1245,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (95,1271,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (95,1272,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (95,1273,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (69,1281,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (69,1282,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (69,1283,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (69,1284,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (69,1285,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,1942,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27773,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,27774,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,27775,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27885,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27886,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27887,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27888,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27977,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,27980,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,27983,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,27985,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,27994,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28092,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28093,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28102,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28196,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28199,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28201,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28226,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28446,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28687,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28689,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28690,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28693,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28694,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28764,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28765,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28766,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28767,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28781,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28782,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28798,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28799,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28807,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28808,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28809,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28810,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28812,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28813,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28814,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28820,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28937,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28960,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28961,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (114,28962,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28977,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (115,28978,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (169,1846,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (171,1878,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (66,1883,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (62,1885,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (170,1887,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (169,1895,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (169,1896,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (121,3126,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (121,3127,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (106,3128,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (127,3129,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (59,3130,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (59,3131,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (59,3132,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3133,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3134,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3135,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3136,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3137,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3138,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (52,3139,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3140,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (53,3141,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (60,3142,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3143,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3144,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3145,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3146,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3147,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3148,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3149,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3150,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3151,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3152,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3153,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3154,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3155,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3156,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (173,3157,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (57,3158,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3159,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3160,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (41,3161,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (169,3162,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (169,3163,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (132,3164,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (132,3165,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (132,3166,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (140,286370,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (144,286770,1,'VELIS')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (96,3167,1,'VELIS')
commit tran
rollback tran

select @@TRANCOUNT

-- for testing: lists counts of most recent updates for common tables by userid
SELECT 
  'SRRUser_Trial_Xref' as tbl,
  cast(UpdateDateTime as date) as UpdateDateTime, UpdateUserID, count(*) as CNT
FROM REGFIELDTRIALS.dbo.SRRUser_Trial_Xref
where cast(UpdateDateTime as date) > (select max(dateadd(DAY, -5, UpdateDateTime)) from REGFIELDTRIALS.dbo.SRRUser_Trial_Xref)
group by cast(UpdateDateTime as date) , UpdateUserID
union all
SELECT 
  'TrialCatalog' as tbl,
  cast(UpdateDateTime as date) as UpdateDateTime, UpdateUserID, count(*) as CNT
FROM REGFIELDTRIALS.dbo.TrialCatalog
where cast(UpdateDateTime as date) > (select max(dateadd(DAY, -5, UpdateDateTime)) from REGFIELDTRIALS.dbo.TrialCatalog)
group by cast(UpdateDateTime as date) , UpdateUserID
