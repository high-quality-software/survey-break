using System;
using FIDOVictoryWS.Managers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FIDOVictoryWS.Tests.Integration
{
    [TestClass]
    public class ChemicalTest
    {
        [TestMethod]
        public void GetChemicalTypes()
        {
            var lastSync = new DateTime(2010, 01, 01);
            var repo = new FIDOVictory.Common.Repository.ChemicalRepository();
            var list = repo.GetChemicalTypes(lastSync);

            Assert.IsNotNull(list);
        }

        [TestMethod]
        public void GetChemicals()
        {
            var lastSync = new DateTime(2010, 01, 01);
            var repo = new FIDOVictory.Common.Repository.ChemicalRepository();
            var list = repo.GetChemicals(lastSync);

            Assert.IsNotNull(list);
        }
    }
}
