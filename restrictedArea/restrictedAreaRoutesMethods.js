let db;
const loggerService = require('./../logger_service');
const logger = new loggerService('rbService');
const fs = require('fs');
const path = require("path");

module.exports = injectedDBAccess => {

  db = injectedDBAccess;

  return {
    createcustomers: createCustomers,
    updatecustomers: updateCustomers,
    deletecustomers: deleteCustomers,
    customers: getCustomers,
    customerbyid: customerbyid,
    createproducts: createProduct,
    updateproducts: updateProduct,
    deleteproducts: deleteProduct,
    products: getProducts,
    productsbyid: getProductsById,
    createdeals: createDeals,
    updatedeals: updateDeals,
    deletedeals: deleteDeals,
    deals: getDeals,
    createsuppliers: createSuppliers,
    updatesuppliers: updateSuppliers,
    deletesuppliers: deleteSuppliers,
    suppliers: getSuppliers,
    suppliersbyid: getSuppliersById,
    createcancelreason: createCancelReason,
    updatecancelreason: updateCancelReason,
    deletecancelreason: deleteCancelReason,
    cancelreason: getCancelReason,
    createstaff: createStaff,
    updatestaff: updateStaff,
    deletestaff: deleteStaff,
    staff: getStaff,
    staffbyid: getStaffByID,
    createcalendar: createCalendar,
    updatecalendar: updateCalendar,
    deletecalendar: deleteCalendar,
    updatecalendarstatus: updateCalendarStatus,
    calendars: getCalendars,
    calendarById: getCalendarById,
    calendarfilter: getCalendarFilter,
    createservices: createService,
    updateservices: updateService,
    deleteservices: deleteService,
    services: getService,
    servicesgetbyid: getServicesById,
    servicescategory: getServicesCategory,
    createbookings: createBookings,
    updatebookings: updateBookings,
    deletebookings: deleteBookings,
    bookings: getBookings,
    updateinstock: updateInStock,
    updatedestock: updateDeStock,
    createproductcategory: createProductCategory,
    updateproductcategory: updateProductCategory,
    deleteproductcategory: deleteProductCategory,
    getlistproductcategory: getListProductCategory,
    createproductbrand: createProductBrand,
    updateproductbrand: updateProductBrand,
    deleteproductbrand: deleteProductBrand,
    getlistproductbrand: getListProductBrand,
    createproductunitofmeasure: createProductUnitOfMeasure,
    updateproductunitofmeasure: updateProductUnitOfMeasure,
    deleteproductunitofmeasure: deleteProductUnitOfMeasure,
    getlistproductunitofmeasure: getListProductUnitOfMeasure,
    createlocations: createLocations,
    updatelocations: updateLocations,
    deletelocations: deleteLocations,
    getlistlocations: getListLocations,
    getlistlocationbytenantid: getListLocationbytenantid,
    createpaymenttype: createPaymentType,
    updatepaymenttype: updatePaymentType,
    deletepaymenttype: deletePaymentType,
    getlistpaymenttype: getListPaymentType,
    getpaymenttypebyid: getListPaymentTypeById,
    createresourcesdb: createResources,
    updateresourcesdb: updateResources,
    deleteresourcesdb: deleteResources,
    getlistresoureces: getListResources,
    getresourcesbyid: getResourcesById,
    createsales: createSales,
    updatesales: updateSales,
    deletesales: deleteSales,
    sales: getSales,
    saleById: getSaleById,
    changecurrentlocation: changecurrentlocation,
    createreferralsources: createReferralSources,
    updatereferralsources: updateReferralSources,
    deletereferralsources: deleteReferralSources,
    getreferralsources: getReferralSources,
    createclosedates: createCloseDates,
    updateclosedates: updateCloseDates,
    deleteclosedates: deleteCloseDates,
    getclosedates: getCloseDates,
    updatebusinessdetails: updateBusinessDetails,
    getbusinessdetailsbytenant: getBusinessDetailsByTenant,
    dailysalesreport: dailysalesreport,
    inventoryperlocationreport: inventoryperlocationreport,
    outofstockreport: outofstockreport,
    appointmentsreport: appointmentsreport,
    inventorytransactionsreport: inventorytransactionsreport,
    salessummaryreport: salessummaryreport,
    dashboardreport: dashboardreport,
    createcommision: createCommision,
    updatecommision: updateCommision,
    deletecommision: deleteCommision,
    getListcommision: getListCommision,
    getcommisionbyid: getCommisionByID,
    dailysalesreport: dailySalesReport,
    createshippingcourier: createShippingCourier,
    updateshippingcourier: updateShippingCourier,
    deleteshippingcourier: deleteShippingCourier,
    getshippingcourier: getShippingCourier,
    createappointmenttypes: createAppointmentTypes,
    updateappointmenttypes: updateAppointmentTypes,
    deleteappointmenttypes: deleteAppointmentTypes,
    getappointmenttypes: getAppointmentTypes,
    createuserprofile: createUserProfile,
    updateuserprofile: updateUserProfile,
    getusersprofile: getUserProfile,
    createsourceofsales: createSourceofSales,
    updatesourceofsales: updateSourceofSales,
    deletesourceofsales: deleteSourceofSales,
    getsourceofsales: getSourceofSales,
    salesbypaymenttype: SalesByPaymentType,
    salebyproductcategory: SalesByProductCategory,
    salesbyshippingcourier: SalesByShippingCourier,
    salesbyitem: SalesByItem,
    salesbylocation: saleByLocation,
    salesbycustomers: saleByCustomers,
    salesbyhours: saleByHours,
    salesbychannel: saleByChannel,
    salesbyteammembers: salesByTeamMembers,
    salesbystaffmembers: salesByStaffMembers,
    salesbymemberbreakdown: salesByMemberBreakdown,
    salesbyyear: salesByYear,
    salesbylogs: salesByLogs,
    salesbymonths: salesByMonths,
    salesbydays: salesByDay,
    salesbyhourofday: salesByHourOfDay,
    salesbyquarter: salesByQuarter,
    createuseraddresses: createUserAddresses,
    updateuseraddresses: updateUseraddresses,
    defaultcustomer: getDefaultcustomer,
    productstocksonhandperlocation: ProductStocksOnHandPerLocation,
    updateinvoicestatus: UpdateInvoiceStatus,
    createmultipayments: createMultiPayments,
    updatedeliverystatus: updateDeliveryStatus,
    createvouchers: createVouchers,
    updatevouchers: updateVouchers,
    deletevouchers: deleteVouchers,
    getlistvouchers: getListVouchers,
    getvouchersbyid: getVouchersByID,
    getsalesvouchers: GetSalesVouchers,
    financespaymentsummary: financesPaymentSummary,
    financespaymentslog: financesPaymentsLog,
    financestaxessummary: financesTaxesSummary,
    financessummary: financesSummary,
    inventorystockmovementlog: inventoryStockMovementLog,
    inventorystockmovementsummary: inventoryStockMovementSummary,
    inventorystockonhand: inventoryStockOnHand,
    inventoryproductsalesperformance: inventoryProductSalesPerformance,
    inventorystockconsumption: inventoryStockConsumption,
    appointmentsummary: appointmentSummary,
    appointmentcancellations: appointmentCancellations,
    tipscollected: tipsCollected,
    discountsummary: discountSummary,
    outstandinginvoices: outstandingInvoices,
    clientlist: clientList,
    clientretention: clientRetention,
    vouchersales: voucherSales,
    voucherredemptions: voucherRedemptions,
    voucheroutstandingbalance: voucherOutStandingBalance,
    teammemberworkinghours:teamMemberWorkingHours,
    tipsbyteammember: tipsbyTeamMember,
    teammembercommssiondetailed: teamMemberCommssionDetailed,
    teammembercommssionsummary: teammemberCommssionSummary,
    send_mail: sendMail,
    createmembership: createMembership,
    updatemembership: updateMembership,
    deletemembership: deleteMembership,
    getmembership: getMembership,
    getinvoicesequencing: getinvoiceSequencing,
    updateinvoicesequencing: updateinvoiceSequencing,
    salesmembership: salesMembership,
    getdealsbyid: getDealsById,
    createpurchaseorder: createPurchaseOrder,
    updatepurchaseorder: updatePurchaseOrder,
    getpurchaseorder: getPurchaseOrder,
    getpurchaseorderbyid: getPurchaseOrderbyID,
    getcustomersvouchers: getCustomersVouchers,
    dashboardrecentsales: dashboardRecentSales,
    dashboardtopservices: dashboardTopServices,
    dashboardtopteammember: dashboardTopTeamMember,
    dashboardappointmentsactivity: dashboardAppointmentsActivity,
    dashboardtodaysnextappointments: dashboardTodaysNextAppointments,
    dashboardupcomingappointments: dashboardUpcomingAppointments,
    createtaxes: createTaxes,
    updatetaxes: updateTaxes,
    deletetaxes: deleteTaxes,
    gettaxes: getTaxes,
    gettaxesbyid: getTaxesByID,
    createtips: createTips,
    updatetips: updateTips,
    createworkinghourse: createWorkingHours,
    updateworkinghourse: updateWorkingHours,
    deleteworkinghourse: deleteWorkingHours,
    getworkinghours: getWorkingHours,
    createpermissions: createPermissions,
    updatepermissions: updatePermissions,
    getpermissions: getPermissions
  }
}

/* Get Working Hours */
async function getPermissions(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, TaxID: req.params.taxes_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getPermissions: req.body is: ", req.body);
    db.getpermissionsdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getPermissions error: " + err);
    res.send("Error: " + err);
  }
}

