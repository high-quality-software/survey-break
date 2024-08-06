using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Compression
{
    public class InMemoryCompressor
    {
        public static byte[] Compress(string text)
        {
            var encoding = new ASCIIEncoding();
            var data = encoding.GetBytes(text);
            byte[] cmpData;

            // Compress 
            using (var cmpStream = new MemoryStream())
            {
                using (var hgs = new GZipStream(cmpStream, CompressionMode.Compress))
                {
                    hgs.Write(data, 0, data.Length);
                }
                cmpData = cmpStream.ToArray();
            }

            return cmpData;
        }

        public static string Decompress(byte[] cmpData)
        {
            string text = string.Empty;
            using (var decomStream = new MemoryStream(cmpData))
            {
                using (var hgs = new GZipStream(decomStream, CompressionMode.Decompress))
                {
                    using (var reader = new StreamReader(hgs))
                    {
                        text = reader.ReadToEnd();
                    }
                }
            }

            return text;
        }
    }
}
