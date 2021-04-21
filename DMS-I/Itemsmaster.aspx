<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Itemsmaster.aspx.cs" Inherits="DMS_I.Itemsmaster" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

	

		<div class="container">
			<div class="row">
				<section class="col ">			

					<asp:LinkButton ID="AddItems" runat="server" class="btn mt-3"
						data-toggle="modal" data-target="#servicesmodal"><i class="bi bi-plus"></i> Add Item</asp:LinkButton>



					<div class="modal fade  modal-fullscreen" id="servicesmodal">
						<div class="modal-dialog  modal-xl">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Pest Control</h5>
									<button type="button" class="close"
										data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<!-- modal-header -->
								<div class="modal-body">
								
									<%-- place content here --%>
								
									<%--tbl item list--%>

									<asp:Label ID="lblProdCode" runat="server" Text="Product Code">
									<asp:TextBox ID="txtProdCode" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblProdName" runat="server" Text="Product Name">
									<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
									</asp:Label>


									<asp:Label ID="lblManufacturCode" runat="server" Text="Manufactur Code">
										<asp:DropDownList ID="ddlManufacturCode" runat="server"></asp:DropDownList>
									</asp:Label>

									<asp:Label ID="lblIcCode" runat="server" Text="Ic Code">
										<asp:DropDownList ID="ddlIcCode" runat="server"></asp:DropDownList>
									</asp:Label>

									<asp:Label ID="lblTradePrice" runat="server" Text="Trade Price">
										<asp:TextBox ID="txtTradePrice" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblManufactureDiscount" runat="server" Text="Manufacture Discount">
										<asp:TextBox ID="txtManufDis" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblNetPrice" runat="server" Text="Net Price">
										<asp:TextBox ID="txtNetPrs" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblLiceneceNumber" runat="server" Text="Licenece Number">
										<asp:TextBox ID="txtLicNum" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblSGST" runat="server" Text="SGST">
										<asp:TextBox ID="txtSGST" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblCGST" runat="server" Text="CGST">
										<asp:TextBox ID="txtCGST" runat="server"></asp:TextBox>
									</asp:Label>

									<%--tbl Batch Details--%>


									<asp:Label ID="lblBdID" runat="server" Text="BdID">
										<asp:TextBox ID="txtBdID" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblSouceType" runat="server" Text="Source Type">
										<asp:DropDownList ID="ddlSrcType" runat="server"></asp:DropDownList>
									</asp:Label>


									<asp:Label ID="lblSrcSbCate" runat="server" Text="SourceSubCategory">
										<asp:DropDownList ID="ddlSrcSbCate" runat="server"></asp:DropDownList>
									</asp:Label>

									<asp:Label ID="lblSrcNumber" runat="server" Text="Source Number">
										<asp:DropDownList ID="ddlSrcNum" runat="server"></asp:DropDownList>
									</asp:Label>

									<asp:Label ID="lblBdProdCode" runat="server" Text="Product Code">
										<asp:DropDownList ID="ddlProdCoed" runat="server"></asp:DropDownList>
									</asp:Label>

									<asp:Label ID="lblBdProdName" runat="server" Text="Product Name">
										<asp:TextBox ID="txtProdName" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblProdBatch" runat="server" Text="Product Batch">
										<asp:TextBox ID="txtProdBatch" runat="server"></asp:TextBox>
									</asp:Label>
									<br />
									<br />
									<br />
									<br />

									<asp:Label ID="lblProdExp" runat="server" Text="Product Expirydate">	</asp:Label>
									<asp:Calendar ID="Calendar1" runat="server" OnSelectionChanged="Calendar1_SelectionChanged" ></asp:Calendar>
									
								
									<br />
									<br />
									<br />
									<br />

									<asp:Label ID="lblprodQty" runat="server" Text="Product Quantity">
										<asp:TextBox ID="txtProdQty" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblUserID" runat="server" Text="UserID">
										<asp:DropDownList ID="ddlUserID" runat="server"></asp:DropDownList>
									</asp:Label>

									<%--tbl Item Catagory--%>

									<asp:Label ID="lblIcCodeID" runat="server" Text="IcCodeID">
										<asp:TextBox ID="txtIcCodeID" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblCataName" runat="server" Text="Catagory Name">
										<asp:TextBox ID="txtCataName" runat="server"></asp:TextBox>
									</asp:Label>


									<asp:Label ID="lblStorageName" runat="server" Text="Storage Type">
										<asp:DropDownList ID="ddlStorageType" runat="server"></asp:DropDownList>
									</asp:Label>

									
									<asp:Label ID="lblGroupCode" runat="server" Text="Group Code">
										<asp:DropDownList ID="txtGroupCode" runat="server"></asp:DropDownList>
									</asp:Label>


									<%--tbl Manu Facture--%>

									<asp:Label ID="lblManfCodeID" runat="server" Text="Manufacture Code">
										<asp:TextBox ID="txtManfCode" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblMfName" runat="server" Text="Manufacture Name">
										<asp:TextBox ID="txtMfName" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblMfcontactNo" runat="server" Text="Manufacture Contact">
										<asp:TextBox ID="txtMfContNo" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblMfAddress" runat="server" Text="Manufacture Address">
										<asp:TextBox ID="txtMfAddress" runat="server"></asp:TextBox>
									</asp:Label>

									<asp:Label ID="lblContactPerson" runat="server" Text="Contact person">
										<asp:TextBox ID="txtContPerson" runat="server"></asp:TextBox>
									</asp:Label>

									
									<%-- end of placeholder --%>

								</div>
								<!-- modal-body -->
								<div class="modal-footer">
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
				</section>
			</div>
			<!-- row -->
		</div>
	

</asp:Content>
