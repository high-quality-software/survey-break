using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Controllers
{
    [RoutePrefix("Image")]
    public class ImageController : Controller
    {

        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [Route("")]
        public FileContentResult Index(Guid id)
        {
            logger.DebugFormat("Accessed by: {0}", UserModel.GetCurrentUserName());

            Data.TrialWorkflowAttachment attachment;
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                attachment = ec.TrialWorkflowAttachments.Where(a => a.Attachment_ID == id).FirstOrDefault();
            }

            var imageDataAsString = Tools.InMemoryCompressor.Decompress(attachment.Attachment);

            //transform the picture's data from string to an array of bytes
            var imageDataAsBytes = Convert.FromBase64String(imageDataAsString);

            //return array of bytes as the image's data to action's response. We set the image's content mime type to image/jpeg
            if (attachment.AttachmentType_ID == 1)
            {
                return new FileContentResult(imageDataAsBytes, "image/jpeg");
            }
            else if (attachment.AttachmentType_ID == 3)
            {
                return new FileContentResult(imageDataAsBytes, "image/gif");
            }
            else if (attachment.AttachmentType_ID == 5)
            {
                return new FileContentResult(imageDataAsBytes, "image/png");
            }

            return null;
        }
    }
}