/* Update Permissions */
async function updatePermissions(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updatePermissions: req.body is: ", req.body);
  //create the staff in the db
  db.updatepermissionsdb(param, req.body.StaffPermissionID, req.body.DisplaySortOrder, req.body.PermissionGroup, req.body.PermissionName, req.body.StaffPermissionCode, req.body.PermissionState, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Permissions was successful" : "Failed to update Permissions"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Create Permissions */
async function createPermissions(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createPermissions: req.body is: ", req.body);
  //create the staff in the db
  db.createpermissionsdb(param, req.body.DisplaySortOrder, req.body.PermissionGroup, req.body.PermissionName, req.body.StaffPermissionCode, req.body.PermissionState, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Permissions was successful" : "Failed to create Permissions"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Get Working Hours */
async function getWorkingHours(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, TaxID: req.params.taxes_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getWorkingHours: req.body is: ", req.body);
    db.getworkinghoursdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getWorkingHours error: " + err);
    res.send("Error: " + err);
  }
}

/* Delete Working Hours */
async function deleteWorkingHours(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteWorkingHours: req.body is: ", req.body);
  //create the staff in the db
  db.deleteworkinghoursedb(param, req.body.StaffWorkSCheduleID, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Working Hours was successful" : "Failed to delete Working Hours"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Update Working Hours */
async function updateWorkingHours(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateWorkingHours: req.body is: ", req.body);
  //create the staff in the db
  db.updateworkinghoursedb(param, req.body.StaffWorkSCheduleID, req.body.StaffID, req.body.Date, req.body.ShiftStartTime, req.body.ShiftEndTime, req.body.repeats, req.body.endrepeat, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Working Hours was successful" : "Failed to update Working Hours"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Create Working Hours */
async function createWorkingHours(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createWorkingHours: req.body is: ", req.body);
  //create the staff in the db
  db.createworkinghoursedb(param, req.body.StaffID, req.body.Date, req.body.ShiftStartTime, req.body.ShiftEndTime, req.body.repeats, req.body.endrepeat, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Working Hours was successful" : "Failed to create Working Hours"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Update Tips */
async function updateTips(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateTips: req.body is: ", req.body);
  //create the staff in the db
  db.updatetipsdb(param, req.body.location_id, req.body.enable_tipping, req.body.tip_1, req.body.tip_2, req.body.tip_3, req.body.tip_4, req.body.tip_5, req.body.dedault_selection, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Tips was successful" : "Failed to update Tips"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Create Tips */
async function createTips(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createTips: req.body is: ", req.body);
  //create the staff in the db
  db.createtipsdb(param, req.body.location_id, req.body.enable_tipping, req.body.tip_1, req.body.tip_2, req.body.tip_3, req.body.tip_4, req.body.tip_5, req.body.dedault_selection, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Tips was successful" : "Failed to create Tips"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Get Taxes By ID */
async function getTaxesByID(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, TaxID: req.params.taxes_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getTaxesByID: req.body is: ", req.body);
    db.gettaxesbyiddb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getTaxesByID error: " + err);
    res.send("Error: " + err);
  }
}

/* Get Taxes */
async function getTaxes(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getTaxes: req.body is: ", req.body);
    db.gettaxesdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getTaxes error: " + err);
    res.send("Error: " + err);
  }
}

/* Delete Taxes */
async function deleteTaxes(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteTaxes: req.body is: ", req.body);
  //create the staff in the db
  db.deletetaxesdb(param, req.body.TaxID, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Taxes was successful" : "Failed to delete Taxes"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Update Taxes */
async function updateTaxes(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateTaxes: req.body is: ", req.body);
  //create the staff in the db
  db.updatetaxesdb(param, req.body.TaxID, req.body.TaxName, req.body.TaxRate, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Taxes was successful" : "Failed to update Taxes"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}


/* Create Taxes */
async function createTaxes(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createTaxes: req.body is: ", req.body);
  //create the staff in the db
  db.createtaxesdb(param, req.body.TaxName, req.body.TaxRate, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Taxes was successful" : "Failed to create Taxes"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* DashBoard Upcoming Appointments */
async function dashboardUpcomingAppointments(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: dashboardUpcomingAppointments: req.body is: ", req.body);
    db.dashboardupcomingappointmentsdb(param, req.body.locations, req.body.nextdays, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("dashboardUpcomingAppointments error: " + err);
    res.send("Error: " + err);
  }
}

/* DashBoard Todays Next Appointments */
async function dashboardTodaysNextAppointments(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: dashboardTodaysNextAppointments: req.body is: ", req.body);
    db.dashboardtodaysnextappointmentsdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("dashboardTodaysNextAppointments error: " + err);
    res.send("Error: " + err);
  }
}

/* DashBoard Appointments Activity */
async function dashboardAppointmentsActivity(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: dashboardAppointmentsActivity: req.body is: ", req.body);
    db.dashboardappointmentsactivitydb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("dashboardAppointmentsActivity error: " + err);
    res.send("Error: " + err);
  }
}

/* DashBoard Top Team Member */
async function dashboardTopTeamMember(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: dashboardTopTeamMember: req.body is: ", req.body);
    db.dashboardtopteammemberdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("dashboardTopTeamMember error: " + err);
    res.send("Error: " + err);
  }
}

/* DashBoard Top Services */
async function dashboardTopServices(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: dashboardTopServices: req.body is: ", req.body);
    db.dashboardtopservicesdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("dashboardTopServices error: " + err);
    res.send("Error: " + err);
  }
}

/* Get Purchase Order */
async function getCustomersVouchers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id , purchaseorderid: req.params.purchase_order_id};

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getCustomersVouchers: req.body is: ", req.body);
    db.getcustomersvouchersdb(param, req.body.customer_id, req.body.vouchercode, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getCustomersVouchers error: " + err);
    res.send("Error: " + err);
  }
}

/* Create Update Order */
async function updatePurchaseOrder(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updatePurchaseOrder: req.body is: ", req.body);
  //create the staff in the db
  db.updatepurchaseorderbd(param, req.body.purchase_order_id, req.body.order_status, req.body.prod_items, req.body.supplier_id, req.body.supplier_name, req.body.localtion_id, req.body.location_name, req.body.date_expected_by, req.body.fees, req.body.sub_total_order, req.body.order_total, req.body.amount_paid, req.body.payment_type_id, req.body.payment_type, req.body.payment_reference, req.body.IsPurchaseOrder_create, req.body.staff_id, req.body.staff_name, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Purchase Order was successful" : "Failed to update Purchase Order"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Get Purchase Order */
async function getPurchaseOrderbyID(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id , purchaseorderid: req.params.purchase_order_id};

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getPurchaseOrderbyID: req.body is: ", req.body);
    db.getpurchaseorderbyiddb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getPurchaseOrderbyID error: " + err);
    res.send("Error: " + err);
  }
}

/* Get Purchase Order */
async function getPurchaseOrder(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getPurchaseOrder: req.body is: ", req.body);
    db.getpurchaseorderdb(param, req.body.location_id, req.body.supplier_id, req.body.order_status, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getpurchaseorderdb error: " + err);
    res.send("Error: " + err);
  }
}

/* Create Purchase Order */
async function createPurchaseOrder(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createPurchaseOrder: req.body is: ", req.body);
  //create the staff in the db
  db.createpurchaseorderbd(param, req.body.prod_items, req.body.supplier_id, req.body.supplier_name, req.body.localtion_id, req.body.location_name, req.body.date_expected_by, req.body.fees, req.body.sub_total_order, req.body.order_total, req.body.amount_paid, req.body.payment_type_id, req.body.payment_type, req.body.payment_reference, req.body.IsPurchaseOrder_create, req.body.staff_id, req.body.staff_name, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Purchase Order was successful" : "Failed to create Purchase Order"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Get Recent Sales */
async function getDealsById(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getDealsById: req.body is: ", req.body);
    db.getdealsbyiddb(param, req.body.deals_id, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getDealsById error: " + err);
    res.send("Error: " + err);
  }
}

/* Get Recent Sales */
async function dashboardRecentSales(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: dashboardRecentSales: req.body is: ", req.body);
    db.dashboardrecentsalesdb(param, req.body.locations, req.body.lastdays, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("dashboardRecentSales error: " + err);
    res.send("Error: " + err);
  }
}

/* Get User Profile Info */
async function getUserProfile(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getUserProfile: req.body is: ", req.body);
    db.getusersprofilebd(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getUserProfile error: " + err);
    res.send("Error: " + err);
  }
}

/* Get Sale Membership */
async function salesMembership(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: salesMembership: req.body is: ", req.body);
    db.salesmembershipdb(param, req.body.start_date, req.body.end_date, req.body.statuses, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("salesMembership error: " + err);
    res.send("Error: " + err);
  }
}

/* Update Invoice Sequencing */
async function updateinvoiceSequencing(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateinvoiceSequencing: req.body is: ", req.body);
  //create the staff in the db
  db.updateinvoicesequencingdb(param, req.body.TenantLocationID, req.body.invoice_prefix, req.body.next_invoice_number, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Invoice Sequencing was successful" : "Failed to update Invoice Sequencing"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Get Invoice Sequencing */
async function getinvoiceSequencing(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getinvoiceSequencing: req.body is: ", req.body);
    db.getinvoicesequencingdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getinvoiceSequencing error: " + err);
    res.send("Error: " + err);
  }
}

/* Get Membership */
async function getMembership(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getMembershipInDB: req.body is: ", req.body);
    db.getmembershipdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getMembershipInDB error: " + err);
    res.send("Error: " + err);
  }
}

/* Delete Membership */
async function deleteMembership(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteMembershipInDB: req.body is: ", req.body);
  //create the staff in the db
  db.deletemembershipdb(param, req.body.MembershipID, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Membership was successful" : "Failed to delete Membership"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Update Membership */
async function updateMembership(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateMembershipInDB: req.body is: ", req.body);
  //create the staff in the db
  db.updatemembershipdb(param, req.body.MembershipID, req.body.MembershipName, req.body.MembershipDescription, req.body.Sessions, req.body.SessionLimit, req.body.PricingValidFor, req.body.Price, req.body.TaxRateName, req.body.ColorCustomization, req.body.EnableOnlineSales, req.body.TermsAndConditions, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Membership was successful" : "Failed to update Membership"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Create Membership */
async function createMembership(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createMembershipInDB: req.body is: ", req.body);
  //create the staff in the db
  db.createmembershipdb(param, req.body.MembershipName, req.body.MembershipDescription, req.body.Sessions, req.body.SessionLimit, req.body.PricingValidFor, req.body.Price, req.body.TaxRateName, req.body.ColorCustomization, req.body.EnableOnlineSales, req.body.TermsAndConditions, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Membership was successful" : "Failed to create Membership"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/*Send Email Invoice*/
async function sendMail(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: sendMail: req.body is:`, req.body);
    db.send_mailbd(param, req.body.sale_id, req.body.email_address, req.body.invoice_html, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("sendMail error: " + err);
    res.send("Error: " + err);
  }
}

/*Voucher Outstanding Balance*/
async function voucherOutStandingBalance(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: voucherOutStandingBalance: req.body is:`, req.body);
    db.voucheroutstandingbalancedb(param, req.body.start_date, req.body.end_date, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("voucherOutStandingBalance error: " + err);
    res.send("Error: " + err);
  }
}

/*Team Member Commission Summary*/
async function teammemberCommssionSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: teammemberCommssionSummary: req.body is:`, req.body);
    db.teammembercommssionsummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("teammemberCommssionSummary error: " + err);
    res.send("Error: " + err);
  }
}

/*Team Member Commission Detailed*/
async function teamMemberCommssionDetailed(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: teamMemberCommssionDetailed: req.body is:`, req.body);
    db.teammembercommssiondetaileddb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, req.body.item_type, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("teamMemberCommssionDetailed error: " + err);
    res.send("Error: " + err);
  }
}

/* Tips By Team Member */
async function tipsbyTeamMember(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: tipsbyTeamMember: req.body is:`, req.body);
    db.tipsbyteammemberdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("tipsbyTeamMember error: " + err);
    res.send("Error: " + err);
  }
}

/* Team Member Working Hours */
async function teamMemberWorkingHours(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: teamMemberWorkingHours: req.body is:`, req.body);
    db.teammemberworkinghoursdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("teamMemberWorkingHours error: " + err);
    res.send("Error: " + err);
  }
}

/* Voucher Redeemption */
async function voucherRedemptions(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: vouchevoucherRedemptionsrSales: req.body is:`, req.body);
    db.voucherredemptionsdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("voucherRedemptions error: " + err);
    res.send("Error: " + err);
  }
}

/* Voucher Sales */
async function voucherSales(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: voucherSales: req.body is:`, req.body);
    db.vouchersalesdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("voucherSales error: " + err);
    res.send("Error: " + err);
  }
}

/* Client Retention */
async function clientRetention(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: clientRetention: req.body is:`, req.body);
    db.clientretentiondb(param, req.body.start_date, req.body.end_date, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("clientRetention error: " + err);
    res.send("Error: " + err);
  }
}

/* Client List */
async function clientList(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: clientList: req.body is:`, req.body);
    db.clientlistdb(param, req.body.start_date, req.body.end_date, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("clientList error: " + err);
    res.send("Error: " + err);
  }
}

/* Outstanding Invoices */
async function outstandingInvoices(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: outstandingInvoices: req.body is:`, req.body);
    db.outstandinginvoicesdb(param, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("outstandingInvoices error: " + err);
    res.send("Error: " + err);
  }
}

/* Discount Summary*/
async function discountSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: discountSummary: req.body is:`, req.body);
    db.discountsummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("discountSummary error: " + err);
    res.send("Error: " + err);
  }
}

/* Tips Collected*/
async function tipsCollected(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: tipsCollected: req.body is:`, req.body);
    db.tipscollecteddb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, req.body.channels, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("tipsCollected error: " + err);
    res.send("Error: " + err);
  }
}

/* Finances Summary*/
async function financesSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: financesSummary: req.body is:`, req.body);
    db.financessummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("financesSummary error: " + err);
    res.send("Error: " + err);
  }
}

/* Finances Taxes Summary*/
async function financesTaxesSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: financesTaxesSummary: req.body is:`, req.body);
    db.financestaxessummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("financesTaxesSummary error: " + err);
    res.send("Error: " + err);
  }
}

/* Finances Payments Logs*/
async function financesPaymentsLog(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: financesPaymentsLog: req.body is:`, req.body);
    db.financespaymentslogdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, req.body.vouchers, req.body.deposits, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("financesPaymentsLog error: " + err);
    res.send("Error: " + err);
  }
}

/* Appointment Cancellation*/
async function appointmentCancellations(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: appointmentCancellations: req.body is:`, req.body);
    db.appointmentcancellationsdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("appointmentCancellations error: " + err);
    res.send("Error: " + err);
  }
}

/* Appointment Summary*/
async function appointmentSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: appointmentSummary: req.body is:`, req.body);
    db.appointmentsummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("appointmentSummary error: " + err);
    res.send("Error: " + err);
  }
}

/* Inventory Product Consumption*/
async function inventoryStockConsumption(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: inventoryStockConsumption: req.body is:`, req.body);
    db.inventorystockconsumptiondb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message,  dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("inventoryStockConsumption error: " + err);
    res.send("Error: " + err);
  }
}

/* Inventory Product Sales Performance*/
async function inventoryProductSalesPerformance(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: inventoryProductSalesPerformance: req.body is:`, req.body);
    db.inventoryproductsalesperformancedb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, req.body.suppliers, req.body.brands, req.body.categories, req.body.channels, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("inventoryProductSalesPerformance error: " + err);
    res.send("Error: " + err);
  }
}

