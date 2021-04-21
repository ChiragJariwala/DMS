using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DMS_I
{
    public partial class Site1 : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            

            if (Request.QueryString["id"] == "1")
            {
                logout();
            }


        }

      
        public void logout()
        {
            ScriptManager.RegisterStartupScript(this, this.GetType(),
                "alert",
                "alert('Logout Sucsess!');window.location ='default.aspx';",
                true);

        }
    }
}