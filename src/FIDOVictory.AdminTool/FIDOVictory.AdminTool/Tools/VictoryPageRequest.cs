using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Tools
{
    public class VictoryPageRequest
    {
        public int PageSize { get; private set; }
        public int Page { get; private set; }

        public int DisplayLength { get; private set; }
        public int DisplayStart { get; private set; }

        public VictoryPageRequest(int pageSize, int page)
        {
            this.Page = page;
            this.PageSize = pageSize;
            this.DisplayLength = pageSize;
            this.DisplayStart = (page * pageSize) + 1;
        }

        //public VictoryPageRequest(DataTablesParam param)
        //{
        //    if (param.iDisplayLength == 0)
        //    {
        //        this.Page = 1;
        //    }
        //    else
        //    {
        //        this.Page = (param.iDisplayStart / param.iDisplayLength) + 1;
        //    }
            
        //    this.PageSize = param.iDisplayLength;
        //    this.DisplayLength = param.iDisplayLength;
        //    this.DisplayStart = param.iDisplayStart;
        //}

    }
}