/* Inventory Stock On Hand*/
async function inventoryStockOnHand(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: inventoryStockOnHand: req.body is:`, req.body);
    db.inventorystockonhanddb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.suppliers, req.body.brands, req.body.categories, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("inventoryStockOnHand error: " + err);
    res.send("Error: " + err);
  }
}

/* Inventory Stock Movement Summary*/
async function inventoryStockMovementSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: inventoryStockMovementSummary: req.body is:`, req.body);
    db.inventorystockmovementsummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("inventoryStockMovementSummary error: " + err);
    res.send("Error: " + err);
  }
}

/* Inventory Stock Movement Log*/
async function inventoryStockMovementLog(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: inventoryStockMovementLog: req.body is:`, req.body);
    db.inventorystockmovementlogdb(param, req.body.start_date, req.body.end_date, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("inventoryStockMovementLog error: " + err);
    res.send("Error: " + err);
  }
}

/* Finances for Payment Summnary*/
async function financesPaymentSummary(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: financesPaymentSummary: req.body is:`, req.body);
    db.financespaymentsummarydb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("financesPaymentSummary error: " + err);
    res.send("Error: " + err);
  }
}

/* Vouchers */
async function getVouchersByID(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, vouchersid: req.params.VoucherID };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: getVouchersByID: req.body is: ", req.body);
  //create the staff in the db
  db.getvouchersbyiddb(param, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Get Vouchers was successful" : "Failed to get Vouchers "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function createVouchers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createVouchers: req.body is: ", req.body);
  //create the staff in the db
  db.createvouchersdb(param, req.body.VoucherName, req.body.Value, req.body.RetailPrice, req.body.ValidFor, req.body.LimitAmountOfSales, req.body.NumberOfSalesLimit, req.body.EnableOnlineSales, req.body.VoucherTitle, req.body.VoucherDiscription, req.body.VoucherColor, req.body.VoucherButton, req.body.NoteForClient, req.body.services, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Vouchers was successful" : "Failed to create Vouchers "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateVouchers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateVouchers: req.body is: ", req.body);
  //create the staff in the db
  db.updatevouchersdb(param, req.body.VoucherID, req.body.VoucherName, req.body.Value, req.body.RetailPrice, req.body.ValidFor, req.body.LimitAmountOfSales, req.body.NumberOfSalesLimit, req.body.EnableOnlineSales, req.body.VoucherTitle, req.body.VoucherDiscription, req.body.VoucherColor, req.body.VoucherButton, req.body.NoteForClient, req.body.services, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Vouchers was successful" : "Failed to update Vouchers "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteVouchers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteVouchers: req.body is: ", req.body);
  //create the staff in the db
  db.deletevouchersdb(param, req.body.VoucherID, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Vouchers was successful" : "Failed to delete Vouchers "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getListVouchers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getListVouchers: req.body is:`, req.body);
    db.getlistvouchersdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getListVouchers error: " + err);
    res.send("Error: " + err);
  }
}

