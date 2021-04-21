<%@ Page Title="" Language="C#" MasterPageFile="~/Defaults.Master" AutoEventWireup="true" CodeBehind="LoginPage.aspx.cs" Inherits="DMS_I.WebForm1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="">

        <div class="row mt-5">
            <div class="col-8 mt-5 p-5">
                <table class="table border-0 table-hover table-responsive text-center mt-5 my-auto shadow">
                    <tr class="table-dark h3 fw-bold">
                        <td class="display-6">Title</td>
                        <td class="display-6">Discription</td>
                    </tr>
                    <tr>
                        <td class="h3">Project Name  : </td>
                        <td class="h4">Distributor Managment System</td>
                        
                    </tr> 
                    <tr>
                        <td class="h3">Team Leader  : </td>
                        <td class="h4">Chirag Jariwala | SYCS DIV B</td>
                        
                    </tr>
                    <tr>
                        <td class="h3">Group Member: </td>
                        <td class="h4">Keyur Thakkar&nbsp; | SYCS DIV B</td>
                    </tr>
                      <tr>
                        <td class="h3">Technology Used in Project : </td>
                        <td class="h4">Asp.Net , CSS, Javascript, Bootstrap</td>
                    </tr>
                </table>
            </div>



            <div class="col-4 mt-5 mx-auto">
                <div class="card text-center  w-75 mx-5 shadow">
                    <div class="">
                         </div>
                    <div class="card-body">

                        <div class="card-text text-center display-3">Login </div>
                        <hr />
                   
                        <div class="form-group m-3">

                            <asp:Label ID="Label1" runat="server" Text="User Name" CssClass="h3">
                                <asp:TextBox ID="UserName" runat="server" CssClass="form-control mt-1 form-control-lg"></asp:TextBox>
                            </asp:Label>


                        </div>
                        <div class="form-group m-3">
                            <asp:Label ID="Label2" runat="server" Text="Password" CssClass="h3">
                                <asp:TextBox ID="psd" runat="server" TextMode="Password" CssClass="form-control  mt-1 form-control-lg"></asp:TextBox>
                            </asp:Label>
                        </div>

                        <div class="form-group row">
                            <div class="">
                                <asp:Button ID="Login" runat="server" Text="Login" CssClass="btn btn-lg btn-outline-primary" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>



    </div>

</asp:Content>
