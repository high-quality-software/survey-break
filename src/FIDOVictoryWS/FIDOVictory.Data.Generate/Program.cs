using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Data.Generate.Http.Client;
using FIDOVictory.DataContract.Form;

namespace FIDOVictory.Data.Generate
{
    class Program
    {
        static void Main(string[] args)
        {
            var generator = new UploadFormGenerator();
            generator.Run();



        }
    }
}