async function GetSalesVouchers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: GetSalesVouchers: req.body is:`, req.body);
    db.getsalesvouchersdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("GetSalesVouchers error: " + err);
    res.send("Error: " + err);
  }
}

/* Update Delivery Status */
async function updateDeliveryStatus(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateDeliveryStatus: req.body is: ", req.body);
  //create the staff in the db
  db.updatedeliverystatusdb(param, req.body.sale_id, req.body.status_date, req.body.delivery_status, req.body.proof_of_delivery, req.body.delivered_by, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Delivery Status  was successful" : "Failed to update Delivery Status "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Create Multi Payments*/
async function createMultiPayments(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createMultiPayments: req.body is: ", req.body);
  //create the staff in the db
  db.createmultipaymentsdb(param, req.body.sale_id, req.body.received_date, req.body.staff_id, req.body.received_amount, req.body.payment_type_id, req.body.payment_reference, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Multi Payments  was successful" : "Failed to create Multi Payments "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Update Invoice Status */
async function UpdateInvoiceStatus(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: UpdateInvoiceStatus: req.body is: ", req.body);
  //create the staff in the db
  db.updateinvoicestatusdb(param, req.body.sale_id, req.body.invoice_status, req.body.received_date, req.body.staff_id, req.body.payment_type_id, req.body.payment_reference, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Invoice Status  was successful" : "Failed to update Invoice Status "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Products Stocks On Hand Per Locations */
async function ProductStocksOnHandPerLocation(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, productid: req.params.product_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: ProductStocksOnHandPerLocation: req.body is:`, req.body);
    db.productstocksonhandperlocationdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("ProductStocksOnHandPerLocation error: " + err);
    res.send("Error: " + err);
  }
}

