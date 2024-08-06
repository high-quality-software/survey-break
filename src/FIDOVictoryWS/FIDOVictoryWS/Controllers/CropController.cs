using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FIDOVictory.DataContract.Crop;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/crop")]
    public class CropController : ApiController
    {

        // GET api/crop
        [Route("")]
        public List<CropItem> GetCropsToSync(DateTime lastSync)
        {
            var list = new List<CropItem>();

            var repo = new FIDOVictory.Common.Repository.CropRepository();
            var crops = repo.GetCrops(lastSync);

            foreach (var c in crops)
            {
                list.Add(new CropItem()
                {
                    CropID = c.Crop_ID,
                    Name = c.CropName,
                });
            }

            return list;
        }

    }
}
