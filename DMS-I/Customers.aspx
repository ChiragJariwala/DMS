<%@ Page Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Customers.aspx.cs" Inherits="DMS_I.Customers" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">



    <div class="container">
        <div class="row">
            <section class="col ">

                <asp:LinkButton ID="AddItems" runat="server" class="btn mt-3 btn-outline-dark"
                    data-toggle="modal" data-target="#servicesmodal"><i class="bi bi-plus"></i> Add Customers</asp:LinkButton>
            </section>
        </div>
    </div>
    <div class="container">
        <div class="modal fade  modal-fullscreen" id="servicesmodal">
            <div class="modal-dialog  modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Customer Form</h5>
                        <button type="button" class="close"
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!-- modal-header -->
                    <div class="modal-body">



                        <main class="">
                            <div class="d-flex fw-bold justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                Customers
                            </div>
                            <div class="form-group row">


                                <%--<asp:RequiredFieldValidator ID="idvalidation" runat="server" ControlToValidate="StdID" ErrorMessage="Std id can not be blank"></asp:RequiredFieldValidator>--%>
                                <asp:Label runat="server" class="form-label" AssociatedControlID="CustID">Customer ID
								<asp:TextBox runat="server" ID="CustID" placeholder="Customer ID" class="col-sm-4 form-control mt-2 input-group-lg"></asp:TextBox>
                                </asp:Label>


                                <asp:Label runat="server" class="form-label" AssociatedControlID="CustID">CompnyName
								<asp:TextBox runat="server" ID="CmpnyName" placeholder="CompnyName" class="col-sm-4 form-control mt-2 input-group-lg"></asp:TextBox>
                                </asp:Label>

                                <asp:Label runat="server" class="form-label" AssociatedControlID="CustID">Handalby EMP
								<asp:DropDownList runat="server" ID="CtoCEmp" class="col-sm-4 form-control mt-2 input-group-lg">
                                </asp:DropDownList>
                                </asp:Label>

                                <asp:Label runat="server" class="form-label" AssociatedControlID="CustID">Company Type
								<asp:DropDownList runat="server" ID="CmpnyType" class="col-sm-4 form-control mt-2 input-group-lg">
                                </asp:DropDownList>
                                </asp:Label>




                                <p>Address:</p>
                                <hr />

                                <asp:Label runat="server" class="col-sm-5 col-form-label">Address Line 1 :
                <asp:TextBox runat="server" ID="txtAddres1" placeholder="Address Line 1" class="form-control"></asp:TextBox>
                                </asp:Label>


                                <asp:Label runat="server" class="form-label">Address Line 2 :
				<asp:TextBox runat="server" ID="txtAddres2" placeholder="Address Line 2" class="form-control"></asp:TextBox>
                                </asp:Label>

                                <asp:Label runat="server" class="form-label">Postcode :
				<asp:TextBox runat="server" ID="txtPincode" placeholder="Postcode" class="form-control"></asp:TextBox>
                                </asp:Label>

                                <asp:Label runat="server" class="form-label">City :
                <asp:DropDownList ID="dlCity" runat="server" CssClass="mt-1 form-control"></asp:DropDownList>
                                </asp:Label>

                                <asp:Label runat="server" class="form-label">State :
                <asp:DropDownList ID="dlState" runat="server" class="mt-1 form-control"></asp:DropDownList>
                                </asp:Label>


                                <p>Customer Basic Details</p>
                                <hr />
                                <%-- Customer Personal Details --%>
                                <div class="row row-cols-2">
                                    <div class="col">
                                        <asp:Label runat="server" class="form-label">First Name
							            <asp:TextBox runat="server" ID="first_name" placeholder="First Name" class="form-control mt-2 "></asp:TextBox>
                                        </asp:Label>
                                    </div>
                                    <div class="col">
                                        <asp:Label runat="server" class="form-label">Last Name
								    <asp:TextBox ID="LastName" runat="server" class="form-control mt-2"></asp:TextBox>
                                        </asp:Label>
                                    </div>
                                    <div class="col">
                                        <asp:Label runat="server" class="form-label">Email ID
								<asp:TextBox ID="Email" runat="server" class="form-control mt-2"></asp:TextBox>
                                        </asp:Label>
                                    </div>

                                    <div class="col">
                                        <asp:Label runat="server" class="form-label">Phone No :
								        <asp:TextBox runat="server" ID="Phone" placeholder="Phone No" class="form-control mt-2"></asp:TextBox>
                                        </asp:Label>
                                    </div>

                                </div>
                            </div>
                        </main>



                    </div>
                    <!-- modal-body -->
                    <div class="modal-footer">
                        <asp:Button ID="btnsubmit" runat="server" class="btn btn-primary btn-lg" Text="Save" />

                        <asp:Button ID="btnAddNext" runat="server" class="btn btn-danger text-light btn-lg" Text="Save & New" />

                        <button type="button" class="btn btn-secondary"
                            data-dismiss="modal">
                            Back</button>
                    </div>
                    <!-- modal-header -->
                </div>
                <!-- modal-content -->
            </div>
            <!-- modal-dialog -->
        </div>
        <!-- modal fade -->

        <hr />

        <asp:GridView ID="grdStudentDetails" runat="server"
            AutoGenerateEditButton="True" AutoGenerateSelectButton="True" class=" text-decoration-none table h5 table-responsive table-hover rounded shadow-lg border-0 d-lg-table p-5 table-borderless"
            AllowSorting="True" AutoGenerateDeleteButton="True" EmptyDataText="**"
            Font-Names="Montserrat"
            ShowHeaderWhenEmpty="True" DataKeyNames="stdID">
        </asp:GridView>

    </div>
</asp:Content>
