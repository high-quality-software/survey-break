USE [REGFIELDTRIALS]
GO
/****** Object:  Table [dbo].[ChemicalType]    Script Date: 02/24/2015 08:32:15 ******/
SET IDENTITY_INSERT [dbo].[ChemicalType] ON
INSERT [dbo].[ChemicalType] ([ChemicalType_ID], [ChemicalTypeName], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (1, N'Pre-Planting Burndown', CAST(0x0000A44500000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalType] ([ChemicalType_ID], [ChemicalTypeName], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (2, N'Pre-Emergence', CAST(0x0000A44800000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalType] ([ChemicalType_ID], [ChemicalTypeName], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (3, N'Post-Emergence', CAST(0x0000A44800000000 AS DateTime), N'HCASA', 0)
SET IDENTITY_INSERT [dbo].[ChemicalType] OFF
/****** Object:  Table [dbo].[ChemicalMaster]    Script Date: 02/24/2015 08:32:15 ******/
SET IDENTITY_INSERT [dbo].[ChemicalMaster] ON
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (1, N' Roundup Brand Agricultural', 1, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (2, N'AMS + 2,4-D', 1, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (3, N' Gramoxone SL', 1, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (4, N'Harness', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (5, N'Harness® Xtra', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (6, N'Harness® Xtra 5.6L', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (7, N'Degree® Xtra', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (8, N'TripleFLEX® Herbicide', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (9, N'Surestart', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (10, N'Lumax EZ', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (11, N'Lexar EZ', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (12, N'Callisto', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (13, N'Callisto GT', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (14, N'Callisto Xtra ', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (15, N'Corvus', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (16, N'Guardsman MAX', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (17, N'Staunch', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (18, N'Volley', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (19, N'Authority', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (20, N'Valor', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (21, N'Warrant', 2, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (22, N'Roundup Brand Agricultural', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (23, N'Atrazine', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (24, N'Armezon', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (25, N'Halex Gt', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (26, N'Callisto', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (27, N'Callisto GT', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (28, N'Impact', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (29, N'Hornet', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (30, N'Laudis', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (31, N'Widematch', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (32, N'Status', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (33, N'Liberty', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (34, N'Roundup', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (35, N'Aim EW', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
INSERT [dbo].[ChemicalMaster] ([Chemical_ID], [ChemicalName], [ChemicalType_ID], [UpdateDateTime], [UpdateUserID], [IsDeleted]) VALUES (36, N'Basagran', 3, CAST(0x0000A41300000000 AS DateTime), N'HCASA', 0)
SET IDENTITY_INSERT [dbo].[ChemicalMaster] OFF
