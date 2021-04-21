using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DMS_I
{
    public partial class Itemsmaster : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void Calendar1_SelectionChanged(object sender, EventArgs e)
        {
            string dte;
            dte = Calendar1.SelectedDate.ToLongDateString();
            Calendar1.Visible = false;

        }
    }
}