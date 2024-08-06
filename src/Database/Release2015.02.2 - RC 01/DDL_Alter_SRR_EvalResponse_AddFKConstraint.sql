ALTER TABLE [dbo].[SRR_EvalResponse]  WITH CHECK ADD  CONSTRAINT [FK_SRR_EvalResponse_User] FOREIGN KEY([SRR_ID])
REFERENCES [dbo].[User] ([User_ID])
GO

ALTER TABLE [dbo].[SRR_EvalResponse] CHECK CONSTRAINT [FK_SRR_EvalResponse_User]
GO