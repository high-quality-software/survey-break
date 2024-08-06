using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FIDOVictory.DataContract.Chemical;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/chemical")]
    public class ChemicalController : ApiController
    {
        [Route("")]
        public List<ChemicalContract> GetChemicals(DateTime lastSync)
        {
            var list = new List<ChemicalContract>();

            var repo = new FIDOVictory.Common.Repository.ChemicalRepository();
            var chemicals = repo.GetChemicals(lastSync);

            foreach (var c in chemicals)
            {
                list.Add(new ChemicalContract()
                    {
                        ChemicalID = c.Chemical_ID,
                        Name = c.ChemicalName,
                        ChemicalTypeID = c.ChemicalType_ID,
                    });
            }

            return list;

        }

        [Route("type")]
        public List<ChemicalTypeItem> GetChemicalTypes(DateTime lastSync)
        {
            var list = new List<ChemicalTypeItem>();

            var repo = new FIDOVictory.Common.Repository.ChemicalRepository();
            var types = repo.GetChemicalTypes(lastSync);

            foreach (var t in types)
            {
                list.Add(new ChemicalTypeItem()
                {
                    ChemicalTypeID = t.ChemicalType_ID,
                    Name = t.ChemicalTypeName,
                });
            }

            return list;

        }
    }
}