/* User Addess*/
async function getDefaultcustomer(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: getDefaultcustomer: req.body is: ", req.body);
  
  db.getDefaultcustomer(param, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = "Failed to get Default Customer";
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* User Addess*/
async function createUserAddresses(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createUserAddresses: req.body is: ", req.body);
  //create the staff in the db
  db.createuseraddresses(param, req.body.customer_id, req.body.address_type, req.body.address_name, req.body.Address, req.body.Apartment, req.body.District, req.body.City, req.body.County, req.body.State, req.body.AreasOfInterest, req.body.AdministrativeArea, req.body.SubAdministrativeArea, req.body.SubLocality, req.body.SubThoroughfare, req.body.Thoroughfare, req.body.Locality, req.body.Latitude, req.body.Longtitude, req.body.PostalCode, req.body.CountryCode, req.body.CountryName, req.body.LocationRating, req.body.Is_Instant_Confirmation_Enabled, req.body.Is_Default_Address, req.body.next_invoice_number, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Address Details  was successful" : "Failed to create Address Details "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateUseraddresses(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateUseraddresses: req.body is: ", req.body);
  //create the staff in the db
  db.updateuseraddresses(param, req.body.customer_id, req.body.address_type, req.body.address_name, req.body.Address, req.body.Apartment, req.body.District, req.body.City, req.body.County, req.body.State, req.body.AreasOfInterest, req.body.AdministrativeArea, req.body.SubAdministrativeArea, req.body.SubLocality, req.body.SubThoroughfare, req.body.Thoroughfare, req.body.Locality, req.body.Latitude, req.body.Longtitude, req.body.PostalCode, req.body.CountryCode, req.body.CountryName, req.body.LocationRating, req.body.Is_Instant_Confirmation_Enabled, req.body.Is_Default_Address, req.body.next_invoice_number, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Address Details  was successful" : "Failed to update Address Details "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Sales By Quarter*/
async function salesByQuarter(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByQuarter: req.body is:`, req.body);
    db.salesbyquarterdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByQuarter error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Hour of Day*/
async function salesByHourOfDay(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByHourOfDay: req.body is:`, req.body);
    db.salesbyhourofdaydb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByHourOfDay error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Day*/
async function salesByDay(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByDay: req.body is:`, req.body);
    db.salesbydaysdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByDay error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Months*/
async function salesByMonths(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByMonths: req.body is:`, req.body);
    db.salesbymonthdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByMonths error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Logs*/
async function salesByLogs(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByLogs: req.body is:`, req.body);
    db.salesbylogsdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByLogs error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Year*/
async function salesByYear(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByYear: req.body is:`, req.body);
    db.salesbyyeardb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByYear error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Staff Member Breakdown*/
async function salesByMemberBreakdown(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByMemberBreakdown: req.body is:`, req.body);
    db.salesbymemberbreakdowndb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, req.body.channels, req.body.itemtype, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByMemberBreakdown error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Staff Member*/
async function salesByStaffMembers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByStaffMembers: req.body is:`, req.body);
    db.salesbystaffmembersdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByStaffMembers error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Team Member*/
async function salesByTeamMembers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: salesByTeamMembers: req.body is:`, req.body);
    db.salesbyteammembersdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.teammember, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("salesByTeamMembers error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales by Channel*/
async function saleByChannel(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: saleByChannel: req.body is:`, req.body);
    db.salesbychanneldb(param, req.body.start_date, req.body.end_date, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("saleByChannel error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales by Hours*/
async function saleByHours(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: saleByHours: req.body is:`, req.body);
    db.salesbyhoursdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("saleByHours error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales by Customers*/
async function saleByCustomers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: saleByCustomers: req.body is:`, req.body);
    db.salesbycustomersdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("saleByCustomers error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales by Locations*/
async function saleByLocation(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: saleByLocation: req.body is:`, req.body);
    db.salesbylocationdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("saleByLocation error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales by Item*/
async function SalesByItem(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: SalesByItem: req.body is:`, req.body);
    db.salesbyitemdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.staffs, req.body.source_of_sales, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("SalesByItem error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales by Shipping Courier*/
async function SalesByShippingCourier(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: SalesByShippingCourier: req.body is:`, req.body);
    db.salesbyshippingcourierdb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.shippingcourier, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("SalesByShippingCourier error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales By Category */
async function SalesByProductCategory(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: SalesByCategory: req.body is:`, req.body);
    db.salebyproductcategorydb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.categories, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("SalesByCategory error: " + err);
    res.send("Error: " + err);
  }
}

/* Sales Mode of Payment*/
async function SalesByPaymentType(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: SalesModeofPaymentReport: req.body is:`, req.body);
    db.salesbypaymenttypedb(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.paymenttype, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("SalesModeofPaymentReport error: " + err);
    res.send("Error: " + err);
  }
}

/* Source of Sales */
async function createSourceofSales(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createSourceofSales: req.body is: ", req.body);
  //create the staff in the db
  db.createsourceofsalesdb(param, req.body.source_sales, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Source of Sales  was successful" : "Failed to create Source of Sales "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateSourceofSales(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateSourceofSales: req.body is: ", req.body);
  //create the staff in the db
  db.updatesourceofsalesdb(param, req.body.source_of_salesid, req.body.source_sales, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Source of Sales  was successful" : "Failed to update Source of Sales "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteSourceofSales(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteSourceofSales: req.body is: ", req.body);
  //create the staff in the db
  db.deletesourceofsalesdb(param, req.body.source_of_salesid, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Source of Sales  was successful" : "Failed to delete Source of Sales "
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getSourceofSales(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getSourceofSales: req.body is: ", req.body);
    db.getsourceofsalesdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSourceofSales error: " + err);
    res.send("Error: " + err);
  }
}

/* User Profiles */
async function createUserProfile(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createUserProfile: req.body is: ", req.body);
  //create the staff in the db
  db.createuserprofiledb(param, req.body.first_name, req.body.last_name, req.body.mobile_number, req.body.email_address, req.body.password, req.body.profile_image, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create User Profile was successful" : "Failed to create User Profile"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateUserProfile(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateUserProfile: req.body is: ", req.body);
  //create the staff in the db
  db.updateuserprofiledb(param, req.body.StaffID, req.body.first_name, req.body.last_name, req.body.mobile_number, req.body.email_address, req.body.profile_image, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update User Profile was successful" : "Failed to update User Profile"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Appointment Types */
async function createAppointmentTypes(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createAppointmentTypes: req.body is: ", req.body);
  //create the staff in the db
  db.createappointmenttypesdb(param, req.body.appointment_types, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Appointment Types was successful" : "Failed to create Appointment Types"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateAppointmentTypes(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateAppointmentTypes: req.body is: ", req.body);
  //create the staff in the db
  db.updateappointmenttypesdb(param, req.body.appointment_typesid, req.body.appointment_types, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Appointment Types was successful" : "Failed to update Appointment Types"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteAppointmentTypes(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteAppointmentTypes: req.body is: ", req.body);
  //create the staff in the db
  db.deleteappointmenttypesdb(param, req.body.appointment_typesid, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Appointment Types was successful" : "Failed to delete Appointment Types"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getAppointmentTypes(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getAppointmentTypes: req.body is: ", req.body);
    db.getappointmenttypesdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getAppointmentTypes error: " + err);
    res.send("Error: " + err);
  }
}

/* Shipping Courier */
async function createShippingCourier(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createShippingCourier: req.body is: ", req.body);
  //create the staff in the db
  db.createshippingcourierdb(param, req.body.shipping_courier, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Shipping Couriers was successful" : "Failed to create Shipping Couriers"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateShippingCourier(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateShippingCourier: req.body is: ", req.body);
  //create the staff in the db
  db.updateshippingcourierdb(param, req.body.shipping_courier_id, req.body.shipping_courier, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Shipping Couriers was successful" : "Failed to update Shipping Couriers"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteShippingCourier(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteShippingCourier: req.body is: ", req.body);
  //create the staff in the db
  db.deleteshippingcourierdb(param, req.body.shipping_courier_id, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Shipping Couriers was successful" : "Failed to delete Shipping Couriers"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getShippingCourier(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getShippingCourier: req.body is: ", req.body);
    db.getshippingcourierdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

async function dailySalesReport(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: dailySalesReport: req.body is:`, req.body);
    db.dailysalesreport(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.staffs, req.body.shippingcourier, req.body.paymenttype, req.body.productcategory, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("dailySalesReport error: " + err);
    res.send("Error: " + err);
  }
}

/* Commisions */
async function getCommisionByID(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, CommisionID: req.params.CommisionID };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getCommisionByID parameters: ", param);
    db.getcommisionbyiddb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getCommisionByID error: " + err);
    res.send("Error: " + err);
  }
}

async function getListCommision(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getListCommision: req.body is: ", req.body);
    db.getListcommisiondb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

async function deleteCommision(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteCommision: req.body is: ", req.body);
  //create the staff in the db
  db.deletecommisiondb(param, req.body.CommisionID, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Delete Commisions was successful" : "Failed to delete Commisions"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateCommision(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateCommision: req.body is: ", req.body);
  //create the staff in the db
  db.updatecommisiondb(param, req.body.CommisionID, req.body.EffectiveDate, req.body.CommisionCycle, req.body.commisions, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Update Commisions was successful" : "Failed to update Commisions"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function createCommision(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createCommision: req.body is: ", req.body);
  //create the staff in the db
  db.createcommisiondb(param, req.body.EffectiveDate, req.body.CommisionCycle, req.body.commisions, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Commisions was successful" : "Failed to create Commisions"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function dailysalesreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.dailysalesreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function inventoryperlocationreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.inventoryperlocationreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function outofstockreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.outofstockreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function appointmentsreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.appointmentsreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function inventorytransactionsreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.inventorytransactionsreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function salessummaryreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.salessummaryreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function dashboardreport(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.dashboardreport(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}


/* Business Details */

async function updateBusinessDetails(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateBusinessDetails: req.body is: ", req.body);

    db.doesbusinessdetailsexistdb(param, (sqlError, doesBusinessDetailsExist) => {

      if (doesBusinessDetailsExist) {
  
        db.updatebusinessdetailsdb(param, req.body.BusinessName, req.body.TimeZone, req.body.TimeFormat, req.body.WeekStart, req.body.AppointmentColorSource, req.body.ClientLanguage, req.body.StaffLanguageDefault, req.body.Website, req.body.FacebookPage, req.body.InstagramPage, req.body.ImageUrl, dataResponseObject => {

          if (dataResponseObject.error === null)
          {
            res.send(dataResponseObject.results);
          }
          else {
            const message = dataResponseObject.error === null ? "Update Business Details was successful" : "Failed to update Business Details"
            sendErrorResponse(res, message, dataResponseObject.error);
          }
      });

        return
      }

      db.createbusinessdetailsdb(param, req.body.BusinessName, req.body.TimeZone, req.body.TimeFormat, req.body.WeekStart, req.body.AppointmentColorSource, req.body.ClientLanguage, req.body.StaffLanguageDefault, req.body.Website, req.body.FacebookPage, req.body.InstagramPage, req.body.ImageUrl, dataResponseObject => {

        if (dataResponseObject.error === null)
        {
          res.send(dataResponseObject.results);
        }
        else {
          const message = dataResponseObject.error === null ? "Create Business Details was successful" : "Failed to create Business Details"
          sendErrorResponse(res, message, dataResponseObject.error);
        }
    });
  });
}

async function getBusinessDetailsByTenant(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.getbusinessdetailsdb(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

/* Close Dates */

async function createCloseDates(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createCloseDates: req.body is: ", req.body);
  //create the staff in the db
  db.createclosedatesdb(param, req.body.startdate, req.body.enddate, req.body.description, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Close Dates was successful" : "Failed to create Close Dates"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateCloseDates(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateCloseDates: req.body is: ", req.body);
  //create the staff in the db
  db.updateclosedatesdb(param, req.body.closeddateid, req.body.startdate, req.body.enddate, req.body.description, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Close Dates was successful" : "Failed to update Close Dates"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteCloseDates(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteCloseDates: req.body is: ", req.body);

  db.deleteclosedatesdb(param, req.body.closeddateid, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Close Dates was successful" : "Failed to delete Close Dates"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getCloseDates(req, res) {
  try {
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.getclosedatesdb(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

/* Referral Sources */

async function createReferralSources(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createReferralSources: req.body is: ", req.body);
  //create the staff in the db
  db.createreferralsourcesdb(param, req.body.DisplaySortOrder, req.body.Name, req.body.Active, req.body.CanNotBeDeleted, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Referral Sources was successful" : "Failed to create Referral Sources"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateReferralSources(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateReferralSources: req.body is: ", req.body);
  //create the staff in the db
  db.updatereferralsourcesdb(param, req.body.ReferralSourceID, req.body.DisplaySortOrder, req.body.Name, req.body.Active, req.body.CanNotBeDeleted, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
     const message = dataResponseObject.error === null ? "Update Referral Sources was successful" : "Failed to update Referral Sources"
     sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteReferralSources(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteReferralSources: req.body is: ", req.body);
  //create the staff in the db
  db.deletereferralsourcesdb(param, req.body.ReferralSourceID, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      //create message for the api response
      const message = dataResponseObject.error === null ? "Delete Referral Sources was successful" : "Failed to delete Referral Sources"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getReferralSources(req, res) {
  try{
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.getreferralsourcesdb(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function changecurrentlocation(req, res) {
  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: changecurrentlocation: req.body is: ", req.body);
  //create the staff in the db
  db.changecurrentlocation(param, req.body.user_id, req.body.location_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Current location changed successfully" : "Failed to change current location"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Resources */

async function createResources(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createResourcesInDB: req.body is: ", req.body);
  //create the staff in the db
  db.createresourcesdb(param, req.body.serviceid, req.body.name, req.body.description, req.body.issystemdefault, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Resources was successful" : "Failed to create Resources"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateResources(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateResourcesInDB: req.body is: ", req.body);
  //create the staff in the db
  db.updateresourcesdb(param, req.body.resourceserviceid, req.body.serviceid, req.body.name, req.body.description, req.body.issystemdefault, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Resources was successful" : "Failed to update Resources"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteResources(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateResourcesInDB: req.body is: ", req.body);
  //create the staff in the db
  db.deleteresourcesdb(param, req.body.resourceserviceid, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Resources was successful" : "Failed to delete Resources"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getListResources(req, res) {
  try{
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.getlistresourecesdb(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function getResourcesById(req, res) {
  try{
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, resourceid: req.query.resourceid };
  
      db.getresourcesbyiddb(param, dataResponseObject => {

        if (dataResponseObject.error === null)
        {
          res.send(dataResponseObject.results);
        }
        else {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          sendErrorResponse(res, message, dataResponseObject.error)
        }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

/* Payment Types */
async function createPaymentType(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createPaymentType: req.body is: ", req.body);
  //create the staff in the db
  db.createpaymenttypedb(param, req.body.payment_type_name, req.body.description, req.body.is_systementry, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Payment Type was successful" : "Failed to create Payment Type"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updatePaymentType(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createPaymentType: req.body is: ", req.body);
  //create the staff in the db
  db.updatepaymenttypedb(param, req.body.payment_typeid, req.body.payment_type_name, req.body.description, req.body.is_systementry, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Payment Type was successful" : "Failed to update Payment Type"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deletePaymentType(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createPaymentType: req.body is: ", req.body);
  //create the staff in the db
  db.deletepaymenttypedb(param, req.body.payment_typeid, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Payment Type was successful" : "Failed to delete Payment Type"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getListPaymentType(req, res) {
  try{
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.getlistpaymenttypedb(param, dataResponseObject => {
        if (dataResponseObject.error === null)
        {
          res.send(dataResponseObject.results);
        }
        else {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          sendErrorResponse(res, message, dataResponseObject.error)
        }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

async function getListPaymentTypeById(req, res) {
  try{
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, payment_typeid: req.query.payment_typeid };
  
      db.getpaymenttypebyiddb(param, dataResponseObject => {
          const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
          if (!dataResponseObject.error) {
            res.send(dataResponseObject.results);
          }
          else {
            sendErrorResponse(res, message, dataResponseObject.error)
          }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
}

  /* Locations */

async function getListLocationbytenantid(req, res) {
  try{
      var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };
  
      db.getlistlocationbytenantiddb(param, dataResponseObject => {
        const message =  dataResponseObject.error === null  ? "Successful" : "Failed";
        if (!dataResponseObject.error) {
          res.send(dataResponseObject.results);
        }
        else {
          sendErrorResponse(res, message, dataResponseObject.error)
        }
      });
    } catch (err) {
      res.send("Error: " + err);
    }
  }
  
async function createLocations(req, res){

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateLocations: req.body is: ", req.body);
  //create the staff in the db
  db.createlocationsdb(param, req.body.LocationName, req.body.LocationContactNumber, req.body.LocationEmailAddress, req.body.AreasOfInterest, req.body.AdministrativeArea, req.body.SubAdministrativeArea, req.body.SubLocality, req.body.SubThoroughfare, req.body.Thoroughfare, req.body.Locality, req.body.Latitude, req.body.Longtitude, req.body.PostalCode, req.body.CountryCode, req.body.CountryName, req.body.LocationRating, req.body.Is_Instant_Confirmation_Enabled, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Locations was successful" : "Failed to create Locations"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateLocations(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateLocations: req.body is: ", req.body);
  //create the staff in the db
  db.updatelocationsdb(param, req.body.LocationName, req.body.LocationContactNumber, req.body.LocationEmailAddress, req.body.AreasOfInterest, req.body.AdministrativeArea, req.body.SubAdministrativeArea, req.body.SubLocality, req.body.SubThoroughfare, req.body.Thoroughfare, req.body.Locality, req.body.Latitude, req.body.Longtitude, req.body.PostalCode, req.body.CountryCode, req.body.CountryName, req.body.LocationRating, req.body.Is_Instant_Confirmation_Enabled, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Locations was successful" : "Failed to update Locations"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteLocations(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateLocations: req.body is: ", req.body);
  //create the staff in the db
  db.deletelocationsdb(param, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Locations was successful" : "Failed to delete Locations"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getListLocations(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getListLocations: req.body is: ", req.body);
    db.getlistlocationsdb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getListLocations error: " + err);
    res.send("Error: " + err);
  }
}

/* Product Category */
async function createProductCategory(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createProductCategoryInDB: req.body is: ", req.body);
  //create the staff in the db
  db.createproductcategorydb(param, req.body.category_name, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Product Category was successful" : "Failed to create Product Category"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateProductCategory(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateProductCategoryInDB: req.body is: ", req.body);
  //create the staff in the db
  db.updateproductcategorydb(param, req.body.category_id, req.body.category_name, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Product Category was successful" : "Failed to update Product Category"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteProductCategory(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createSubCategoryInDB: req.body is: ", req.body);
  //create the staff in the db
  db.deleteproductcategorydb(param, req.body.category_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Product Category was successful" : "Failed to delete Product Category"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getListProductCategory(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getListProductCategory: req.body is: ", req.body);
    db.getlistproductcategorydb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getListProductCategory error: " + err);
    res.send("Error: " + err);
  }
}

/* Product Brand */
async function createProductBrand(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createProductBrandInDB: req.body is: ", req.body);
  //create the staff in the db
  db.createproductbranddb(param, req.body.brand_name, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Product Brand was successful" : "Failed to create Product Brand"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateProductBrand(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateProductBrandInDB: req.body is: ", req.body);
  //create the staff in the db
  db.updateproductbranddb(param, req.body.brand_id, req.body.brand_name, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Product Brand was successful" : "Failed to update Product Brand"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteProductBrand(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteProductBrandInDB: req.body is: ", req.body);
  //create the staff in the db
  db.deleteproductbranddb(param, req.body.brand_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Product Brand was successful" : "Failed to delete Product Brand"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getListProductBrand(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getListProductBrand: req.body is: ", req.body);
    db.getlistproductbranddb(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getListProductBrand error: " + err);
    res.send("Error: " + err);
  }
}

/* List of Unit Of Measures */
async function getListProductUnitOfMeasure(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getListProductUnitOfMeasure: req.body is: ", req.body);
    db.getListProductUnitOfMeasure(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getListProductBrand error: " + err);
    res.send("Error: " + err);
  }
}

/* Create Unit Of Measures */
async function createProductUnitOfMeasure(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createProductUnitOfMeasure: req.body is: ", req.body);
  //create the staff in the db
  db.createProductUnitOfMeasure(param, req.body.unitOfMeasure, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Unit of Measure was successful" : "Failed to create Unit of Measure"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Update Product of Measure  */
async function updateProductUnitOfMeasure(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateProductUnitOfMeasure: req.body is: ", req.body);
  //create the staff in the db
  db.updateproductbranddb(param, req.body.uom_id, req.body.unitOfMeasure, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Unit of Measure was successful" : "Failed to update Unit of Measure"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Delete Unit Of Measure */
async function deleteProductUnitOfMeasure(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteProductUnitOfMeasure: req.body is: ", req.body);
  
  db.deleteproductbranddb(param, req.body.uom_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Unit of Measure was successful" : "Failed to delete Unit of Measure"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Increase Stock */
async function updateInStock(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateInStockInDB: req.body is: ", req.body);
  //create the staff in the db
  db.updateinstockdb(param, req.body.product_id, req.body.localtion_id, req.body.quantity, req.body.special_price, req.body.reason, req.body.supplier_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Increase Stocks was successful" : "Failed to Increase Stocks"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Decrease Stock */
async function updateDeStock(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateDeStock: req.body is: ", req.body);
  //create the staff in the db
  db.updatedestockdb(param, req.body.product_id, req.body.location_id, req.body.quantity, req.body.reason, req.body.supplier_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Decrease Stocks was successful" : "Failed to Decrease Stocks"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

/* Sales */
async function createSales(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: createSales: req.body is: ", req.body);
  //create the staff in the db
  db.createsalesdb(param, req.body.sale_date, req.body.customer_id, req.body.total_amount, req.body.paid_amount, req.body.balance_amount, 
    req.body.tip_amount, req.body.tax_amount, req.body.discount_amount, req.body.invoice_notes, req.body.saleitems, 
    req.body.received_date, req.body.staff_id, req.body.staff_name, req.body.received_amount, req.body.payment_type_id, req.body.location_id, 
    req.body.customer_name, req.body.billing_name, req.body.location_name, req.body.source_of_salesid, 
    req.body.shipping_courier_id, req.body.shipping_fee, req.body.payment_reference, req.body.status_date, req.body.delivery_status, req.body.proof_of_delivery, req.body.IsSaveUnpaidtoDraft, req.body.vouchercode, req.body.voucher_amount, dataResponseObject => {
    if (!dataResponseObject.error){
      res.send(dataResponseObject.results);
    }
    else {
      const message = !dataResponseObject.error ? "Create Sales was successful" : "Failed to create Sales"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function updateSales(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: updateSales: req.body is: ", req.body);
  //create the staff in the db
  db.updatesalesdb(param, req.body.sale_id, req.body.sale_date, req.body.customer_id, req.body.invoice_number, req.body.invoice_status, req.body.total_amount, req.body.paid_amount, req.body.balance_amount, req.body.tip_amount, req.body.tax_amount, 
    req.body.discount_amount, req.body.invoice_notes, req.body.saleitems, req.body.received_date, req.body.staff_id, req.body.staff_name, req.body.received_amount, req.body.payment_type_id, 
    req.body.location_id, req.body.customer_name, req.body.billing_name, req.body.location_name, req.body.source_of_salesid, req.body.shipping_courier_id, req.body.shipping_fee, req.body.payment_reference, req.body.status_date, req.body.delivery_status, req.body.proof_of_delivery, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Sales was successful" : "Failed to update Sales"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function deleteSales(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info("restrictedAreaRoutesMethods: deleteSales: req.body is: ", req.body);
  //create the staff in the db
  db.deletesalesdb(param, req.body.sale_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Sales was successful" : "Failed to delete Sales"
      sendErrorResponse(res, message, dataResponseObject.error);
    }
  });
}

async function getSales(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getSales: req.body is: ", req.body);
    db.sales(param, req.body.start_date, req.body.end_date, req.body.locations, req.body.shippingcourier, req.body.paymenttype, req.body.payment_status, req.body.delivery_status, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

async function getSaleById(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, sale_id: req.params.sale_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getSaleById parameters: ", param);
    db.saleById(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

/* Bookings */
async function createBookings(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createBookings: req.body is:`, req.body);

  //create the staff in the db
  db.createbookingsdb(param, req.body.CancellationOptions, req.body.ClientBookAppointmentOption1, req.body.ClientBookAppointmentOption2, req.body.TimeSlotInterval, req.body.AllowClientStaff, req.body.ImportantInfo, req.body.SendToStaffMembersBooked, req.body.SendToSpecificEmailAddress, req.body.SendToSpecificEmailAddressValue, req.body.FeaturedService, req.body.StarRatingForStaff, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Bookings was successful" : "Failed to create Bookings"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  });
}

async function updateBookings(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateBookings: req.body is:`, req.body);

  //create the staff in the db
  db.updatebookingsdb(param, req.body.BookingID, req.body.CancellationOptions, req.body.ClientBookAppointmentOption1, req.body.ClientBookAppointmentOption2, req.body.TimeSlotInterval, req.body.AllowClientStaff, req.body.ImportantInfo, req.body.SendToStaffMembersBooked, req.body.SendToSpecificEmailAddress, req.body.SendToSpecificEmailAddressValue, req.body.FeaturedService, req.body.StarRatingForStaff, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Bookings was successful" : "Failed to update Bookings"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  });
}

async function deleteBookings(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateBookings: req.body is:`, req.body);

  //create the staff in the db
  db.deletebookingsdb(param, req.body.BookingID, dataResponseObject => {
   
    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Bookings was successful" : "Failed to delete Bookings"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getBookings(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    db.bookings(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getBookings error: " + err);
    res.send("Error: " + err);
  }
}

/* Services */
async function createService(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createService: req.body is:`, req.body);

  //create the staff in the db
  db.createservicesdb(param, req.body.DisplayOrderLineNumber, req.body.ServiceName, req.body.TreatmentType, req.body.ServiceCategory, req.body.ServiceDescription, req.body.ServiceAvailableFor, req.body.EnableOnlineBookings, req.body.EnableStaffCommission, req.body.EnableExtraTime, req.body.IsResourceRequired, req.body.TaxRateName, req.body.EnableVoucherSales, req.body.VoucherExpiryPeriod, req.body.Default_Price, req.body.Default_Duration, req.body.locations, req.body.members, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Services was successful" : "Failed to create Services"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function updateService(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateService: req.body is:`, req.body);

  //create the staff in the db
  db.updateservicesdb(param, req.body.ServiceID, req.body.DisplayOrderLineNumber, req.body.ServiceName, req.body.TreatmentType, req.body.ServiceCategory, req.body.ServiceDescription, req.body.ServiceAvailableFor, req.body.EnableOnlineBookings, req.body.EnableStaffCommission, req.body.EnableExtraTime, req.body.IsResourceRequired, req.body.TaxRateName, req.body.EnableVoucherSales, req.body.VoucherExpiryPeriod, req.body.Default_Price, req.body.Default_Duration, req.body.locations, req.body.members, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Services was successful" : "Failed to update Services"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  });
}

async function deleteService(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteService: req.body is:`, req.body);

  //create the staff in the db
  db.deleteservicesdb(param, req.body.ServiceID, dataResponseObject => {
   
    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Services was successful" : "Failed to delete Services"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getService(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    db.services(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getService error: " + err);
    res.send("Error: " + err);
  }
}

//getServicesById

async function getServicesById(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, ServiceID: req.params.ServiceID };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getServicesById parameters: ", param);
    db.servicesgetbyid(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

async function getServicesCategory(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    db.servicescategory(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getServicesCategory error: " + err);
    res.send("Error: " + err);
  }
}

/* Calendars */
async function createCalendar(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createCalendar: req.body is:`, req.body);

  //create the staff in the db
  db.createcalendardb(param, req.body.customer_id, req.body.resource_id, req.body.staffs_id, req.body.service_id, req.body.entry_type, req.body.start_datetime, req.body.end_datetime, req.body.notes, req.body.reference_number, req.body.status, req.body.location_id, dataResponseObject => {
    //create message for the api response
    const message = dataResponseObject.error === null ? "Create Calendar was successful" : "Failed to create Calendar"

    if (dataResponseObject.error === null)
    {
      if(req.body.mobileBooking) {
        db.createMyBookingUser(param, req.body.customer_id, req.body.resource_id, req.body.staffs_id, req.body.service_id, req.body.entry_type, req.body.start_datetime, req.body.end_datetime, req.body.notes, dataResponseObject => {
         
          if (dataResponseObject.error === null)
          {
            res.send(dataResponseObject.results);
          }
          else {
            const message = dataResponseObject.error === null ? "Create Calendar was successful" : "Failed to create Calendar"
            sendErrorResponse(res, message, dataResponseObject.error)  
          }
        });
      } 
      else {
        res.send(dataResponseObject.results);
      }
    }
    else {
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  });
}

async function updateCalendar(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateCalendar: req.body is:`, req.body);

  //create the staff in the db
  db.updatecalendardb(param, req.body.calendar_entryid, req.body.customer_id, req.body.resource_id, req.body.staffs_id, req.body.service_id, req.body.entry_type, req.body.start_datetime, req.body.end_datetime, req.body.notes, req.body.reference_number, req.body.location_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Calendar was successful" : "Failed to update Calendar"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function updateCalendarStatus(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateCalendarStatus: req.body is:`, req.body);

  //create the staff in the db
  db.updatecalendarstatusdb(param, req.body.calendar_entryid, req.body.status, req.body.cancelled_reasonid, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Calendar Status was successful" : "Failed to update Calendar Status"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function deleteCalendar(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteCalendar: req.body is:`, req.body);

  //create the staff in the db
  db.deletecalendardb(param, req.body.calendar_entryid, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Calendar was successful" : "Failed to delte Calendar"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getCalendars(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getCalendars: req.body is:`, req.body);
    db.calendars(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getCalendars error: " + err);
    res.send("Error: " + err);
  }
}

async function getCalendarById(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, calendar_entryid: req.params.calendar_entryid };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getCalendarById: req.body is:`, req.body);
    db.calendarById(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getCalendars error: " + err);
    res.send("Error: " + err);
  }
}

//getCalendarFilter

async function getCalendarFilter(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getCalendarFilter: req.body is:`, req.body);
    db.calendarfilterdb(param, req.body.start_datetime, req.body.end_datetime, req.body.staffs, req.body.entry_type, req.body.services, req.body.customers, req.body.resources, req.body.locations, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getCalendars error: " + err);
    res.send("Error: " + err);
  }
}

/* Staff */
function createStaff(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createStaff: req.body is:`, req.body);

  //create the staff in the db
  db.createstaffdb(param, req.body.FirstName, req.body.LastName, req.body.StaffTitle, req.body.Notes, req.body.Email, req.body.MobileNumber, req.body.StartDate, req.body.EndDate, req.body.AllowCalendarBookings, req.body.CalendarColor, req.body.StaffPermissionCode, req.body.PhotoFilePath, req.body.is_active, req.body.locations, req.body.services, req.body.commisions, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Staff was successful" : "Failed to create Staff"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

function updateStaff(req, res) {

  var param = { tenantid: req.query.tenant_id, user_id: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateStaff: req.body is:`, req.body);

  //create the staff in the db
  db.updatestaffdb(param, req.body.StaffID, req.body.FirstName, req.body.LastName, req.body.StaffTitle, req.body.Notes, req.body.Email, req.body.MobileNumber, req.body.StartDate, req.body.EndDate, req.body.AllowCalendarBookings, req.body.CalendarColor, req.body.StaffPermissionCode, req.body.PhotoFilePath, req.body.is_active, req.body.locations, req.body.services, req.body.commisions, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Staff was successful" : "Failed to update Staff"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

function deleteStaff(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteStaff: req.body is:`, req.body);

  //create the staff in the db
  db.deletestaffdb(param, req.body.StaffID, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Staff was successful" : "Failed to delete Staff"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getStaff(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getStaff: req.body is:`, req.body);
    db.staff(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getStaff error: " + err);
    res.send("Error: " + err);
  }
}

//getStaffByID
async function getStaffByID(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, StaffID: req.params.StaffID };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getStaffByID parameters: ", param);
    db.staffbyid(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getStaffByID error: " + err);
    res.send("Error: " + err);
  }
}


/* handles the api call to create the clients and insert them into the customers table.
The req body should contain a clients details. */
function createCancelReason(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createCancelReason: req.body is:`, req.body);

  //create the clients in the db
  db.createcancelreasondb(param, req.body.DisplaySortOrder, req.body.Name, req.body.CanNotBeDeleted, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Cancel Reason was successful" : "Failed to create Cancel Reason"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

/* handles the api call to create the clients and insert them into the customers table.
The req body should contain a clients details. */
function updateCancelReason(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateCancelReason: req.body is:`, req.body);

  //create the clients in the db
  db.updatecancelreasondb(param, req.body.CancellationReasonID, req.body.DisplaySortOrder, req.body.Name, req.body.CanNotBeDeleted, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Cancel Reason was successful" : "Failed to update Cancel Reason"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

/* handles the api call to create the clients and insert them into the customers table.
The req body should contain a clients details. */
function deleteCancelReason(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteCancelReason: req.body is:`, req.body);

  //create the clients in the db
  db.deletecancelreasondb(param, req.body.CancellationReasonID, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Cancel Reason was successful" : "Failed to delete Cancel Reason"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getCancelReason(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getCancelReason: req.body is:`, req.body);
    db.cancelreason(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getCancelReason error: " + err);
    res.send("Error: " + err);
  }
}

/* handles the api call to create the clients and insert them into the customers table.
The req body should contain a clients details. */
function createCustomers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createCustomers: req.body is:`, req.body);

  //query db to see if the clients exists already
  db.doescustomersexist(param, req.body.first_name, req.body.last_name, (sqlError, doesCustomersExist) => {

    //check if the clients exists
    if (sqlError !== null || doesCustomersExist) {

      //message to give summary to client
      const message = sqlError !== null ? "Operation unsuccessful" : "Customers Encoded already exists"

      //detailed error message from callback
      const error = sqlError !== null ? sqlError : "Customers Encoded already exists"

      sendErrorResponse(res, message, sqlError)

      return
    }

    var custAddresses = [];
    if (req.body.addresses) {
      custAddresses = req.body.addresses;
    }

    //create the clients in the db
    db.createcustomers(param, req.body.first_name, req.body.last_name, req.body.mobile_number, req.body.email_address, req.body.gender, req.body.date_of_birth,
      req.body.important_client_info, req.body.display_on_all_bookings, req.body.additional_phone_number, req.body.client_source, req.body.send_email_notif, req.body.client_accept_marketing_notif,
      req.body.preferred_language, req.body.password, req.body.registered_from, req.body.is_email_verified, req.body.is_sms_verified, req.body.is_socialmedia_verified, req.body.is_active, req.body.current_location_id, 
      req.body.business_name, req.body.business_type, req.body.address_type, req.body.address_name, req.body.Address, req.body.Apartment, req.body.District, req.body.City, req.body.County, req.body.State, req.body.AreasOfInterest, req.body.AdministrativeArea, req.body.SubAdministrativeArea, req.body.SubLocality, req.body.SubThoroughfare, req.body.Thoroughfare, req.body.Locality, req.body.Latitude, req.body.Longtitude, req.body.PostalCode, req.body.CountryCode, req.body.CountryName, req.body.LocationRating, req.body.Is_Instant_Confirmation_Enabled, req.body.Is_Default_Address, req.body.next_invoice_number, dataResponseObject => {

        if (dataResponseObject.error === null)
        {
          res.send(dataResponseObject.results);
        }
        else {
          const message = dataResponseObject.error === null ? "Create Customers was successful" : "Failed to create Customers"
          sendErrorResponse(res, message, dataResponseObject.error)
        }
      })
  })
}

function updateCustomers(req, res) {
  //update the clients in the db
  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  var custAddresses = [];
  if (req.body.addresses) {
    custAddresses = req.body.addresses;
  }

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateCustomers: req.body is:`, req.body);
  db.updatecustomers(param, req.body.customer_id, req.body.first_name, req.body.last_name, req.body.mobile_number, req.body.email_address, req.body.gender, req.body.date_of_birth,
    req.body.important_client_info, req.body.display_on_all_bookings, req.body.additional_phone_number, req.body.client_source, req.body.send_email_notif, req.body.client_accept_marketing_notif,
    req.body.preferred_language, req.body.password, req.body.registered_from, req.body.is_email_verified, req.body.is_sms_verified, req.body.is_socialmedia_verified, req.body.is_active, req.body.current_location_id, 
    req.body.business_name, req.body.business_type, req.body.address_type, req.body.address_name, req.body.Address, req.body.Apartment, req.body.District, req.body.City, req.body.County, req.body.State, req.body.AreasOfInterest, req.body.AdministrativeArea, req.body.SubAdministrativeArea, req.body.SubLocality, req.body.SubThoroughfare, req.body.Thoroughfare, req.body.Locality, req.body.Latitude, req.body.Longtitude, req.body.PostalCode, req.body.CountryCode, req.body.CountryName, req.body.LocationRating, req.body.Is_Instant_Confirmation_Enabled, req.body.Is_Default_Address, req.body.next_invoice_number, dataResponseObject => {

      if (dataResponseObject.error === null)
      {
        res.send(dataResponseObject.results);
      }
      else {
        const message = dataResponseObject.error === null ? "Update Customers was successful" : "Failed to update Customers Record"
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    })
}

function deleteCustomers(req, res) {
  //delete the clients in the db

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteCustomers: req.body is:`, req.body);
  db.deletecustomers(param, req.body.customer_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Customers was successful" : "Failed to delete Customers"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getCustomers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getCustomers: req.body is:`, req.body);
    db.customers(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getCustomers error: " + err);
    res.send("Error: " + err);
  }
}


async function customerbyid(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, customer_id: req.params.customer_id  };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: customerbyid: `, param);
    db.customerById(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getCustomers error: " + err);
    res.send("Error: " + err);
  }
}

/* handles the api call to create the prodcut and insert them into the products table.
The req body should contain a product details. */
function createProduct(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  console.log(`productRoutesMethods: createProduct: req.body is:`, req.body);
  
  db.createproducts(param, req.body.product_name, req.body.barcode, req.body.brand, req.body.measure, req.body.amount, req.body.short_description, 
    req.body.product_description, req.body.product_category, req.body.supply_price, req.body.supplier_id, req.body.enable_retail_sales, req.body.retail_price, req.body.special_price, 
    req.body.markup_price, req.body.retail_tax, req.body.enable_commision, req.body.stock_keeping_unit, req.body.default_supplier, req.body.track_stock_quantity, 
    req.body.current_stock_quantity, req.body.reorder_limit, req.body.reorder_quantity, req.body.product_image, req.body.pcbox, req.body.product_subcategory, req.body.product_size, req.body.locations, req.body.is_package, req.body.package_items, dataResponseObject => {
    
      if (dataResponseObject.error === null)
      {
        res.send(dataResponseObject.results);
      }
      else {
        const message =  dataResponseObject.error === null  ? "Create Products was successful" : "Failed to create Products"
        sendErrorResponse(res, message, dataResponseObject.error)
      }
  });
}

function updateProduct(req, res) {
  //update the product in the db
  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateProduct: req.body is:`, req.body);
  db.updateproducts(param, req.body.product_id, req.body.product_name, req.body.barcode, req.body.brand, req.body.measure, req.body.amount, req.body.short_description,
    req.body.product_description, req.body.product_category, req.body.supply_price, req.body.enable_retail_sales, req.body.retail_price, req.body.special_price,
    req.body.markup_price, req.body.retail_tax, req.body.enable_commision, req.body.stock_keeping_unit, req.body.default_supplier, req.body.track_stock_quantity, 
    req.body.reorder_limit, req.body.reorder_quantity, req.body.product_image, req.body.pcbox, req.body.product_subcategory, req.body.product_size, req.body.locations, req.body.is_package, req.body.package_items, dataResponseObject => {

      if (dataResponseObject.error === null)
      {
        res.send(dataResponseObject.results);
      }
      else {
        const message = dataResponseObject.error === null ? "Update Products was successful" : "Failed to update Products"
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
}

async function deleteProduct(req, res) {
  //delete the product in the db
  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteProduct: req.body is:`, req.body);
  db.deleteproducts(param, req.body.product_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete was successful" : "Failed to delete Product"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getProducts(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getProducts: req.body is:`, req.body);
    db.products(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getProducts error: " + err);
    res.send("Error: " + err);
  }
}

async function getProductsById(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, product_id: req.params.product_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getProductsById parameters: ", param);
    db.productsbyid(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        try {
          // Include the product image in base64 format if product_image is not null
          //if (dataResponseObject.results.product_image !== null) {
          //  const contents = fs.readFileSync(path.join(__dirname, "./uploads/" + dataResponseObject.results.product_image), {encoding: 'base64'});
          //  dataResponseObject.results.product_image_base64 = contents;
          //}
        } catch (err) {
          //logger.error("getProductsById Error:", err);
        }

        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

/* handles the api call to create the deal list and insert them into the deal table.
The req body should contain a deal details. */
function createDeals(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createDeal: req.body is:`, req.body);

  db.createdealsdb(param, req.body.deal_name, req.body.deal_value, req.body.php_or_pctg, req.body.enable_service_sale, req.body.enable_product_sale,
    req.body.enable_voucher_sale, req.body.enable_membership_sale, dataResponseObject => {

      if (dataResponseObject.error === null)
      {
        res.send(dataResponseObject.results);
      }
      else {
        const message = dataResponseObject.error === null ? "Create Deals was successful" : "Failed to create Deals"
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    })
}

/* handles the api call to update the deal list and insert them into the deal table.
The req body should contain a deal details. */
function updateDeals(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateDeals: req.body is:`, req.body);

  db.updatedealsdb(param, req.body.deals_id, req.body.deal_name, req.body.deal_value, req.body.php_or_pctg, req.body.enable_service_sale, req.body.enable_product_sale,
    req.body.enable_voucher_sale, req.body.enable_membership_sale, dataResponseObject => {

      if (dataResponseObject.error === null)
      {
        res.send(dataResponseObject.results);
      }
      else {
        const message = dataResponseObject.error === null ? "Update Deals was successful" : "Failed to update Deals"
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    })
}

/* handles the api call to update the deal list and insert them into the deal table.
The req body should contain a deal details. */
function deleteDeals(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteDeals: req.body is:`, req.body);

  db.deletedealsdb(param, req.body.deals_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Deals was successful" : "Failed to delete Deals"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getDeals(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getDeals: req.body is:`, req.body);
    db.deals(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getDeals error: " + err);
    res.send("Error: " + err);
  }
}

/* handles the api call to create the suppliers list and insert them into the suppliers table.
The req body should contain a suppliers details. */
function createSuppliers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: createSuppliers: req.body is:`, req.body);

  db.createsupplierdb(param, req.body.supplier_name, req.body.supplier_description, req.body.contact_first_name, req.body.contact_last_name, req.body.contact_phone_number,
    req.body.contact_tel_number, req.body.contact_email, req.body.contact_website, req.body.address_street, req.body.address_suburb, req.body.address_city, req.body.address_state, req.body.address_zip_postalcode, req.body.address_country, dataResponseObject => {
      
    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Create Suppliers was successful" : "Failed to create Suppliers"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

/* handles the api call to create the suppliers list and insert them into the suppliers table.
The req body should contain a suppliers details. */
function updateSuppliers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: updateSuppliers: req.body is:`, req.body);

  db.updatesupplierdb(param, req.body.supplier_id, req.body.supplier_name, req.body.supplier_description, req.body.contact_first_name, req.body.contact_last_name, req.body.contact_phone_number,
    req.body.contact_tel_number, req.body.contact_email, req.body.contact_website, req.body.address_street, req.body.address_suburb, req.body.address_city, req.body.address_state, req.body.address_zip_postalcode, req.body.address_country, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Update Suppliers was successful" : "Failed to update Suppliers"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}


/* handles the api call to create the suppliers list and insert them into the suppliers table.
The req body should contain a suppliers details. */
function deleteSuppliers(req, res) {

  var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

  logger.setRequestId(req.id);
  logger.info(`restrictedAreaRoutesMethods: deleteSuppliers: req.body is:`, req.body);

  db.deletesupplierdb(param, req.body.supplier_id, dataResponseObject => {

    if (dataResponseObject.error === null)
    {
      res.send(dataResponseObject.results);
    }
    else {
      const message = dataResponseObject.error === null ? "Delete Suppliers was successful" : "Failed to delete Suppliers"
      sendErrorResponse(res, message, dataResponseObject.error)
    }
  })
}

async function getSuppliers(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.setRequestId(req.id);
    logger.info(`restrictedAreaRoutesMethods: getSuppliers: req.body is:`, req.body);
    db.suppliers(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error)
      }
    });
  } catch (err) {
    logger.error("getSuppliers error: " + err);
    res.send("Error: " + err);
  }
}

async function getSuppliersById(req, res) {
  try {
    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id, supplier_id: req.params.supplier_id };

    logger.setRequestId(req.id);
    logger.info("restrictedAreaRoutesMethods: getSuppliersById parameters: ", param);
    db.suppliersbyid(param, dataResponseObject => {
      const message = dataResponseObject.error === null ? "Successful" : "Failed";
      if (!dataResponseObject.error) {
        res.send(dataResponseObject.results);
      }
      else {
        sendErrorResponse(res, message, dataResponseObject.error);
      }
    });
  } catch (err) {
    logger.error("getSales error: " + err);
    res.send("Error: " + err);
  }
}

//sends a response created out of the specified parameters to the client.
//The typeOfCall is the purpose of the client's api call
function sendErrorResponse(res, message, error) {
  logger.error("restrictedAreaRoutesMethods: sendErrorResponse: Message: " +
    message + "; Error: " + error);
  res
    .status(error !== null ? error !== null ? 400 : 400 : 200)
    .json({
      'message': message,
      'error': error,
    });
}
