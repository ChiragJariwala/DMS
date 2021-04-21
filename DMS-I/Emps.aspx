<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Emps.aspx.cs" Inherits="DMS_I.Emps" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="HomeContent" ContentPlaceHolderID="MainContent" runat="server">

	<h1>Add Emp</h1>
		<hr />
		<asp:Label ID="lblEmpID" runat="server" Text="Emp ID" AssociatedControlID="txtEmpID">
		<asp:TextBox ID="txtEmpID" runat="server"></asp:TextBox>
		</asp:Label>
		<asp:CheckBox ID="ChbActFlag" runat="server" />
		<asp:Label ID="lblActflag" runat="server" Text="Active"></asp:Label>
		<br/>
		<asp:Label ID="lblFname" runat="server" Text="First Name"></asp:Label>
		<asp:TextBox ID="txtFname" runat="server"></asp:TextBox>
		
		<asp:Label ID="lblMname" runat="server" Text="Middle Name"></asp:Label>
		<asp:TextBox ID="txtMname" runat="server"></asp:TextBox>

		<asp:Label ID="lblLname" runat="server" Text="Last Name"></asp:Label>
		<asp:TextBox ID="txtLname" runat="server"></asp:TextBox>

		<asp:Label ID="lblDob" runat="server" Text="DateOfBirth"></asp:Label>
		<asp:Calendar ID="calDob" runat="server"></asp:Calendar>
	
		<asp:Label ID="lblJoinDate" runat="server" Text="Join Date"></asp:Label>
		<asp:Calendar ID="CalJoinDate" runat="server"></asp:Calendar>
	
		<asp:Label ID="lblDesig" runat="server" Text="Designation"></asp:Label>
		<asp:DropDownList ID="ddlDesig" runat="server"></asp:DropDownList>

		<asp:Label ID="lblSubDesig" runat="server" Text="SubDesignation"></asp:Label>
		<asp:DropDownList ID="ddlSubDesig" runat="server"></asp:DropDownList>

		<asp:Label ID="lblEmpType" runat="server" Text="Emp Type"></asp:Label>
		<asp:DropDownList ID="ddlEmpType" runat="server"></asp:DropDownList>

		<asp:Label ID="lblEmailID" runat="server" Text="EmailID"></asp:Label>
		<asp:TextBox ID="txtEmailID" runat="server"></asp:TextBox>
	
		<asp:Label ID="lblContact" runat="server" Text="Contact"></asp:Label>
		<asp:TextBox ID="txtContact" runat="server"></asp:TextBox>

		<asp:Label ID="lblContactType" runat="server" Text="Contact Type"></asp:Label>
		<asp:DropDownList ID="ddlContactType" runat="server"></asp:DropDownList>
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



	
</asp:Content>
