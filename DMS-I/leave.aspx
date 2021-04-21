<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="leave.aspx.cs" Inherits="DMS_I.leave" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
	<%--<form id="form2" runat="server">--%>
		<asp:Label ID="lblLeaveID" runat="server" Text="LeaveID">
			<asp:TextBox ID="txtLeaveID" runat="server"></asp:TextBox>
		</asp:Label>

		<asp:Label ID="lblEmpID" runat="server" Text="EmpID">
			<asp:DropDownList ID="ddlEmpID" runat="server"></asp:DropDownList>
		</asp:Label>

		<asp:Label ID="lblApplyDate" runat="server"  CssClass="table-active" class="table table-info" Text="Apply Date">
			<asp:TextBox ID="txtAppDate" runat="server"></asp:TextBox>
		</asp:Label>

		<asp:Label ID="lblLevSub" runat="server" Text="Leave Subject">
			<asp:TextBox ID="txtLevSub" runat="server"></asp:TextBox>
		</asp:Label>

		<asp:Label ID="lbllevDesc" runat="server" Text="Leave Desc">
			<asp:TextBox ID="txtlevDesc" runat="server"></asp:TextBox>
		</asp:Label>

		<asp:Label ID="lblStartDate" runat="server" Text="Start Date">
			<asp:Calendar ID="CalStartDate" runat="server"></asp:Calendar>
		</asp:Label>

		<asp:Label ID="lblEndDate" runat="server" Text="End Date">
			<asp:Calendar ID="calEndDate" runat="server"></asp:Calendar>
		</asp:Label>


		<asp:Label ID="lblWorkManageByEmp" runat="server" Text="WorkManagebyEmp">
			<asp:TextBox ID="txtWrkMngByEmp" runat="server"></asp:TextBox>
		</asp:Label>

			<%--tbl leave status--%>
		

		
		<asp:Label ID="lblActionDate" runat="server" Text="Action Date">
			<div class="row row-cols-6 rounded shadow border p-5 m-5">
			<asp:Calendar ID="calActDate" runat="server" CssClass="rounded">
							</asp:Calendar>
			</div>
		</asp:Label>
		
		<asp:Label ID="lblActionType" runat="server" Text="Action Type">
			<asp:TextBox ID="txtActType" runat="server"></asp:TextBox>
		</asp:Label>

		<asp:Label ID="lblAdminCmnts" runat="server" Text="Admin Comments">
			<asp:TextBox ID="txtAdminCmnts" runat="server"></asp:TextBox>
		</asp:Label>


	<%--</form>--%>
</asp:Content>
