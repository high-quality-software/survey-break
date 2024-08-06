using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Managers.Results
{
    public abstract class AbstractListResult<T>
    {
        public List<T> List { get; set; }
        public int RowCount { get; set; }
    }
}