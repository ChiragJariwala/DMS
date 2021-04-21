<%@ Page  Language="C#" MasterPageFile="~/Salesman.Master" AutoEventWireup="true" CodeBehind="Home-R.aspx.cs" Inherits="DMS_I.Home_R" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title >Retaailer Homepage</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">


		
		<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
			<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
				Dashboard
			</div>
			<div class="row" id="Dashboard-content">
				<div class="col-md-6 col-xl-3">
					<div class="card shadow">
						<div class="card-body">
							<div class="card-text">
								&#8377
									 <asp:Label ID="Revenue" runat="server" Text="1,32,200"></asp:Label>

								<p class="small">Total Revenue</p>
							</div>
						</div>

					</div>

				</div>


				<div class="col-md-6 col-xl-3">
					<div class="card shadow">
						<div class="card-body">
							<div class="card-text">
								<asp:Label ID="Orders" runat="server" Text="1,200"></asp:Label>
								<p class="small">Orders</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-xl-3">
					<div class="card shadow">
						<div class="card-body">
							<div class="card-text">

								<asp:Label ID="Customer" runat="server" Text="400"></asp:Label>

								<p class="small">Customers</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6 col-xl-3">
					<div class="card shadow">
						<div class="card-body">
							<div class="card-text">

								<asp:Label ID="Label2" runat="server" Text="123"></asp:Label>

								<p class="small">Payment accept Requests</p>
							</div>
						</div>
					</div>
				</div>


			</div>
			<canvas class="my-4 w-100 shadow" id="myChart" width="900" height="380"></canvas>

			<h2>Latest Trasactions</h2>
			<div class="table-responsive">
				<asp:Table ID="Transactions" class="table table-hover" runat="server"></asp:Table>
			</div>
		</main>


</asp:Content>
