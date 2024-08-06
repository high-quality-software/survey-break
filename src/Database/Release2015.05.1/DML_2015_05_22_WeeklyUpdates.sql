-- created by gio on 5/22/2015 to update master data
-- ran in prod at 
use REGFIELDTRIALS
go

--TrialCatalog Deletes
update TrialCatalog set IsDeleted = 1, UpdateDateTime = GETDATE(), UpdateUserID='JASPAR' where Trial_ID in (1935,3020,3009,3023)

--TrialCatalog inserts
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3231,163,114,2015,'Hild Hinrich S- DT','Illiopolis','IL','62539','Sangamon','Hild Hinrich S- DT',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3232,163,114,2015,'Hild Hinrich S- VG','Illiopolis','IL','62539','Sangamon','Hild Hinrich S- VG',2,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3233,163,114,2015,'Duffy SJ20 TD80 2415','Pontiac','IL','61764','Livingston','Duffy SJ20 TD80 2415',1,1,13,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3234,10,24,2015,'S160 Low 40','McClure','IL','62957','Alexander','Blake Gerard',1,0,26,'JASPAR',0)
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialCatalog] ([ComplianceStatus],[Crop_ID],[Trial_ID],[IRPUser_ID],[SRRLeadUser_ID],[TrialYear],[Name],[City],[State],[Zip],[County],[FarmName],[Trait_ID],[Internal],[Site_ID],[UpdateUserID],[Archive]) VALUES ('Stewarded',1,3235,11,21,2015,'Paul Boomershine ','Tipp City','OH','45371','Miami','Eldon Wray ',1,0,17,'JASPAR',0)


--SRRUser_Trial_Xref deletes
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1935 and SRRUser_ID = 104
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3020 and SRRUser_ID = 37
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3009 and SRRUser_ID = 37
update SRRUser_Trial_Xref set IsDeleted = 1, UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 3023 and SRRUser_ID = 37

