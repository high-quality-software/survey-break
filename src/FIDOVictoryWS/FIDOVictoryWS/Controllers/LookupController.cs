using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FIDOVictory.DataContract.Lookup;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/lookup")]
    public class LookupController : ApiController
    {
        [Route("")]
        public List<LookupItem> GetLookups(DateTime lastSync)
        {
            var list = new List<LookupItem>();

            var repo = new FIDOVictory.Common.Repository.LookupRepository();
            var lookups = repo.GetLookups(lastSync);

            foreach (var l in lookups)
            {
                list.Add(new LookupItem()
                {
                    LookupID = l.Lookup_ID,
                    Name = l.LookupName,
                });
            }

            return list;

        }
    }
}