--SRRUser_Trial_Xref inserts
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (109,3231,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (109,3232,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (127,3233,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (42,3234,1,'JASPAR')
INSERT INTO [REGFIELDTRIALS].[dbo].[SRRUser_Trial_Xref] ([SRRUser_ID],[Trial_ID],[PrimarySRR],[UpdateUserID]) VALUES (29,3235,1,'JASPAR')

COMMIT TRAN
ROLLBACK TRAN

--TrialCatalog Name Updates
begin tran
update TrialCatalog set Name = '684-AG12X6' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1271
update TrialCatalog set Name = '7489-AG12X6' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1272
update TrialCatalog set Name = '7488-AG12X6' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1273
update TrialCatalog set Name = 'Karkosh, Al - Taylor''s Home SE', UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 1041
commit tran
rollback tran


--TrialCatalog IPRUserid updates
begin tran
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2128
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2129
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2130
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2131
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2132
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2133
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2134
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2135
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2136
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2137
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2138
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2139
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2140
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2141
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2142
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2143
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2144
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2145
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2146
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2147
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2148
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2149
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2150
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2151
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2152
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2153
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2154
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2155
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2156
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2157
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2158
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2159
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2160
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2161
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2162
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2163
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2164
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2165
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2166
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2167
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2168
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2169
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2170
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2171
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2172
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2173
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2174
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2175
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2176
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2177
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2178
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2179
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2180
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2181
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2182
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2183
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2184
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2185
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2186
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2187
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2188
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2189
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2190
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2191
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2192
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2193
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2194
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2195
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2196
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2197
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2198
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2199
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2200
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2201
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2202
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2203
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2204
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2205
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2206
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2207
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2208
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2209
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2210
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2211
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2212
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2213
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2214
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2215
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2216
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2217
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2218
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2219
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2220
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2221
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2222
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2223
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2224
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2225
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2226
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2227
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2228
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2229
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2230
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2231
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2232
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2233
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2237
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2241
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2242
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2243
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2244
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2245
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2246
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2247
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2248
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2249
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2250
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2251
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2252
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2253
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2254
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2255
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2256
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2257
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2258
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2259
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2260
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2261
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2262
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2263
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2264
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2265
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2266
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2267
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2268
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2269
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2270
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2271
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2272
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2273
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2274
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2275
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2276
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2277
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2278
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2279
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2280
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2281
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2282
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2283
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2284
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2285
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2288
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2289
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2290
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2291
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2292
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2293
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2294
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2295
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2296
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2297
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2298
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2299
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2300
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2301
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2302
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2303
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2304
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2305
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2306
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2307
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2308
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2309
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2310
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2311
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2318
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2319
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2320
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2321
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2322
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2323
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2324
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2325
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2326
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2327
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2328
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2329
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2330
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2331
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2332
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2333
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2334
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2335
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2336
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2337
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2338
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2339
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2340
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2341
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2342
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2343
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2344
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2345
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2346
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2347
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2348
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2349
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2350
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2351
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2352
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2353
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2354
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2355
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2356
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2357
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2358
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2359
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2360
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2361
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2362
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2363
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2364
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2365
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2366
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2367
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2368
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2369
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2370
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2371
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2372
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2373
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2374
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2375
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2376
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2377
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2378
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2379
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2380
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2381
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2382
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2383
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2384
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2385
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2386
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2387
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2388
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2389
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2390
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2391
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2392
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2393
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2394
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2395
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2396
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2397
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2398
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2399
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2400
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2401
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2402
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2403
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2404
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2405
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2406
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2407
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2408
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2409
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2411
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2412
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2413
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2414
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2415
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2416
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2417
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2418
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2419
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2420
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2421
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2422
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2423
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2424
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2425
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2426
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2427
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2428
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2429
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2430
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2431
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2432
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2433
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2434
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2435
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2436
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2437
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2438
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2439
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2440
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2441
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2442
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2443
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2444
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2445
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2446
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2447
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2448
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2449
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2450
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2451
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2452
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2453
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2454
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2455
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2456
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2457
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2458
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2459
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2460
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2461
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2462
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2463
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2464
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2465
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2466
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2467
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2468
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2469
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2470
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2471
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2472
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2473
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2474
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2475
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2476
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2477
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2478
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2479
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2480
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2481
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2482
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2483
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2484
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2485
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2486
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2487
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2488
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2489
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2490
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2491
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2492
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2493
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2494
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2495
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2496
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2497
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2498
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2499
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2500
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2501
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2502
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2503
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2504
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2505
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2506
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2507
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2508
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2509
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2510
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2511
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2512
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2513
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2514
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2515
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2516
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2517
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2518
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2519
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2520
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2522
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2523
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2524
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2525
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2526
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2527
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2528
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2529
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2530
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2531
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2532
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2533
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2534
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2535
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2536
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2537
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2538
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2539
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2540
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2541
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2542
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2543
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2544
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2546
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2547
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2548
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2549
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2550
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2551
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2552
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2553
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2554
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2555
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2556
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2557
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2558
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2559
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2560
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2561
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2562
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2563
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2564
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2565
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2566
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2567
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2568
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2569
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2570
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2571
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2572
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2573
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2574
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2575
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2576
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2577
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2578
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2579
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2580
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2581
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2582
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2583
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2584
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2585
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2586
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2587
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2588
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2589
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2590
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2591
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2592
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2593
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2594
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2595
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2596
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2597
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2598
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2599
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2601
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2602
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2603
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2604
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2605
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2606
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2607
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2608
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2609
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2610
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2612
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2613
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2614
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2615
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2616
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2617
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2618
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2619
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2620
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2621
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2622
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2623
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2624
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2625
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2626
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2627
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2628
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2629
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2630
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2631
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2632
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2633
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2634
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2636
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2637
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2638
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2639
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2640
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2641
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2642
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2643
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2644
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2645
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2646
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2647
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2648
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2649
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2650
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2651
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2652
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2653
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2654
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2655
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2656
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2657
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2658
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2659
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2660
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2661
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2662
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2663
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2664
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2665
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2666
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2667
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2668
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2669
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2670
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2671
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2672
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2673
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2674
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2675
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2676
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2677
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2678
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2679
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2680
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2681
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2682
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2683
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2684
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2685
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2686
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2687
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2688
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2689
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2690
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2692
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2693
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2694
update TrialCatalog set IRPUser_ID = '10' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2695
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2696
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2697
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2698
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2699
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2700
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2701
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2702
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2703
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2704
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2705
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2706
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2707
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2708
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2709
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2710
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2711
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2712
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2713
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2714
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2715
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2716
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2717
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2718
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2719
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2720
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2721
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2722
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2723
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2724
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2725
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2726
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2727
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2728
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2729
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2730
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2731
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2732
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2733
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2734
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2735
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2736
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2737
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2738
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2739
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2740
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2741
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2742
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2743
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2744
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2745
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2746
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2747
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2748
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2749
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2750
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2751
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2752
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2753
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2754
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2755
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2756
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2757
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2758
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2759
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2760
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2761
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2762
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2763
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2764
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2765
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2766
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2767
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2768
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2769
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2770
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2771
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2772
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2773
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2774
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2775
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2776
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2777
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2778
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2779
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2780
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2781
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2782
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2783
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2784
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2785
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2786
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2787
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2788
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2789
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2790
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2791
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2792
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2793
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2796
update TrialCatalog set IRPUser_ID = '11' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2797
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2800
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2801
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2802
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2803
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2804
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2807
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2809
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2810
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2811
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 2812
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 99999100
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 99999101
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 99999102
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 99999103
update TrialCatalog set IRPUser_ID = '163' , UpdateDateTime=GETDATE(), UpdateUserID = 'JASPAR' where Trial_ID = 99999104
commit tran

--Unlock WorkflowComplete/unlock request
--select count(*) from trialprogress WHERE TRIAL_ID = 1 AND WORKFLOW_ID = 2 AND IsDeleted=0 --cannot update userid and usertime
--LOCKED: SET WorkflowComplete = 1 
--UNLOCKED: SET WorkflowComplete = 0
begin tran
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2969 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2970 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2971 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2972 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2973 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2974 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2975 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2979 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2980 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2981 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2982 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2983 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3199 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =3200 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1043 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1027 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1030 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1035 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1056 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1057 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1062 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1061 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1022 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2791 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2272 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2273 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2274 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1044 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1020 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1031 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1045 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1046 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1049 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1058 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1059 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1065 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1066 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2118 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2117 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2119 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1417 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1416 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1419 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1420 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1415 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1421 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1418 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1449 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1443 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1448 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1445 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1442 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1444 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1440 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1441 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1450 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1439 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1446 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1447 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1364 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1362 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1365 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1363 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1360 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1366 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1361 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1358 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1359 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1459 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1458 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1457 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1460 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1461 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1456 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1382 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1378 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1380 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1377 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1381 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1379 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1371 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1372 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1368 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1369 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1370 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1387 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1388 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1386 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1385 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1390 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1389 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1438 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2745 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2143 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2144 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2145 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2146 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1310 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1339 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1344 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1337 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1340 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1343 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1335 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1305 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1294 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1293 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1298 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1295 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1170 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1171 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1182 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1182 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1182 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1183 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1184 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1184 AND WORKFLOW_ID = 6  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1184 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1185 AND WORKFLOW_ID = 3  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1186 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1196 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1200 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =1201 AND WORKFLOW_ID = 19  AND IsDeleted=0
UPDATE TrialProgress SET WorkflowComplete = 0 WHERE TRIAL_ID =2057 AND WORKFLOW_ID = 6  AND IsDeleted=0

commit tran
rollback tran


-- we needed to set all of the forms for 2014 trials to completed EXCEPT for workflow_id =  16.  These 2 trials will need to have all the forms set to completed EXCEPT for form 16 (Volunteer Monitoring form)
BEGIN TRAN
INSERT INTO [REGFIELDTRIALS].[dbo].[TrialProgress]
           ([Trial_ID]
           ,[SRRUser_ID]
           ,[Workflow_ID]
           ,[WorkflowComplete]
           ,[WorkflowCompleteDate]
           ,[UpdateDateTime]
           ,[UpdateUserID])
SELECT T.Trial_ID, ISNULL(x.SRRUser_ID,4), w.Workflow_ID, 1, GETDATE(), GETDATE(), 'JASPAR'
FROM [REGFIELDTRIALS].[dbo].[TrialCatalog] T
	left outer join
		 SRRUser_Trial_Xref x on x.Trial_ID = t.Trial_ID and x.IsDeleted = 0 
	CROSS JOIN workflow w 
WHERE T.Trial_ID IN (286370,286770)
	AND T.IsDeleted = 0 
	AND W.ISDELETED =0
	AND W.Workflow_ID <> 16     

rollback tran
commit tran

--Map file change
begin tran
delete from [TrialWorkflowAttachment] where Attachment_ID= '3D641E0A-3534-464A-B8A0-BCE95104126A'
commit tran
SELECT Attachment_ID,
	   AttachmentName
FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
WHERE IsDeleted = 0 
	AND TRIAL_ID = 1918
	--AND 
	--(CHARINDEX('$', AttachmentName, 1) > 0 
	--	or CHARINDEX('-', AttachmentName, 1) > 0 
	--	or CHARINDEX('.', AttachmentName, 1) > 0 
	--	or CHARINDEX('+', AttachmentName, 1) > 0 				
	--	or CHARINDEX('!', AttachmentName, 1) > 0 				
	--	or CHARINDEX('*', AttachmentName, 1) > 0 				
	--	or CHARINDEX('''', AttachmentName, 1) > 0 				
	--	or CHARINDEX('(', AttachmentName, 1) > 0 				
	--	or CHARINDEX(')', AttachmentName, 1) > 0 				
	--	or CHARINDEX(',', AttachmentName, 1) > 0 				
	--	or CHARINDEX('&', AttachmentName, 1) > 0 						
	--	or CHARINDEX('#', AttachmentName, 1) > 0 						
	--	or CHARINDEX('''', AttachmentName, 1) > 0 						
	--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '$', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('$', AttachmentName, 1) > 0
--)
	
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '-', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('-', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '.', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('.', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '+', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('+', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '!', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('!', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '*', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('*', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '''', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('''', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '(', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('(', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, ')', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX(')', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, ',', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX(',', AttachmentName, 1) > 0
--)

--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '#', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('#', AttachmentName, 1) > 0
--)
--UPDATE TrialWorkflowAttachment 
--SET AttachmentName = REPLACE(AttachmentName, '&', ''), UpdateDateTime = GETDATE()		
--WHERE Attachment_ID IN 
--(
--	SELECT Attachment_ID
--	FROM [REGFIELDTRIALS].[dbo].[TrialWorkflowAttachment]
--	WHERE IsDeleted = 0 
--		AND CHARINDEX('&', AttachmentName, 1) > 0
--)





select @@TRANCOUNT


begin tran
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
commit tran

--2: -- hard delete user-trial associations that are soft-deleted	
 DELETE FROM dbo.SRRUser_Trial_Xref WHERE ISDELETED = 1 and srruser_id in 
	(
		SELECT USER_ID FROM [USER] where useralias in ('DWBRICK','GMCNUTT') and isdeleted = 0 
	)  
	
	