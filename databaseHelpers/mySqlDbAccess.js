let mySqlConnection;
const loggerService = require('./../logger_service');
const logger = new loggerService('rbService');
//Send Email - Node_Mailer
const nodemailer = require('nodemailer');
//Config Json
const config = require('./../config.json');

/**
 * 
 * This module exports a function  which registers users by using
 * the specified injectedUserDBHelper.
 * 
 * @param injectedMySqlConnection - this object handles the execution of sql
 * related database operation such as storing them when they register
 * 
 * @return {{registerUser: registerUser, login: *}}
 */
 module.exports = injectedMySqlConnection => {
    mySqlConnection = injectedMySqlConnection
    return {
      createcustomers: createCustomersInDB,
      updatecustomers: updateCustomersInDB,
      deletecustomers: deleteCustomersInDB,
      doescustomersexist: doesCustomersExist,
      customers: getCustomers,
      customerById: customerByIdInDB,
      createproducts: createProductInDB,
      updateproducts: updateProductInDB,
      deleteproducts: deleteProductInDB,
      doesproductsexist: doesProductExist,
      products: getProducts,
      productsbyid: getProductsById,
      createdealsdb: createDealInDB,
      updatedealsdb: updateDealInDB,
      deletedealsdb: deleteDealInDB,
      deals: getDeals,
      getdealsbyiddb: getDealsByIdInDB,
      createsupplierdb: createSupplierInDB,
      updatesupplierdb: updateSupplierInDB,
      deletesupplierdb: deleteSupplierInDB,
      suppliers: getSuppliers,
      suppliersbyid: getSuppliersById,
      createcancelreasondb: createCancelReasonInDB,
      updatecancelreasondb: updateCancelReasonInDB,
      deletecancelreasondb: deleteCancelReasonInDB,
      cancelreason: getCancelReason,
      createstaffdb: createStaffInDB,
      updatestaffdb: updateStaffInDB,
      deletestaffdb: deleteStaffInDB,
      staff: getStaff,
      staffbyid: getStaffByID,
      createcalendardb: createCalendarInDB,
      updatecalendardb: updateCalendarInDB,
      deletecalendardb: deleteCalendarInDB,
      updatecalendarstatusdb: updateCalendarStatusInDB,
      calendars: getCalendars,
      calendarById: getCalendarById,
      calendarfilterdb: getCalendarFilterInDB,
      createservicesdb: createServicesInDB,
      updateservicesdb: updateServicesInDB,
      deleteservicesdb: deleteServicesInDB,
      services: getServices,
      servicesgetbyid: getServicesById,
      servicescategory: getServicesCategory,
      createbookingsdb: createBookingsInDB,
      updatebookingsdb: updateBookingsInDB,
      deletebookingsdb: deleteBookingsInDB,
      bookings: getBookings,
      updateinstockdb: updateInStockInDB,
      updatedestockdb: updateDeStockInDB,
      createproductcategorydb: createProductCategoryInDB,
      updateproductcategorydb: updateProductCategoryInDB,
      deleteproductcategorydb: deleteProductCategoryInDB,
      getlistproductcategorydb: getListProductCategoryInDB,
      createproductbranddb: createProductBrandInDB,
      updateproductbranddb: updateProductBrandInDB,
      deleteproductbranddb: deleteProductBrandInDB,
      getlistproductbranddb: getListProductBrandInDB,
      createProductUnitOfMeasure: createProductUnitOfMeasure,
      updateProductUnitOfMeasure: updateProductUnitOfMeasure,
      deleteProductUnitOfMeasure: deleteProductUnitOfMeasure,
      getListProductUnitOfMeasure: getListProductUnitOfMeasure,
      createlocationsdb: createLocationsInDB,
      updatelocationsdb: updateLocationsInDB,
      deletelocationsdb: deleteLocationsInDB,
      getlistlocationsdb: getListLocationsInDB,
      getlistlocationbytenantiddb: getListLocationbytenantidInDB,
      createpaymenttypedb: createPaymentTypeInDB,
      updatepaymenttypedb: updatePaymentTypeInDB,
      deletepaymenttypedb: deletePaymentTypeInDB,
      getlistpaymenttypedb: getListPaymentTypeInDB,
      getpaymenttypebyiddb: getListPaymentTypeByIdInDB,
      createresourcesdb: createResourcesInDB,
      updateresourcesdb: updateResourcesInDB,
      deleteresourcesdb: deleteResourcesInDB,
      getlistresourecesdb: getListResourcesInDB,
      getresourcesbyiddb: getResourcesByIdInDB,
      createsalesdb: createSalesInDB,
      updatesalesdb: updateSalesInDB,
      deletesalesdb: deleteSalesInDB,
      sales: getSales,
      saleById: getSaleById,
      searchTenantProductService: searchTenantProductService,
      getTenantProductsAndServices: getTenantProductsAndServices,
      getTenantStaffs: getTenantStaffs,
      getAllTenantTypes: getAllTenantTypes,
      getAllTenants: getAllTenants,
      getAllMyBookings: getAllMyBookings,
      createMyBookingUser: createMyBookingUser,
      changecurrentlocation: changecurrentlocation,
      createreferralsourcesdb: createReferralSourcesInDB,
      updatereferralsourcesdb: updateReferralSourcesInDB,
      deletereferralsourcesdb: deleteReferralSourcesInDB,
      getreferralsourcesdb: getReferralSourcesInDB,
      createclosedatesdb: createCloseDatesInDB,
      updateclosedatesdb: updateCloseDatesInDB,
      deleteclosedatesdb: deleteCloseDatesInDB,
      getclosedatesdb: getCloseDatesInDB,
      createbusinessdetailsdb: createBusinessDetailsInDB,
      updatebusinessdetailsdb: updateBusinessDetailsInDB,
      getbusinessdetailsdb: getBusinessDetailsByTenantInDB,
      doesbusinessdetailsexistdb: doesBusinessDetailsExist,
      dailysalesreport: dailysalesreport,
      inventoryperlocationreport: inventoryperlocationreport,
      outofstockreport: outofstockreport,
      appointmentsreport: appointmentsreport,
      inventorytransactionsreport: inventorytransactionsreport,
      salessummaryreport: salessummaryreport,
      dashboardreport: dashboardreport,
      createcommisiondb: createCommisionInDB,
      updatecommisiondb: updateCommisionInDB,
      deletecommisiondb: deleteCommisionInDB,
      getListcommisiondb: getListCommisionInDB,
      getcommisionbyiddb: getCommisionByIDInDB,
      createshippingcourierdb: createShippingCourierInDB,
      updateshippingcourierdb: updateShippingCourierInDB,
      deleteshippingcourierdb: deleteShippingCourierInDB,
      getshippingcourierdb: getShippingCourierInDB,
      createappointmenttypesdb: createAppointmentTypesInDB,
      updateappointmenttypesdb: updateAppointmentTypesInDB,
      deleteappointmenttypesdb: deleteAppointmentTypesInDB,
      getappointmenttypesdb: getAppointmentTypesInDB,
      createuserprofiledb: createUserProfileInDB,
      updateuserprofiledb: updateUserProfileInDB,
      getusersprofilebd: getUserProfileInDB,
      createsourceofsalesdb: createSourceofSalesInDB,
      updatesourceofsalesdb: updateSourceofSalesInDB,
      deletesourceofsalesdb: deleteSourceofSalesInDB,
      getsourceofsalesdb: getSourceofSalesInDB,
      salesbypaymenttypedb: SalesByPaymentTypeInDB,
      salebyproductcategorydb: SalesByProductCategoryInDB,
      salesbyshippingcourierdb: SalesByShippingCourierInDB,
      salesbyitemdb: SalesByItemInDB,
      salesbylocationdb: saleByLocationInDB,
      salesbycustomersdb: saleByCustomersInDB,
      salesbyhoursdb: saleByHoursInDB,
      salesbychanneldb: saleByChannelInDB,
      salesbyteammembersdb: salesByTeamMembersInDB,
      salesbystaffmembersdb: salesByStaffMembersInDB,
      salesbymemberbreakdowndb: salesByMemberBreakdownInDB,
      salesbyyeardb: salesByYearInDB,
      salesbylogsdb: salesByLogsInDB,
      salesbymonthdb: salesByMonthInDB,
      salesbydaysdb: salesByDayInDB,
      salesbyhourofdaydb: salesByHourOfDayInDB,
      salesbyquarterdb: salesByQuarterInDB,
      createuseraddresses: createUserAddressesInDB,
      updateuseraddresses: updateUseraddressesInDB,
      getDefaultcustomer: getDefaultcustomer,
      productstocksonhandperlocationdb: ProductStocksOnHandPerLocationInDB,
      updateinvoicestatusdb: UpdateInvoiceStatusInDB,
      createmultipaymentsdb: createMultiPaymentsInDB,
      createvouchersdb: createVouchersInDB,
      updatevouchersdb: updateVouchersInDB,
      deletevouchersdb: deleteVouchersInDB,
      getvouchersbyiddb: getVouchersByIDInDB,
      getlistvouchersdb: getListVouchersInDB,
      getsalesvouchersdb: GetSalesVouchersInDB,
      updatedeliverystatusdb: updateDeliveryStatusInDB,
      financespaymentsummarydb: financesPaymentSummaryInDB,
      financespaymentslogdb: financesPaymentsLogInDB,
      financestaxessummarydb: financesTaxesSummaryInDB,
      financessummarydb: financesSummaryInDB,
      inventorystockmovementlogdb: inventoryStockMovementLogInDB,
      inventorystockmovementsummarydb: inventoryStockMovementSummaryInDB,
      inventoryproductsalesperformancedb: inventoryProductSalesPerformanceInDB,
      inventorystockconsumptiondb: inventoryStockConsumptionInDB,
      appointmentsummarydb: appointmentSummaryInDB,
      appointmentcancellationsdb: appointmentCancellationsInDB,
      tipscollecteddb: tipsCollectedInDB,
      discountsummarydb: discountSummaryInDB,
      outstandinginvoicesdb: outstandingInvoicesInDB,
      clientlistdb: clientListInDB,
      clientretentiondb: clientRetentionInDB,
      vouchersalesdb: voucherSalesInDB,
      voucherredemptionsdb: voucherRedemptionsInDB,
      voucheroutstandingbalancedb: voucherOutStandingBalanceInDB,
      teammemberworkinghoursdb:teamMemberWorkingHoursInDB,
      tipsbyteammemberdb: tipsbyTeamMemberInDB,
      teammembercommssiondetaileddb: teamMemberCommssionDetailedInDB,
      teammembercommssionsummarydb: teammemberCommssionSummaryInDB,
      send_mailbd: sendMailInDB,
      createmembershipdb: createMembershipInDB,
      updatemembershipdb: updateMembershipInDB,
      deletemembershipdb: deleteMembershipInDB,
      getmembershipdb: getMembershipInDB,
      getinvoicesequencingdb: getinvoiceSequencingInDB,
      updateinvoicesequencingdb: updateinvoiceSequencingInDB,
      salesmembershipdb: salesMembershipInDB,
      createpurchaseorderbd: createPurchaseOrderInDB,
      updatepurchaseorderbd: updatePurchaseOrderInDB,
      getpurchaseorderdb: getPurchaseOrderInDB,
      getpurchaseorderbyiddb: getPurchaseOrderbyIDInDB,
      updatepoorderstatusdb: updatePOOrderStatusdbInDB,
      getcustomersvouchersdb: getCustomersVouchersInDB,
      dashboardrecentsalesdb: dashboardRecentSalesInDB,
      dashboardtopservicesdb: dashboardTopServicesInDB,
      dashboardtopteammemberdb: dashboardTopTeamMemberInDB,
      dashboardappointmentsactivitydb: dashboardAppointmentsActivityInDB,
      dashboardtodaysnextappointmentsdb: dashboardTodaysNextAppointmentsInDB,
      dashboardupcomingappointmentsdb: dashboardUpcomingAppointmentsInDB,
      createtaxesdb: createTaxesInDB,
      updatetaxesdb: updateTaxesInDB,
      deletetaxesdb: deleteTaxesInDB,
      gettaxesdb: getTaxesInDB,
      gettaxesbyiddb: getTaxesByIDInDB,
      createtipsdb: createTipsInBD,
      updatetipsdb: updateTipsInBD,
      createworkinghoursedb: createWorkingHoursInDB,
      updateworkinghoursedb: updateWorkingHoursInDB,
      deleteworkinghoursedb: deleteWorkingHoursInDB,
      getworkinghoursdb: getWorkingHoursInDB,
      createpermissionsdb: createPermissionsInDB,
      updatepermissionsdb: updatePermissionsInDB,
      getpermissionsdb: getPermissionsInDB
   }
}

// Get Permissions
function getPermissionsInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM staffpermissions s
    ORDER BY s.PermissionGroup ASC`;

    logger.info('getPermissionsInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Permission"));
  }
}

// Update Permissions
function updatePermissionsInDB(param, StaffPermissionID, DisplaySortOrder, PermissionGroup, PermissionName, StaffPermissionCode, PermissionState, callback){

  try {

    const updatepermissions = `UPDATE staffpermissions p SET 
    DisplaySortOrder = '${DisplaySortOrder}',
    PermissionGroup = '${PermissionGroup}',
    PermissionName = '${PermissionName}',
    StaffPermissionCode = '${StaffPermissionCode}',
    PermissionState = ${PermissionState},
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE StaffPermissionID = '${StaffPermissionID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatepermissions, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Permissions "));
  }
}

// Create Permissions
function createPermissionsInDB(param, DisplaySortOrder, PermissionGroup, PermissionName, StaffPermissionCode, PermissionState, callback){

  try {

      const createpermissions = `INSERT INTO staffpermissions (DisplaySortOrder, PermissionGroup, PermissionName, StaffPermissionCode, PermissionState, created_by) 
        VALUES ('${DisplaySortOrder}', '${PermissionGroup}', '${PermissionName}', '${StaffPermissionCode}', ${PermissionState}, '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createpermissions, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Permissions"));
  }
}

// Get Working Hours
function getWorkingHoursInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT s.StaffID, s.FirstName, s.LastName, sws.Date AS DateSchedule, sws.ShiftStartTime, sws.ShiftEndTime, sws.repeats, sws.endrepeat
    FROM staffs s
    LEFT JOIN staffworkschedules sws ON s.StaffID = sws.StaffID
    ORDER BY s.LastName ASC`;

    logger.info('getWorkingHoursInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Working Hours"));
  }
}

// Delete Working Hourse
function deleteWorkingHoursInDB(param, StaffWorkSCheduleID, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const deleteworkinghourse = `DELETE FROM staffworkschedules WHERE StaffWorkSCheduleID = '${StaffWorkSCheduleID}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteworkinghourse, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Working Hours"));
  }
}

// Update Taxes
function updateWorkingHoursInDB(param, StaffWorkSCheduleID, StaffID, Date, ShiftStartTime, ShiftEndTime, repeats, endrepeat, callback){

  try {

    const updateworkinghourse = `UPDATE staffworkschedules p SET 
    StaffID = '${StaffID}',
    Date = '${mySQLDate(Date)}',
    ShiftStartTime = '${ShiftStartTime}',
    ShiftEndTime = '${ShiftEndTime}',
    repeats = '${repeats}',
    endrepeat = '${endrepeat}',
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE StaffWorkSCheduleID = '${StaffWorkSCheduleID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateworkinghourse, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Working Hours "));
  }
}

// Create Working Hours
function createWorkingHoursInDB(param, StaffID, Date, ShiftStartTime, ShiftEndTime, repeats, endrepeat, callback){

  try {

      const createworkinghourse = `INSERT INTO staffworkschedules (StaffID, Date, ShiftStartTime, ShiftEndTime, repeats, endrepeat, created_by) 
        VALUES ('${StaffID}', '${mySQLDate(Date)}', '${ShiftStartTime}', '${ShiftEndTime}', '${repeats}', '${endrepeat}', '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createworkinghourse, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Working Hours"));
  }
}

// Update Taxes
function updateTipsInBD(param, location_id, enable_tipping, tip_1, tip_2, tip_3, tip_4, tip_5, dedault_selection, callback){

  try {

    const updatetips = `UPDATE tips p SET 
    location_id = '${location_id}',
    enable_tipping = ${enable_tipping},
    tip_1 = ${tip_1},
    tip_2 = ${tip_2},
    tip_3 = ${tip_3},
    tip_4 = ${tip_4},
    tip_5 = ${tip_5},
    dedault_selection = ${dedault_selection},
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE location_id = '${location_id}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatetaxes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Tips "));
  }
}

// Create Tips
function createTipsInBD(param, location_id, enable_tipping, tip_1, tip_2, tip_3, tip_4, tip_5, dedault_selection, callback){

  try {

      const createtips = `INSERT INTO tips (location_id, enable_tipping, tip_1, tip_2, tip_3, tip_4, tip_5, dedault_selection, created_by) 
        VALUES ('${location_id}', ${enable_tipping}, ${tip_1}, ${tip_2}, ${tip_3}, ${tip_4}, ${tip_5}, ${dedault_selection}, '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createtips, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Tips "));
  }
}

// Get Taxes by ID
function getTaxesByIDInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM taxes WHERE TaxID = '${param.TaxID}'`;

    logger.info('getTaxesByIDInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Taxes By ID"));
  }
}

// Get List Taxes
function getTaxesInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM taxes ORDER BY created_datetime ASC`;

    logger.info('getTaxesInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Taxes"));
  }
}

// Delete Membership
function deleteTaxesInDB(param, TaxID, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const deletetaxes = `DELETE FROM taxes WHERE TaxID = '${TaxID}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletetaxes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Tax"));
  }
}

// Update Taxes
function updateTaxesInDB(param, TaxID, TaxName, TaxRate, callback){

  try {

    const updatetaxes = `UPDATE taxes p SET 
    TaxName = '${TaxName}',
    TaxRate = ${TaxRate},
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE TaxID = '${TaxID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatetaxes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Tax "));
  }
}

// Create Taxes
function createTaxesInDB(param, TaxName, TaxRate, callback){

  try {

      const createtaxes = `INSERT INTO taxes (TaxName, TaxRate, created_by) 
        VALUES ('${TaxName}', ${TaxRate}, '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createtaxes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Tax "));
  }
}

// Dashboard Upcoming Appointments
function dashboardUpcomingAppointmentsInDB(param, locations, nextdays, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    //create query using the data in the req.body to register the user in the db
    let qry = ``;

    if ((locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE c.status = 'New' AND 
      DATE_ADD(c.start_datetime, INTERVAL + `+ nextdays +` DAY)
      ORDER BY c.start_datetime ASC`;

    } else {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE c.status = 'New' AND c.location_id IN (` + selLocation + `)  AND
      DATE_ADD(c.start_datetime, INTERVAL + `+ nextdays +` DAY)
      ORDER BY c.start_datetime ASC`;

    }

    logger.info('dashboardUpcomingAppointmentsInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Dashboard Upcoming Appointments"));
  }
}

// Dashboard Todays Next Appointment
function dashboardTodaysNextAppointmentsInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
    r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
    c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
    FROM calendars c
    LEFT JOIN customers cs ON c.customer_id = cs.customer_id
    LEFT JOIN resources r ON c.resource_id = r.resourceid
    LEFT JOIN services sr ON c.service_id = sr.ServiceID
    LEFT JOIN staffs s ON c.staff_id = s.StaffID
    LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
    LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
    LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
    WHERE day(c.start_datetime) = day(now()) AND c.status = 'New'
    ORDER BY c.start_datetime ASC`;

    logger.info('dashboardTodaysNextAppointmentsInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Dashboard Today's Next Appointments"));
  }
}

// Dashboard Appointments Activity
function dashboardAppointmentsActivityInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
    r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
    c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
    FROM calendars c
    LEFT JOIN customers cs ON c.customer_id = cs.customer_id
    LEFT JOIN resources r ON c.resource_id = r.resourceid
    LEFT JOIN services sr ON c.service_id = sr.ServiceID
    LEFT JOIN staffs s ON c.staff_id = s.StaffID
    LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
    LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
    LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
    WHERE c.status = 'New'
    ORDER BY c.start_datetime ASC`;

    logger.info('dashboardAppointmentsActivityInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Dashboard Appointments Activity"));
  }
}

// Dashboard Top Team Member
function dashboardTopTeamMemberInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT s.StaffID, CONCAT(s.FirstName, ' ',s.LastName) AS TeamMember, 
    COALESCE(case when thisMonth.ThisMonth!='null' then thisMonth.ThisMonth END, 0) AS ThisMonth, 
    COALESCE(case when lastMonth.LastMonth!='null' then lastMonth.LastMonth END, 0) AS LastMonth
    FROM staffs s
    LEFT JOIN (SELECT sale_id, staff_id, SUM(net_price) AS ThisMonth FROM sale_items WHERE month(created_datetime)=month(now())) AS thisMonth ON thisMonth.staff_id = s.StaffID
    JOIN (SELECT sale_id, staff_id, SUM(net_price) AS LastMonth FROM sale_items WHERE month(created_datetime)=month(now())-1) AS lastMonth ON lastMonth.staff_id = s.StaffID
    ORDER BY ThisMonth, LastMonth DESC`;

    logger.info('dashboardTopTeamMemberInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Dashboard Top Team Member"));
  }
}

// Dashboard Top Services
function dashboardTopServicesInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT s.ServiceID, s.ServiceName, 
    COALESCE(case when thisMonth.ThisMonth!='null' then thisMonth.ThisMonth END, 0) AS ThisMonth, 
    COALESCE(case when lastMonth.LastMonth!='null' then lastMonth.LastMonth END, 0) AS LastMonth
    FROM services s
    LEFT JOIN (SELECT item_id, COUNT(item_id) AS ThisMonth FROM sale_items WHERE month(created_datetime)=month(now()) AND item_type = 'Services') AS thisMonth ON thisMonth.item_id = s.ServiceID
    JOIN (SELECT item_id, COUNT(item_id) AS LastMonth FROM sale_items WHERE month(created_datetime)=month(now())-1 AND item_type = 'Services') AS lastMonth ON lastMonth.item_id = s.ServiceID
    ORDER BY ThisMonth, LastMonth DESC`;

    logger.info('dashboardTopServicesInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Dashboard Top Services"));
  }
}

// Get Customer Voucher
function getCustomersVouchersInDB(param, customer_id, vouchercode, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT s.created_datetime, DATE_ADD(s.sale_date, INTERVAL (REGEXP_SUBSTR(v.ValidFor,"[0-9]+")) DAY) AS  Expirydate,
    s.invoice_number, s.customer_id, s.customer_name, si.item_type, si.remarks, si.item_name, si.voucher_id, si.vouchercode,
    (si.unit_price * quantity) AS Total, 0 AS Redeemed, (si.unit_price * quantity) AS Remaining FROM sales s
    LEFT JOIN sale_items si ON s.sale_id = si.sale_id
    LEFT JOIN vouchers v ON si.item_id = v.VoucherID
    WHERE s.customer_id = '${customer_id}' AND si.item_type = 'Vouchers' AND
    si.vouchercode = '${vouchercode}'
    ORDER BY s.sale_date DESC`;

    logger.info('getCustomersVouchersInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Customer Voucher"));
  }
}

// Update PO Order Status
function updatePOOrderStatusdbInDB(param, purchase_order_id, order_status, supplier_id, localtion_id, callback) {
  try {

    const updateorderstatus = `UPDATE purchase_order p SET 
    order_status = '${order_status}',
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE purchase_order_id = '${purchase_order_id}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateorderstatus, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Update PO"));
  }
}

// Get Deals By ID
function getDealsByIdInDB(param, deals_id, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM deals d WHERE d.deals_id = '${deals_id}'`;

    logger.info('getDealsByIdInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Users Profile"));
  }
}

// Get Purchase Order By ID
function getPurchaseOrderbyIDInDB(param, callback) {
  try {

    const qryPO = `SELECT * FROM purchase_order WHERE purchase_order_id = '${param.purchaseorderid}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryPO, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        let PO_details = {
          purchase_order : dataResponseObject.results,
          purchase_order_item : [],
          purchase_order_payments : []
        }

        const qryPOitem = `SELECT * FROM purchase_order_item WHERE purchase_order_id = '${param.purchaseorderid}'`;

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryPOitem, [], function (dataResponseObject) {
          if(dataResponseObject.error) {
            callback(dataResponseObject);
    
          } else {

            PO_details.purchase_order_item = dataResponseObject.results;

            const qryPOpayment = `SELECT * FROM purchase_order_payments WHERE purchase_order_id = '${param.purchaseorderid}'`;

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryPOpayment, [], function (dataResponseObject) {
              if(dataResponseObject.error) {
                callback(dataResponseObject);
        
              } else {

                PO_details.purchase_order_payments = dataResponseObject.results;

                var resp = createDataResponseObject(false, PO_details);
                callback(resp);

              }
            });
          }
        });
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Users Profile"));
  }
}

// Get Purchase Order
function getPurchaseOrderInDB(param, location_id, supplier_id, order_status, callback) {
  try {

    let qry;
    if (location_id === '' && supplier_id === '' && order_status === '') {

      qry = `SELECT purchase_order_id, CONCAT('P', order_number) AS OrderNumber, DATE_FORMAT(created_datetime ,'%d %b %Y') AS Created,
      COALESCE(case when date_expected_by!='0000-00-00' then DATE_FORMAT(date_expected_by ,'%d %b %Y') END, ' ') AS Expected, 
      location_name_delivery AS DeliverTo, supplier_name AS DeliverFrom, total_order, order_status  
      FROM purchase_order
      ORDER BY order_number DESC`

    } else {

      qry = `SELECT purchase_order_id, CONCAT('P', order_number) AS OrderNumber, DATE_FORMAT(created_datetime ,'%d %b %Y') AS Created,
      COALESCE(case when date_expected_by!='0000-00-00' then DATE_FORMAT(date_expected_by ,'%d %b %Y') END, ' ') AS Expected, 
      location_name_delivery AS DeliverTo, supplier_name AS DeliverFrom, total_order, status  
      FROM purchase_order
      WHERE location_id_delivery = '${location_id}' AND supplier_id = '${supplier_id}' AND order_status = '${order_status}'
      ORDER BY order_number DESC`

    }

    logger.info('getPurchaseOrderInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var resp = createDataResponseObject(false, dataResponseObject.results);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Users Profile"));
  }
}

// Update Purchase Order
function updatePurchaseOrderInDB(param, purchase_order_id, order_status, prod_items, supplier_id, supplier_name, localtion_id, location_name, date_expected_by, fees, sub_total_order, order_total, amount_paid, payment_type_id, payment_type, payment_reference, IsPurchaseOrder_create, staff_id, staff_name, callback){

  try {
  
    if (order_status === 'DRAFT') {

      if (!payment_reference) {
        payment_reference = null;
      }
  
      let order_status = "";
  
      if (IsPurchaseOrder_create) {
        order_status = "ORDERED";
      } else {
        order_status = "DRAFT";
      }

      const updatepurchaseorder = `UPDATE purchase_order p SET 
      supplier_id = '${supplier_id}',
      supplier_name = '${supplier_name}',
      location_id_delivery = '${localtion_id}',
      location_name_delivery = '${location_name}',
      date_expected_by = '${(!date_expected_by ? '0000-00-00' : mySQLDate(date_expected_by))}',
      fees = ${(!fees ? 0.00 : fees)},
      sub_total_order = ${sub_total_order},
      total_order = ${order_total},
      order_status = '${order_status}',
      staff_name = '${staff_name}'
      modified_datetime = NOW(),
      modified_by = '${param.userid}'
      WHERE purchase_order_id = '${purchase_order_id}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatepurchaseorder, [], function (dataResponseObject) {

        if (dataResponseObject.error){
          callback(dataResponseObject);
        }else {

          const qrytoremove = `DELETE FROM purchase_order_item WHERE purchase_order_id = '${purchase_order_id}'`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qrytoremove, [], function (dataResponseObject) {

            if (dataResponseObject.error){
              callback(dataResponseObject);
            }else {

              let sql = `insert into purchase_order_item (purchase_order_id, item_id, item_name, order_qty, unit_cost, total_cost, created_by) values?`;

              let values = [];
              for (let i = 0; i < prod_items.length; i++) {
                values.push([purchase_order_id, prod_items[i].item_id, prod_items[i].item_name, prod_items[i].order_qty, prod_items[i].unit_cost, prod_items[i].total_cost, param.userid])
              }

              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values], function(result){

                if (!payment_type_id) {
                  callback(result);
                } else {

                  const updatepurchaseorderpayment = `UPDATE purchase_order_payments p SET 
                  received_date = CURDATE(),
                  received_by_staff_id = '${staff_id}',
                  received_amount = '${amount_paid}',
                  payment_type_id = '${payment_type_id}',
                  payment_type = '${payment_type}',
                  payment_reference = '${payment_reference}',
                  modified_datetime = NOW(),
                  modified_by = '${param.userid}'
                  WHERE purchase_order_id = '${purchase_order_id}'`;

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatepurchaseorderpayment, [], callback)
                }
              });
            }
          });
        }
      });

    }else{

      const updatepurchaseorder = `UPDATE purchase_order p SET 
      supplier_id = '${supplier_id}',
      supplier_name = '${supplier_name}',
      location_id_delivery = '${localtion_id}',
      location_name_delivery = '${location_name}',
      date_expected_by = '${(!date_expected_by ? '0000-00-00' : mySQLDate(date_expected_by))}',
      fees = ${(!fees ? 0.00 : fees)},
      sub_total_order = ${sub_total_order},
      total_order = ${order_total},
      order_status = '${order_status}',
      staff_name = '${staff_name}'
      modified_datetime = NOW(),
      modified_by = '${param.userid}'
      WHERE purchase_order_id = '${purchase_order_id}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatepurchaseorder, [], function (dataResponseObject) {

        if (dataResponseObject.error){
          callback(dataResponseObject);
        }else {

          const qrytoremove = `DELETE FROM purchase_order_item WHERE purchase_order_id = '${purchase_order_id}'`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qrytoremove, [], function (dataResponseObject) {

            if (dataResponseObject.error){
              callback(dataResponseObject);
            }else {

              let sql = `insert into purchase_order_item (purchase_order_id, item_id, item_name, order_qty, unit_cost, total_cost, created_by) values?`;

              let values = [];
              for (let i = 0; i < prod_items.length; i++) {
                values.push([purchase_order_id, prod_items[i].item_id, prod_items[i].item_name, prod_items[i].order_qty, prod_items[i].unit_cost, prod_items[i].total_cost, param.userid])
              }

              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values], function(result){

                if (!payment_type_id) {
                  callback(result);
                } else {

                  const updatepurchaseorderpayment = `UPDATE purchase_order_payments p SET 
                  received_date = CURDATE(),
                  received_by_staff_id = '${staff_id}',
                  received_amount = '${amount_paid}',
                  payment_type_id = '${payment_type_id}',
                  payment_type = '${payment_type}',
                  payment_reference = '${payment_reference}',
                  modified_datetime = NOW(),
                  modified_by = '${param.userid}'
                  WHERE purchase_order_id = '${purchase_order_id}'`;

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatepurchaseorderpayment, [], callback)
                }
              });
            }
          });
        }
      });
    }

  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Purchase Order"));
  }
}

// Create Purchase Order
function createPurchaseOrderInDB(param, prod_items, supplier_id, supplier_name, localtion_id, location_name, date_expected_by, fees, sub_total_order, order_total, amount_paid, payment_type_id, payment_type, payment_reference, IsPurchaseOrder_create, staff_id, staff_name, callback){

  try {
  
    if (!payment_reference) {
      payment_reference = null;
    }

    let order_number = 0;
    let order_status = "";

    if (IsPurchaseOrder_create) {
      order_status = "ORDERED";
    } else {
      order_status = "DRAFT";
    }

    const getlastordernumber = `SELECT COUNT(po.order_number) AS PO FROM purchase_order po`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getlastordernumber, [], function (dataResponseObject) {

        if (dataResponseObject.error){
          callback(dataResponseObject);
        }else {

          console.log(dataResponseObject.results);

          if (dataResponseObject.results.PO === 0){
            order_number = 1;
          } else {
            order_number = dataResponseObject.results.PO + 1;
          }

          const createpurchaseorder = `INSERT INTO purchase_order (order_number, supplier_id, supplier_name, location_id_delivery, location_name_delivery, date_expected_by, fees, sub_total_order, total_order, order_status, staff_name, created_by) 
          VALUES (${order_number}, '${supplier_id}', '${supplier_name}', '${localtion_id}', '${location_name}', '${(!date_expected_by ? '0000-00-00' : mySQLDate(date_expected_by))}', '${(!fees ? 0.00 : fees)}', ${sub_total_order}, ${order_total}, '${order_status}', '${staff_name}', '${param.userid}')`

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createpurchaseorder, [], function (dataResponseObject) {

            const getpoid = 'SELECT purchase_order_id FROM purchase_order WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1'

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getpoid, [], function (res) {

              var poID = res.results;
              const newPOID = poID.purchase_order_id;

              let sql = `insert into purchase_order_item (purchase_order_id, item_id, item_name, order_qty, unit_cost, total_cost, created_by) values?`;

              let values = [];
              for (let i = 0; i < prod_items.length; i++) {
                values.push([newPOID, prod_items[i].item_id, prod_items[i].item_name, prod_items[i].order_qty, prod_items[i].unit_cost, prod_items[i].total_cost, param.userid])
              }

              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values], function(result){

                if (!payment_type_id) {
                  callback(result);
                } else {

                  const popayments = `INSERT INTO purchase_order_payments (purchase_order_id, received_date, received_by_staff_id, received_amount, payment_type_id, payment_type, payment_reference, created_by) 
                  VALUES ('${newPOID}', CURDATE(), '${staff_id}', ${amount_paid}, '${payment_type_id}', '${payment_type}', '${payment_reference}', '${param.userid}')`

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", popayments, [], callback);
                }
              });
            });
          });
        }
      });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Purchase Order"));
  }
}

// Dashboard Recent Sales
function dashboardRecentSalesInDB(param, locations, lastdays, callback){

  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var date = new Date();
                  
    var year = date.getFullYear();
    var month = date.getMonth();

    let curdate = new Date();

    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let curdates = cYear + "-" + cMonth + "-" + cDay;
    console.log('current date ' + curdates);

    curdate.setDate(curdate.getDate() - lastdays);
    let firstcDay = curdate.getDate();
    let firstcMonth = curdate.getMonth() + 1;
    let firstcYear = curdate.getFullYear();
    let firstdates = firstcYear + "-" + firstcMonth + "-" + firstcDay;
    let lastdatesss = new Date(firstdates);
    console.log('unang date ' + lastdatesss);

    let numdayscnt = 0;
    let daynym;

    const qrysale = `SELECT date_format(s.sale_date,'%e %M %Y, %W') AS DAYs, 
    date_format(s.sale_date,'%a %e') AS NameDAYs, 
    SUM(sp.received_amount) AS TotalSales 
    FROM sales s
    LEFT JOIN sale_items si ON si.sale_id = s.sale_id
    LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
    LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
    WHERE (s.sale_date BETWEEN DATE_ADD(CURDATE(), INTERVAL -`+ lastdays +` DAY) AND CURDATE()) AND s.sale_status = 'Paid'
    GROUP BY DAY(s.sale_date)
    ORDER BY s.sale_date ASC`;

    let dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dayNyms = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qrysale, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        let recentsale = {
          Sales: [],
          Appointments: []
        }

        var diffDays = parseInt((currentDate - lastdatesss) / (1000 * 60 * 60 * 24));
        console.log(diffDays)
        console.log(dataResponseObject.results);

        if (dataResponseObject.results){
          //numdayscnt = 0;
          dataResponseObject.results.forEach(function (p) {
            while (numdayscnt <= diffDays) {
              var result = new Date(lastdatesss.valueOf());
              result.setDate(result.getDate() + (numdayscnt));
  
              daynym = result.getDate() + " " + monthNames[result.getMonth()] + " " + result.getFullYear() + ", " + dayNames[result.getDay()];
              
              console.log(p.DAYs + " = " + daynym);

              if (p.DAYs === daynym){

                recentsale.Sales.push({"DAYS":daynym, "NameDays":p.NameDAYs,"TotalSales": p.TotalSales})
                numdayscnt = numdayscnt += 1;
                break;
              }else {

                recentsale.Sales.push({"DAYS":daynym, "NameDays":dayNyms[result.getDay()],"TotalSales": 0})
                numdayscnt = numdayscnt += 1;
              }
            }
          });
        }else {
          while (numdayscnt <= diffDays) {
  
            var result = new Date(lastdatesss.valueOf());
            result.setDate(result.getDate() + (numdayscnt));

            daynym = result.getDate() + " " + monthNames[result.getMonth()] + " " + result.getFullYear() + ", " + dayNames[result.getDay()];
            
            console.log('dre di ' + daynym);

            recentsale.Sales.push({"DAYS":daynym, "NameDays":dayNyms[result.getDay()] + " " + result.getDate(),"TotalSales": 0})
            numdayscnt = numdayscnt += 1;
          }
        }

        const appointQry = `SELECT date_format(c.start_datetime,'%e %M %Y, %W') AS DAYs,
        date_format(c.start_datetime,'%a %e') AS NameDAYs,  sr.Default_Price
        FROM calendars c
        LEFT JOIN services sr ON c.service_id = sr.ServiceID
        LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
        WHERE (c.start_datetime BETWEEN DATE_ADD(CURDATE(), INTERVAL -`+ lastdays +` DAY) AND CURDATE()) AND c.status = 'Completed'
        ORDER BY c.start_datetime ASC`;

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", appointQry, [], function (dataResponseObject) {

          if(dataResponseObject.error){
            callback(dataResponseObject);
    
          } else{

            var diffDays = parseInt((currentDate - lastdatesss) / (1000 * 60 * 60 * 24));
            console.log(diffDays)
            console.log(dataResponseObject.results);

            if (dataResponseObject.results){

              numdayscnt = 0;
              dataResponseObject.results.forEach(function (p) {
                while (numdayscnt <= diffDays) {
        
                  var result = new Date(lastdatesss.valueOf());
                  result.setDate(result.getDate() + (numdayscnt));
      
                  daynym = result.getDate() + " " + monthNames[result.getMonth()] + " " + result.getFullYear() + ", " + dayNames[result.getDay()];
                  
                  console.log(p.DAYs + " = " + daynym);

                  if (p.DAYs === daynym){

                    recentsale.Appointments.push({"DAYS":daynym, "NameDays":p.NameDAYs,"TotalAppointment": p.Default_Price})
                    numdayscnt = numdayscnt += 1;
                    break;
                  }else {

                    recentsale.Appointments.push({"DAYS":daynym, "NameDays":dayNyms[result.getDay()],"TotalAppointment": 0})
                    numdayscnt = numdayscnt += 1;
                  }
                }
              });
            }else {

              numdayscnt = 0;
              while (numdayscnt <= diffDays) {
      
                var result = new Date(lastdatesss.valueOf());
                result.setDate(result.getDate() + (numdayscnt));

                daynym = result.getDate() + " " + monthNames[result.getMonth()] + " " + result.getFullYear() + ", " + dayNames[result.getDay()];
                
                console.log(daynym);

                recentsale.Appointments.push({"DAYS":daynym, "NameDays":dayNyms[result.getDay()] + " " + result.getDate(),"TotalSales": 0})
                numdayscnt = numdayscnt += 1;
              }
            }
            var resp = createDataResponseObject(null, recentsale);
            callback(resp);
          }
        });
      }
    });
 
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Dashboard Recent Sales"));
  }
}

// Get Users Profile
function getUserProfileInDB(param, callback) {
  try {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT PhotoFilePath FROM staffs WHERE user_id = '${param.userid}'`;

    logger.info('getUserProfileInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var UserInfoes = {
          ProfilePhoto : dataResponseObject.results,
          UserInfo: []
        }

        const qry = `SELECT * FROM users u WHERE u.user_id = '${param.userid}'`;

        mySqlConnection.adminDataAccess(qry, function (res) {

          UserInfoes.UserInfo = res.results;

          var resp = createDataResponseObject(null, UserInfoes);
          callback(resp);
        });
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Users Profile"));
  }
}

// Get Sales Membership
function salesMembershipInDB(param, start_date, end_date, statuses, callback) {
  try {

    var selStatus = "";
    if (!statuses) {
      selStatus = "''";
    }
    else {

      if (statuses.length === 0) {
        selStatus = "''";
      } else {
        for (let i = 0; i < statuses.length; i++) {
          if (selStatus == "") {
            selStatus += "'" + statuses[i].status_type + "'";
          }
          else {
            selStatus += ",'" + statuses[i].status_type + "'";
          }
        }
      }
    }

    let qry = ``
    if ((statuses.length === 0)) {
      qry = `SELECT s.sale_date, s.customer_id, s.customer_name, si.item_name AS MemberType, si.net_price,
      DATE_ADD(s.sale_date, INTERVAL (REGEXP_SUBSTR(m.PricingValidFor,"[0-9]+")) DAY) AS  Expirydate, 
      m.Statuses
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN memberships m ON si.item_id = m.MembershipID
      WHERE si.item_type = 'Memberships' AND
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.sale_date
      ORDER BY s.sale_date DESC`;
    } else {
      qry = `SELECT s.sale_date, s.customer_id, s.customer_name, si.item_name AS MemberType, si.net_price,
      DATE_ADD(s.sale_date, INTERVAL (REGEXP_SUBSTR(m.PricingValidFor,"[0-9]+")) DAY) AS  Expirydate, 
      m.Statuses
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN memberships m ON si.item_id = m.MembershipID
      WHERE si.item_type = 'Memberships' AND
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      m.Statuses IN (` + selStatus + `) 
      GROUP BY s.sale_date
      ORDER BY s.sale_date DESC`;
    }

    logger.info('getMembershipInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales Membership"));
  }
}

// Update Invoice Sequencing
function updateinvoiceSequencingInDB(param, TenantLocationID, invoice_prefix, next_invoice_number, callback){

  try {

    const updateinvoicesequencing = `UPDATE tenantlocations p SET 
    invoice_prefix = '${invoice_prefix}',
    next_invoice_number = '${next_invoice_number}'
    WHERE TenantLocationID = '${TenantLocationID}' AND TenantID = '${param.tenantid}'`

    mySqlConnection.adminDataAccess(updateinvoicesequencing, callback);
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Invoice Sequencing "));
  }
}

// Get Invoice Sequencing
function getinvoiceSequencingInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT TenantLocationID, LocationName, invoice_prefix,  
    (next_invoice_number + 1) AS next_invoice_number FROM tenantlocations
    WHERE TenantID = '${param.tenantid}'
    ORDER BY (next_invoice_number + 1) ASC`;

    logger.info('getinvoiceSequencingInDB query is: ', qry);

    mySqlConnection.adminDataAccess(qry, function (res) {
      try {
        if (!res.results[0]) {
          callback(createDataResponseObject(true, "Unable to get the next invoice number"));
        }
        else {
          if (!res.results[0].next_invoice_number) {
            callback(createDataResponseObject(true, "Unable to get the next invoice number"));
          }
          else {
            
            callback(res);
          }
        }
      } catch (error) {
        logger.error('getNextInvoiceNumber error: ', error);
        callback(createDataResponseObject(error, "Unable to get the next invoice number"));
      }
     
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Membership"));
  }
}

// Get Membership
function getMembershipInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM memberships ORDER BY MembershipName ASC`;

    logger.info('getMembershipInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Membership"));
  }
}

// Delete Membership
function deleteMembershipInDB(param, MembershipID, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const deleteappointmenttypes = `DELETE FROM memberships WHERE MembershipID = '${MembershipID}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteappointmenttypes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Memberships"));
  }
}

// Update Membership
function updateMembershipInDB(param, MembershipID, MembershipName, MembershipDescription, Sessions, SessionLimit, PricingValidFor, Price, TaxRateName, ColorCustomization, EnableOnlineSales, TermsAndConditions, callback){

  try {

    const updatemembership = `UPDATE memberships p SET 
    MembershipName = '${MembershipName}',
    MembershipDescription = '${MembershipDescription}',
    Sessions = '${Sessions}',
    SessionLimit = ${SessionLimit},
    PricingValidFor = '${PricingValidFor}',
    Price = ${Price},
    TaxRateName = '${TaxRateName}',
    ColorCustomization = '${ColorCustomization}',
    EnableOnlineSales = ${EnableOnlineSales},
    TermsAndConditions = '${TermsAndConditions}',
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE MembershipID = '${MembershipID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatemembership, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Membership "));
  }
}

// Create Membership
function createMembershipInDB(param, MembershipName, MembershipDescription, Sessions, SessionLimit, PricingValidFor, Price, TaxRateName, ColorCustomization, EnableOnlineSales, TermsAndConditions, callback){

  try {

      const createmembership = `INSERT INTO memberships (MembershipName, MembershipDescription, Sessions, SessionLimit, PricingValidFor, Price, TaxRateName, ColorCustomization, EnableOnlineSales, TermsAndConditions, created_by) 
        VALUES ('${MembershipName}', '${MembershipDescription}', '${Sessions}', ${SessionLimit}, '${PricingValidFor}', ${Price}, '${TaxRateName}', '${ColorCustomization}', ${EnableOnlineSales}, '${TermsAndConditions}', '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createmembership, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Membership "));
  }
}

//Send Mail
function sendMailInDB(param, sale_id, email_address, invoice_html, callback) {
  try {

    let mailTransport = nodemailer.createTransport({        
      host: config.host,      
      secure: config.secure,
      secureConnection: config.secureConnection, // TLS requires secureConnection to be false
      tls: {
          ciphers:config.tls.ciphers
      },
      requireTLS:config.requireTLS,
      port: config.mailport,
      debug: config.debug,  
      auth: {
        user: config.auth.user,
        pass: config.auth.pass
      }
    });

    let invoicenum = 0;

    const qry = `SELECT s.invoice_number FROM sales s WHERE s.sale_id = '${sale_id}' AND sale_status = 'Paid'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
      console.log(dataResponseObject.results.invoice_number);
      invoicenum = dataResponseObject.results.invoice_number;

      const mailOptions = {
        from: config.from,
        to: email_address,
        subject: `Invoice Number: `+ invoicenum,
        html: invoice_html,
      };
      
      mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
        callback('Email sent successfully');
      }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
        callback('Failed to send email');
      });
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to send Invoice Email"));
  }
}

//Team Member Commission Summary Report
function voucherOutStandingBalanceInDB(param, start_date, end_date, callback) {
  try {

    let qry = `SELECT DATE_FORMAT(si.created_datetime ,'%e %b %Y') AS DateV, 
    COALESCE((si.unit_price), 0.00) AS OpeningBalance, COALESCE(si.unit_price, 0.00) AS IssuedValue,
    COALESCE(SUM(si.unit_price), 0.00) AS SoldValue, COALESCE(SUM(0), 0.00) AS ExpiredValue,
    COALESCE(SUM(0), 0.00) AS RedeemedValue, COALESCE(SUM(0), 0.00) AS RefundedValue,
    COALESCE((si.unit_price), 0.00) AS ClosingBalance, COALESCE(SUM(0), 0.00) AS NetChange
    FROM sale_items si
    WHERE si.item_type = 'Vouchers' AND 
    (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')
    GROUP BY DATE_FORMAT(si.created_datetime ,'%e %b %Y')
    ORDER BY DATE_FORMAT(si.created_datetime ,'%e %b %Y') DESC`

    let voucheroutstandingbalance = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var date1 = new Date(start_date);
        var date2 = new Date(end_date);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
        console.log(diffDays)

        let numdayscnt = 0;
        let daynym;

        dataResponseObject.results.forEach(function (p) {
          while (numdayscnt <= diffDays) {

            var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

            var result = new Date(date1.valueOf());
            result.setDate(result.getDate() + (numdayscnt));

            daynym = result.getDate() + " " + monthNames[result.getMonth()] + " " + result.getFullYear();

            if (p.DateV == daynym) {

              voucheroutstandingbalance.push({"Date": daynym, "Opening Balance": p.OpeningBalance, "Issued Value": p.IssuedValue, "Sold Value": p.SoldValue, "Expired Value": p.ExpiredValue, "Redeemed Value": p.RedeemedValue, "Refunded Value": p.RefundedValue, "Closing Balance": p.ClosingBalance, "Net Change": p.NetChange});
              numdayscnt = numdayscnt += 1;
              break;

            } else {

              voucheroutstandingbalance.push({"Date": daynym, "Opening Balance": 0.00, "Issued Value": 0.00, "Sold Value": 0.00, "Expired Value": 0.00, "Redeemed Value": 0.00, "Refunded Value": 0.00, "Closing Balance": 0.00, "Net Change": 0.00});
              numdayscnt = numdayscnt += 1;

            }
          }
        });

        var resp = createDataResponseObject(null, voucheroutstandingbalance);
        callback(resp);
      }
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Voucher Outstanding Balance Reports"));
  }
}

//Team Member Commission Summary Report
function teammemberCommssionSummaryInDB(param, start_date, end_date, locations, teammember, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qryteammember = ``, qryserivce = ``, qryproducts = ``, qryvouchers = ``, qrymemberships = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      COALESCE(case when si.item_type='Services' then SUM(si.unit_price) END, 0.00) AS ServiceSales,
      COALESCE(case when si.item_type='Services' then SUM(s.commission_amount) END, 0.00) AS ServiceCommission,
      COALESCE(case when si.item_type='Products' then SUM(si.unit_price) END, 0.00) AS ProductsSales,
      COALESCE(case when si.item_type='Products' then SUM(s.commission_amount) END, 0.00) AS ProductsCommission,
      COALESCE(case when si.item_type='Vouchers' then SUM(si.unit_price) END, 0.00) AS VouchersSales,
      COALESCE(case when si.item_type='Vouchers' then SUM(s.commission_amount) END, 0.00) AS VouchersCommission,
      COALESCE(case when si.item_type='Memberships' then SUM(si.unit_price) END, 0.00) AS MembershipsSales,
      COALESCE(case when si.item_type='Memberships' then SUM(s.commission_amount) END, 0.00) AS MembershipsCommission,
      COALESCE(SUM(s.commission_amount), 0.00) AS CommissionTotal
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`

      qryserivce = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Services' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryproducts = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Products' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryvouchers = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qrymemberships = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Memberships' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

    } else if ((locations.length === 0)) {

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      COALESCE(case when si.item_type='Services' then SUM(si.unit_price) END, 0.00) AS ServiceSales,
      COALESCE(case when si.item_type='Services' then SUM(s.commission_amount) END, 0.00) AS ServiceCommission,
      COALESCE(case when si.item_type='Products' then SUM(si.unit_price) END, 0.00) AS ProductsSales,
      COALESCE(case when si.item_type='Products' then SUM(s.commission_amount) END, 0.00) AS ProductsCommission,
      COALESCE(case when si.item_type='Vouchers' then SUM(si.unit_price) END, 0.00) AS VouchersSales,
      COALESCE(case when si.item_type='Vouchers' then SUM(s.commission_amount) END, 0.00) AS VouchersCommission,
      COALESCE(case when si.item_type='Memberships' then SUM(si.unit_price) END, 0.00) AS MembershipsSales,
      COALESCE(case when si.item_type='Memberships' then SUM(s.commission_amount) END, 0.00) AS MembershipsCommission,
      COALESCE(SUM(s.commission_amount), 0.00) AS CommissionTotal
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`

      qryserivce = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Services' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryproducts = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Products' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryvouchers = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qrymemberships = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Memberships' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

    } else if ((teammember.length === 0)) {

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      COALESCE(case when si.item_type='Services' then SUM(si.unit_price) END, 0.00) AS ServiceSales,
      COALESCE(case when si.item_type='Services' then SUM(s.commission_amount) END, 0.00) AS ServiceCommission,
      COALESCE(case when si.item_type='Products' then SUM(si.unit_price) END, 0.00) AS ProductsSales,
      COALESCE(case when si.item_type='Products' then SUM(s.commission_amount) END, 0.00) AS ProductsCommission,
      COALESCE(case when si.item_type='Vouchers' then SUM(si.unit_price) END, 0.00) AS VouchersSales,
      COALESCE(case when si.item_type='Vouchers' then SUM(s.commission_amount) END, 0.00) AS VouchersCommission,
      COALESCE(case when si.item_type='Memberships' then SUM(si.unit_price) END, 0.00) AS MembershipsSales,
      COALESCE(case when si.item_type='Memberships' then SUM(s.commission_amount) END, 0.00) AS MembershipsCommission,
      COALESCE(SUM(s.commission_amount), 0.00) AS CommissionTotal
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`

      qryserivce = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Services' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryproducts = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Products' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryvouchers = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qrymemberships = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Memberships' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

    } else {

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      COALESCE(case when si.item_type='Services' then SUM(si.unit_price) END, 0.00) AS ServiceSales,
      COALESCE(case when si.item_type='Services' then SUM(s.commission_amount) END, 0.00) AS ServiceCommission,
      COALESCE(case when si.item_type='Products' then SUM(si.unit_price) END, 0.00) AS ProductsSales,
      COALESCE(case when si.item_type='Products' then SUM(s.commission_amount) END, 0.00) AS ProductsCommission,
      COALESCE(case when si.item_type='Vouchers' then SUM(si.unit_price) END, 0.00) AS VouchersSales,
      COALESCE(case when si.item_type='Vouchers' then SUM(s.commission_amount) END, 0.00) AS VouchersCommission,
      COALESCE(case when si.item_type='Memberships' then SUM(si.unit_price) END, 0.00) AS MembershipsSales,
      COALESCE(case when si.item_type='Memberships' then SUM(s.commission_amount) END, 0.00) AS MembershipsCommission,
      COALESCE(SUM(s.commission_amount), 0.00) AS CommissionTotal
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`

      qryserivce = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Services' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryproducts = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Products' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qryvouchers = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

      qrymemberships = `SELECT si.item_id, si.item_name, COALESCE(SUM(si.quantity), 0) AS QTY,
      COALESCE(case when si.net_price<0 then SUM(si.net_price) end, 0) AS RefundAmount,
      COALESCE(SUM(si.net_price), 0.000000) AS SalesTotal, 
      COALESCE(SUM(si.net_price), 0.000000) AS AveSalesPrice,
      COALESCE(SUM(s.commission_amount), 0.000000) AS CommissionTotal,
      COALESCE(CONCAT(cd.CommissionValue, '%'), CONCAT(0.00, '%d')) AS CommissionRate
      FROM sale_items si 
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE si.item_type = 'Memberships' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`

    }

    let teammembercommssionsummary = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryteammember, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var teammembersummary = {
          TeamMember : [],
          Services: [],
          Products: [],
          Vouchers: [],
          Memberships: []
        }

        if(!dataResponseObject.results){
          var teammemberempty = {
            "TeamMember": "None",
            "ServiceSales": 0.00,
            "ServiceCommission": 0.00,
            "ProductsSales": 0.00,
            "ProductsCommission": 0.00,
            "VouchersSales": 0.00,
            "VouchersCommission": 0.00,
            "MembershipsSales": 0.00,
            "MembershipsCommission": 0.00,
            "CommissionTotal": 0.00
          }

          teammembersummary.TeamMember = teammemberempty;
        } else {
          teammembersummary.TeamMember = dataResponseObject.results;
        }

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryserivce, [], function (dataResponseObject) {

          if(dataResponseObject.error) {
            callback(dataResponseObject);
    
          } else {

            if(!dataResponseObject.results){
              var servicesempty = {
                "ServiceName": "None",
                "Qty": 0,
                "SalesAmount": 0.00,
                "RefundAmount": 0.00,
                "SalesTotal": 0.00,
                "AvgSalesPrice": 0.00,
                "CommissionTotal": 0.00,
                "AvgCommission": 0.00
              }
    
              teammembersummary.Services = servicesempty;
            } else {
              teammembersummary.Services = dataResponseObject.results;
            }

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryproducts, [], function (dataResponseObject) {

              if(dataResponseObject.error) {
                callback(dataResponseObject);
        
              } else {
    
                if(!dataResponseObject.results){
                  var productsempty = {
                    "ProductsName": "None",
                    "Qty": 0,
                    "SalesAmount": 0.00,
                    "RefundAmount": 0.00,
                    "SalesTotal": 0.00,
                    "AvgSalesPrice": 0.00,
                    "CommissionTotal": 0.00,
                    "AvgCommission": 0.00
                  }
        
                  teammembersummary.Products = productsempty;
                } else {
                  teammembersummary.Products = dataResponseObject.results;
                }
                
                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryvouchers, [], function (dataResponseObject) {

                  if(dataResponseObject.error) {
                    callback(dataResponseObject);
            
                  } else {
        
                    if(!dataResponseObject.results){
                      var voucherssempty = {
                        "VouchersName": "None",
                        "Qty": 0,
                        "SalesAmount": 0.00,
                        "RefundAmount": 0.00,
                        "SalesTotal": 0.00,
                        "AvgSalesPrice": 0.00,
                        "CommissionTotal": 0.00,
                        "AvgCommission": 0.00
                      }
            
                      teammembersummary.Vouchers = voucherssempty;
                    } else {
                      teammembersummary.Vouchers = dataResponseObject.results;
                    }
                    
                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qrymemberships, [], function (dataResponseObject) {

                      if(dataResponseObject.error) {
                        callback(dataResponseObject);
                
                      } else {
            
                        if(!dataResponseObject.results){
                          var membershipempty = {
                            "MembershipName": "None",
                            "Qty": 0,
                            "SalesAmount": 0.00,
                            "RefundAmount": 0.00,
                            "SalesTotal": 0.00,
                            "AvgSalesPrice": 0.00,
                            "CommissionTotal": 0.00,
                            "AvgCommission": 0.00
                          }
                
                          teammembersummary.Memberships = membershipempty;
                        } else {
                          teammembersummary.Memberships = dataResponseObject.results;
                        }
            
                        var resp = createDataResponseObject(null, teammembersummary);
                        callback(resp);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Team Member Summary Reports"));
  }
}

//Team Member Commision Detail Report
function teamMemberCommssionDetailedInDB(param, start_date, end_date, locations, teammember, item_type, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }

    var selItemtype = "";
    if (!item_type) {
      selItemtype = "''";
    }
    else {

      if (item_type.length === 0) {
        selItemtype = "''";
      } else {
        for (let i = 0; i < item_type.length; i++) {
          if (selItemtype == "") {
            selItemtype += "'" + item_type[i].item_name + "'";
          }
          else {
            selItemtype += ",'" + item_type[i].item_name + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0) && (item_type.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    } else if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.item_type IN (` + selItemtype + `)
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    } else if ((locations.length === 0) && (item_type.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    } else if ((teammember.length === 0) && (item_type.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    } else if ((locations.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      si.item_type IN (` + selItemtype + `)
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;


    } else if ((teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) AND 
      si.item_type IN (` + selItemtype + `)
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    } else if ((item_type.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    } else {

      qry = `SELECT s.sale_date, s.invoice_number, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      si.item_name, SUM(si.quantity) AS QTY, si.net_price,
      COALESCE(CONCAT(cd.CommissionValue, '%'), 0.000000) AS CommissionRate,
      COALESCE(s.commission_amount, 0.000000) AS CommssionAmount,
      si.item_type
      FROM sales s
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN commisiondetails cd ON s.commission_id = cd.CommisionID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `) AND 
      si.item_type IN (` + selItemtype + `)
      GROUP BY si.item_name
      ORDER BY s.invoice_number ASC`;

    }

    let teammembercommssiondetailed = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        teammembercommssiondetailed = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, teammembercommssiondetailed);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Team Member Commission Detailed Reports"));
  }
}

//Tips By Team Member Report
function tipsbyTeamMemberInDB(param, start_date, end_date, locations, teammember, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS EmployeeName, SUM(si.tip_amount) AS CollectedTips,
      coalesce(case when si.tip_amount<0 then si.tip_amount end, 0) AS RefundedTips,
      coalesce(case when si.tip_amount<0 then (SUM(si.tip_amount) - si.tip_amount) end, 0) AS TotalTips,
      coalesce(case when si.tip_amount<0 then (((SUM(si.tip_amount) - si.tip_amount) / (SUM(si.tip_amount)))*100) end, 0) AS AverageTips
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY st.StaffID
      ORDER BY si.staff_name`;

    } else if ((locations.length === 0)) {

      qry = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS EmployeeName, SUM(si.tip_amount) AS CollectedTips,
      coalesce(case when si.tip_amount<0 then si.tip_amount end, 0) AS RefundedTips,
      coalesce(case when si.tip_amount<0 then (SUM(si.tip_amount) - si.tip_amount) end, 0) AS TotalTips,
      coalesce(case when si.tip_amount<0 then (((SUM(si.tip_amount) - si.tip_amount) / (SUM(si.tip_amount)))*100) end, 0) AS AverageTips
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `)
      GROUP BY st.StaffID
      ORDER BY si.staff_name`;

    } else if ((teammember.length === 0)) {

      qry = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS EmployeeName, SUM(si.tip_amount) AS CollectedTips,
      coalesce(case when si.tip_amount<0 then si.tip_amount end, 0) AS RefundedTips,
      coalesce(case when si.tip_amount<0 then (SUM(si.tip_amount) - si.tip_amount) end, 0) AS TotalTips,
      coalesce(case when si.tip_amount<0 then (((SUM(si.tip_amount) - si.tip_amount) / (SUM(si.tip_amount)))*100) end, 0) AS AverageTips
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `)
      GROUP BY st.StaffID
      ORDER BY si.staff_name`;

    } else {

      qry = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS EmployeeName, SUM(si.tip_amount) AS CollectedTips,
      coalesce(case when si.tip_amount<0 then si.tip_amount end, 0) AS RefundedTips,
      coalesce(case when si.tip_amount<0 then (SUM(si.tip_amount) - si.tip_amount) end, 0) AS TotalTips,
      coalesce(case when si.tip_amount<0 then (((SUM(si.tip_amount) - si.tip_amount) / (SUM(si.tip_amount)))*100) end, 0) AS AverageTips
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.location_id IN (` + selLocation + `)
      GROUP BY st.StaffID
      ORDER BY si.staff_name`;

    }

    let tipsbyteammember = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        tipsbyteammember = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, tipsbyteammember);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Tips By Team Member Reports"));
  }
}

//Team Member Working Hours Report
function teamMemberWorkingHoursInDB(param, start_date, end_date, locations, teammember, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``, qry1 = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT s.StaffID, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember
      FROM staffs s
      LEFT JOIN staffworkschedules swc ON s.StaffID = swc.StaffID
      LEFT JOIN rbtech_admindb.users u ON s.user_id = u.user_id
      WHERE (swc.Date BETWEEN '${start_date}' AND '${end_date}')
      ORDER BY s.LastName`;

    } else if ((locations.length === 0)) {

      qry = `SELECT s.StaffID, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember
      FROM staffs s
      LEFT JOIN staffworkschedules swc ON s.StaffID = swc.StaffID
      LEFT JOIN rbtech_admindb.users u ON s.user_id = u.user_id
      WHERE (swc.Date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff + `) 
      ORDER BY s.LastName`;

    } else if ((teammember.length === 0)) {

      qry = `SELECT s.StaffID, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember
      FROM staffs s
      LEFT JOIN staffworkschedules swc ON s.StaffID = swc.StaffID
      LEFT JOIN rbtech_admindb.users u ON s.user_id = u.user_id
      WHERE (swc.Date BETWEEN '${start_date}' AND '${end_date}') AND 
      u.current_location_id IN (` + selLocation + `)
      ORDER BY s.LastName`;

    } else {

      qry = `SELECT s.StaffID, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember
      FROM staffs s
      LEFT JOIN staffworkschedules swc ON s.StaffID = swc.StaffID
      LEFT JOIN rbtech_admindb.users u ON s.user_id = u.user_id
      WHERE (swc.Date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff + `) AND 
      u.current_location_id IN (` + selLocation + `)
      ORDER BY s.LastName`;

    }

    let teammemberworkinghours = [];
    let memberinfos = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        memberinfos = dataResponseObject.results;
        console.log('naa');

        memberinfos.forEach(element => {

          var memberinfo = {
            "teammember" : element.TeamMember,
            datetimelogs: []
          }

          qry1 = `SELECT swc.DateWork, swc.ShiftStartTime, swc.ShiftEndTime,
          ABS(TIMESTAMPDIFF(HOUR,swc.ShiftStartTime, swc.ShiftEndTime)) AS Duration
          FROM staffworkschedules swc
          WHERE swc.StaffID = '${element.StaffID}'`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

            if(dataResponseObject.error) {
              callback(dataResponseObject);
      
            } else {

              if(dataResponseObject.results){

                console.log('naa');

                memberinfo.datetimelogs = dataResponseObject.results;

              } else {
                console.log('wala');
                memberinfo.datetimelogs = {"Date": "No data", "Start": "", "End": "", "Duration": "0min"};
              }
              
              teammemberworkinghours.push(memberinfo);
            }
          });
        });
        var resp = createDataResponseObject(null, teammemberworkinghours);
        callback(resp);
      }
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Team Member Working Hours Reports"));
  }
}

//Voucher Redeemption Report
function voucherRedemptionsInDB(param, start_date, end_date, locations, teammember, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS RedeemedValue
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    } else if ((locations.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS RedeemedValue
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    } else if ((teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS RedeemedValue
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    } else {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS RedeemedValue
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      s.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    }

    let voucherredemptions = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        voucherredemptions = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, voucherredemptions);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Voucher Redeemption Reports"));
  }
}

//Voucher Sales Report
function voucherSalesInDB(param, start_date, end_date, locations, teammember, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS IssuedValue,
      SUM(si.discount) AS Discount,
      coalesce(case when SUM(si.discount) != 0.000000 then (SUM(si.net_price) - SUM(si.discount)) end, 0) AS TotalSales
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    } else if ((locations.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS IssuedValue,
      SUM(si.discount) AS Discount,
      coalesce(case when SUM(si.discount) != 0.000000 then (SUM(si.net_price) - SUM(si.discount)) end, 0) AS TotalSales
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    } else if ((teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS IssuedValue,
      SUM(si.discount) AS Discount,
      coalesce(case when SUM(si.discount) != 0.000000 then (SUM(si.net_price) - SUM(si.discount)) end, 0) AS TotalSales
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    } else {

      qry = `SELECT s.sale_date, s.invoice_number, s.customer_name, SUM(si.net_price) AS IssuedValue,
      SUM(si.discount) AS Discount,
      coalesce(case when SUM(si.discount) != 0.000000 then (SUM(si.net_price) - SUM(si.discount)) end, 0) AS TotalSales
      FROM sales s 
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      WHERE si.item_type = 'Vouchers' AND 
      (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      s.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_id
      ORDER BY s.invoice_number DESC`;

    }

    let vouchersales = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        vouchersales = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, vouchersales);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Voucher Sales Reports"));
  }
}

//Client Retention Report
function clientRetentionInDB(param, start_date, end_date, callback) {
  try {
    
    let qry = `SELECT CONCAT(c.first_name, ' ', c.last_name) AS ClientName, c.mobile_number, c.email_address,
    MAX(cd.created_datetime) AS LastAppointment,
    coalesce(COUNT(case when cd.status='Cancelled' then cd.calendar_entryid end), 0) AS NoShows,
    CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember,
    DATE_FORMAT(MAX(ss.created_datetime) ,'%d %M %Y, %h:%i %p') AS LastVisitSales,
    coalesce(SUM(case when ss.sale_status='Paid' then ss.total_amount end), 0) AS TotalSales
    FROM customers c
    LEFT JOIN calendars cd ON c.customer_id = cd.customer_id
    LEFT JOIN staffs s ON cd.staff_id = s.StaffID
    LEFT JOIN sales ss ON c.customer_id = ss.customer_id
    WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}')
    GROUP BY c.customer_id
    ORDER BY c.last_name ASC`;

    let clientretention = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        clientretention = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, clientretention);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Client Retention Reports"));
  }
}

//Client List Report
function clientListInDB(param, start_date, end_date, callback) {
  try {
    
    let qry = `SELECT CONCAT(c.first_name, ' ', c.last_name) AS ClientName,
    coalesce(case when c.suspend!=true then 'Not Blocked' END, 'Blocked') AS Blocked,
    COUNT(cd.calendar_entryid) AS Appointments,
    coalesce(COUNT(case when cd.status='Cancelled' then cd.calendar_entryid end), 0) AS NoShows,
    coalesce(SUM(case when s.sale_status='Paid' then s.total_amount end), 0) AS TotalSales,
    coalesce(SUM(case when s.sale_status='Unpaid' then s.total_amount end), 0) AS Outstanding,
    c.gender, DATE_FORMAT(c.created_datetime ,'%d %M %Y, %h:%i %p') AS Added,
    DATE_FORMAT(MAX(cd.created_datetime) ,'%d %M %Y, %h:%i %p') AS LastAppointment,
    t.LocationName
    FROM customers c
    LEFT JOIN calendars cd ON c.customer_id = cd.customer_id
    LEFT JOIN rbtech_admindb.tenantlocations t ON cd.location_id = t.TenantLocationID
    JOIN sales s ON c.customer_id = s.customer_id
    WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}')
    GROUP BY c.customer_id
    ORDER BY c.last_name ASC`;

    let clientlist = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        clientlist = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, clientlist);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Client List Reports"));
  }
}

//Outstanding Invoices Report
function outstandingInvoicesInDB(param, locations, callback) {
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0)) {

      qry = `SELECT s.invoice_number, t.LocationName, s.sale_status,
      DATE_FORMAT(s.created_datetime ,'%d %M %Y, %h:%i %p') AS InvoiceDate, s.sale_date AS DueDate, 
      CONCAT(DATEDIFF(CURDATE(), s.sale_date), ' Days') AS Overdue, s.customer_name, s.total_amount AS GrossTotal, s.total_amount AS AmountDue
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE s.sale_status = 'Unpaid'
      ORDER BY s.created_datetime DESC`;

    } else {

      qry = `SELECT s.invoice_number, t.LocationName, s.sale_status,
      DATE_FORMAT(s.created_datetime ,'%d %M %Y, %h:%i %p') AS InvoiceDate, s.sale_date AS DueDate, 
      CONCAT(DATEDIFF(CURDATE(), s.sale_date), ' Days') AS Overdue, s.customer_name, s.total_amount AS GrossTotal, s.total_amount AS AmountDue
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE s.sale_status = 'Unpaid' AND 
      s.location_id IN (` + selLocation + `) 
      ORDER BY s.created_datetime DESC`;

    }

    let outstandinginvoices = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        outstandinginvoices = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, outstandinginvoices);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Outstanding Invoices Reports"));
  }
}

//Discount Summary Report
function discountSummaryInDB(param, start_date, end_date, locations, teammember, callback) {
  try {

    vouchers = "";
    deposits = "";

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qrydiscount = ``, qryserivce = ``, qryproducts = ``, qryteammember = ``, qryitemtype = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qrydiscount = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryserivce = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Services' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryproducts = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.staff_id
      ORDER BY si.created_datetime DESC`;

      qryitemtype = `SELECT si.item_type AS ItemType, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`;

    } else if ((locations.length === 0)) {

      qrydiscount = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryserivce = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Services' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryproducts = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.staff_id
      ORDER BY si.created_datetime DESC`;

      qryitemtype = `SELECT si.item_type AS ItemType, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`;

    } else if ((teammember.length === 0)) {

      qrydiscount = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryserivce = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Services' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryproducts = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.staff_id
      ORDER BY si.created_datetime DESC`;

      qryitemtype = `SELECT si.item_type AS ItemType, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`;

    } else {

      qrydiscount = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryserivce = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Services' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryproducts = `SELECT si.item_name, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND si.item_type = 'Products' AND
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_id
      ORDER BY si.created_datetime DESC`;

      qryteammember = `SELECT CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.staff_id
      ORDER BY si.created_datetime DESC`;

      qryitemtype = `SELECT si.item_type AS ItemType, COUNT(si.item_id) AS ItemDiscounted, si.unit_price AS ServiceValue,
      si.discount AS DiscountAmount, coalesce(case when si.discount<0 then si.discount end, 0) AS DiscountRefund,
      SUM(si.discount) AS NetDiscount
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE IF(si.discount > 0, si.discount, 0) AND 
      (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_type
      ORDER BY si.created_datetime DESC`;

    }

    let discountsummarydb = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qrydiscount, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var discountsummary = {
          Discounts : [],
          DiscountsByService: [],
          DiscountsByProduct: [],
          DiscountsByTeamMember: [],
          DiscountsByType: []
        }

        discountsummary.Discounts = dataResponseObject.results;
      }

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryserivce, [], function (dataResponseObject) {

        if(dataResponseObject.error) {
          callback(dataResponseObject);
  
        } else {
          
          discountsummary.DiscountsByService = dataResponseObject.results;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryproducts, [], function (dataResponseObject) {

            if(dataResponseObject.error) {
              callback(dataResponseObject);
      
            } else {
              
              discountsummary.DiscountsByProduct = dataResponseObject.results;
              
              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryteammember, [], function (dataResponseObject) {

                if(dataResponseObject.error) {
                  callback(dataResponseObject);
          
                } else {
                  
                  discountsummary.DiscountsByTeamMember = dataResponseObject.results;
                  
                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qryitemtype, [], function (dataResponseObject) {

                    if(dataResponseObject.error) {
                      callback(dataResponseObject);
              
                    } else {
                      
                      discountsummary.DiscountsByType = dataResponseObject.results;
            
                    }
                    var resp = createDataResponseObject(null, discountsummary);
                    callback(resp);
                  });
                }
              });
            }
          });
        }
      });
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Finances Taxes Summary Reports"));
  }
}

//Tips Collected Report
function tipsCollectedInDB(param, start_date, end_date, locations, teammember, channels, callback) {
  try {

    vouchers = "";
    deposits = "";

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }

    var selChannels = "";
    if (!channels) {
      selChannels = "''";
    }
    else {

      if (channels.length === 0) {
        selChannels = "''";
      } else {
        for (let i = 0; i < channels.length; i++) {
          if (selChannels == "") {
            selChannels += "'" + channels[i].source_of_salesid + "'";
          }
          else {
            selChannels += ",'" + channels[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0) && (channels.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else if ((teammember.length === 0) && (channels.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else if ((locations.length === 0) && (channels.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND
      si.staff_id IN (` + selStaff + `) 
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else if ((locations.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else if ((teammember.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND
      s.location_id IN (` + selLocation + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else if ((channels.length === 0)) {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    } else {

      qry = `SELECT s.sale_date, s.invoice_number, t.LocationName, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      sos.source_sales, SUM(s.tip_amount) AS TipsCollected
      FROM sales s
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND (s.tip_amount != 0.00000) AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

    }

    let financestaxessummary = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        financestaxessummary = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, financestaxessummary);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Finances Payment Logs Reports"));
  }
}

//Finances Summary Report
function financesSummaryInDB(param, start_date, end_date, locations, callback) {
  try {

    vouchers = "";
    deposits = "";

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }
    
    let qry = ``, qry1 = ``
    if ((locations.length === 0)) {

      qry = `SELECT SUM(si.net_price) AS GrossSales, SUM(si.discount) AS Discount,
      (SELECT SUM(sp.received_amount) FROM sale_payments sp WHERE (sp.received_amount < 0)) AS Refund,
      (SUM(si.net_price) + (SELECT SUM(sp.received_amount) FROM sale_payments sp WHERE (sp.received_amount < 0))) AS NetSales,
      SUM(si.tax_amount) AS Tax,
      (SUM(si.net_price) + (SELECT SUM(sp.received_amount) FROM sale_payments sp WHERE (sp.received_amount < 0)) + SUM(si.tax_amount)) AS TotalSales,
      (SELECT SUM(sp.received_amount) FROM sale_payments sp) AS Payments, SUM(si.tip_amount) AS Tips,
      (SELECT SUM(si.net_price) FROM sale_items si WHERE si.item_type = 'Services') AS ServiceCharges,
      (SELECT SUM(si.tax_amount) FROM sale_items si WHERE si.item_type = 'Services') AS TaxService,
      (SELECT (SUM(si.net_price) + SUM(si.tax_amount)) FROM sale_items si WHERE si.item_type = 'Services') AS TotalServicesCharges
      FROM sale_items si
      WHERE (si.created_datetime BETWEEN '${start_date}' AND '${end_date}')`;

      qry1 = `SELECT SUM(si.net_price) AS VouchersSales, SUM(0) AS VouchersRedemption,
      (SELECT SUM(v.RetailPrice) FROM vouchers v) AS VoucherOutstandingBalance 
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND si.item_type = 'Vouchers'`;

    } else {

      qry = `SELECT SUM(si.net_price) AS GrossSales, SUM(si.discount) AS Discount,
      (SELECT SUM(sp.received_amount) FROM sale_payments sp WHERE (sp.received_amount < 0)) AS Refund,
      (SUM(si.net_price) + (SELECT SUM(sp.received_amount) FROM sale_payments sp WHERE (sp.received_amount < 0))) AS NetSales,
      SUM(si.tax_amount) AS Tax,
      (SUM(si.net_price) + (SELECT SUM(sp.received_amount) FROM sale_payments sp WHERE (sp.received_amount < 0)) + SUM(si.tax_amount)) AS TotalSales,
      (SELECT SUM(sp.received_amount) FROM sale_payments sp) AS Payments, SUM(si.tip_amount) AS Tips,
      (SELECT SUM(si.net_price) FROM sale_items si WHERE si.item_type = 'Services') AS ServiceCharges,
      (SELECT SUM(si.tax_amount) FROM sale_items si WHERE si.item_type = 'Services') AS TaxService,
      (SELECT (SUM(si.net_price) + SUM(si.tax_amount)) FROM sale_items si WHERE si.item_type = 'Services') AS TotalServicesCharges
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `)`;

      qry1 = `SELECT SUM(si.net_price) AS VouchersSales, SUM(0) AS VouchersRedemption,
      (SELECT SUM(v.RetailPrice) FROM vouchers v) AS VoucherOutstandingBalance 
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (si.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND si.item_type = 'Vouchers'`;

    }

    let financessummary = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error) {
        callback(dataResponseObject);

      } else {

        var financessummary = {
          FinanceSummary : [],
          Vouchers: []
        }

        financessummary.FinanceSummary = dataResponseObject.results;
      }

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

        if(dataResponseObject.error) {
          callback(dataResponseObject);
  
        } else {

          financessummary.Vouchers = dataResponseObject.results;

        }
        var resp = createDataResponseObject(null, financessummary);
        callback(resp);
      });
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Finances Taxes Summary Reports"));
  }
}

//Finances Taxes Summary Report
function financesTaxesSummaryInDB(param, start_date, end_date, locations, callback){
  try {

    vouchers = "";
    deposits = "";

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0)) {

      qry = `SELECT si.tax_amount, t.LocationName, si.item_name, si.unit_price, si.net_price
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (si.tax_amount < 0) AND (s.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;

    } else {

      qry = `SELECT si.tax_amount, t.LocationName, si.item_name, si.unit_price, si.net_price
      FROM sale_items si
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (si.tax_amount < 0) AND (s.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;

    }

    let financestaxessummary = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        financestaxessummary = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, financestaxessummary);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Finances Taxes Summary Reports"));
  }
}

//Finances Payment Logs Report
function financesPaymentsLogInDB(param, start_date, end_date, locations, teammember, vouchers, deposits, callback){
  try {

    vouchers = "";
    deposits = "";

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT DATE_FORMAT(sp.received_date ,'%d %M %Y, %h:%i %p') AS PaymentDate, t.LocationName,
      s.invoice_number, s.customer_name AS ClientNymc, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, 'Sale' AS Transactions, 
      pt.payment_type_name, sp.received_amount AS Amount
      FROM sale_payments sp 
      LEFT JOIN sales s ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON sp.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (sp.received_amount > 0) AND (sp.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY sp.sale_payment_id
      ORDER BY s.invoice_number DESC`;

    }  else if (teammember.length === 0) {
      qry = `SELECT DATE_FORMAT(sp.received_date ,'%d %M %Y, %h:%i %p') AS PaymentDate, t.LocationName,
      s.invoice_number, s.customer_name AS ClientNymc, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, 'Sale' AS Transactions, 
      pt.payment_type_name, sp.received_amount AS Amount
      FROM sale_payments sp 
      LEFT JOIN sales s ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON sp.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (sp.received_amount > 0) AND (sp.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `)
      GROUP BY sp.sale_payment_id
      ORDER BY s.invoice_number DESC`;

    } else if (locations.length === 0) {
      qry = `SELECT DATE_FORMAT(sp.received_date ,'%d %M %Y, %h:%i %p') AS PaymentDate, t.LocationName,
      s.invoice_number, s.customer_name AS ClientNymc, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, 'Sale' AS Transactions, 
      pt.payment_type_name, sp.received_amount AS Amount
      FROM sale_payments sp 
      LEFT JOIN sales s ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON sp.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (sp.received_amount > 0) AND (sp.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `)
      GROUP BY sp.sale_payment_id
      ORDER BY s.invoice_number DESC`;

    } else {
      qry = `SELECT DATE_FORMAT(sp.received_date ,'%d %M %Y, %h:%i %p') AS PaymentDate, t.LocationName,
      s.invoice_number, s.customer_name AS ClientNymc, 
      CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, 'Sale' AS Transactions, 
      pt.payment_type_name, sp.received_amount AS Amount
      FROM sale_payments sp 
      LEFT JOIN sales s ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN sale_items si ON sp.sale_id = si.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (sp.received_amount > 0) AND (sp.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `)
      GROUP BY sp.sale_payment_id
      ORDER BY s.invoice_number DESC`;
    }

    let financespaymentslogdb = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        financespaymentslogdb = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, financespaymentslogdb);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Finances Payment Logs Reports"));
  }
}

//Appointment Cancellations
function appointmentCancellationsInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT c.reference_number, c.customer_id, CONCAT(cs.first_name, ' ', cs.last_name) AS clientnym,
      c.service_id, ss.ServiceName, DATE_FORMAT(c.start_datetime ,'%d %M %Y') AS ScheduleDate, 
      DATE_FORMAT(c.modified_datetime ,'%d %M %Y') AS CancelledDate, c.modified_by, 
      CONCAT(s.FirstName, ' ', s.LastName) AS CancelledBy, cr.Name AS Reason, ss.Default_Price
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      LEFT JOIN staffs s ON c.modified_by = s.user_id
      LEFT JOIN cancellationreasons cr ON c.cancelled_reasonid = cr.CancellationReasonID
      WHERE c.status = 'Cancelled' AND (c.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY c.reference_number
      ORDER BY c.reference_number ASC`;

    }  else if (teammember.length === 0) {
      qry = `SELECT c.reference_number, c.customer_id, CONCAT(cs.first_name, ' ', cs.last_name) AS clientnym,
      c.service_id, ss.ServiceName, DATE_FORMAT(c.start_datetime ,'%d %M %Y') AS ScheduleDate, 
      DATE_FORMAT(c.modified_datetime ,'%d %M %Y') AS CancelledDate, c.modified_by, 
      CONCAT(s.FirstName, ' ', s.LastName) AS CancelledBy, cr.Name AS Reason, ss.Default_Price
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      LEFT JOIN staffs s ON c.modified_by = s.user_id
      LEFT JOIN cancellationreasons cr ON c.cancelled_reasonid = cr.CancellationReasonID
      WHERE c.status = 'Cancelled' AND (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      c.location_id IN (` + selLocation + `)
      GROUP BY c.reference_number
      ORDER BY c.reference_number ASC`;

    } else if (locations.length === 0) {
      qry = `SELECT c.reference_number, c.customer_id, CONCAT(cs.first_name, ' ', cs.last_name) AS clientnym,
      c.service_id, ss.ServiceName, DATE_FORMAT(c.start_datetime ,'%d %M %Y') AS ScheduleDate, 
      DATE_FORMAT(c.modified_datetime ,'%d %M %Y') AS CancelledDate, c.modified_by, 
      CONCAT(s.FirstName, ' ', s.LastName) AS CancelledBy, cr.Name AS Reason, ss.Default_Price
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      LEFT JOIN staffs s ON c.modified_by = s.user_id
      LEFT JOIN cancellationreasons cr ON c.cancelled_reasonid = cr.CancellationReasonID
      WHERE c.status = 'Cancelled' AND (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.staff_id IN (` + selStaff + `)
      GROUP BY c.reference_number
      ORDER BY c.reference_number ASC`;

    } else {
      qry = `SELECT c.reference_number, c.customer_id, CONCAT(cs.first_name, ' ', cs.last_name) AS clientnym,
      c.service_id, ss.ServiceName, DATE_FORMAT(c.start_datetime ,'%d %M %Y') AS ScheduleDate, 
      DATE_FORMAT(c.modified_datetime ,'%d %M %Y') AS CancelledDate, c.modified_by, 
      CONCAT(s.FirstName, ' ', s.LastName) AS CancelledBy, cr.Name AS Reason, ss.Default_Price
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      LEFT JOIN staffs s ON c.modified_by = s.user_id
      LEFT JOIN cancellationreasons cr ON c.cancelled_reasonid = cr.CancellationReasonID
      WHERE c.status = 'Cancelled' AND (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.location_id IN (` + selLocation + `) AND 
      c.staff_id IN (` + selStaff + `)
      GROUP BY c.reference_number
      ORDER BY c.reference_number ASC`;
    }

    let appointmentcancellations = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        appointmentcancellations = dataResponseObject.results;
      }

      var resp = createDataResponseObject(null, appointmentcancellations);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Appointment Cancelled Reports"));
  }
}

//Appointment Summary
function appointmentSummaryInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``, qry1 = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT c.staff_id, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember, COUNT(c.calendar_entryid) AS Appointments,
      SUM(ss.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY c.staff_id
      ORDER BY s.LastName ASC`;

      qry1 = `SELECT c.service_id, s.ServiceName, COUNT(c.calendar_entryid) AS Appointments,
      SUM(s.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN services s ON c.service_id = s.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY c.service_id
      ORDER BY s.ServiceName ASC`;

    }  else if (teammember.length === 0) {
      qry = `SELECT c.staff_id, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember, COUNT(c.calendar_entryid) AS Appointments,
      SUM(ss.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.location_id IN (` + selLocation + `)
      GROUP BY c.staff_id
      ORDER BY s.LastName ASC`;

      qry1 = `SELECT c.service_id, s.ServiceName, COUNT(c.calendar_entryid) AS Appointments,
      SUM(s.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN services s ON c.service_id = s.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.location_id IN (` + selLocation + `)
      GROUP BY c.service_id
      ORDER BY s.ServiceName ASC`;
    } else if (locations.length === 0) {
      qry = `SELECT c.staff_id, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember, COUNT(c.calendar_entryid) AS Appointments,
      SUM(ss.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.staff_id IN (` + selStaff + `)
      GROUP BY c.staff_id
      ORDER BY s.LastName ASC`;

      qry1 = `SELECT c.service_id, s.ServiceName, COUNT(c.calendar_entryid) AS Appointments,
      SUM(s.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN services s ON c.service_id = s.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.staff_id IN (` + selStaff + `)
      GROUP BY c.service_id
      ORDER BY s.ServiceName ASC`;
    } else {
      qry = `SELECT c.staff_id, CONCAT(s.FirstName, ' ', s.LastName) AS TeamMember, COUNT(c.calendar_entryid) AS Appointments,
      SUM(ss.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN services ss ON c.service_id = ss.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.location_id IN (` + selLocation + `) AND 
      c.staff_id IN (` + selStaff + `)
      GROUP BY c.staff_id
      ORDER BY s.LastName ASC`;

      qry1 = `SELECT c.service_id, s.ServiceName, COUNT(c.calendar_entryid) AS Appointments,
      SUM(s.Default_Price) TotalValue
      FROM calendars c
      LEFT JOIN services s ON c.service_id = s.ServiceID
      WHERE (c.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      c.location_id IN (` + selLocation + `) AND 
      c.staff_id IN (` + selStaff + `)
      GROUP BY c.service_id
      ORDER BY s.ServiceName ASC`;
    }

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        var appointmentsummary = {
          TeamMember: [],
          Services: []
        };

        appointmentsummary.TeamMember = dataResponseObject.results;

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

          if(dataResponseObject.error){
            callback(dataResponseObject);
    
          } else{

            appointmentsummary.Services = dataResponseObject.results;
          }

          var resp = createDataResponseObject(null, appointmentsummary);
          callback(resp);

        })
      }
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Appointment List Reports"));
  }
}

//Inventory Stock Consumption Reports
function inventoryStockConsumptionInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``, qry1 = ``
    if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT pj.reason, (SUM(pj.quantity) * p.supply_price) AS Total
      FROM productjournals pj
      LEFT JOIN products p ON pj.product_id=p.product_id
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id
      LEFT JOIN staffs s ON pj.created_by=s.user_id
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      (pj.quantity < 0)
      GROUP BY pj.reason
      ORDER BY pj.reason ASC`;

      qry1 = `SELECT pj.reason, p.product_name, SUM(pj.quantity) AS Quantity, (SUM(pj.quantity) * p.supply_price) AS AvTotalCost,              
      (SUM(pj.quantity) * p.supply_price) AS TotalCost              
      FROM productjournals pj              
      LEFT JOIN products p ON pj.product_id=p.product_id              
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id              
      LEFT JOIN staffs s ON pj.created_by=s.user_id              
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND          
      (pj.quantity < 0)             
      GROUP BY p.product_name              
      ORDER BY pj.reason ASC`;

    } else if ((locations.length === 0)){
      qry = `SELECT pj.reason, (SUM(pj.quantity) * p.supply_price) AS Total
      FROM productjournals pj
      LEFT JOIN products p ON pj.product_id=p.product_id
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      (pj.quantity < 0) AND 
      s.StaffID IN (` + selStaff + `) 
      GROUP BY pj.reason
      ORDER BY pj.reason ASC`;

      qry1 = `SELECT pj.reason, p.product_name, SUM(pj.quantity) AS Quantity, (SUM(pj.quantity) * p.supply_price) AS AvTotalCost,              
      (SUM(pj.quantity) * p.supply_price) AS TotalCost              
      FROM productjournals pj              
      LEFT JOIN products p ON pj.product_id=p.product_id              
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id              
      LEFT JOIN staffs s ON pj.created_by=s.user_id              
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND          
      (pj.quantity < 0) AND s.StaffID IN (` + selStaff + `)              
      GROUP BY p.product_name              
      ORDER BY pj.reason ASC`;

    } else if ((teammember.length === 0)){
      qry = `SELECT pj.reason, (SUM(pj.quantity) * p.supply_price) AS Total
      FROM productjournals pj
      LEFT JOIN products p ON pj.product_id=p.product_id
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      (pj.quantity < 0) AND 
      pl.location_id IN (` + selLocation + `)
      GROUP BY pj.reason
      ORDER BY pj.reason ASC`;

      qry1 = `SELECT pj.reason, p.product_name, SUM(pj.quantity) AS Quantity, (SUM(pj.quantity) * p.supply_price) AS AvTotalCost,              
      (SUM(pj.quantity) * p.supply_price) AS TotalCost              
      FROM productjournals pj              
      LEFT JOIN products p ON pj.product_id=p.product_id              
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id              
      LEFT JOIN staffs s ON pj.created_by=s.user_id              
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND          
      (pj.quantity < 0) AND pl.location_id IN (` + selLocation + `)             
      GROUP BY p.product_name              
      ORDER BY pj.reason ASC`;

    } else {
      qry = `SELECT pj.reason, (SUM(pj.quantity) * p.supply_price) AS Total
      FROM productjournals pj
      LEFT JOIN products p ON pj.product_id=p.product_id
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      (pj.quantity < 0) AND 
      pl.location_id IN (` + selLocation + `) AND 
      s.StaffID IN (` + selStaff + `) 
      GROUP BY pj.reason
      ORDER BY pj.reason ASC`;

      qry1 = `SELECT pj.reason, p.product_name, SUM(pj.quantity) AS Quantity, (SUM(pj.quantity) * p.supply_price) AS AvTotalCost,              
      (SUM(pj.quantity) * p.supply_price) AS TotalCost              
      FROM productjournals pj              
      LEFT JOIN products p ON pj.product_id=p.product_id              
      LEFT JOIN product_locations pl ON pj.product_id=pl.product_id              
      LEFT JOIN staffs s ON pj.created_by=s.user_id              
      WHERE (pj.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND          
      (pj.quantity < 0) AND 
      pl.location_id IN (` + selLocation + `) AND
      s.StaffID IN (` + selStaff + `)            
      GROUP BY p.product_name              
      ORDER BY pj.reason ASC`;
    }

    let inventorystockconsumption = [];
    let reasons = ['Initial Use', 'Damage', 'Out of Date', 'Adjustment', 'Transfer', 'Other'];
    let reasontype;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        let type;
        var stockconsumption = {
          Summary: [],
          Result: []
        };

        reasons.forEach(element => {
          reasontype = element;
          for (let i = 0; i < dataResponseObject.results.length; i++) {
            if (reasontype == dataResponseObject.results[i].reason){
              stockconsumption.Summary.push({"Reasons": reasontype, "Amount":dataResponseObject.results[i].Total});
            }
          }
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

            if(dataResponseObject.error){
              callback(dataResponseObject);
        
            } else{

              stockconsumption.Result = dataResponseObject.results;
            }

          var resp = createDataResponseObject(null, stockconsumption);
          callback(resp);
        });
      }
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Inventory Stock Movement Log Reports"));
  }
}

//Inventory Product Sales Performance Reports
function inventoryProductSalesPerformanceInDB(param, start_date, end_date, locations, teammember, suppliers, brands, categories, channels, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }

    var selSupplier = "";
    if (!suppliers) {
      selSupplier = "''";
    }
    else {

      if (suppliers.length === 0) {
        selSupplier = "''";
      } else {
        for (let i = 0; i < suppliers.length; i++) {
          if (selSupplier == "") {
            selSupplier += "'" + suppliers[i].supplier_id + "'";
          }
          else {
            selSupplier += ",'" + suppliers[i].supplier_id + "'";
          }
        }
      }
    }

    var selBrands = "";
    if (!brands) {
      selBrands = "''";
    }
    else {

      if (brands.length === 0) {
        selBrands = "''";
      } else {
        for (let i = 0; i < brands.length; i++) {
          if (selBrands == "") {
            selBrands += "'" + brands[i].brand_name + "'";
          }
          else {
            selBrands += ",'" + brands[i].brand_name + "'";
          }
        }
      }
    }

    var selCategories = "";
    if (!categories) {
      selCategories = "''";
    }
    else {

      if (categories.length === 0) {
        selCategories = "''";
      } else {
        for (let i = 0; i < categories.length; i++) {
          if (selCategories == "") {
            selCategories += "'" + categories[i].category_name + "'";
          }
          else {
            selCategories += ",'" + categories[i].category_name + "'";
          }
        }
      }
    }

    var selChannels = "";
    if (!channels) {
      selChannels = "''";
    }
    else {

      if (channels.length === 0) {
        selChannels = "''";
      } else {
        for (let i = 0; i < channels.length; i++) {
          if (selChannels == "") {
            selChannels += "'" + channels[i].source_of_salesid + "'";
          }
          else {
            selChannels += ",'" + channels[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {

      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;

    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0)) {

      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;

    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      p.product_category IN (` + selCategories + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      pj.supplier_id IN (` + selSupplier + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (suppliers.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (suppliers.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (brands.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      pj.supplier_id IN (` + selSupplier + `) 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      p.brand IN (` + selBrands + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0) && (brands.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((brands.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (brands.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (brands.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (suppliers.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (suppliers.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (brands.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (suppliers.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (brands.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (brands.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      p.brand IN (` + selBrands + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((brands.length === 0) && (categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((brands.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((categories.length === 0) && (channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((locations.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((teammember.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((suppliers.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((brands.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((categories.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else if ((channels.length === 0)) {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    } else {
      qry = `SELECT si.item_name, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL(SUM(si.quantity), 0) AS QtySold, IFNULL((SUM(si.quantity)) * p.special_price, 0) AS CostofGoodSold,
      IFNULL((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price), 0) AS NetSales,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) / COUNT(s.invoice_number), 0) AS AvNetPrice,
      IFNULL((((SUM(pj.quantity) * p.supply_price)-((SUM(si.quantity)) * p.special_price))/(SUM(pj.quantity) * p.supply_price)) * 100, 0) AS Margin,
      IFNULL(((pj.supplier_price * (SUM(si.quantity)))-((SUM(si.quantity)) * p.special_price)) - ((SUM(si.quantity)) * p.special_price), 0) AS TotalMargin
      FROM sale_items si
      LEFT JOIN productjournals pj ON si.item_id = pj.product_id
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) AND 
      s.source_of_salesid IN (` + selChannels + `)
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    }

    let inventoryproductsalesperformance = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        inventoryproductsalesperformance = dataResponseObject.results;

        var resp = createDataResponseObject(null, inventoryproductsalesperformance);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Inventory Product Sales Performance Reports"));
  }
}

//Inventory Stocks On Hand Reports
function inventoryStockOnHandInDB(param, start_date, end_date, locations, suppliers, brands, categories, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSupplier = "";
    if (!suppliers) {
      selSupplier = "''";
    }
    else {

      if (suppliers.length === 0) {
        selSupplier = "''";
      } else {
        for (let i = 0; i < suppliers.length; i++) {
          if (selSupplier == "") {
            selSupplier += "'" + suppliers[i].supplier_id + "'";
          }
          else {
            selSupplier += ",'" + suppliers[i].supplier_id + "'";
          }
        }
      }
    }

    var selBrands = "";
    if (!brands) {
      selBrands = "''";
    }
    else {

      if (brands.length === 0) {
        selBrands = "''";
      } else {
        for (let i = 0; i < brands.length; i++) {
          if (selBrands == "") {
            selBrands += "'" + brands[i].brand_name + "'";
          }
          else {
            selBrands += ",'" + brands[i].brand_name + "'";
          }
        }
      }
    }

    var selCategories = "";
    if (!categories) {
      selCategories = "''";
    }
    else {

      if (categories.length === 0) {
        selCategories = "''";
      } else {
        for (let i = 0; i < categories.length; i++) {
          if (selCategories == "") {
            selCategories += "'" + categories[i].category_name + "'";
          }
          else {
            selCategories += ",'" + categories[i].category_name + "'";
          }
        }
      }
    }
    
    let qry = ``;
    if ((locations.length === 0) && (suppliers.length === 0) && (brands.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((suppliers.length === 0) && (brands.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      pl.location_id IN (` + selLocation + `)
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((locations.length === 0) && (brands.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      pj.supplier_id IN (` + selSupplier + `)
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((locations.length === 0) && (suppliers.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      p.brand IN (` + selBrands + `)
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((locations.length === 0) && (suppliers.length === 0) && (brands.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      p.product_category IN (` + selCategories + `) 
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((locations.length === 0) && (suppliers.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((locations.length === 0) && (brands.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((locations.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `)
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((suppliers.length === 0) && (brands.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      pl.location_id IN (` + selLocation + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    }  else if ((suppliers.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      pl.location_id IN (` + selLocation + `) AND 
      p.brand IN (` + selBrands + `)  
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else if ((brands.length === 0) && (categories.length === 0)) {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      pl.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) 
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;

    } else {

      qry = `SELECT p.product_name, t.LocationName, IFNULL(sum(case when pj.quantity>0 then pj.quantity else 0 end), 0) AS StockonHand,
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS TotalCost, 
      IFNULL((sum(case when pj.quantity>0 then pj.quantity else 0 END)) * p.supply_price, 0) AS AvTotalCost,
      (p.retail_price * (sum(case when pj.quantity>0 then pj.quantity else 0 END))) AS TotalRetailValue,
      p.retail_price, SUM(0) AS LowStockLevel, p.reorder_quantity
      FROM products p
      LEFT JOIN product_locations pl ON p.product_id = pl.product_id
      LEFT JOIN productjournals pj ON p.product_id = pj.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON pl.location_id = t.TenantLocationID
      WHERE (pl.created_datetime BETWEEN '${start_date}' AND '${end_date}') AND
      pl.location_id IN (` + selLocation + `) AND 
      pj.supplier_id IN (` + selSupplier + `) AND 
      p.brand IN (` + selBrands + `) AND 
      p.product_category IN (` + selCategories + `) 
      GROUP BY pl.product_id
      ORDER BY pl.product_id`;
    }

    let inventorystockonhanddb = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        inventorystockonhanddb = dataResponseObject.results;
 
        var resp = createDataResponseObject(null, inventorystockonhanddb);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Inventory Stock Movement Log Reports"));
  }
}

//Inventory Product Sales Performance Reports
function inventoryStockMovementSummaryInDB(param, start_date, end_date, locations, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }
    
    let qry = ``, qry1 = ``;
    if ((locations.length === 0)) {
      qry = `SELECT si.item_name, p.barcode, coalesce(case when si.item_id=pj.product_id then (SELECT pj.quantity FROM productjournals pj LEFT JOIN sale_items si ON pj.product_id = si.item_id WHERE pj.created_datetime = (select min(pj.created_datetime)) ORDER BY pj.created_datetime DESC LIMIT 1) end, 0) AS StartStock,
      coalesce(SUM(case when pj.quantity!=0 then pj.quantity end), 0) AS Received, 
      coalesce(SUM(case when si.quantity!=0 then si.quantity end), 0) AS Sold, 
      IFNULL(coalesce(SUM(case when pj.quantity!=0 then pj.quantity END), 0 + (SELECT sum(case when pj.quantity<0 then pj.quantity else 0 end) FROM productjournals pj WHERE pj.product_id='')), 0) AS Deducted, 
      IFNULL(ABS((coalesce(case when si.item_id=pj.product_id then (SELECT pj.quantity FROM productjournals pj LEFT JOIN sale_items si ON pj.product_id = si.item_id WHERE pj.created_datetime = (select min(pj.created_datetime)) ORDER BY pj.created_datetime DESC LIMIT 1) end, 0)) + 
      ABS(coalesce(SUM(case when pj.quantity!=0 then pj.quantity end), 0)) + (coalesce(SUM(case when pj.quantity!=0 then pj.quantity END), 0 + (SELECT sum(case when pj.quantity<0 then pj.quantity else 0 end) FROM productjournals pj WHERE pj.product_id='')))), 0) AS EndStock,
      IFNULL(((ABS((coalesce(case when si.item_id=pj.product_id then (SELECT pj.quantity FROM productjournals pj LEFT JOIN sale_items si ON pj.product_id = si.item_id WHERE pj.created_datetime = (select min(pj.created_datetime)) ORDER BY pj.created_datetime DESC LIMIT 1) end, 0)) + 
      ABS(coalesce(SUM(case when pj.quantity!=0 then pj.quantity end), 0)) + (coalesce(SUM(case when pj.quantity!=0 then pj.quantity END), 0 + (SELECT sum(case when pj.quantity<0 then pj.quantity else 0 end) FROM productjournals pj WHERE pj.product_id='')))) + p.supply_price)), 0) AS EndValue
      FROM sale_items si
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN productjournals pj ON si.item_id=pj.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;

    } else {
      qry = `SELECT si.item_name, p.barcode, coalesce(case when si.item_id=pj.product_id then (SELECT pj.quantity FROM productjournals pj LEFT JOIN sale_items si ON pj.product_id = si.item_id WHERE pj.created_datetime = (select min(pj.created_datetime)) ORDER BY pj.created_datetime DESC LIMIT 1) end, 0) AS StartStock,
      coalesce(SUM(case when pj.quantity!=0 then pj.quantity end), 0) AS Received, 
      coalesce(SUM(case when si.quantity!=0 then si.quantity end), 0) AS Sold, 
      IFNULL(coalesce(SUM(case when pj.quantity!=0 then pj.quantity END), 0 + (SELECT sum(case when pj.quantity<0 then pj.quantity else 0 end) FROM productjournals pj WHERE pj.product_id='')), 0) AS Deducted, 
      IFNULL(ABS((coalesce(case when si.item_id=pj.product_id then (SELECT pj.quantity FROM productjournals pj LEFT JOIN sale_items si ON pj.product_id = si.item_id WHERE pj.created_datetime = (select min(pj.created_datetime)) ORDER BY pj.created_datetime DESC LIMIT 1) end, 0)) + 
      ABS(coalesce(SUM(case when pj.quantity!=0 then pj.quantity end), 0)) + (coalesce(SUM(case when pj.quantity!=0 then pj.quantity END), 0 + (SELECT sum(case when pj.quantity<0 then pj.quantity else 0 end) FROM productjournals pj WHERE pj.product_id='')))), 0) AS EndStock,
      IFNULL(((ABS((coalesce(case when si.item_id=pj.product_id then (SELECT pj.quantity FROM productjournals pj LEFT JOIN sale_items si ON pj.product_id = si.item_id WHERE pj.created_datetime = (select min(pj.created_datetime)) ORDER BY pj.created_datetime DESC LIMIT 1) end, 0)) + 
      ABS(coalesce(SUM(case when pj.quantity!=0 then pj.quantity end), 0)) + (coalesce(SUM(case when pj.quantity!=0 then pj.quantity END), 0 + (SELECT sum(case when pj.quantity<0 then pj.quantity else 0 end) FROM productjournals pj WHERE pj.product_id='')))) + p.supply_price)), 0) AS EndValue
      FROM sale_items si
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN productjournals pj ON si.item_id=pj.product_id
      LEFT JOIN sales s ON si.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY si.item_name
      ORDER BY si.item_name ASC`;
    }

    let inventorystockmovementsummary = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        inventorystockmovementsummary = dataResponseObject.results;

        var resp = createDataResponseObject(null, inventorystockmovementsummary);
        callback(resp);
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Inventory Stock Movement Log Reports"));
  }
}

//Inventory Stock Movement Log Reports
function inventoryStockMovementLogInDB(param, start_date, end_date, locations, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0)) {
      qry = `SELECT DATE_FORMAT(s.created_datetime,'%d %M %Y, %l:%i %p') AS DAYs, si.item_name, p.barcode, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, t.LocationName, 
      invoice_number AS Actions, (-1 * SUM(si.quantity)) AS Adjustment, SUM(si.unit_price) AS CostPrice,
      coalesce(case when (p.current_stock_quantity - SUM(si.quantity))=NULL then (p.current_stock_quantity - SUM(si.quantity)) end, 0) AS OnHand
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.invoice_number        
      ORDER BY s.invoice_number DESC`;
    } else {
      qry = `SELECT DATE_FORMAT(s.created_datetime,'%d %M %Y, %l:%i %p') AS DAYs, si.item_name, p.barcode, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, t.LocationName, 
      invoice_number AS Actions, (-1 * SUM(si.quantity)) AS Adjustment, SUM(si.unit_price) AS CostPrice,
      coalesce(case when (p.current_stock_quantity - SUM(si.quantity))=NULL then (p.current_stock_quantity - SUM(si.quantity)) end, 0) AS OnHand
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      LEFT JOIN products p ON si.item_id = p.product_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) 
      GROUP BY s.invoice_number        
      ORDER BY s.invoice_number DESC`;
    }

    let inventorystockmovementlog = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        inventorystockmovementlog = dataResponseObject.results;

      }

      var resp = createDataResponseObject(null, inventorystockmovementlog);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Inventory Stock Movement Log Reports"));
  }
}

//Finances Payment Summary Reports
function financesPaymentSummaryInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT pt.payment_type_name, COUNT(invoice_number) AS Transactions, SUM(s.total_amount) AS GrossTotal,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetPayments
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY sp.payment_type_id       
      ORDER BY pt.payment_type_name ASC`;
    }  else if (teammember.length === 0) {
      qry = `SELECT pt.payment_type_name, COUNT(invoice_number) AS Transactions, SUM(s.total_amount) AS GrossTotal,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetPayments
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `)
      GROUP BY sp.payment_type_id       
      ORDER BY pt.payment_type_name ASC`;
    } else if (locations.length === 0) {
      qry = `SELECT pt.payment_type_name, COUNT(invoice_number) AS Transactions, SUM(s.total_amount) AS GrossTotal,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetPayments
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `)
      GROUP BY sp.payment_type_id       
      ORDER BY pt.payment_type_name ASC`;
    } else {
      qry = `SELECT pt.payment_type_name, COUNT(invoice_number) AS Transactions, SUM(s.total_amount) AS GrossTotal,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetPayments
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation + `) AND 
      s.source_of_salesid IN (` + selStaff + `)
      GROUP BY sp.payment_type_id       
      ORDER BY pt.payment_type_name ASC`;
    }

    let financespaymentsummary = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        financespaymentsummary = dataResponseObject.results;

      }

      var resp = createDataResponseObject(null, financespaymentsummary);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Finances Payment Summary Reports"));
  }
}

// Update Delivery Status
function updateDeliveryStatusInDB(param, sale_id, status_date, delivery_status, proof_of_delivery, delivered_by, callback) {
  try {

    const updatedeliverystatus = `UPDATE delivery_status_updates c SET 
    status_date = '${mySQLDate(status_date)}',
    delivery_status = '${delivery_status}',
    proof_of_delivery = '${proof_of_delivery}',
    delivered_by = '${delivered_by}' 
    WHERE sale_id = '${sale_id}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatedeliverystatus, [], function(dataResponseObject){

      const updatesalesdeliverystatus = `UPDATE sales c SET 
      delivery_status = '${delivery_status}'
      WHERE sale_id = '${sale_id}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatesalesdeliverystatus, [], callback)
    });
    
  } catch (error) {
    callback(createDataResponseObject(err, "Unable to update Delivery Status"));
  }
}

// Vouchers Get By ID
function getVouchersByIDInDB(param, callback) {

  const qry = `SELECT * FROM vouchers WHERE VoucherID = '${param.vouchersid}'`;

    logger.info('getVouchersByIDInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
    
      if(dataResponseObject.error){
        callback(dataResponseObject);
      }else{
        if(dataResponseObject.results.length == 0){
          var resp = createDataResponseObject("Vouchers not found.", null);
        }else{
          var vouchers = {
            vouchersInfo: dataResponseObject.results,
            services: []
          };

          const qry1 = `SELECT * FROM voucherservices WHERE VoucherID = '${param.vouchersid}'`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

            if(dataResponseObject.error){
              callback(dataResponseObject);
            }else{

              vouchers.services = dataResponseObject.results;
            }

            var resp = createDataResponseObject(null, vouchers);
            callback(resp);
          });
        }
      }
  });
}

// Vouchers CRUD
function createVouchersInDB(param, VoucherName, Value, RetailPrice, ValidFor, LimitAmountOfSales, NumberOfSalesLimit, EnableOnlineSales, VoucherTitle, VoucherDiscription, VoucherColor, VoucherButton, NoteForClient, services, callback) {
  try {

  let callbacks = {};

    const createvouchers = `INSERT INTO vouchers (VoucherName, Value, RetailPrice, ValidFor, LimitAmountOfSales, NumberOfSalesLimit, EnableOnlineSales, VoucherTitle, VoucherDiscription, VoucherColor, VoucherButton, NoteForClient, created_by) 
    VALUES ('${VoucherName}', ${Value}, ${RetailPrice}, '${ValidFor}', ${LimitAmountOfSales}, ${NumberOfSalesLimit}, ${EnableOnlineSales}, '${VoucherTitle}', '${VoucherDiscription}', '${VoucherColor}', ${VoucherButton}, ${NoteForClient}, '${param.userid}')`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createvouchers, [], function(dataResponseObject){

    callbacks = dataResponseObject;

    const querygetvoucherid = `SELECT VoucherID FROM vouchers WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetvoucherid, [], function(dataResponseObject){

      if (services.length === 0) {
        
        var resp = createDataResponseObject(false, callbacks);
        callback(resp);
        
      } else {
        let result = Object.values(JSON.parse(JSON.stringify(dataResponseObject)));
        let vouchers_id = result[1].VoucherID;

        console.log(result);

        const insertvoucherservices = `INSERT INTO voucherservices (VoucherID, VoucherName, ServiceID, ServiceName) 
        VALUES?`;
        let values = [];

        services.forEach(element => {
          values.push([vouchers_id, VoucherName, element.ServiceID, element.ServiceName])
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertvoucherservices, [values], callback)
      }
    });
  });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Vouchers"));
  }
}

function updateVouchersInDB(param, VoucherID, VoucherName, Value, RetailPrice, ValidFor, LimitAmountOfSales, NumberOfSalesLimit, EnableOnlineSales, VoucherTitle, VoucherDiscription, VoucherColor, VoucherButton, NoteForClient, services, callback) {
  try {

    let callbacks = {};

    const updatevouchers = `UPDATE vouchers c SET 
    VoucherName = '${VoucherName}',
    Value = ${Value},
    RetailPrice = ${RetailPrice},
    ValidFor = '${ValidFor}',
    LimitAmountOfSales = ${LimitAmountOfSales},
    NumberOfSalesLimit = ${NumberOfSalesLimit},
    EnableOnlineSales = ${EnableOnlineSales},
    VoucherTitle = '${VoucherTitle}', 
    VoucherDiscription = '${VoucherDiscription}', 
    VoucherColor = '${VoucherColor}', 
    VoucherButton = ${VoucherButton}, 
    NoteForClient = ${NoteForClient},
    modified_by = '${param.userid}',
    modified_datetime = NOW()
    WHERE VoucherID = '${VoucherID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatevouchers, [], function(dataResponseObject) {

    callbacks = dataResponseObject;

    if (services.length === 0) {

      var resp = createDataResponseObject(false, callbacks);
      callback(resp);
      
    } else {

      const deletevoucherservices = `DELETE from voucherservices WHERE VoucherID = '${VoucherID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletevoucherservices, [], function(dataResponseObject) {

        const insertvoucherservices = `INSERT INTO voucherservices (VoucherID, VoucherName, ServiceID, ServiceName) 
        VALUES?`;
        let values = [];

        services.forEach(element => {
          values.push([VoucherID, VoucherName, element.ServiceID, element.ServiceName])
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertvoucherservices, [values], callback)
      });
    }
  });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Vouchers"));
  }
}

function deleteVouchersInDB(param, VoucherID, callback) {
  try {

    const deletevouchers = `DELETE FROM vouchers WHERE VoucherID = '${VoucherID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletevouchers, [], function(dataResponseObject) {

    const deletevouchersservice = `DELETE FROM voucherservices WHERE VoucherID = '${VoucherID}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", deletevouchersservice, [], callback)
  });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Vouchers"));
  }
}

function getListVouchersInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM vouchers v
    ORDER BY v.created_datetime DESC`;

    logger.info('getListVouchersInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Vouchers List"));
  }
}

// Get Vouchers List
function GetSalesVouchersInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT s.created_datetime, DATE_ADD(s.sale_date, INTERVAL (REGEXP_SUBSTR(v.ValidFor,"[0-9]+")) DAY) AS  Expirydate,
    s.invoice_number, s.customer_name, si.item_type, si.remarks, si.item_name,
    (si.unit_price * quantity) AS Total, 0 AS Redeemed, (si.unit_price * quantity) AS Remaining, s.vouchercode 
    FROM sales s
    LEFT JOIN sale_items si ON s.sale_id = si.sale_id
    LEFT JOIN vouchers v ON si.item_id = v.VoucherID
    WHERE si.item_type = 'Vouchers'
    ORDER BY s.sale_date DESC`;

    logger.info('GetSalesVouchersInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Vouchers List"));
  }
}

// Create Multi Payments
function createMultiPaymentsInDB(param, sale_id, received_date, staff_id, received_amount, payment_type_id, payment_reference, callback){
  try {

    const getstatus = `SELECT s.sale_status, s.invoice_notes, s.total_amount, s.paid_amount, s.balance_amount FROM sales s
    WHERE s.sale_id = '${sale_id}'`;

    var newbalance = 0.0, total_paid_amount = 0.0, rec_amount = 0.0, tot_amount = 0.0, bal_amount = 0.0, pid_amount = 0.0;
    var invoice_status = "";

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getstatus, [], function (dataResponseObject) {

      if (dataResponseObject.error) {
        callback(dataResponseObject);
      }
      else {

        let res = Object.values(JSON.parse(JSON.stringify(dataResponseObject)));

        rec_amount = parseFloat(received_amount);
        tot_amount = parseFloat(res[1].total_amount);
        bal_amount = parseFloat(res[1].balance_amount);
        pid_amount = parseFloat(res[1].paid_amount);

        if (res[1].sale_status === 'Unpaid' || res[1].invoice_notes === 'Unpaid') {

          if (rec_amount === tot_amount) {
            total_paid_amount = rec_amount;
            invoice_status = "Paid";
          } else {
            newbalance = tot_amount - rec_amount;
            total_paid_amount = rec_amount;
            invoice_status = "Partial"
          }

          const createmultipayments = `INSERT INTO sale_payments (sale_id, received_date, receivedby_employee_id, received_amount, payment_type_id, payment_reference, created_by) 
          VALUES ('${sale_id}', '${received_date}', '${staff_id}', ${rec_amount}, '${payment_type_id}', '${payment_reference}', '${param.userid}')`;
  
          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createmultipayments, [], function (dataResponseObject) {
  
            const updatesales = `UPDATE sales c SET 
            paid_amount = ${total_paid_amount},
            balance_amount = ${newbalance},
            sale_status = '${invoice_status}',
            invoice_notes = '${invoice_status}',
            modified_datetime = NOW(),
            modified_by = '${param.userid}' 
            WHERE sale_id = '${sale_id}'`;
  
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatesales, [], callback)
  
          });

        } else if (res[1].sale_status === 'Partial' || res[1].invoice_notes === 'Partial') {

          if (rec_amount === bal_amount) {
            total_paid_amount = rec_amount + pid_amount;
            invoice_status = "Paid";
          } else {
            newbalance = bal_amount - rec_amount;
            total_paid_amount = rec_amount + pid_amount;
            invoice_status = "Partial";
          }

          const createmultipayments = `INSERT INTO sale_payments (sale_id, received_date, receivedby_employee_id, received_amount, payment_type_id, payment_reference, created_by) 
          VALUES ('${sale_id}', '${received_date}', '${staff_id}', ${rec_amount}, '${payment_type_id}', '${payment_reference}', '${param.userid}')`;
  
          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createmultipayments, [], function (dataResponseObject) {
  
            const updatesales = `UPDATE sales c SET 
            paid_amount = ${total_paid_amount},
            balance_amount = ${newbalance},
            sale_status = '${invoice_status}',
            invoice_notes = '${invoice_status}',
            modified_datetime = NOW(),
            modified_by = '${param.userid}' 
            WHERE sale_id = '${sale_id}'`;
  
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatesales, [], callback)
  
          });

        } else {

          callback(createDataResponseObject(dataResponseObject.error, "You can add only a payment for Unpaid and Partial!"));
        }
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Multi Payments"));
  }
}

// Update Invoice Status
function UpdateInvoiceStatusInDB(param, sale_id, invoice_status, received_date, staff_id, payment_type_id, payment_reference, callback){
  try {

    const getstatus = `SELECT s.sale_status, s.invoice_notes FROM sales s
    WHERE s.sale_id = '${sale_id}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getstatus, [], function (dataResponseObject) {

      if (dataResponseObject.error) {
        callback(dataResponseObject);
      }
      else {

        let res = Object.values(JSON.parse(JSON.stringify(dataResponseObject)));

        let updateinvoicestatus = ``, qry = ``;

        if (invoice_status === 'Voided') {

          if (res[1].sale_status === 'Paid' || res[1].invoice_notes === 'Paid') {

            callback(createDataResponseObject(dataResponseObject.error, "You can only void an unpaid invoice!"));
            
          } else {
    
            updateinvoicestatus = `UPDATE sales c SET 
            sale_status = 'Voided',
            modified_datetime = NOW(),
            modified_by = '${param.userid}' 
            WHERE sale_id = '${sale_id}'`;
      
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateinvoicestatus, [], callback)
          }
        } else if (invoice_status === 'Refunded') {

          if (res[1].sale_status === 'Unpaid') {

            console.log(res[1].sale_status);

            callback(createDataResponseObject(dataResponseObject.error, "You can only refund a paid invoice!"));
            
          } else {
    
            updateinvoicestatus = `UPDATE sales c SET 
            sale_status = 'Refunded',
            modified_datetime = NOW(),
            modified_by = '${param.userid}' 
            WHERE sale_id = '${sale_id}'`;
      
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateinvoicestatus, [], function (dataResponseObject) {
      
              qry = `SELECT s.paid_amount FROM sales s
              WHERE s.sale_id = '${sale_id}'`;
      
              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
      
                if (dataResponseObject.error) {
                  callback(dataResponseObject);
                }
                else {
        
                  console.log(dataResponseObject);
                  let result = Object.values(JSON.parse(JSON.stringify(dataResponseObject)));
      
                  const paymentsales = `INSERT INTO sale_payments (sale_id, received_date, receivedby_employee_id, received_amount, payment_type_id, payment_reference, created_by) 
                  VALUES ('${sale_id}', '${mySQLDate(received_date)}', '${staff_id}', (ABS(${result[1].paid_amount})*(-1)), '${payment_type_id}', '${payment_reference}', '${param.userid}')`
        
                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", paymentsales, [], callback)
                }
              });
            });
          }
        } else {

          callback(createDataResponseObject(dataResponseObject.error, "You can only choose 'Voided' or 'Refunded'!"));
        }
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Address"));
  }
}

// Product Stock On Hand Per Location
function ProductStocksOnHandPerLocationInDB(param, callback){
  try {

    console.log(param.productid);
      //create query using the data in the req.body to create the product in the db
      const qyr1 = `SELECT p.product_id, p.product_name, p.product_category, p.product_subcategory, p.measure, p.reorder_limit FROM products p
      WHERE p.product_id = '${param.productid}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qyr1, [], function (dataResponseObject1) {

      if (dataResponseObject1.error) {
        callback(dataResponseObject1);
      }
      else {

        console.log(dataResponseObject1);
         let result = Object.values(JSON.parse(JSON.stringify(dataResponseObject1)));

         var products = {
           "ProductID": result[1].product_id,
           "ProductName": result[1].product_name,
           "ProductCategory": result[1].product_category,
           "ProductSubCategory": result[1].product_subcategory,
           "UnitOfMeasure": result[1].measure,
           "ReOrderLimit": result[1].reorder_limit,
           Locations: []
         }

         const qry2 = `SELECT p.location_id, t.LocationName, SUM(quantity) AS OnHand FROM productjournals p
         JOIN rbtech_admindb.tenantlocations t ON p.location_id = t.TenantLocationID
         WHERE p.product_id = '${param.productid}'
         GROUP BY p.location_id`;

         mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry2, [], function (dataResponseObject1) {

          if (dataResponseObject1.error) {
            callback(dataResponseObject1);
          }
          else {
            products.Locations = dataResponseObject1.results;
          }

          var resp = createDataResponseObject(null, products);
          callback(resp);
         });
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Address"));
  }
}

function getDefaultcustomer(param, callback){
  try {
      //create query using the data in the req.body to create the product in the db
      const qyr1 = `SELECT t. DefaultCustomerID AS customer_id, CONCAT(c.first_name,' ', c.last_name) AS customer_name
      FROM rbtech_admindb.companyinfo t
        LEFT JOIN customers c ON t.DefaultCustomerID = c.customer_id
      WHERE t.tenant_id = '${param.tenantid}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qyr1, [], function (dataResponseObject1) {
        callback(dataResponseObject1);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get default customer"));
  }
}

// User Address for Customer
function createUserAddressesInDB(param, customer_id, address_type, address_name, Address, Apartment, District, City, County, State, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, Is_Default_Address, next_invoice_number, callback){
  try {
      //create query using the data in the req.body to create the product in the db
      const qyr1 = `SELECT user_id FROM customers
      WHERE customer_id = '${customer_id}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qyr1, [], function (dataResponseObject1) {

      if (dataResponseObject1.error) {
        callback(dataResponseObject1);
      }
      else {

        console.log(dataResponseObject1);
        let result = Object.values(JSON.parse(JSON.stringify(dataResponseObject1)));
        console.log(result[1].user_id);
        let user_ids = result[1].user_id;

        const useraddresses = `INSERT INTO user_addresses (user_id, address_type, address_name, Address, Apartment, District, City, County, State, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, Is_Default_Address, created_by, next_invoice_number) 
        VALUES ('${user_ids}', '${(!address_type ? 'null' : address_type)}', '${(!address_name ? 'null' : address_name)}', '${(!Address ? 'null' : Address)}', '${(!Apartment ? 'null' : Apartment)}', '${(!District ? 'null' : District)}', '${(!City ? 'null' : City)}', '${(!County ? 'null' : County)}', '${(!State ? 'null' : State)}', '${(!AreasOfInterest ? 'null' : AreasOfInterest)}', '${(!AdministrativeArea ? 'null' : AdministrativeArea)}', '${(!SubAdministrativeArea ? 'null' : SubAdministrativeArea)}', '${(!SubLocality ? 'null' : SubLocality)}', '${(!SubThoroughfare ? 'null' : SubThoroughfare)}', '${(!Thoroughfare ? 'null' : Thoroughfare)}', '${(!Locality ? 'null' : Locality)}', '${(!Latitude ? 'null' : Latitude)}', '${(!Longtitude ? 'null' : Longtitude)}', '${(!PostalCode ? 'null' : PostalCode)}', '${(!CountryCode ? 'null' : CountryCode)}', '${(!CountryName ? 'null' : CountryName)}', ${(isNaN(Number(LocationRating)) ? 0 : Number(LocationRating))}, ${(isNaN(Number(Is_Instant_Confirmation_Enabled)) ? 0 : Number(Is_Instant_Confirmation_Enabled))}, ${(isNaN(Number(Is_Default_Address)) ? 0 : Number(Is_Default_Address))}, '${param.userid}', ${(isNaN(Number(next_invoice_number)) ? 0 : Number(next_invoice_number))})`

        mySqlConnection.adminDataAccess(useraddresses, callback)
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Address"));
  }
}

function updateUseraddressesInDB(param, customer_id, address_type, address_name, Address, Apartment, District, City, County, State, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, Is_Default_Address, next_invoice_number, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const qyr1 = `SELECT user_id FROM customers
      WHERE customer_id = '${customer_id}'`;

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qyr1, [], function (dataResponseObject1) {

      if (dataResponseObject1.error) {
        callback(dataResponseObject1);
      }
      else {

        console.log(dataResponseObject1);
        let result = Object.values(JSON.parse(JSON.stringify(dataResponseObject1)));
        console.log(result[1].user_id);
        let user_ids = result[1].user_id;

        const updateuseraddresses = `UPDATE user_addresses c SET 
          address_type = '${(!address_type ? 'null' : address_type)}',
          address_name = '${(!address_name ? 'null' : address_name)}',
          Address = '${(!Address ? 'null' : Address)}',
          Apartment = '${(!Apartment ? 'null' : Apartment)}',
          District = '${(!District ? 'null' : District)}',
          City = '${(!City ? 'null' : City)}',
          County = '${(!County ? 'null' : County)}', 
          State = '${(!State ? 'null' : State)}', 
          AreasOfInterest = '${!AreasOfInterest ? 'null' : AreasOfInterest}', 
          AdministrativeArea = '${(!AdministrativeArea ? 'null' : AdministrativeArea)}',
          SubAdministrativeArea = '${(!SubAdministrativeArea ? 'null' : SubAdministrativeArea)}',
          SubLocality = '${(!SubLocality ? 'null' : SubLocality)}',
          SubThoroughfare = '${(!SubThoroughfare ? 'null' : SubThoroughfare)}',
          Thoroughfare = '${(!Thoroughfare ? 'null' : Thoroughfare)}',
          Locality = '${(!Locality ? 'null' : Locality)}',
          Latitude = '${(!Latitude ? 'null' : Latitude)}',
          Longtitude = '${(!Longtitude ? 'null' : Longtitude)}',
          PostalCode = '${(!PostalCode ? 'null' : PostalCode)}',
          CountryCode = '${(!CountryCode ? 'null' : CountryCode)}',
          CountryName = '${(!CountryName ? 'null' : CountryName)}',
          LocationRating = ${(isNaN(Number(LocationRating)) ? 0 : Number(LocationRating))},
          Is_Instant_Confirmation_Enabled = ${(isNaN(Number(Is_Instant_Confirmation_Enabled)) ? 0 : Number(Is_Instant_Confirmation_Enabled))},
          Is_Default_Address = ${(isNaN(Number(Is_Default_Address)) ? 0 : Number(Is_Default_Address))},
          modified_datetime = NOW(),
          modified_by = '${param.userid}',
          next_invoice_number = ${(isNaN(Number(next_invoice_number)) ? 0 : Number(next_invoice_number))}
          WHERE user_id = '${user_ids}'`

          mySqlConnection.adminDataAccess(updateuseraddresses, callback)
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Source of Sales"));
  }
}

//Sale By Quarter
function salesByQuarterInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {

      qry = `SELECT date_format(s.sale_date,'%M %Y') AS QUARTERS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY QUARTER(s.sale_date)
      ORDER BY s.sale_date ASC`;
      
    } else if (locations.length === 0) {

      qry = `SELECT date_format(s.sale_date,'%M %Y') AS QUARTERS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.source_of_salesid IN (` + selSourceofSales + `)
      GROUP BY QUARTER(s.sale_date)
      ORDER BY s.sale_date ASC`;

    } else if (source_of_sales.length === 0) {

      qry = `SELECT date_format(s.sale_date,'%M %Y') AS QUARTERS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `)
      GROUP BY QUARTER(s.sale_date)
      ORDER BY s.sale_date ASC`;
      
    } else {

      qry = `SELECT date_format(s.sale_date,'%M %Y') AS QUARTERS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales + `)
      GROUP BY QUARTER(s.sale_date)
      ORDER BY s.sale_date ASC`;

    }

    let salesbyquarter = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        let month, year, quarternym;

        // salesbyquarter = dataResponseObject.results;

        dataResponseObject.results.forEach(function (p) {
          var arr = p.QUARTERS.split(" ");
          month = arr[0];
          year = arr[1];

          if ((month === "January") || (month === "February") || (month === "March")) {
            quarternym = "1st quarter " + year;
          } else if ((month === "April") || (month === "May") || (month === "June")) {
            quarternym = "2nd quarter " + year;
          } else if ((month === "July") || (month === "August") || (month === "September")) {
            quarternym = "3rd quarter " + year;
          } else {
            quarternym = "4th quarter " + year;
          }

          salesbyquarter.push({"QUARTERS":quarternym, "SalesQty":p.SaleQty, "GrossTotal": p.GrossTotal, "Discounts": p.Discounts, "Refund": p.Refund, "NetSales": p.NetSales, "Tax": p.Tax, "TotalSales": p.TotalSales})
        });


        var resp = createDataResponseObject(null, salesbyquarter);
      }
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Quarter Reports"));
  }
}

//Sale By Hour of Day
function salesByHourOfDayInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {

      qry = `SELECT date_format(s.created_datetime,'%l:%i %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(sp.received_amount) AS TotalSales, SUM(sp.received_amount) AS AveSales, '100%' AS SalesPercentage
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY HOUR(s.created_datetime)      
      ORDER BY s.sale_date ASC`;
      
    } else if (locations.length === 0) {

      qry = `SELECT date_format(s.created_datetime,'%l:%i %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(sp.received_amount) AS TotalSales, SUM(sp.received_amount) AS AveSales, '100%' AS SalesPercentage
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `)
      GROUP BY HOUR(s.created_datetime)      
      ORDER BY s.sale_date ASC`;

    } else if (teammember.length === 0) {

      qry = `SELECT date_format(s.created_datetime,'%l:%i %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(sp.received_amount) AS TotalSales, SUM(sp.received_amount) AS AveSales, '100%' AS SalesPercentage
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) 
      GROUP BY HOUR(s.created_datetime)      
      ORDER BY s.sale_date ASC`;
      
    } else {

      qry = `SELECT date_format(s.created_datetime,'%l:%i %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(sp.received_amount) AS TotalSales, SUM(sp.received_amount) AS AveSales, '100%' AS SalesPercentage
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      si.staff_id IN (` + selStaff+ `)
      GROUP BY HOUR(s.created_datetime)      
      ORDER BY s.sale_date ASC`;

    }

    let salesbyhourofday = [];
    const dayslist = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        // salesbyhourofday = dataResponseObject.results;

        let hour, minapmpm, hours;

        dataResponseObject.results.forEach(function (p) {
          var arr = p.HOURS.split(":");
          hour = arr[0];
          minapmpm = arr[1].split(" ");
          hours = arr[0] + ":00 " + minapmpm[1];

          salesbyhourofday.push({"HOURS":hours, "SaleQty":p.SaleQty, "TotalSales": p.TotalSales, "AveSales": p.AveSales, "SalesPercentage": p.SalesPercentage})
        });

        var resp = createDataResponseObject(null, salesbyhourofday);
      }
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Day
function salesByDayInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {

      qry = `SELECT date_format(s.sale_date,'%e %M %Y, %W') AS DAYs, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY DAY(s.sale_date)
      ORDER BY s.sale_date ASC`;
      
    } else if (locations.length === 0) {

      qry = `SELECT date_format(s.sale_date,'%e %M %Y, %W') AS DAYs, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY DAY(s.sale_date)
      ORDER BY s.sale_date ASC`;

    } else if (source_of_sales.length === 0) {

      qry = `SELECT date_format(s.sale_date,'%e %M %Y, %W') AS DAYs, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) 
      GROUP BY DAY(s.sale_date)
      ORDER BY s.sale_date ASC`;
      
    } else {

      qry = `SELECT date_format(s.sale_date,'%e %M %Y, %W') AS DAYs, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY DAY(s.sale_date)
      ORDER BY s.sale_date ASC`;

    }

    let salesbyday = [];
    const dayslist = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        // salesbyday = dataResponseObject.results;

        var date1 = new Date(start_date);
        var date2 = new Date(end_date);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
        console.log(diffDays)

        let numdayscnt = 0;
        let daynym;

        dataResponseObject.results.forEach(function (p) {
          while (numdayscnt <= diffDays) {

            var dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            
            var result = new Date(date1.valueOf());
            result.setDate(result.getDate() + (numdayscnt));
  
            daynym = result.getDate() + " " + monthNames[result.getMonth()] + " " + result.getFullYear() + ", " + dayNames[result.getDay()];
            
            console.log(p.DAYs + " = " + daynym);
            if (p.DAYs === daynym){
              salesbyday.push({"DAYS":daynym, "SalesQty":p.SaleQty, "GrossTotal": p.GrossTotal, "Discounts": p.Discounts, "Refund": p.Refund, "NetSales": p.NetSales, "Tax": p.Tax, "TotalSales": p.TotalSales})
              //console.log(daynym);
              numdayscnt = numdayscnt += 1;
              break;
            } else {
              salesbyday.push({"DAYS":daynym, "SalesQty":0, "GrossTotal": 0, "Discounts": 0, "Refund": 0, "NetSales": 0, "Tax": 0, "TotalSales": 0})
              //console.log(daynym);
              numdayscnt = numdayscnt += 1;
            }
            //console.log(numdayscnt);
          }
        })

        var resp = createDataResponseObject(null, salesbyday);
      }
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Months
function salesByMonthInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {

      qry = `SELECT date_format(s.created_datetime,'%M %Y') AS MONTHS, t.LocationName, invoice_number, si.item_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY MONTH(s.created_datetime)
      ORDER BY MONTH(s.created_datetime) ASC`;
      
    } else if (locations.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%M %Y') AS MONTHS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY MONTH(s.created_datetime)
      ORDER BY MONTH(s.created_datetime) ASC`;
    } else if (source_of_sales.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%M %Y') AS MONTHS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) 
      GROUP BY MONTH(s.created_datetime)
      ORDER BY MONTH(s.created_datetime) ASC`;
    } else {
      qry = `SELECT date_format(s.created_datetime,'%M %Y') AS MONTHS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY MONTH(s.created_datetime)
      ORDER BY MONTH(s.created_datetime) ASC`;
    }

    let salesbymonths = [];
    const monthlist = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let startdate = new Date(start_date);
        let enddate = new Date(end_date);
    
        let monthnum;
        let newyear, monthsyear;
        let num = 0;
    
        let start = months[startdate.getMonth()] + " " + startdate.getFullYear();
        let end = months[enddate.getMonth()] + " " + enddate.getFullYear();

        monthnum = startdate.getMonth();
        newyear = startdate.getFullYear();

        while (start != end) {
          if (monthsyear === end) {
            break;
          } 
          
          monthsyear = months[monthnum] + " " + newyear;
          if (monthnum >= 11) {
              monthnum = 0;
              newyear = newyear + 1;
          } else {
              monthnum++;
          }
          monthlist.push({monthsyear});
        }
        let bolean;
        monthlist.forEach(function (p) {
          dataResponseObject.results.forEach(function (s) {
            if (s.MONTHS === p.monthsyear) {
              salesbymonths.push({"Months":p.monthsyear, "SalesQty":s.SaleQty, "GrossTotal": s.GrossTotal, "Discounts": s.Discounts, "Refund": s.Refund, "NetSales": s.NetSales, "Tax": s.Tax, "TotalSales": s.TotalSales})
            } else {
              bolean = p.monthsyear;
            }
          })
          if (bolean === p.monthsyear) {
            salesbymonths.push({"Months":p.monthsyear, "SalesQty":0, "GrossTotal": 0, "Discounts": 0, "Refund": 0, "NetSales": 0, "Tax": 0, "TotalSales": 0})
          }
        });
        var resp = createDataResponseObject(null, salesbymonths);
      }
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Logs
function salesByLogsInDB(param, start_date, end_date, locations, teammember, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!teammember) {
      selStaff = "''";
    }
    else {

      if (teammember.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + teammember[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0) && (source_of_sales.length === 0)) {

      qry = `SELECT date_format(s.created_datetime,'%d %M %Y, %h:%i %p') AS YEARS, t.LocationName, invoice_number, si.item_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;

    } else if ((teammember.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT date_format(s.created_datetime,'%d %M %Y, %h:%i %p') AS YEARS, t.LocationName, invoice_number, si.item_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `)
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    } else if ((locations.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT date_format(s.created_datetime,'%d %M %Y, %h:%i %p') AS YEARS, t.LocationName, invoice_number, si.item_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      si.staff_id IN (` + selStaff + `)
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    } else if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT date_format(s.created_datetime,'%d %M %Y, %h:%i %p') AS YEARS, t.LocationName, invoice_number, si.item_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales 
      FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.source_of_salesid IN (` + selSourceofSales + `)
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    } else if (locations.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    } else if (teammember.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    }  else if (source_of_sales.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      si.staff_id IN (` + selStaff + `) 
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    } else {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      si.staff_id IN (` + selStaff + `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY si.sale_item_id
      ORDER BY s.invoice_number DESC`;
    }

    let salesbyhours = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbyhours = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbyhours);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Year
function salesByYearInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY YEAR(s.created_datetime)
      ORDER BY YEAR(s.created_datetime) ASC`;
    }  else if (source_of_sales.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `)
      GROUP BY YEAR(s.created_datetime)
      ORDER BY YEAR(s.created_datetime) ASC`;
    } else if (locations.length === 0) {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY YEAR(s.created_datetime)
      ORDER BY YEAR(s.created_datetime) ASC`;
    } else {
      qry = `SELECT date_format(s.created_datetime,'%Y') AS YEARS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY YEAR(s.created_datetime)
      ORDER BY YEAR(s.created_datetime) ASC`;
    }

    let salesbyyears = [];

    let startdate = new Date(start_date);
    let enddate = new Date(end_date);
    let value = startdate.getFullYear();
    let value1 = enddate.getFullYear();

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        //salesbyyears = dataResponseObject.results;
        // dataResponseObject.results.forEach(function (p) {
        //   salesbyyears.push(pShippCour)
        // })

        while (value <= value1) {
          dataResponseObject.results.forEach(function (p) {
            if (value === parseInt(p.YEARS)){
              salesbyyears.push({"Years":value, "SalesQty":p.SaleQty, "GrossTotal": p.GrossTotal, "Discounts": p.Discounts, "Refund": p.Refund, "NetSales": p.NetSales, "Tax": p.Tax, "TotalSales": p.TotalSales})
            } else {
              salesbyyears.push({"Years":value, "SalesQty": 0.00, "GrossTotal": 0.00, "Discounts": 0.00, "Refund": 0.00, "NetSales": 0.00, "Tax": 0.00, "TotalSales": 0.00})
            }
          })
          value = value += 1;
        }
      }

      var resp = createDataResponseObject(null, salesbyyears);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sales By Staff Member Breakdown
function salesByMemberBreakdownInDB(param, start_date, end_date, locations, teammember, channels, itemtype, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selTeamMember = "";
    if (!teammember) {
      selTeamMember = "''";
    }
    else {

      if (teammember.length === 0) {
        selTeamMember = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selTeamMember == "") {
            selTeamMember += "'" + teammember[i].staff_id + "'";
          }
          else {
            selTeamMember += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }

    var selChannels = "";
    if (!channels) {
      selChannels = "''";
    }
    else {

      if (channels.length === 0) {
        selChannels = "''";
      } else {
        for (let i = 0; i < channels.length; i++) {
          if (selChannels == "") {
            selChannels += "'" + channels[i].source_of_salesid + "'";
          }
          else {
            selChannels += ",'" + channels[i].source_of_salesid + "'";
          }
        }
      }
    }

    var selItemType = "";
    if (!itemtype) {
      selItemType = "''";
    }
    else {

      if (itemtype.length === 0) {
        selItemType = "''";
      } else {
        for (let i = 0; i < itemtype.length; i++) {
          if (selItemType == "") {
            selItemType += "'" + itemtype[i].item_type + "'";
          }
          else {
            selItemType += ",'" + itemtype[i].item_type + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0) && (channels.length === 0) && (itemtype.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((teammember.length === 0) && (channels.length === 0) && (itemtype.length === 0)) {
      console.log(selLocation + "BOB");
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((locations.length === 0) && (channels.length === 0) && (itemtype.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selStaff+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((locations.length === 0) && (teammember.length === 0) && (itemtype.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.source_of_salesid IN (` + selChannels+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    }  else if ((locations.length === 0) && (teammember.length === 0) && (channels.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    }else if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.source_of_salesid IN (` + selChannels + `) AND 
      s.item_type IN (` + selItemType + `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((locations.length === 0) && (channels.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selTeamMember+ `) AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((locations.length === 0) && (itemtype.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selTeamMember+ `) AND 
      ss.source_of_salesid IN (` + selChannels+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((teammember.length === 0) && (channels.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((teammember.length === 0) && (itemtype.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      ss.source_of_salesid IN (` + selChannels+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if ((channels.length === 0) && (itemtype.length === 0)) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      s.staff_id IN (` + selTeamMember+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if (locations.length === 0) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.staff_id IN (` + selTeamMember+ `) AND 
      ss.source_of_salesid IN (` + selChannels+ `) AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if (teammember.length === 0) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      ss.source_of_salesid IN (` + selChannels+ `) AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if (channels.length === 0) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      s.staff_id IN (` + selTeamMember+ `) AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else if (itemtype.length === 0) {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      s.staff_id IN (` + selTeamMember+ `) AND 
      ss.source_of_salesid IN (` + selChannels+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    } else {
      qry = `SELECT s.sale_id, s.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember,
      coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) AS Services,
      coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0) AS Products,
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) AS TotalSales,
      coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) AS Vouchers,
      coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0) AS Memberships,
      ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0))) AS Total,
      SUM(s.quantity) AS ItemSold, ((coalesce(SUM(case when s.item_type='Vouchers' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Memberships' then s.net_price end), 0)) +
      (coalesce(SUM(case when s.item_type='Services' then s.net_price end), 0) + coalesce(SUM(case when s.item_type='Products' then s.net_price end), 0)) / SUM(s.quantity)) AS AvgItemPrice
      FROM sale_items s
      LEFT JOIN staffs st ON s.staff_id = st.StaffID
      LEFT JOIN sales ss ON s.sale_id = ss.sale_id 
      WHERE (ss.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      ss.location_id IN (` + selLocation+ `) AND 
      s.staff_id IN (` + selTeamMember+ `) AND 
      ss.source_of_salesid IN (` + selChannels+ `) AND 
      s.item_type IN (` + selItemType+ `) 
      GROUP BY s.staff_id
      ORDER BY st.LastName DESC`;
    }

    let salesbymemberbreakdown = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbymemberbreakdown = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbymemberbreakdown);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Staff Member Reports"));
  }
}

//Sales By Staff Member
function salesByStaffMembersInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selTeamMember = "";
    if (!teammember) {
      selTeamMember = "''";
    }
    else {

      if (teammember.length === 0) {
        selTeamMember = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selTeamMember == "") {
            selTeamMember += "'" + teammember[i].staff_id + "'";
          }
          else {
            selTeamMember += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    } else if (locations.length === 0) {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selTeamMember+ `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    } else if (teammember.length === 0) {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation+ `)  
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    } else {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation+ `) AND
      si.staff_id IN (` + selTeamMember+ `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    }

    let salesbyteammember = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbyteammember = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbyteammember);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Staff Member Reports"));
  }
}

//Sale By Team Member
function salesByTeamMembersInDB(param, start_date, end_date, locations, teammember, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selTeamMember = "";
    if (!teammember) {
      selTeamMember = "''";
    }
    else {

      if (teammember.length === 0) {
        selTeamMember = "''";
      } else {
        for (let i = 0; i < teammember.length; i++) {
          if (selTeamMember == "") {
            selTeamMember += "'" + teammember[i].staff_id + "'";
          }
          else {
            selTeamMember += ",'" + teammember[i].staff_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (teammember.length === 0)) {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    } else if (locations.length === 0) {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      si.staff_id IN (` + selTeamMember+ `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    } else if (teammember.length === 0) {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation+ `)  
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    } else {
      qry = `SELECT s.sale_id, si.staff_id, CONCAT(st.FirstName, ' ', st.LastName) AS TeamMember, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN staffs st ON si.staff_id = st.StaffID
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation+ `) AND
      si.staff_id IN (` + selTeamMember+ `) 
      GROUP BY si.staff_id
      ORDER BY st.LastName DESC`;
    }

    let salesbyteammember = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbyteammember = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbyteammember);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Channel
function saleByChannelInDB(param, start_date, end_date, locations, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0)) {
      qry = `SELECT s.sale_id, s.source_of_salesid, ss.source_sales, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN source_of_sales ss ON s.source_of_salesid = ss.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.source_of_salesid
      ORDER BY ss.source_sales ASC`;
    } else {
      qry = `SELECT s.sale_id, s.source_of_salesid, ss.source_sales, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      LEFT JOIN source_of_sales ss ON s.source_of_salesid = ss.source_of_salesid
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation+ `) 
      GROUP BY s.source_of_salesid
      ORDER BY ss.source_sales ASC`;
    }

    let salesbychannel = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbychannel = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbychannel);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Customers
function saleByCustomersInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT s.sale_id, s.customer_id, s.customer_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.customer_id
      ORDER BY s.customer_name ASC`;
    }  else if (source_of_sales.length === 0) {
      qry = `SELECT s.sale_id, s.customer_id, s.customer_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `)
      GROUP BY s.customer_id
      ORDER BY s.customer_name ASC`;
    } else if (locations.length === 0) {
      qry = `SELECT s.sale_id, s.customer_id, s.customer_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.customer_id
      ORDER BY s.customer_name ASC`;
    } else {
      qry = `SELECT s.sale_id, s.customer_id, s.customer_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.customer_id
      ORDER BY s.customer_name ASC`;
    }

    let salesbycustomers = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbycustomers = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbycustomers);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Customers Reports"));
  }
}

//Sale By Hour
function saleByHoursInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT s.sale_id, date_format(s.created_datetime,'%Y-%m-%d %h:%i:%s - %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY HOUR(s.created_datetime)
      ORDER BY s.created_datetime ASC`;
    }  else if (source_of_sales.length === 0) {
      qry = `SELECT s.sale_id, date_format(s.created_datetime,'%Y-%m-%d %h:%i:%s - %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `)
      GROUP BY HOUR(s.created_datetime)
      ORDER BY s.created_datetime ASC`;
    } else if (locations.length === 0) {
      qry = `SELECT s.sale_id, date_format(s.created_datetime,'%Y-%m-%d %h:%i:%s - %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY HOUR(s.created_datetime)
      ORDER BY s.created_datetime ASC`;
    } else {
      qry = `SELECT s.sale_id, date_format(s.created_datetime,'%Y-%m-%d %h:%i:%s - %p') AS HOURS, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY HOUR(s.created_datetime)
      ORDER BY s.created_datetime ASC`;
    }

    let salesbyhours = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbyhours = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbyhours);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Hours Reports"));
  }
}

//Sale By Locations
function saleByLocationInDB(param, start_date, end_date, locations, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }
    
    let qry = ``
    if ((locations.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT s.sale_id, s.location_id, s.location_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.location_id`;
    } else if (source_of_sales.length === 0) {
      qry = `SELECT s.sale_id, s.location_id, s.location_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `)
      GROUP BY s.location_id`;
    } else if (locations.length === 0) {
      qry = `SELECT s.sale_id, s.location_id, s.location_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.location_id`;
    } else {
      qry = `SELECT s.sale_id, s.location_id, s.location_name, SUM(si.quantity) AS SaleQty,
      SUM(s.total_amount) AS GrossTotal, SUM(s.discount_amount) AS Discounts,
      SUM(CASE WHEN sp.received_amount<0 THEN sp.received_amount ELSE 0 END) as Refund,
      SUM(sp.received_amount) AS NetSales, SUM(si.tax_amount) AS Tax, SUM(sp.received_amount) AS TotalSales FROM sales s
      LEFT JOIN sale_items si ON si.sale_id = s.sale_id
      LEFT JOIN sale_payments sp ON sp.sale_id = s.sale_id
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.location_id IN (` + selLocation+ `) AND 
      s.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.location_id`;
    }

    let salesbyvouchers = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbyvouchers = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbyvouchers);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Locations Reports"));
  }
}

// Sales By Item
function SalesByItemInDB(param, start_date, end_date, locations, staffs, source_of_sales, callback){
  try {

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selStaff = "";
    if (!staffs) {
      selStaff = "''";
    }
    else {

      if (staffs.length === 0) {
        selStaff = "''";
      } else {
        for (let i = 0; i < staffs.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + staffs[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + staffs[i].staff_id + "'";
          }
        }
      }
    }

    var selSourceofSales = "";
    if (!source_of_sales) {
      selSourceofSales = "''";
    }
    else {

      if (source_of_sales.length === 0) {
        selSourceofSales = "''";
      } else {
        for (let i = 0; i < source_of_sales.length; i++) {
          if (selSourceofSales == "") {
            selSourceofSales += "'" + source_of_sales[i].source_of_salesid + "'";
          }
          else {
            selSourceofSales += ",'" + source_of_sales[i].source_of_salesid + "'";
          }
        }
      }
    }

    let qry = ``
    if ((locations.length === 0) && (staffs.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') 
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else if ((locations.length === 0) && (staffs.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      sl.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else if ((locations.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.staff_id IN (` + selStaff+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else if ((staffs.length === 0) && (source_of_sales.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      sl.location_id IN (` + selLocation+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else if ((staffs.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      sl.location_id IN (` + selLocation+ `) AND 
      sl.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else if ((locations.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.staff_id IN (` + selStaff+ `) AND 
      sl.source_of_salesid IN (` + selSourceofSales+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else if ((source_of_sales.length === 0)) {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      s.staff_id IN (` + selStaff+ `) AND 
      sl.location_id IN (` + selLocation+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    } else {
      qry = `SELECT s.sale_item_id, s.sale_id, s.item_id, s.item_name, s.item_type,
      SUM(s.quantity) AS Item_Sold,
      SUM(s.net_price) AS Gross_Sales, SUM(s.discount) AS Discount, SUM(0.000000) AS Refund,
      SUM(s.net_price) AS Net_Sales, SUM(s.tax_amount) AS Tax, SUM(s.net_price) AS Total_Sales
      FROM sale_items s
      LEFT JOIN sales sl ON s.sale_id = sl.sale_id
      WHERE (sl.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
      sl.source_of_salesid IN (` + selSourceofSales+ `) AND
      sl.location_id IN (` + selLocation+ `) AND
      s.staff_id IN (` + selStaff+ `)
      GROUP BY s.item_id
      ORDER BY s.item_name ASC`;
    }

    let salesbyitem = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        salesbyitem = dataResponseObject.results;
        
      }

      var resp = createDataResponseObject(null, salesbyitem);
      callback(resp);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales by Item Reports"));
  }
}

// Sales Mode of Payment Reports
function SalesByShippingCourierInDB(param, start_date, end_date, locations, shippingcourier, callback) {
  try {
      //create query using the data in the req.body to register the user in the db

      var selLocation = "";
      if (!locations) {
        selLocation = "''";
      }
      else {
  
        if (locations.length === 0) {
          selLocation = "''";
        } else {
          for (let i = 0; i < locations.length; i++) {
            if (selLocation == "") {
              selLocation += "'" + locations[i].location_id + "'";
            }
            else {
              selLocation += ",'" + locations[i].location_id + "'";
            }
          }
        }
      }

      var selShippingCourier = "";
      if (!shippingcourier) {
        selShippingCourier = "''";
      }
      else {
  
        if (shippingcourier.length === 0) {
          selShippingCourier = "''";
        } else {
          for (let i = 0; i < shippingcourier.length; i++) {
            if (selShippingCourier == "") {
              selShippingCourier += "'" + shippingcourier[i].shipping_courier_id + "'";
            }
            else {
              selShippingCourier += ",'" + shippingcourier[i].shipping_courier_id + "'";
            }
          }
        }
      }

      let qry = ``, qry1 = ``;

      if ((locations.length === 0) && (shippingcourier.length === 0)) {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, sc.shipping_courier, COUNT(s.shipping_courier_id) AS Transactions,
        SUM(shipping_fee) AS Amount FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
        GROUP BY s.location_id, s.shipping_courier_id
        ORDER BY sc.shipping_courier ASC`;

      } else if (locations.length === 0) {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.shipping_courier_id IN(` + selShippingCourier + `)
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, sc.shipping_courier, COUNT(s.shipping_courier_id) AS Transactions,
        SUM(shipping_fee) AS Amount FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.shipping_courier_id IN(` + selShippingCourier + `)
        GROUP BY s.location_id, s.shipping_courier_id
        ORDER BY sc.shipping_courier ASC`;

      } else if(shippingcourier.length === 0) {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `)
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, sc.shipping_courier, COUNT(s.shipping_courier_id) AS Transactions,
        SUM(shipping_fee) AS Amount FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `)
        GROUP BY s.location_id, s.shipping_courier_id
        ORDER BY sc.shipping_courier ASC`;

      } else {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `) AND 
        s.shipping_courier_id IN(` + selShippingCourier + `)
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, sc.shipping_courier, COUNT(s.shipping_courier_id) AS Transactions,
        SUM(shipping_fee) AS Amount FROM sales s
        LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `) AND 
        s.shipping_courier_id IN(` + selShippingCourier + `)
        GROUP BY s.location_id, s.shipping_courier_id
        ORDER BY sc.shipping_courier ASC`;

      }

    logger.info('SalesByShippingCourierInDB query is: ', qry);

    const salesbyshippingcourier = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        dataResponseObject.results.forEach(function (p) {
          const pShippCour = {
            "Location_Name": p.LocationName,
            ShippingCourier: []
          }
          salesbyshippingcourier.push(pShippCour)
        })

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

          salesbyshippingcourier.forEach(function (p) {
            dataResponseObject.results.forEach(function (s) {
              if (s.LocationName === p.Location_Name) {

                p.ShippingCourier.push({
                  "ShippingCourier": s.shipping_courier,
                  "Transactions": s.Transactions,
                  "Amount": s.Amount
                })
              }
            })
          });

          var resp = createDataResponseObject(null, salesbyshippingcourier);
          callback(resp);
        })
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales Shipping Courier Reports"));
  }
}

// Sales by Category Reports
function SalesByProductCategoryInDB(param, start_date, end_date, locations, categories, callback) {
  try {
      //create query using the data in the req.body to register the user in the db

      var selLocation = "";
      if (!locations) {
        selLocation = "''";
      }
      else {
  
        if (locations.length === 0) {
          selLocation = "''";
        } else {
          for (let i = 0; i < locations.length; i++) {
            if (selLocation == "") {
              selLocation += "'" + locations[i].location_id + "'";
            }
            else {
              selLocation += ",'" + locations[i].location_id + "'";
            }
          }
        }
      }

      var selcategory = "";
      if (!categories) {
        selcategory = "''";
      }
      else {
  
        if (categories.length === 0) {
          selcategory = "''";
        } else {
          for (let i = 0; i < categories.length; i++) {
            if (selcategory == "") {
              selcategory += "'" + categories[i].category_id + "'";
            }
            else {
              selcategory += ",'" + categories[i].category_id + "'";
            }
          }
        }
      }

      let qry = ``, qry1 = ``;

      if ((locations.length === 0) && (categories.length === 0)) {

        qry = `SELECT p.product_category, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
          GROUP BY p.product_category
          ORDER BY p.product_category ASC`

        qry1 = `SELECT p.product_category, p.product_subcategory, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
          GROUP BY p.product_subcategory
          ORDER BY p.product_category ASC`;
      } else if (locations.length === 0) {
        qry = `SELECT p.product_category, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          p.product_category IN (` + selcategory + `)
          GROUP BY p.product_category
          ORDER BY p.product_category ASC`

        qry1 = `SELECT p.product_category, p.product_subcategory, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          p.product_category IN (` + selcategory + `)
          GROUP BY p.product_subcategory
          ORDER BY p.product_category ASC`;
      } else if(categories.length === 0) {
        qry = `SELECT p.product_category, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          s.location_id IN (` + selLocation + `)
          GROUP BY p.product_category
          ORDER BY p.product_category ASC`

        qry1 = `SELECT p.product_category, p.product_subcategory, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          s.location_id IN (` + selLocation + `)
          GROUP BY p.product_subcategory
          ORDER BY p.product_category ASC`;
      } else {
        qry = `SELECT p.product_category, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          s.location_id IN (` + selLocation + `) AND 
          p.product_category IN (` + selcategory + `)
          GROUP BY p.product_category
          ORDER BY p.product_category ASC`

        qry1 = `SELECT p.product_category, p.product_subcategory, SUM(si.net_price) AS Sold_Amount FROM products p
          JOIN sale_items si ON si.item_id = p.product_id
          JOIN sales s ON s.sale_id = si.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          s.location_id IN (` + selLocation + `) AND 
          p.product_category IN (` + selcategory + `)
          GROUP BY p.product_subcategory
          ORDER BY p.product_category ASC`;
      }

      logger.info('dailysalesreport query is: ', qry);

      const salesbycategory = [];

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
  
        if(dataResponseObject.error){
          callback(dataResponseObject);
  
        } else{
  
          dataResponseObject.results.forEach(function (p) {
            const pCat = {
              "Product_Category": p.product_category,
              "Sold_Amount": p.Sold_Amount,
               SubCategory: []
            }
            salesbycategory.push(pCat)
          })

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

            salesbycategory.forEach(function (p) {

              dataResponseObject.results.forEach(function (s) {

                if (s.product_category === p.Product_Category) {

                  p.SubCategory.push({
                    "Subcategory": s.product_subcategory,
                    "Sold_Amount": s.Sold_Amount
                  });
                }
              })
            });

            var resp = createDataResponseObject(null, salesbycategory);
            callback(resp);
          })
        }
      });

  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales By Category Reports"));
  }
}

// Sales Mode of Payment Reports
function SalesByPaymentTypeInDB(param, start_date, end_date, locations, paymenttype, callback) {
  try {
      //create query using the data in the req.body to register the user in the db

      var selLocation = "";
      if (!locations) {
        selLocation = "''";
      }
      else {
  
        if (locations.length === 0) {
          selLocation = "''";
        } else {
          for (let i = 0; i < locations.length; i++) {
            if (selLocation == "") {
              selLocation += "'" + locations[i].location_id + "'";
            }
            else {
              selLocation += ",'" + locations[i].location_id + "'";
            }
          }
        }
      }

      var selPaymentType = "";
      if (!paymenttype) {
        selPaymentType = "''";
      }
      else {
  
        if (paymenttype.length === 0) {
          selPaymentType = "''";
        } else {
          for (let i = 0; i < paymenttype.length; i++) {
            if (selPaymentType == "") {
              selPaymentType += "'" + paymenttype[i].payment_type_id + "'";
            }
            else {
              selPaymentType += ",'" + paymenttype[i].payment_type_id + "'";
            }
          }
        }
      }

      let qry = ``, qry1 = ``;

      if ((locations.length === 0) && (paymenttype.length === 0)) {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, pt.payment_type_name, COUNT(s.sale_id) AS Counts, SUM(s.total_amount) AS Amount FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
        GROUP BY pt.payment_typeid
        ORDER BY pt.payment_type_name ASC`;

      } else if (locations.length === 0) {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        sp.payment_type_id IN(` + selPaymentType + `)
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, pt.payment_type_name, COUNT(s.sale_id) AS Counts, SUM(s.total_amount) AS Amount FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        sp.payment_type_id IN(` + selPaymentType + `)
        GROUP BY pt.payment_typeid
        ORDER BY pt.payment_type_name ASC`;

      } else if(paymenttype.length === 0) {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `)
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, pt.payment_type_name, COUNT(s.sale_id) AS Counts, SUM(s.total_amount) AS Amount FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `)
        GROUP BY pt.payment_typeid
        ORDER BY pt.payment_type_name ASC`;

      } else {

        qry = `SELECT t.LocationName FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `) AND sp.payment_type_id IN(` + selPaymentType + `)
        GROUP BY s.location_id
        ORDER BY t.LocationName ASC`;

        qry1 = `SELECT t.LocationName, pt.payment_type_name, COUNT(s.sale_id) AS Counts, SUM(s.total_amount) AS Amount FROM sales s
        LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
        LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
        LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
        s.location_id IN(` + selLocation + `) AND sp.payment_type_id IN(` + selPaymentType + `)
        GROUP BY pt.payment_typeid
        ORDER BY pt.payment_type_name ASC`;

      }

    logger.info('SalesModeofPaymentReportInDB query is: ', qry);

    const salesbypaymenttype = [];

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        dataResponseObject.results.forEach(function (p) {
          const pPatType = {
            "Location_Name": p.LocationName,
            PaymentType: []
          }
          salesbypaymenttype.push(pPatType)
        })

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

          salesbypaymenttype.forEach(function (p) {
            dataResponseObject.results.forEach(function (s) {
              if (s.LocationName === p.Location_Name) {

                p.PaymentType.push({
                  "Payment_Type": s.payment_type_name,
                  "Count": s.Counts,
                  "Amount": s.Amount
                })
              }
            })
          });

          var resp = createDataResponseObject(null, salesbypaymenttype);
          callback(resp);
        })
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Sales Mode of Payment Reports"));
  }
}

// Source of Sales
function createSourceofSalesInDB(param, source_sales, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const createsourceofsales = `INSERT INTO source_of_sales (source_sales, created_by) 
        VALUES ('${source_sales}', '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createsourceofsales, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Source of Sales"));
  }
}

function updateSourceofSalesInDB(param, source_of_salesid, source_sales, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const updatesourceofsales = `UPDATE source_of_sales p SET 
        source_sales = '${source_sales}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE source_of_salesid = '${source_of_salesid}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatesourceofsales, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Source of Sales"));
  }
}

function deleteSourceofSalesInDB(param, source_of_salesid, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const deletesourceofsales = `DELETE FROM source_of_sales WHERE source_of_salesid = '${source_of_salesid}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletesourceofsales, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Source of Sales"));
  }
}

function getSourceofSalesInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM source_of_sales ORDER BY source_sales ASC`;

    logger.info('getSourceofSalesInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Source of Sales"));
  }
}

// Users Profile
function createUserProfileInDB(param, first_name, last_name, mobile_number, email_address, password, profile_image, callback){

  try {

    const registerUserQuery = `INSERT INTO users (username, user_password, active, mobilenumber, emailaddress, created_by, lastname, firstname) 
    VALUES ('${email_address}', SHA('${password}'), 1, '${mobile_number}', '${email_address}', '${param.userid}', '${first_name}', '${last_name}')`

    logger.info('registerUserInDB query is: ', registerUserQuery);

    mySqlConnection.adminDataAccess(registerUserQuery, function (res) {

      const getUserID = `SELECT user_id FROM users WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

      mySqlConnection.adminDataAccess(getUserID, function (res) {

        var useridInfo = res.results[0];

          //create query using the data in the req.body to create the product in the db
          const createuserprofile = `INSERT INTO staffs (user_id, FirstName, LastName, Email, MobileNumber, PhotoFilePath, created_by) 
          VALUES ('${useridInfo.user_id}', '${first_name}', '${last_name}', '${email_address}', '${mobile_number}', '${profile_image}', '${param.userid}')`

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createuserprofile, [], function (res){

          const insertenantuser = `INSERT INTO tenantusers (tenant_id, user_id) 
          VALUES ('${param.tenantid}', (SELECT user_id FROM users WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1))`

          mySqlConnection.adminDataAccess(insertenantuser, callback)
        });
      });
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Users Profile"));
  }
}

function updateUserProfileInDB(param, StaffID, first_name, last_name, mobile_number, email_address, profile_image, callback){

  try {
      //create query using the data in the req.body to create the product in the db

      const updateStaffQuery = `UPDATE staffs c SET 
        FirstName = '${first_name}', 
        LastName = '${last_name}', 
        Email = '${email_address}',
        MobileNumber = '${mobile_number}',
        PhotoFilePath = '${profile_image}',
        Mofified_By = '${param.userid}',
        Modified_DateTime = NOW()
        WHERE user_id = '${param.userid}'`
  
      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateStaffQuery, [], function (res) {
  
          const updateUserQuery = `UPDATE users c SET 
          username = '${email_address}', 
          mobilenumber = '${mobile_number}',
          emailaddress = '${email_address}',
          lastname = '${first_name}',
          firstname = '${last_name}',
          modified_datetime = NOW(),
          modified_by = '${param.userid}'
          WHERE user_id = '${param.userid}'`

          mySqlConnection.adminDataAccess(updateUserQuery, callback)
      });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Users Profile"));
  }
}

// Appointment Types
function createAppointmentTypesInDB(param, appointment_types, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const createappointmenttypes = `INSERT INTO appointment_types (appointment_types, created_by) 
        VALUES ('${appointment_types}', '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createappointmenttypes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Appointment Types"));
  }
}

function updateAppointmentTypesInDB(param, appointment_typesid, appointment_types, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const updateappointmenttypes = `UPDATE appointment_types p SET 
        appointment_types = '${appointment_types}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE appointment_typesid = '${appointment_typesid}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateappointmenttypes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Appointment Types"));
  }
}

function deleteAppointmentTypesInDB(param, appointment_typesid, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const deleteappointmenttypes = `DELETE FROM appointment_types WHERE appointment_typesid = '${appointment_typesid}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteappointmenttypes, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Appointment Types"));
  }
}

function getAppointmentTypesInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM appointment_types ORDER BY appointment_types ASC`;

    logger.info('getAppointmentTypesInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Appointment Types"));
  }
}

// Shipping Courier
function createShippingCourierInDB(param, shipping_courier, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const createshippingcourier = `INSERT INTO shipping_couriers (shipping_courier, created_by) 
        VALUES ('${shipping_courier}', '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createshippingcourier, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Shipping Courier"));
  }
}

function updateShippingCourierInDB(param, shipping_courier_id, shipping_courier, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const updateshippingcourier = `UPDATE shipping_couriers p SET 
        shipping_courier = '${shipping_courier}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE shipping_courier_id = '${shipping_courier_id}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateshippingcourier, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Shipping Courier"));
  }
}

function deleteShippingCourierInDB(param, shipping_courier_id, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const deleteshippingcourier = `DELETE FROM shipping_couriers WHERE shipping_courier_id = '${shipping_courier_id}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteshippingcourier, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Shipping Courier"));
  }
}

function getShippingCourierInDB(param, callback) {
  try {
      //create query using the data in the req.body to register the user in the db
    const qry = `SELECT * FROM shipping_couriers ORDER BY shipping_courier ASC`;

    logger.info('getListCommisionInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Shipping Courier"));
  }
}

// Commisions
function getCommisionByIDInDB(param, callback) {

  const querygetcommision = `SELECT CommisionID, EffectiveDate, CommisionCycle FROM commisions 
  WHERE CommisionID = '${param.CommisionID}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetcommision, [], function (dataResponseObject) {

    if (dataResponseObject.error) {
        callback(dataResponseObject);
    }
    else {
      if (!dataResponseObject.results || dataResponseObject.results.length == 0) {
        var resp = createDataResponseObject("Commision transaction not found.", null);
        callback(resp);
      }
      else {
        var commisions = {
          commisionInfo: dataResponseObject.results[0],
          commisionsTypes: []
        };

        const qrycommisiontype = `SELECT CommisionID, CommisionType, FromAmount, ToAmount, CommissionValue, PercentOrAmount FROM commisiondetails 
          WHERE CommisionID = '${param.CommisionID}'`;

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qrycommisiontype, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            commisions.commisionsTypes = dataResponseObject.results;
          }
          var resp = createDataResponseObject(null, commisions);
            callback(resp);
        });
      }
    }
  });
}

function getListCommisionInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT CommisionID, EffectiveDate, CommisionCycle FROM commisions ORDER BY EffectiveDate ASC`;

  logger.info('getListCommisionInDB query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function deleteCommisionInDB(param, CommisionID, callback) {

  try {
      //create query using the data in the req.body to create the product in the db
      const deletecommision = `DELETE FROM commisions WHERE CommisionID = '${CommisionID}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletecommision, [], function (res) {

        const deletecommisiondetails = `DELETE FROM commisiondetails WHERE CommisionID = '${CommisionID}'`;

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletecommisiondetails, [], callback)

      });

  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Commisions"));
  }
}

function updateCommisionInDB(param, CommisionID, EffectiveDate, CommisionCycle, commisions, callback){

  try {

      const updatecommision = `UPDATE commisions p SET 
        EffectiveDate = '${mySQLDate(EffectiveDate)}',
        CommisionCycle = '${CommisionCycle}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE CommisionID = '${CommisionID}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatecommision, [], function (res) {

      const deletecommisiondetails = `DELETE FROM commisiondetails WHERE CommisionID = '${CommisionID}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletecommisiondetails, [], function (res) {

          const sqlcommision = `INSERT INTO commisiondetails (CommisionID, CommisionType, FromAmount, ToAmount, CommissionValue, PercentOrAmount) VALUES?`;
          let values = [];
      
          if (!commisions) {
            callback(dataResponseObject);

          } else {
            for (let i = 0; i < commisions.length; i++) {
              values.push([CommisionID, commisions[i].CommisionType, (isNaN(Number(commisions[i].FromAmount)) ? 0 : Number(commisions[i].FromAmount)), (isNaN(Number(commisions[i].ToAmount)) ? 0 : Number(commisions[i].ToAmount)), (isNaN(Number(commisions[i].CommissionValue)) ? 0 : Number(commisions[i].CommissionValue)), commisions[i].PercentOrAmount])
            }
          }

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlcommision, [values], function (result) {

          const querygetcommision = `SELECT CommisionID, EffectiveDate, CommisionCycle FROM commisions 
            WHERE CommisionID = '${CommisionID}'`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetcommision, [values], function (dataResponseObject) {

            if (dataResponseObject.error) {
                callback(dataResponseObject);
            }
            else {
              if (dataResponseObject.results.length == 0) {
                var resp = createDataResponseObject("Commision transaction not found.", null);
                callback(resp);
              }
              else {
                var commisions = {
                  commisionInfo: dataResponseObject.results,
                  commisionsTypes: []
                };

                const qrycommisiontype = `SELECT CommisionID, CommisionType, FromAmount, ToAmount, CommissionValue, PercentOrAmount FROM commisiondetails 
                  WHERE CommisionID = '${CommisionID}'`;

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qrycommisiontype, [], function (dataResponseObject) {

                  if (dataResponseObject.error) {
                    callback(dataResponseObject);
                  }
                  else {
                    commisions.commisionsTypes = dataResponseObject.results;
                  }
                  var resp = createDataResponseObject(null, commisions);
                    callback(resp);
                });
              }
            }
          });
        });
      });
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Commisions"));
  }
}

function createCommisionInDB(param, EffectiveDate, CommisionCycle, commisions, callback){

  try {

      const createcommision = `INSERT INTO commisions (EffectiveDate, CommisionCycle, created_by) 
        VALUES ('${mySQLDate(EffectiveDate)}', '${CommisionCycle}', '${param.userid}')`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createcommision, [], function (res) {

        const querygetcommisionid = `SELECT CommisionID FROM commisions WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetcommisionid, [], function (res) {

          var commisionidInfo = res.results;
          const commision_idinfo = commisionidInfo.CommisionID;

          console.log(commision_idinfo + ' : Commision ID');

          const sqlcommision = `INSERT INTO commisiondetails (CommisionID, CommisionType, FromAmount, ToAmount, CommissionValue, PercentOrAmount) VALUES?`;
          let values = [];

          if (commisions) {
            for (let i = 0; i < commisions.length; i++) {
              values.push([commision_idinfo, commisions[i].CommisionType, (isNaN(Number(commisions[i].FromAmount)) ? 0 : Number(commisions[i].FromAmount)), (isNaN(Number(commisions[i].ToAmount)) ? 0 : Number(commisions[i].ToAmount)), (isNaN(Number(commisions[i].CommissionValue)) ? 0 : Number(commisions[i].CommissionValue)), commisions[i].PercentOrAmount])
            }
          }

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlcommision, [values], function (result) {

          const querygetcommision = `SELECT CommisionID, EffectiveDate, CommisionCycle FROM commisions 
            WHERE CommisionID = (SELECT CommisionID FROM commisions WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1)`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetcommision, [values], function (dataResponseObject) {

            if (dataResponseObject.error) {
                callback(dataResponseObject);
            }
            else {
              if (dataResponseObject.results.length == 0) {
                var resp = createDataResponseObject("Commision transaction not found.", null);
                callback(resp);
              }
              else {
                var commisions = {
                  commisionInfo: dataResponseObject.results,
                  commisionsTypes: []
                };

                const qrycommisiontype = `SELECT CommisionID, CommisionType, FromAmount, ToAmount, CommissionValue, PercentOrAmount FROM commisiondetails 
                  WHERE CommisionID = (SELECT CommisionID FROM commisions WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1)`;

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qrycommisiontype, [], function (dataResponseObject) {

                  if (dataResponseObject.error) {
                    callback(dataResponseObject);
                  }
                  else {
                    commisions.commisionsTypes = dataResponseObject.results;
                  }
                  var resp = createDataResponseObject(null, commisions);
                    callback(resp);
                });
              }
            }
          });
        });
      });
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Commisions"));
  }
}

function dashboardreport(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

function dailysalesreport(param, start_date, end_date, locations, staffs, shippingcourier, paymenttype, productcategory, callback) {
  try {
    //create query using the data in the req.body to register the user in the db

    var selStaff = "";
    if (!staffs) {
      selStaff = "''";
    }  
    else {
      if (staffs.length === 0) {
        selStaff = "''";
      }
      else {
        for (let i = 0; i < staffs.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + staffs[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + staffs[i].staff_id + "'";
          }
        }
      }
    }

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }
    else {

      if (locations.length === 0) {
        selLocation = "''";
      } else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    var selShippingCourier = "";
    if (!shippingcourier) {
      selShippingCourier = "''";
    }
    else {
      if (shippingcourier.length === 0) {
        selShippingCourier = "''";
      } else {
        for (let i = 0; i < shippingcourier.length; i++) {
          if (selShippingCourier == "") {
            selShippingCourier += "'" + shippingcourier[i].shippingcourier_id + "'";
          }
          else {
            selShippingCourier += ",'" + shippingcourier[i].shippingcourier_id + "'";
          }
        }
      }
    }

    var selPaymentType = "";
    if (!paymenttype) {
      selPaymentType = "''";
    }
    else {
      if (paymenttype.length === 0) {
        selPaymentType = "''";
      } else {
        for (let i = 0; i < paymenttype.length; i++) {
          if (selPaymentType == "") {
            selPaymentType += "'" + paymenttype[i].payment_typeid + "'";
          }
          else {
            selPaymentType += ",'" + paymenttype[i].payment_typeid + "'";
          }
        }
      }
    }

    var selProductCategory = "";
    if(!productcategory) {
      selProductCategory = "''";
    }
    else {
      if (productcategory.length === 0) {
        selProductCategory = "''";
      } else {
        for (let i = 0; i < productcategory.length; i++) {
          if (selProductCategory == "") {
            selProductCategory += "'" + productcategory[i].product_category + "'";
          }
          else {
            selProductCategory += ",'" + productcategory[i].product_category + "'";
          }
        }
      }
    }

    let qry = ``, qyrtip = ``, qrytax = ``, qryshippingfees = ``, qrymemberships = ``, qryvouchers = ``;
    if ((staffs.length === 0) && (locations.length === 0) && (shippingcourier.length === 0)) {

      logger.info('No query is: ', qry);
        qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') 
          GROUP BY si.item_type`;

        qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

    } else if(staffs.length === 0){
        qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          s.location_id IN(` + selLocation + `) AND 
          s.shipping_courier_id IN (` + selShippingCourier + `)
          GROUP BY si.item_type`;

        qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          s.location_id IN(` + selLocation + `) AND 
          s.shipping_courier_id IN (` + selShippingCourier + `)`;

        qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          s.location_id IN(` + selLocation + `) AND 
          s.shipping_courier_id IN (` + selShippingCourier + `)`;

        qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          s.location_id IN(` + selLocation + `) AND 
          s.shipping_courier_id IN (` + selShippingCourier + `)`;

        qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    } else if(locations.length === 0){
        qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          si.staff_id IN(` + selStaff + `) AND
          s.shipping_courier_id IN (` + selShippingCourier + `)
          GROUP BY si.item_type`;

        qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          si.staff_id IN(` + selStaff + `) AND
          s.shipping_courier_id IN (` + selShippingCourier + `)`;

        qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          si.staff_id IN(` + selStaff + `) AND
          s.shipping_courier_id IN (` + selShippingCourier + `)`;

        qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
          si.staff_id IN(` + selStaff + `) AND
          s.shipping_courier_id IN (` + selShippingCourier + `)`;

        qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    } else if(shippingcourier.length === 0){
        qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          si.staff_id IN(` + selStaff + `) AND
          s.location_id IN(` + selLocation + `) 
          GROUP BY si.item_type`;

        qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          si.staff_id IN(` + selStaff + `) AND
          s.location_id IN(` + selLocation + `)`;

        qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          si.staff_id IN(` + selStaff + `) AND
          s.location_id IN(` + selLocation + `)`;

        qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
          si.staff_id IN(` + selStaff + `) AND
          s.location_id IN(` + selLocation + `)`;

        qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    } else {
      qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) AND
        s.location_id IN(` + selLocation + `) AND 
        s.shipping_courier_id IN (` + selShippingCourier + `)
        GROUP BY si.item_type`;

      qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) AND
        s.location_id IN(` + selLocation + `) AND 
        s.shipping_courier_id IN (` + selShippingCourier + `)`;

      qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) AND
        s.location_id IN(` + selLocation + `) AND 
        s.shipping_courier_id IN (` + selShippingCourier + `)`;

      qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) AND
        s.location_id IN(` + selLocation + `) AND 
        s.shipping_courier_id IN (` + selShippingCourier + `)`;

      qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

      qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    }

    if ((locations.length === 0) && (shippingcourier.length === 0)) {
      qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) 
        GROUP BY si.item_type`;

      qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) `;

      qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) `;

      qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        si.staff_id IN(` + selStaff + `) `;

      qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

      qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    }

    if ((staffs.length === 0) && (shippingcourier.length === 0)){
      qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.location_id IN(` + selLocation + `)
        GROUP BY si.item_type`;

      qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.location_id IN(` + selLocation + `)`;

      qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.location_id IN(` + selLocation + `)`;

      qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.location_id IN(` + selLocation + `)`;

      qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

      qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    }

    if ((staffs.length === 0) && (locations.length === 0)){
      qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.shipping_courier_id IN (` + selShippingCourier + `)
        GROUP BY si.item_type`;

      qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.shipping_courier_id IN (` + selShippingCourier + `)`;

      qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.shipping_courier_id IN (` + selShippingCourier + `)`;

      qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND
        s.shipping_courier_id IN (` + selShippingCourier + `)`;

      qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

      qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
        FROM sale_items si
        LEFT JOIN sales s ON si.sale_id = s.sale_id
        WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;
    }

    if ((staffs.length === 0) && (locations.length === 0) && (shippingcourier.length === 0)) {

      logger.info('No query is: ', qry);
        qry = `SELECT si.item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(si.net_price) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') 
          GROUP BY si.item_type`;

        qyrtip = `SELECT 'Tips' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tip_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qrytax = `SELECT 'Taxes' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.tax_amount) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryshippingfees = `SELECT 'Shipping Fees' AS item_type, SUM(si.quantity) AS salesqty, SUM(0) AS refundqty, SUM(s.shipping_fee) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qrymemberships = `SELECT 'Memberships' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

        qryvouchers = `SELECT 'Vouchers' AS item_type, SUM(0) AS salesqty, SUM(0) AS refundqty, SUM(0) AS grosstotal
          FROM sale_items si
          LEFT JOIN sales s ON si.sale_id = s.sale_id
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')`;

    }

    logger.info('dailysalesreport query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);

      } else{

        var dailysale = {
          transactionsummary: [],
          cashmovementsummary: [],
          salestransactionsgroupbyshipping: []
        };

        var transactions = {
          Products: [],
          Services: [],
          Vouchers: [],
          Memberships: [],
          ShippingFees: [],
          Tips: [],
          Taxes: []
        };

        dataResponseObject.results.forEach(element => {
          console.log(element);
          switch (element.item_type) {
            case 'Products':
              transactions.Products = element;
              break;
            case 'Services':
              transactions.Services = element;
            break;
          
            default:
              break;
          }
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qyrtip, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            transactions.Tips = dataResponseObject.results;
          }
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qrytax, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            transactions.Taxes = dataResponseObject.results;
          }
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qryshippingfees, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            transactions.ShippingFees = dataResponseObject.results;
          }
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qrymemberships, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            transactions.Memberships = dataResponseObject.results;
          }
        });

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qryvouchers, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            transactions.Vouchers = dataResponseObject.results;
          }
        });

        dailysale.transactionsummary = transactions;

        let qry3 = ``;
        if (paymenttype.length === 0) {
          qry3 = `SELECT p.payment_type_name, SUM(sp.received_amount) AS paymentscollected, SUM(0) AS refundspaid
          FROM sale_payments sp
          LEFT JOIN payment_types p ON sp.payment_type_id = p.payment_typeid
          LEFT JOIN sales s ON sp.sale_id = s.sale_id  
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
          GROUP BY sp.payment_type_id
          ORDER BY p.payment_type_name ASC`;
        } else {
          qry3 = `SELECT p.payment_type_name, SUM(sp.received_amount) AS paymentscollected, SUM(0) AS refundspaid
          FROM sale_payments sp
          LEFT JOIN payment_types p ON sp.payment_type_id = p.payment_typeid
          LEFT JOIN sales s ON sp.sale_id = s.sale_id  
          WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND sp.payment_type_id IN (` + selPaymentType + `) 
          GROUP BY sp.payment_type_id
          ORDER BY p.payment_type_name ASC`;
        }

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry3, [], function (dataResponseObject) {

          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {
            dailysale.cashmovementsummary = dataResponseObject.results;

            let qry1 = ``;
            if ((shippingcourier.length === 0) && (locations.length === 0)) {
              qry1 = `SELECT sc.shipping_courier, COUNT(s.shipping_courier_id) AS transactioncounts FROM sales s 
              LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
              WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
              GROUP BY s.shipping_courier_id
              ORDER BY sc.shipping_courier ASC`;
            } else if (locations.length === 0) {
              qry1 = `SELECT sc.shipping_courier, COUNT(s.shipping_courier_id) AS transactioncounts FROM sales s 
              LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
              WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
              s.shipping_courier_id IN (` + selShippingCourier + `) 
              GROUP BY s.shipping_courier_id
              ORDER BY sc.shipping_courier ASC`;
            } else if (shippingcourier.length === 0) {
              qry1 = `SELECT sc.shipping_courier, COUNT(s.shipping_courier_id) AS transactioncounts FROM sales s 
              LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
              WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
              s.location_id IN (` + selLocation + `) 
              GROUP BY s.shipping_courier_id
              ORDER BY sc.shipping_courier ASC`;
            } else {
              qry1 = `SELECT sc.shipping_courier, COUNT(s.shipping_courier_id) AS transactioncounts FROM sales s 
              LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
              WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
              s.shipping_courier_id IN (` + selShippingCourier + `) AND 
              s.location_id IN (` + selLocation + `) 
              GROUP BY s.shipping_courier_id
              ORDER BY sc.shipping_courier ASC`;
            }
      
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {
              if (dataResponseObject.error) {
                callback(dataResponseObject);
              }
              else {
                 var group_shipping_courier_array = {
                   shipping_transaction: [],
                   salestransaction:[]
                 };

                dataResponseObject.results.forEach(element => {

                  var core_value_array = {
                    shipping_courier: [],
                    transactioncounts:[]
                  };

                  core_value_array.shipping_courier = element.shipping_courier;
                  core_value_array.transactioncounts = element.transactioncounts;

                  group_shipping_courier_array.shipping_transaction.push(core_value_array);
                });

                let qry2 = ``;
                if ((shippingcourier.length === 0) && (locations.length === 0)) {
                  qry2 = `SELECT s.invoice_number, CONCAT(last_name, ', ', first_name) clientname, s.sale_status, s.sale_date,
                  s.billing_name, s.location_id, s.location_name, s.tip_amount, s.paid_amount, s.shipping_courier_id, sc.shipping_courier, sp.payment_type_id
                  FROM sales s
                  LEFT JOIN customers c ON s.customer_id = c.customer_id 
                  LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
                  LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id 
                  WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
                  ORDER BY sc.shipping_courier ASC`;
                } else if (locations.length === 0) {
                  qry2 = `SELECT s.invoice_number, CONCAT(last_name, ', ', first_name) clientname, s.sale_status, s.sale_date,
                  s.billing_name, s.location_id, s.location_name, s.tip_amount, s.paid_amount, s.shipping_courier_id, sc.shipping_courier, sp.payment_type_id
                  FROM sales s
                  LEFT JOIN customers c ON s.customer_id = c.customer_id 
                  LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
                  LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id 
                  WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
                  s.shipping_courier_id IN (` + selShippingCourier + `) 
                  ORDER BY s.shipping_courier_id DESC`;
                } else if (shippingcourier.length === 0) {
                  qry2 = `SELECT s.invoice_number, CONCAT(last_name, ', ', first_name) clientname, s.sale_status, s.sale_date,
                  s.billing_name, s.location_id, s.location_name, s.tip_amount, s.paid_amount, s.shipping_courier_id, sc.shipping_courier, sp.payment_type_id
                  FROM sales s
                  LEFT JOIN customers c ON s.customer_id = c.customer_id 
                  LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
                  LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id 
                  WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
                  s.location_id IN (` + selLocation + `) 
                  ORDER BY s.shipping_courier_id DESC`;
                }  else {
                  qry2 = `SELECT s.invoice_number, CONCAT(last_name, ', ', first_name) clientname, s.sale_status, s.sale_date,
                  s.billing_name, s.location_id, s.location_name, s.tip_amount, s.paid_amount, s.shipping_courier_id, sc.shipping_courier, sp.payment_type_id
                  FROM sales s
                  LEFT JOIN customers c ON s.customer_id = c.customer_id 
                  LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id 
                  LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id 
                  WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
                  s.shipping_courier_id IN (` + selShippingCourier + `) AND 
                  s.location_id IN (` + selLocation + `) 
                  ORDER BY s.shipping_courier_id DESC`;
                 }
           
                 mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry2, [], function (dataResponseObject) {

                  if (dataResponseObject.error) {
                    callback(dataResponseObject);
                  }
                  else {
                    group_shipping_courier_array.salestransaction = dataResponseObject.results;
                    dailysale.salestransactionsgroupbyshipping = group_shipping_courier_array;
                  }
                  var resp = createDataResponseObject(null, dailysale);
                  callback(resp);
                });
              }
            });
          }
        });
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Daily Sales"));
  }
}

function inventoryperlocationreport(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

function outofstockreport(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

function appointmentsreport(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

function inventorytransactionsreport(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

function salessummaryreport(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

// Business Details
function createBusinessDetailsInDB(param, BusinessName, TimeZone, TimeFormat, WeekStart, AppointmentColorSource, ClientLanguage, StaffLanguageDefault, Website, FacebookPage, InstagramPage, ImageUrl, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const createbusinessdetails = `INSERT INTO companyinfo (Tenant_ID, BusinessName, TimeZone, TimeFormat, WeekStart, AppointmentColorSource, ClientLanguage, StaffLanguageDefault, Website, FacebookPage, InstagramPage, ImageUrl, created_by) 
        VALUES ('${param.tenantid}', '${BusinessName}', '${TimeZone}', '${TimeFormat}', '${WeekStart}', '${AppointmentColorSource}', '${ClientLanguage}', '${StaffLanguageDefault}', '${Website}', '${FacebookPage}', '${InstagramPage}', '${ImageUrl}', '${param.userid}')`

        mySqlConnection.adminDataAccess(createbusinessdetails, callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Business Details"));
  }
}

function updateBusinessDetailsInDB(param, BusinessName, TimeZone, TimeFormat, WeekStart, AppointmentColorSource, ClientLanguage, StaffLanguageDefault, Website, FacebookPage, InstagramPage, ImageUrl, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const updatebusinessdetails = `UPDATE companyinfo p SET 
        BusinessName = '${BusinessName}',
        TimeZone = '${TimeZone}',
        TimeFormat = '${TimeFormat}',
        WeekStart = '${WeekStart}',
        AppointmentColorSource = '${AppointmentColorSource}',
        ClientLanguage = '${ClientLanguage}',
        StaffLanguageDefault = '${StaffLanguageDefault}',
        Website = '${Website}',
        FacebookPage = '${FacebookPage}',
        InstagramPage = '${InstagramPage}',
        ImageUrl = '${ImageUrl}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE Tenant_ID = '${param.tenantid}'`

        mySqlConnection.adminDataAccess(updatebusinessdetails, callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Business Details"));
  }
}

function getBusinessDetailsByTenantInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`;

  logger.info('getBusinessDetailsByTenantInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Business Details not found.", null);
      }else{
        var businessdetails = {
          businessdetailsInfo: dataResponseObject.results[0]
        };
        var resp = createDataResponseObject(null, businessdetails);
        callback(resp);
      }
    }
  });
}

function doesBusinessDetailsExist(param, callback) {

    const doesCustomersExistQuery = `SELECT * FROM companyinfo WHERE Tenant_ID = '${param.tenantid}'`

    //holds the results  from the query
    const sqlCallback = (dataResponseObject) => {
  
      const doesCustomersExist = dataResponseObject.results !== null ? dataResponseObject.results.length > 0 ? true : false : null
  
      callback(dataResponseObject.error, doesCustomersExist)
    }
  
    //execute the query to check if the user exists
    mySqlConnection.adminDataAccess(doesCustomersExistQuery, sqlCallback)
}

// Close Dates
function createCloseDatesInDB(param, startdate, enddate, description, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const createclosedates = `INSERT INTO closeddates (startdate, enddate, description, created_by) 
        VALUES ('${mySQLDate(startdate)}', '${mySQLDate(enddate)}', '${description}', '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createclosedates, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Close Dates"));
  }
}

function updateCloseDatesInDB(param, closeddateid, startdate, enddate, description, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const updateclosedates = `UPDATE closeddates p SET 
        startdate = '${mySQLDate(startdate)}',
        enddate = '${mySQLDate(enddate)}',
        description = '${description}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE closeddateid = '${closeddateid}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateclosedates, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Close Dates"));
  }
}

function deleteCloseDatesInDB(param, closeddateid, callback) {

  try {
      //create query using the data in the req.body to create the product in the db
      const deleteclosedates = `DELETE FROM closeddates WHERE closeddateid = '${closeddateid}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteclosedates, [], callback)

  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Close Dates"));
  }
}

function getCloseDatesInDB(param, callback) {

  try {
      //create query using the data in the req.body to register the user in the db
      const qry = `SELECT * FROM closeddates ORDER BY created_datetime ASC`;

      logger.info('getCloseDatesInDB query is: ', qry);

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
        callback(dataResponseObject);
      });

  } catch (error) {
    callback(createDataResponseObject(err, "Unable to get List Close Dates"));
  }
}

// Referral Sources
function createReferralSourcesInDB(param, DisplaySortOrder, Name, Active, CanNotBeDeleted, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const createreferralsources = `INSERT INTO referralsources (DisplaySortOrder, Name, Active, CanNotBeDeleted, created_by) 
        VALUES (${DisplaySortOrder}, '${Name}', ${Active}, ${CanNotBeDeleted},  '${param.userid}')`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createreferralsources, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to create Referral Sources"));
  }
}

function updateReferralSourcesInDB(param, ReferralSourceID, DisplaySortOrder, Name, Active, CanNotBeDeleted, callback){

  try {
      //create query using the data in the req.body to create the product in the db
      const updatereferralsources = `UPDATE referralsources p SET 
        DisplaySortOrder = ${DisplaySortOrder},
        Name = '${Name}',
        Active = ${Active},
        CanNotBeDeleted = ${CanNotBeDeleted},
        modified_datetime = NOW(),
        modified_by = '${param.userid}'
        WHERE ReferralSourceID = '${ReferralSourceID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatereferralsources, [], callback)
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to update Referral Sources"));
  }
}

function deleteReferralSourcesInDB(param, ReferralSourceID, callback) {

  try {
      //create query using the data in the req.body to create the product in the db
      const deletereferralsources = `DELETE FROM referralsources WHERE ReferralSourceID = '${ReferralSourceID}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletereferralsources, [], callback)

  } catch (err) {
    callback(createDataResponseObject(err, "Unable to delete Referral Sources"));
  }
}

function getReferralSourcesInDB(param, callback) {

  try {
      //create query using the data in the req.body to register the user in the db
      const qry = `SELECT * FROM referralsources ORDER BY DisplaySortOrder ASC`;

      logger.info('getReferralSourcesInDB query is: ', qry);

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
        callback(dataResponseObject);
      });

  } catch (error) {
    callback(createDataResponseObject(err, "Unable to get List Referral Sources"));
  }
}

// Change Current Location
function changecurrentlocation(param, user_id, location_id, callback){

  //create query using the data in the req.body to create the product in the db
  const sql = `UPDATE users SET current_location_id = '${location_id}' WHERE user_id = '${user_id}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function (res) {
    callback(createDataResponseObject(false, { message: "Success"}));
  });
}

// Resources
function createResourcesInDB(param, serviceid, name, description, issystemdefault, callback){

  //create query using the data in the req.body to create the product in the db
  const createresourcesdb = `INSERT INTO resources (name, description, issystemdefault, created_by) 
    VALUES ('${name}', '${description}', ${issystemdefault},  '${param.userid}')`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createresourcesdb, [], function (res) {

      const getidrecources = `SELECT resourceid from resources WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getidrecources, [], function (res) {

          var idrecources = res.results;

          const createresourcesservices = `INSERT INTO resourceservices (serviceid, resourceid, created_by) 
          VALUES ('${serviceid}', '${idrecources.resourceid}', '${param.userid}')`

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createresourcesservices, [], callback)

      });
    });
}

function updateResourcesInDB(param, resourceserviceid, serviceid, name, description, issystemdefault, callback){

  //create query using the data in the req.body to create the product in the db
    const updateresources = `UPDATE resources p SET 
      name = '${name}',
      description = '${description}',
      issystemdefault = ${issystemdefault},
      modified_datetime = NOW(),
      modified_by = '${param.userid}'
      WHERE resourceserviceid = '${resourceserviceid}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateresources, [], function (res) {

      const updateresourcesservices = `UPDATE resourceservices p SET 
      serviceid = '${serviceid}',
      modified_datetime = NOW(),
      modified_by = '${param.userid}'
      WHERE resourceid = '${resourceserviceid}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateresourcesservices, [], callback)

  });
}

function deleteResourcesInDB(param, resourceserviceid, callback){

  //create query using the data in the req.body to create the product in the db
    const deleteresources = `DELETE FROM resources WHERE resourceserviceid = '${resourceserviceid}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteresources, [], function (res) {

      const deleteresourcesservices = `DELETE FROM resourceservices WHERE resourceid = '${resourceserviceid}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteresourcesservices, [], callback)

  });
}

function getListResourcesInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM resources r
    LEFT JOIN resourceservices rs ON r.resourceid = rs.resourceserviceid
    LEFT JOIN services s ON rs.serviceid = s.ServiceID
    ORDER BY name ASC`;

    logger.info('getListProductBrandInDB query is: ' + param.resourceid, qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function getResourcesByIdInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM resources r
    LEFT JOIN resourceservices rs ON r.resourceid = rs.resourceserviceid
    LEFT JOIN services s ON rs.serviceid = s.ServiceID
    WHERE r.resourceid = '${param.resourceid}'`;

    logger.info('getResourcesByIdInDB query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);
      }else{
        if(dataResponseObject.results.length == 0){
          var resp = createDataResponseObject("Resources not found.", null);
        }else{
          var resources = {
            resourcesInfo: dataResponseObject.results
          };
          var resp = createDataResponseObject(null, resources);
          callback(resp);
        }
      }
  });
}

// Payment Type

function createPaymentTypeInDB(param, payment_type_name, description, is_systementry, callback){

  //create query using the data in the req.body to create the product in the db
  const createpaymenttype = `INSERT INTO payment_types (payment_type_name, description, is_systementry, created_by) 
    VALUES ('${payment_type_name}', '${description}', ${is_systementry},  '${param.userid}')`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createpaymenttype, [], callback)

}

function updatePaymentTypeInDB(param, payment_typeid, payment_type_name, description, is_systementry, callback){

  //create query using the data in the req.body to create the product in the db
    const updatepaymenttype = `UPDATE payment_types p SET 
      payment_type_name = '${payment_type_name}',
      description = '${description}',
      is_systementry = ${is_systementry},
      modified_datetime = NOW(),
      modified_by = '${param.userid}'
      WHERE payment_typeid = '${payment_typeid}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updatepaymenttype, [], callback)

}

function deletePaymentTypeInDB(param, payment_typeid, callback) {

  //create query using the data in the req.body to create the product in the db
  const deletepaymenttype = `DELETE FROM payment_types WHERE payment_typeid = '${payment_typeid}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deletepaymenttype, [], callback)

}

function getListPaymentTypeInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM payment_types ORDER BY payment_type_name ASC`;

  logger.info('getListProductBrandInDB query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function getListPaymentTypeByIdInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM payment_types WHERE payment_typeid = '${param.payment_typeid}'`;

  logger.info('getListPaymentTypeByIdInDB query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {

    if(dataResponseObject.error){
      callback(dataResponseObject);
    }else{
      if(dataResponseObject.results.length == 0){
        var resp = createDataResponseObject("Payment Types not found.", null);
      }else{
        var paymenttypes = {
          paymenttypesInfo: dataResponseObject.results
        };
        var resp = createDataResponseObject(null, paymenttypes);
        callback(resp);
      }
    }
  });
}

//Locations

function getListLocationbytenantidInDB(param, callback) {
    //create query using the data in the req.body to register the user in the db
    const qry = `SELECT t.TenantID, t.TenantLocationID, t.LocationName, SUM(p.quantity) AS Total
      FROM productjournals p
      JOIN rbtech_admindb.tenantlocations t ON p.localtion_id = t.TenantLocationID
      WHERE t.TenantID = '${param.tenantid}'
      GROUP BY t.TenantLocationID, p.localtion_id
      ORDER BY p.created_datetime ASC`;

      console.log('getListLocationbytenantidInDB query is: ', qry);

      mySqlConnection.adminDataAccess(qry, function(dataResponseObject){
      callback(dataResponseObject);
  });
}

function createLocationsInDB(param, LocationName, LocationContactNumber, LocationEmailAddress, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, callback){

  //create query using the data in the req.body to create the product in the db
  const createlocationtenant = `INSERT INTO tenantlocations (TenantID, LocationName, LocationContactNumber, LocationEmailAddress, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, created_by) 
  VALUES ('${param.tenantid}', '${LocationName}', '${LocationContactNumber}', '${LocationEmailAddress}', '${AreasOfInterest}', '${AdministrativeArea}', '${SubAdministrativeArea}', '${SubLocality}', '${SubThoroughfare}', '${Thoroughfare}', '${Locality}', '${Latitude}', '${Longtitude}', '${PostalCode}', '${CountryCode}', '${CountryName}', ${LocationRating}, ${Is_Instant_Confirmation_Enabled}, '${param.userid}')`

  mySqlConnection.adminDataAccess(createlocationtenant, callback);

}

function updateLocationsInDB(param, LocationName, LocationContactNumber, LocationEmailAddress, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, callback) {

  //create query using the data in the req.body to create the product in the db
  const updatelocation = `UPDATE tenantlocations p SET 
  LocationName = '${LocationName}',
  LocationContactNumber = '${LocationContactNumber}',
  LocationEmailAddress = '${LocationEmailAddress}',
  AreasOfInterest = '${AreasOfInterest}',
  AdministrativeArea = '${AdministrativeArea}',
  SubAdministrativeArea = '${SubAdministrativeArea}',
  SubLocality = '${SubLocality}',
  SubThoroughfare = '${SubThoroughfare}',
  Thoroughfare = '${Thoroughfare}',
  Locality = '${Locality}',
  Latitude = '${Latitude}',
  Longtitude = '${Longtitude}',
  PostalCode = '${PostalCode}',
  CountryCode = '${CountryCode}',
  CountryName = '${CountryName}',
  LocationRating = ${LocationRating},
  Is_Instant_Confirmation_Enabled = ${Is_Instant_Confirmation_Enabled},
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE TenantID = '${param.tenantid}'`

  mySqlConnection.adminDataAccess(updatelocation, callback);

}

function deleteLocationsInDB(param, callback) {

  //create query using the data in the req.body to create the product in the db
  const deletelocation = `DELETE FROM tenantlocations WHERE TenantID = '${param.tenantid}'`

  mySqlConnection.adminDataAccess(deletelocation, callback);

}

function getListLocationsInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM tenantlocations WHERE TenantID = '${param.tenantid}'
    ORDER BY LocationName ASC`;

  logger.info('getListProductBrandInDB query is: ', qry);

  mySqlConnection.adminDataAccess(qry, function (dataResponseObject) {
    callback(dataResponseObject);
  });
}


//Product Brand
function createProductBrandInDB(param, brand_name, callback) {

  //create query using the data in the req.body to create the product in the db
  const insertproductbrand = `INSERT INTO product_brands (brand_name, created_by) 
  VALUES ('${brand_name}', '${param.userid}')`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", insertproductbrand, [], callback)

}

function updateProductBrandInDB(param, brand_id, brand_name, callback) {

  //create query using the data in the req.body to create the product in the db
  const updateproductbrand = `UPDATE product_brands p SET 
  brand_name = '${brand_name}',
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE brand_id = '${brand_id}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateproductbrand, [], callback)

}

function deleteProductBrandInDB(param, brand_id, callback) {

  //create query using the data in the req.body to create the product in the db
  const deleteproductbrand = `DELETE FROM product_brands WHERE brand_id = '${brand_id}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteproductbrand, [], callback)

}

function getListProductBrandInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM product_brands ORDER BY brand_name ASC`;

  logger.info('getListProductBrandInDB query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

// Units of Measure
function createProductUnitOfMeasure(param, unitOfMeasure, callback) {

  //create query using the data in the req.body to create the product in the db
  const insertproductbrand = `INSERT INTO unitofmeasures (unitOfMeasure, created_by) 
  VALUES ('${unitOfMeasure}', '${param.userid}')`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createProductUnitOfMeasure, [], callback)

}

function updateProductUnitOfMeasure(param, uom_id, unitOfMeasure, callback) {

  //create query using the data in the req.body to create the product in the db
  const updateproductbrand = `UPDATE unitofmeasures p SET 
  unitOfMeasure = '${unitOfMeasure}',
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE uom_id = '${uom_id}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateProductUnitOfMeasure, [], callback)

}

function deleteProductUnitOfMeasure(param, uom_id, callback) {

  //create query using the data in the req.body to create the product in the db
  const deleteproductbrand = `DELETE FROM unitofmeasures WHERE uom_id = '${uom_id}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteProductUnitOfMeasure, [], callback)

}

function getListProductUnitOfMeasure(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM unitofmeasures ORDER BY unitOfMeasure ASC`;

  logger.info('getListProductUnitOfMeasure query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}


//Category
function createProductCategoryInDB(param, category_name, callback) {

  //create query using the data in the req.body to create the product in the db
  const insertproductcategory = `INSERT INTO product_categories (category_name, created_by) 
  VALUES ('${category_name}', '${param.userid}')`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", insertproductcategory, [], callback)

}

function updateProductCategoryInDB(param, category_id, category_name, callback) {

  //create query using the data in the req.body to create the product in the db
  const updateproductcategoryquery = `UPDATE product_categories p SET 
  category_name = '${category_name}',
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE category_id = '${category_id}'`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateproductcategoryquery, [], callback)

}

function deleteProductCategoryInDB(param, category_id, callback) {

  //create query using the data in the req.body to create the product in the db
  const deleteproductcategoryquery = `DELETE FROM product_categories WHERE category_id = '${category_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteproductcategoryquery, [], callback)

}

function getListProductCategoryInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM product_categories ORDER BY category_name`;

  logger.info('getSales query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}


// Stock Updates
function updateDeStockInDB(param, product_id, location_id, quantity, reason, supplier_id, callback){

  //create query using the data in the req.body to create the product in the db
  const insertintoproductjournal = `INSERT INTO productjournals (product_id, location_id, quantity, reason, supplier_id, created_by) 
    VALUES ('${product_id}', '${location_id}', (ABS(${quantity})*(-1)), '${reason}', '${supplier_id}', '${param.userid}')`
  
  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", insertintoproductjournal, [], function (res) {

    const getSumProdQuery = `SELECT SUM(quantity) AS TotalProducts FROM productjournals WHERE product_id = '${product_id}' ORDER BY created_datetime ASC`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getSumProdQuery, [], function (res) {

      var productstotalInfo = res.results;

      const updateProductsQuatityQuery = `UPDATE products p SET 
        current_stock_quantity = ${productstotalInfo.TotalProducts}
        WHERE product_id = '${product_id}'`;

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateProductsQuatityQuery, [], callback)
    });
  });
}

function updateInStockInDB(param, product_id, localtion_id, quantity, special_price, reason, supplier_id, callback){

  //create query using the data in the req.body to create the product in the db
  const insertintoproductjournal = `INSERT INTO productjournals (product_id, location_id, quantity, reason, supplier_price, supplier_id, created_by) 
  VALUES ('${product_id}', '${localtion_id}', ABS(${quantity}), '${reason}', ${special_price}, '${supplier_id}', '${param.userid}')`

  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", insertintoproductjournal, [], function (res) {

    const getSumProdQuery = `SELECT SUM(quantity) AS TotalProducts FROM productjournals WHERE product_id = '${product_id}' ORDER BY created_datetime ASC`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getSumProdQuery, [], function (res) {

      var productstotalInfo = res.results;

      const updateProductsQuatityQuery = `UPDATE products p SET 
      special_price = ${special_price},
      current_stock_quantity = ${productstotalInfo.TotalProducts}
      WHERE product_id = '${product_id}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateProductsQuatityQuery, [], callback)
    });
  });
}

//Sales 
function createSalesInDB(param, sale_date, customer_id, total_amount, paid_amount, balance_amount, tip_amount, tax_amount, 
  discount_amount, invoice_notes, saleitems, received_date, staff_id, staff_name, received_amount, payment_type_id, 
  location_id, customer_name, billing_name, location_name, source_of_salesid, shipping_courier_id, shipping_fee, payment_reference, status_date, delivery_status, proof_of_delivery, IsSaveUnpaidtoDraft, vouchercode, voucher_amount, callback) {

  if (IsSaveUnpaidtoDraft) {

    if (!shipping_courier_id) {
      shipping_courier_id = null;
    }
  
    if (!payment_reference) {
      payment_reference = null;
    }
  
    if (!shipping_fee) {
      shipping_fee = 0;
    }
  
    var invoice_status = "";

    invoice_status = "Unpaid";

  
    // Get the next invoice number and defalt customerid
    getNextInvoiceNumber(location_id, function(resp) {
      try {
        const newInvNo = resp.results.next_invoice_number;
        const defaultCustomerID = resp.results.DefaultCustomerID;
        if (newInvNo <= 0) {
          callback(createDataResponseObject(true, "Unable to get the next invoice number"));
          return;
        }
  
        // if (!customer_id) {
        //   if (!defaultCustomerID) {
        //     callback(createDataResponseObject(true, "There is no default customer. Please specify a customer."));
        //     return;
        //   }
        //   else {
        //     customer_id = defaultCustomerID;
        //   }
        // }
  
        const createSalesQuery = `INSERT INTO sales (sale_date, customer_id, total_amount, paid_amount, balance_amount, tip_amount, tax_amount, discount_amount, invoice_notes, created_by, sale_status, location_id, customer_name, billing_name, location_name, invoice_number, source_of_salesid, shipping_courier_id, shipping_fee, delivery_status, staff_id, staff_name, vouchercode, voucher_amount) 
        VALUES ('${mySQLDate(sale_date)}', '${customer_id}', ${total_amount}, ${paid_amount}, ${balance_amount}, ${tip_amount}, ${tax_amount}, ${discount_amount}, '${invoice_notes}', '${param.userid}', '${invoice_status}', '${location_id}', '${customer_name}', '${billing_name}', '${location_name}', '${newInvNo}', '${source_of_salesid}', '${shipping_courier_id}', ${shipping_fee}, '${(!delivery_status ? 'NULL' : delivery_status)}', '${staff_id}', '${staff_name}', '${vouchercode}', ${voucher_amount})`
  
        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createSalesQuery, [], function (res) {
  
          const querygetsale_id = 'SELECT sale_id FROM sales WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1'
  
          updateNextInvoiceNumber(location_id);
  
          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetsale_id, [], function (res) {
  
            var saleidInfo = res.results;
            const new_sale_id = saleidInfo.sale_id;
            logger.info(saleitems);
  
            let sql = `insert into sale_items (sale_id, item_type, item_id, item_name, quantity, unit_price, discount, tax_amount, net_price, tip_amount, staff_id, staff_name, remarks, deal_id, created_by, voucher_id, vouchercode) values?`;
  
            let values = [];
  
            for (let i = 0; i < saleitems.length; i++) {
              values.push([saleidInfo.sale_id, saleitems[i].item_type, saleitems[i].item_id, saleitems[i].item_name, saleitems[i].quantity, saleitems[i].unit_price, saleitems[i].discount, saleitems[i].tax_amount, saleitems[i].net_price, saleitems[i].tip_amount, staff_id, staff_name, saleitems[i].remarks, saleitems[i].deal_id, param.userid, saleitems[i].item_id, vouchercode])
            }
  
            logger.info(values);
  
            //execute the query to create the product
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values], function(result){
  
              if (!payment_type_id) {
  
                if (shipping_courier_id === null) {
  
                  var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                  callback(resp);
  
                } else {
  
                  const deliverystatusupdates = `INSERT INTO delivery_status_updates (sale_id, status_date, delivery_status, created_by, proof_of_delivery, delivered_by) 
                  VALUES ('${saleidInfo.sale_id}', '${status_date}', 'Preparing', '${param.userid}', '${proof_of_delivery}', '${shipping_courier_id}')`
  
                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){
  
                    var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                    callback(resp);
  
                  });
                }
  
              } else {
  
                const paymentsales = `INSERT INTO sale_payments (sale_id, received_date, receivedby_employee_id, received_amount, payment_type_id, payment_reference, created_by) 
                VALUES ('${saleidInfo.sale_id}', '${mySQLDate(received_date)}', '${staff_id}', ${received_amount}, '${payment_type_id}', '${payment_reference}', '${param.userid}')`
    
                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", paymentsales, [], function(result){
    
                  if (!shipping_courier_id) {
    
                      var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                      callback(resp);
    
                  } else {
    
                    const deliverystatusupdates = `INSERT INTO delivery_status_updates (sale_id, status_date, delivery_status, created_by, proof_of_delivery, delivered_by) 
                    VALUES ('${saleidInfo.sale_id}', '${status_date}', '${delivery_status}', '${param.userid}', '${proof_of_delivery}', '${shipping_courier_id}')`
    
                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){
    
                      var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                      callback(resp);
    
                    });
                  }
                });
              }
            });
          });
        });
      } catch (err) {
        callback(createDataResponseObject(err, "Unable to obtain sales invoice number"));
      }
    });

  } else {

    if (!shipping_courier_id) {
      shipping_courier_id = null;
    }
  
    if (!payment_reference) {
      payment_reference = null;
    }
  
    if (!shipping_fee) {
      shipping_fee = 0;
    }
  
    var invoice_status = "";
    if (paid_amount === total_amount)
    {
      invoice_status = "Paid";
    } 
    else if (paid_amount === 0 && !payment_type_id)
    {
      invoice_status = "Unpaid";
    } else {
      balance_amount = total_amount - paid_amount;
      invoice_status = "Partial"
    }
  
    // Get the next invoice number and defalt customerid
    getNextInvoiceNumber(location_id, function(resp) {
      try {
        const newInvNo = resp.results.next_invoice_number;
        const defaultCustomerID = resp.results.DefaultCustomerID;
        if (newInvNo <= 0) {
          callback(createDataResponseObject(true, "Unable to get the next invoice number"));
          return;
        }
  
        // if (!customer_id) {
        //   if (!defaultCustomerID) {
        //     callback(createDataResponseObject(true, "There is no default customer. Please specify a customer."));
        //     return;
        //   }
        //   else {
        //     customer_id = defaultCustomerID;
        //   }
        // }
  
        const createSalesQuery = `INSERT INTO sales (sale_date, customer_id, total_amount, paid_amount, balance_amount, tip_amount, tax_amount, discount_amount, invoice_notes, created_by, sale_status, location_id, customer_name, billing_name, location_name, invoice_number, source_of_salesid, shipping_courier_id, shipping_fee, delivery_status, staff_id, staff_name, vouchercode, voucher_amount) 
        VALUES ('${mySQLDate(sale_date)}', '${customer_id}', ${total_amount}, ${paid_amount}, ${balance_amount}, ${tip_amount}, ${tax_amount}, ${discount_amount}, '${invoice_notes}', '${param.userid}', '${invoice_status}', '${location_id}', '${customer_name}', '${billing_name}', '${location_name}', '${newInvNo}', '${source_of_salesid}', '${shipping_courier_id}', ${shipping_fee}, '${(!delivery_status ? 'NULL' : delivery_status)}', '${staff_id}', '${staff_name}', '${vouchercode}', ${voucher_amount})`
  
        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createSalesQuery, [], function (res) {
  
          const querygetsale_id = 'SELECT sale_id FROM sales WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1'
  
          updateNextInvoiceNumber(location_id);
  
          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetsale_id, [], function (res) {
  
            var saleidInfo = res.results;
            const new_sale_id = saleidInfo.sale_id;
            logger.info(saleitems);
  
            let sql = `insert into sale_items (sale_id, item_type, item_id, item_name, quantity, unit_price, discount, tax_amount, net_price, tip_amount, staff_id, staff_name, remarks, deal_id, created_by, voucher_id, vouchercode) values?`;
  
            let values = [];
  
            for (let i = 0; i < saleitems.length; i++) {
              values.push([saleidInfo.sale_id, saleitems[i].item_type, saleitems[i].item_id, saleitems[i].item_name, saleitems[i].quantity, saleitems[i].unit_price, saleitems[i].discount, saleitems[i].tax_amount, saleitems[i].net_price, saleitems[i].tip_amount, staff_id, staff_name, saleitems[i].remarks, saleitems[i].deal_id, param.userid, saleitems[i].item_id, vouchercode])
            }
  
            logger.info(values);
  
            //execute the query to create the product
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values], function(result){
  
              if (!payment_type_id) {
  
                if (shipping_courier_id === null) {
  
                  var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                  callback(resp);
  
                } else {
  
                  const deliverystatusupdates = `INSERT INTO delivery_status_updates (sale_id, status_date, delivery_status, created_by, proof_of_delivery, delivered_by) 
                  VALUES ('${saleidInfo.sale_id}', '${status_date}', 'Preparing', '${param.userid}', '${proof_of_delivery}', '${shipping_courier_id}')`
  
                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){
  
                    var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                    callback(resp);
  
                  });
                }
  
              } else {
  
                const paymentsales = `INSERT INTO sale_payments (sale_id, received_date, receivedby_employee_id, received_amount, payment_type_id, payment_reference, created_by) 
                VALUES ('${saleidInfo.sale_id}', '${mySQLDate(received_date)}', '${staff_id}', ${received_amount}, '${payment_type_id}', '${payment_reference}', '${param.userid}')`
    
                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", paymentsales, [], function(result){
    
                  if (!shipping_courier_id) {
    
                      var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                      callback(resp);
    
                  } else {
    
                    const deliverystatusupdates = `INSERT INTO delivery_status_updates (sale_id, status_date, delivery_status, created_by, proof_of_delivery, delivered_by) 
                    VALUES ('${saleidInfo.sale_id}', '${status_date}', '${delivery_status}', '${param.userid}', '${proof_of_delivery}', '${shipping_courier_id}')`
    
                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){
    
                      var resp = createDataResponseObject(false, { sale_id: new_sale_id, invoice_number: newInvNo } );
                      callback(resp);
    
                    });
                  }
                });
              }
            });
          });
        });
      } catch (err) {
        callback(createDataResponseObject(err, "Unable to obtain sales invoice number"));
      }
    });
  }
}

function getNextInvoiceNumber(location_id, callback) {
  try { // UPDATE tenantlocations SET next_invoice_number = (next_invoice_number + 1) WHERE TenantLocationID = '" + location_id + "'
    const sql = "SELECT (next_invoice_number + 1) AS next_invoice_number FROM tenantlocations WHERE TenantLocationID = '" + location_id + "'";
    mySqlConnection.adminDataAccess(sql, function (res) {
      try {
        if (!res.results[0]) {
          callback(createDataResponseObject(true, "Unable to get the next invoice number"));
        }
        else {
          if (!res.results[0].next_invoice_number) {
            callback(createDataResponseObject(true, "Unable to get the next invoice number"));
          }
          else {
            
            var resp = createDataResponseObject(false, { 
              next_invoice_number: res.results[0].next_invoice_number,
              DefaultCustomerID: res.results[0].DefaultCustomerID
            } );
            callback(resp);
          }
        }
      } catch (error) {
        logger.error('getNextInvoiceNumber error: ', error);
        callback(createDataResponseObject(error, "Unable to get the next invoice number"));
      }
     
    });

  } catch (err) {
    logger.error('getNextInvoiceNumber error: ', err);
    callback(createDataResponseObject(err, "Unable to get the next invoice number"));
  }
}

function updateNextInvoiceNumber(location_id) {
  try {
    const sql = "UPDATE tenantlocations SET next_invoice_number = (next_invoice_number + 1) WHERE TenantLocationID = '" + location_id + "'";
    mySqlConnection.adminDataAccess(sql, function (res) {
      var result = res;
    });

  } catch (err) {
    logger.error('updateNextInvoiceNumber error: ', err);
  }
}



function updateSalesInDB(param, sale_id, sale_date, customer_id, invoice_number, invoice_status, total_amount, paid_amount, balance_amount, tip_amount, tax_amount, 
  discount_amount, invoice_notes, saleitems, received_date, staff_id, staff_name, received_amount, payment_type_id, 
  location_id, customer_name, billing_name, location_name, source_of_salesid, shipping_courier_id, shipping_fee, payment_reference, status_date, delivery_status, proof_of_delivery, callback) {

    if (!shipping_courier_id) {
      shipping_courier_id = null;
    }
  
    if (!payment_reference) {
      payment_reference = null;
    }
  
    if (!shipping_fee) {
      shipping_fee = 0;
    }

    const updateSalesQuery = `UPDATE sales c SET 
    sale_date = '${mySQLDate(sale_date)}', 
    customer_id = '${customer_id}', 
    location_id = '${location_id}',
    sale_status = '${invoice_status}',
    total_amount = ${total_amount},
    balance_amount = ${balance_amount},
    paid_amount = ${paid_amount},
    tip_amount = ${tip_amount},
    tax_amount = ${tax_amount},
    discount_amount = ${discount_amount},
    invoice_notes = '${invoice_notes}',
    modified_datetime = NOW(),
    modified_by = '${param.userid}',
    location_name = '${location_name}',
    billing_name = '${billing_name}',
    customer_name = '${customer_name}',
    source_of_salesid = '${source_of_salesid}',
    shipping_courier_id = '${shipping_courier_id}',
    shipping_fee = ${shipping_fee},
    delivery_status = '${delivery_status}',
    staff_id = '${staff_id}',
    staff_name = '${staff_name}'
  WHERE sale_id = '${sale_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateSalesQuery, [], function (res) {

    const deleteSalesItemQuery = `DELETE FROM sale_items WHERE sale_id = '${sale_id}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteSalesItemQuery, [], function (res) {

      let sql = `insert into sale_items (sale_id, item_type, item_id, item_name, quantity, unit_price, discount, tax_amount, net_price, tip_amount, staff_id, staff_name, remarks, deal_id, modified_datetime, modified_by) values?`;

      let values = [];

      for (let i = 0; i < saleitems.length; i++) {
        values.push([sale_id, saleitems[i].item_type, saleitems[i].item_id, saleitems[i].item_name, saleitems[i].quantity, saleitems[i].unit_price, saleitems[i].discount, saleitems[i].tax_amount, saleitems[i].net_price, saleitems[i].tip_amount, staff_id, staff_name, saleitems[i].remarks, saleitems[i].deal_id, saleitems[i].modified_datetime, param.userid])
      }

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values], function(result){

        if (!payment_type_id) {
          if (shipping_courier_id === null) {

            var resp = createDataResponseObject(null, { sale_id: sale_id, invoice_number: invoice_number } );
            callback(resp);

          } else {

            const deliverystatusupdates = `UPDATE delivery_status_updates c SET 
            status_date = '${status_date}', 
            delivery_status = ${delivery_status},
            proof_of_delivery = '${proof_of_delivery}',
            delivered_by = '${shipping_courier_id}',
            modified_datetime = NOW(),
            modified_by = '${param.userid}'
            WHERE sale_id = '${sale_id}'`

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){

              var resp = createDataResponseObject(null, { sale_id: sale_id, invoice_number: invoice_number } );
              callback(resp);

            });
          }
        } else {

          const paymentsalesupdate = `INSERT INTO sale_payments (sale_id, received_date, receivedby_employee_id, received_amount, payment_type_id, payment_reference, created_by) 
          VALUES ('${sale_id}', '${mySQLDate(received_date)}', '${staff_id}', ${received_amount}, '${payment_type_id}', '${payment_reference}', '${param.userid}')`

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", paymentsalesupdate, [], function(result){
  
            const checkifdeliverystatusisexist = `SELECT sale_id FROM delivery_status_updates WHERE sale_id = '${sale_id}'`

              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", checkifdeliverystatusisexist, [], function(result){

                if (!result.results[0]) {

                  if (!shipping_courier_id) {

                    var resp = createDataResponseObject(null, { sale_id: sale_id, invoice_number: invoice_number } );
                    callback(resp);

                  } else {

                    const deliverystatusupdates = `INSERT INTO delivery_status_updates (sale_id, status_date, delivery_status, created_by, proof_of_delivery, delivered_by) 
                    VALUES ('${sale_id}', '${status_date}', 'Preparing', '${param.userid}', '${proof_of_delivery}', '${shipping_courier_id}')`

                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){

                      var resp = createDataResponseObject(null, { sale_id: new_sale_id, invoice_number: newInvNo } );
                      callback(resp);

                    });
                  }
                } else {

                  const deliverystatusupdates = `UPDATE delivery_status_updates c SET 
                  status_date = '${status_date}', 
                  delivery_status = ${delivery_status},
                  proof_of_delivery = '${proof_of_delivery}',
                  delivered_by = '${shipping_courier_id}',
                  modified_datetime = NOW(),
                  modified_by = '${param.userid}'
                  WHERE sale_id = '${sale_id}'`

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deliverystatusupdates, [], function(result){

                    var resp = createDataResponseObject(null, { sale_id: sale_id, invoice_number: invoice_number } );
                    callback(resp);

                  });
                }
              });
          });
        }
      });
    });
  });
}

function deleteSalesInDB(param, sale_id, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteSalesQuery = `DELETE FROM sales WHERE sale_id = '${sale_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteSalesQuery, [], function (res) {

    const deleteSalesItemQuery = `DELETE FROM sale_items WHERE sale_id = '${sale_id}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteSalesItemQuery, [], function (res) {

      const deleteSalesPaymentsQuery = `DELETE FROM sale_payments WHERE sale_id = '${sale_id}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteSalesPaymentsQuery, [], callback)

    });
  });
}

function getSales(param, start_date, end_date, locations, shippingcourier, paymenttype, payment_status, delivery_status, callback) {
  //create query using the data in the req.body to register the user in the db

  var selLocation = "";
  if (!locations) {
    selLocation = "''";
  }
  else {

    if (locations.length === 0) {
      selLocation = "''";
    } else {
      for (let i = 0; i < locations.length; i++) {
        if (selLocation == "") {
          selLocation += "'" + locations[i].location_id + "'";
        }
        else {
          selLocation += ",'" + locations[i].location_id + "'";
        }
      }
    }
  }

  var selShippingCourier = "";
  if (!shippingcourier) {
    selShippingCourier = "''";
  }
  else {
    if (shippingcourier.length === 0) {
      selShippingCourier = "''";
    } else {
      for (let i = 0; i < shippingcourier.length; i++) {
        if (selShippingCourier == "") {
          selShippingCourier += "'" + shippingcourier[i].shippingcourier_id + "'";
        }
        else {
          selShippingCourier += ",'" + shippingcourier[i].shippingcourier_id + "'";
        }
      }
    }
  }

  var selPaymentType = "";
  if (!paymenttype) {
    selPaymentType = "''";
  }
  else {
    if (paymenttype.length === 0) {
      selPaymentType = "''";
    } else {
      for (let i = 0; i < paymenttype.length; i++) {
        if (selPaymentType == "") {
          selPaymentType += "'" + paymenttype[i].payment_typeid + "'";
        }
        else {
          selPaymentType += ",'" + paymenttype[i].payment_typeid + "'";
        }
      }
    }
  }

  var selPaymentStatus = "";
  if (!payment_status) {
    selPaymentStatus = "''";
  }
  else {
    if (payment_status.length === 0) {
      selPaymentStatus = "''";
    } else {
      for (let i = 0; i < payment_status.length; i++) {
        if (selPaymentStatus == "") {
          selPaymentStatus += "'" + payment_status[i].status_type + "'";
        }
        else {
          selPaymentStatus += ",'" + payment_status[i].status_type + "'";
        }
      }
    }
  }

  var selDeliveryStatus = "";
  if (!delivery_status) {
    selDeliveryStatus = "''";
  }
  else {
    if (delivery_status.length === 0) {
      selDeliveryStatus = "''";
    } else {
      for (let i = 0; i < delivery_status.length; i++) {
        if (selDeliveryStatus == "") {
          selDeliveryStatus += "'" + delivery_status[i].status_type + "'";
        }
        else {
          selDeliveryStatus += ",'" + delivery_status[i].status_type + "'";
        }
      }
    }
  }

  let qry = ``;

  if ((locations.length === 0) && (shippingcourier.length === 0) && (paymenttype.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}')
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((shippingcourier.length === 0) && (paymenttype.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (paymenttype.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.shipping_courier_id IN (` + selShippingCourier + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (shippingcourier.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      sp.payment_type_id IN (` + selPaymentType + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (shippingcourier.length === 0) && (paymenttype.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.sale_status IN (` + selPaymentStatus + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (shippingcourier.length === 0) && (paymenttype.length === 0) && (payment_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.delivery_status IN (` + selDeliveryStatus + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((paymenttype.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      s.shipping_courier_id IN (` + selShippingCourier + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((shippingcourier.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      sp.payment_type_id IN (` + selPaymentType + `) 
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((shippingcourier.length === 0) && (paymenttype.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      s.sale_status IN (` + selPaymentStatus + `) 
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((shippingcourier.length === 0) && (paymenttype.length === 0) && (payment_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      s.delivery_status IN (` + selDeliveryStatus + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (payment_status.length === 0) && (delivery_status.length === 0)) {
    
    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.shipping_courier_id IN (` + selShippingCourier + `) AND 
      sp.payment_type_id IN (` + selPaymentType + `) 
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (paymenttype.length === 0) && (delivery_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.shipping_courier_id IN (` + selShippingCourier + `) AND 
      s.sale_status IN (` + selPaymentStatus + `) 
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else if ((locations.length === 0) && (paymenttype.length === 0) && (payment_status.length === 0)) {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.shipping_courier_id IN (` + selShippingCourier + `) AND 
      s.delivery_status IN (` + selDeliveryStatus + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  } else {

    qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.customer_id,
      sp.received_date, sp.received_amount, sp.payment_type_id, s.sale_id, s.invoice_number, s.sale_status, s.location_id,
      s.customer_name, s.location_name, s.billing_name, sos.source_sales, s.source_of_salesid, sc.shipping_courier, s.shipping_fee,
      pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name
      FROM sales s
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid 
      WHERE (s.sale_date BETWEEN '${start_date}' AND '${end_date}') AND 
      s.location_id IN (` + selLocation + `) AND 
      s.shipping_courier_id IN (` + selShippingCourier + `) AND 
      sp.payment_type_id IN (` + selPaymentType + `) AND 
      s.sale_status IN (` + selPaymentStatus + `) AND 
      s.delivery_status IN (` + selDeliveryStatus + `)
      GROUP BY s.invoice_number
      ORDER BY s.invoice_number DESC`;

  }

  logger.info('getSales query is: ', qry);
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function getSaleById(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT s.sale_id, s.sale_date, s.customer_id, s.total_amount, s.paid_amount, s.balance_amount, 
      s.tip_amount, s.tax_amount, s.discount_amount, s.invoice_notes, s.created_datetime,
      s.modified_datetime, s.modified_by, CONCAT(c.first_name , ' ' , c.last_name) AS customer_name, s.location_id,
      t.LocationName, s.sale_status, s.invoice_number, sos.source_sales, sos.source_of_salesid, sc.shipping_courier_id,
      sc.shipping_courier, s.shipping_fee, pt.payment_type_name, s.delivery_status, s.staff_id, s.staff_name, s.vouchercode, s.voucher_amount, si.voucher_id, si.vouchercode
    FROM sales s
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN sale_payments sp ON s.sale_id = sp.sale_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON s.location_id = t.TenantLocationID
      LEFT JOIN source_of_sales sos ON s.source_of_salesid = sos.source_of_salesid
      LEFT JOIN shipping_couriers sc ON s.shipping_courier_id = sc.shipping_courier_id
      LEFT JOIN payment_types pt ON sp.payment_type_id = pt.payment_typeid
      LEFT JOIN sale_items si ON s.sale_id = si.sale_id
    WHERE s.sale_id = '${param.sale_id}'`;

  logger.info('getSales query is: ', qry);
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
   
    if (dataResponseObject.error) {
      callback(dataResponseObject);
    }
    else {
      if (dataResponseObject.results.length == 0) {
        var resp = createDataResponseObject("Sale transaction not found.", null);
        callback(resp);
      }
      else {
        var sale = {
          saleInfo: dataResponseObject.results,
          sale_items: [],
          sales_payments: [],
          delivery_status: []
        };
  
        const qry = `SELECT i.sale_item_id, sale_id, i.item_type, i.item_id, i.item_name, i.quantity, i.unit_price,
              i.discount, i.tax_amount, i.net_price, i.tip_amount, i.staff_id, i.staff_name, i.remarks, i.created_datetime, i.created_by,
              i.modified_datetime, i.modified_by, CONCAT(s.FirstName + ' ' + s.LastName) AS StaffName, i.deal_id, i.voucher_id, i.vouchercode
          FROM sale_items i LEFT JOIN staffs s ON i.staff_id = s.StaffID
          WHERE i.sale_id = '${param.sale_id}'`;
  
        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {

           sale.sale_items = dataResponseObject.results;

           const qry = `SELECT s.sale_id, s.payment_type_id, p.payment_type_name, s.received_date, s.received_amount, s.payment_reference FROM sale_payments s
            LEFT JOIN payment_types p ON s.payment_type_id = p.payment_typeid
            WHERE s.sale_id = '${param.sale_id}'`;

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
              if (dataResponseObject.error) {
                callback(dataResponseObject);
              }
              else {

                sale.sales_payments = dataResponseObject.results;

                const qry = `SELECT d.sale_id, d.status_date, d.delivery_status, d.created_datetime,
                d.created_by, d.proof_of_delivery, d.delivered_by, s.shipping_courier FROM delivery_status_updates d
                LEFT JOIN shipping_couriers s ON d.delivered_by = s.shipping_courier_id
                WHERE d.sale_id = '${param.sale_id}'`;

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
                  if (dataResponseObject.error) {
                    callback(dataResponseObject);
                  }
                  else {

                    sale.delivery_status = dataResponseObject.results;

                  }

                  var resp = createDataResponseObject(null, sale);
                  callback(resp);
                });
              }
            });
          }
        });
      }
    }
  });
}

function customerByIdInDB(param, callback) {
  //create query using the data in the req.body to register the user in the db
  try {
    const qry = `SELECT c.customer_id, c.user_id, c.first_name, c.last_name, c.mobile_number, c.email_address,
      c.gender, c.date_of_birth, c.important_client_info, c.display_on_all_bookings, c.additional_phone_number,
      c.client_source, c.send_email_notif, c.client_accept_marketing_notif, c.preferred_language, c.registered_from,
      c.is_email_verified, c.is_sms_verified, c.is_socialmedia_verified, c.is_active, c.created_by, c.created_datetime,
      c.suspend FROM customers c 
      WHERE customer_id = '${param.customer_id}'`;

    logger.info('customerByIdInDB query is: ', qry);
    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
      
      if (dataResponseObject.error) {
        callback(dataResponseObject);
      }
      else {
  
        var customer = {
          Customer_Details: dataResponseObject.results,
          Address_Details: [],
          Business_Details: [],
          Products: [],
          Services: []
        };

        const qyr1 = `SELECT user_id FROM customers
          WHERE customer_id = '${param.customer_id}'`;

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qyr1, [], function (dataResponseObject1) {

          if (dataResponseObject1.error) {
            callback(dataResponseObject1);
          }
          else {

            console.log(dataResponseObject1);
            let result = Object.values(JSON.parse(JSON.stringify(dataResponseObject1)));
            console.log(result[1].user_id);
            let user_ids = result[1].user_id;

            //console.log(result[0].user_id);

            const qry2 = `SELECT c.Tenant_ID, c.BusinessName, c.BusinessType, c.Address
              FROM companyinfo c
              LEFT JOIN tenantusers t ON c.Tenant_ID = t.tenant_id
              WHERE t.user_id = '${user_ids}'`;

            mySqlConnection.adminDataAccess(qry2, function (dataResponseObject2) {

              if (dataResponseObject2.error) {
                callback(dataResponseObject2);
              }
              else {
                customer.Business_Details = dataResponseObject2.results;

                const qry3 = `SELECT si.item_name, si.quantity, si.unit_price, si.net_price FROM sale_items si
                  LEFT JOIN sales s ON si.sale_id = s.sale_id
                  WHERE s.customer_id = '${param.customer_id}' AND si.item_type = 'Products'
                  GROUP BY si.sale_item_id
                  ORDER BY si.item_name ASC`;

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry3, [], function (dataResponseObject3) {

                  if (dataResponseObject3.error) {
                    callback(dataResponseObject3);
                  }
                  else {
                    customer.Products = dataResponseObject3.results;

                    const qry4 = `SELECT si.item_name, si.quantity, si.unit_price, si.net_price FROM sale_items si
                    LEFT JOIN sales s ON si.sale_id = s.sale_id
                    WHERE s.customer_id = '${param.customer_id}' AND si.item_type = 'Services'
                    GROUP BY si.sale_item_id
                    ORDER BY si.item_name ASC`;

                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry4, [], function (dataResponseObject4) {

                      if (dataResponseObject4.error) {
                        callback(dataResponseObject4);
                      }
                      else {
                        customer.Services = dataResponseObject4.results;

                        const qry5 = `SELECT * FROM user_addresses WHERE user_id = '${user_ids}'`;

                        mySqlConnection.adminDataAccess(qry5, function (dataResponseObject5) {

                          if (dataResponseObject5.error) {
                            callback(dataResponseObject5);
                          }
                          else {

                            customer.Address_Details = dataResponseObject5.results;
                          }

                          var resp = createDataResponseObject(null, customer);
                          callback(resp);
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Customer By ID"));
  }
}

//Booking
function createBookingsInDB(param, CancellationOptions, ClientBookAppointmentOption1, ClientBookAppointmentOption2, TimeSlotInterval, AllowClientStaff, ImportantInfo, SendToStaffMembersBooked, SendToSpecificEmailAddress, SendToSpecificEmailAddressValue, FeaturedService, StarRatingForStaff, callback) {

  //create query using the data in the req.body to create the clients in the db
  const createBookingsQuery = `INSERT INTO booking (CancellationOptions, ClientBookAppointmentOption1, ClientBookAppointmentOption2, TimeSlotInterval, AllowClientStaff, ImportantInfo, SendToStaffMembersBooked, SendToSpecificEmailAddress, SendToSpecificEmailAddressValue, FeaturedService, StarRatingForStaff, created_by) 
  VALUES ('${CancellationOptions}', '${ClientBookAppointmentOption1}', '${ClientBookAppointmentOption2}', '${TimeSlotInterval}', ${AllowClientStaff}, '${ImportantInfo}', ${SendToStaffMembersBooked}, ${SendToSpecificEmailAddress}, '${SendToSpecificEmailAddressValue}', ${FeaturedService}, ${StarRatingForStaff}, '${param.userid}')`

  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createBookingsQuery, [], callback)
}

function updateBookingsInDB(param, BookingID, CancellationOptions, ClientBookAppointmentOption1, ClientBookAppointmentOption2, TimeSlotInterval, AllowClientStaff, ImportantInfo, SendToStaffMembersBooked, SendToSpecificEmailAddress, SendToSpecificEmailAddressValue, FeaturedService, StarRatingForStaff, callback) {

  //create query using the data in the req.body to update the clients in the db
  const updateBookingsQuery = `UPDATE booking c SET 
  CancellationOptions = '${CancellationOptions}', 
  ClientBookAppointmentOption1 = '${ClientBookAppointmentOption1}', 
  ClientBookAppointmentOption2 = '${ClientBookAppointmentOption2}',
  TimeSlotInterval = '${TimeSlotInterval}',
  AllowClientStaff = ${AllowClientStaff},
  ImportantInfo = '${ImportantInfo}',
  SendToStaffMembersBooked = ${SendToStaffMembersBooked},
  SendToSpecificEmailAddress = ${SendToSpecificEmailAddress},
  SendToSpecificEmailAddressValue = '${SendToSpecificEmailAddressValue}',
  FeaturedService = ${FeaturedService},
  StarRatingForStaff = ${StarRatingForStaff},
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE BookingID = '${BookingID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateBookingsQuery, [], callback)
}

function deleteBookingsInDB(param, BookingID, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteBookingsQuery = `DELETE FROM booking WHERE BookingID = '${BookingID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteBookingsQuery, [], callback)
}

function getBookings(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM booking ORDER BY BookingID`;

  logger.info('getBookings query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

//Services
function createServicesInDB(param, DisplayOrderLineNumber, ServiceName, TreatmentType, ServiceCategory, ServiceDescription, ServiceAvailableFor, EnableOnlineBookings, EnableStaffCommission, EnableExtraTime, IsResourceRequired, TaxRateName, EnableVoucherSales, VoucherExpiryPeriod, Default_Price, Default_Duration, locations, members, callback) {

  //create query using the data in the req.body to create the clients in the db
  const createServicesQuery = `INSERT INTO services (DisplayOrderLineNumber, ServiceName, TreatmentType, ServiceCategory, ServiceDescription, ServiceAvailableFor, EnableOnlineBookings, EnableStaffCommission, EnableExtraTime, IsResourceRequired, TaxRateName, EnableVoucherSales, VoucherExpiryPeriod, created_by, Default_Price, Default_Duration) 
  VALUES (${DisplayOrderLineNumber}, '${ServiceName}', '${TreatmentType}', '${ServiceCategory}', '${ServiceDescription}', '${ServiceAvailableFor}', ${EnableOnlineBookings}, ${EnableStaffCommission}, ${EnableExtraTime}, ${IsResourceRequired}, '${TaxRateName}', ${EnableVoucherSales}, '${VoucherExpiryPeriod}', '${param.userid}', ${(isNaN(Number(Default_Price)) ? 0 : Number(Default_Price))}, ${(isNaN(Number(Default_Duration)) ? 0 : Number(Default_Duration))})`

  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createServicesQuery, [], function (res) {

    const querygetservicesid = `SELECT ServiceID FROM services WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetservicesid, [], function (res1) {

      var serviceidinfo = res1.results;
      const service_idinfo = serviceidinfo.ServiceID;

      console.log(service_idinfo + ' : Service ID');

      const sqllocation = `INSERT INTO serviceslocations (ServiceID, TenantLocationID, LocationName) VALUES?`;
      let values = [];

      if (!locations) {
        callback(dataResponseObject);

      } else {
        for (let i = 0; i < locations.length; i++) {
          values.push([service_idinfo, locations[i].TenantLocationID, locations[i].LocationName])
        }
      }

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqllocation, [values], function(result){

        const sqlstaff = `INSERT INTO servicesmember (ServiceID, StaffID, FirstName, LastName) VALUES?`;
        let values = [];

        if (!members) {
          callback(dataResponseObject);

        } else {
          for (let i = 0; i < members.length; i++) {
            values.push([service_idinfo, members[i].StaffID, members[i].FirstName, members[i].LastName])
          }
        }

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlstaff, [values], callback)

      });
    });
  });
}

function updateServicesInDB(param, ServiceID, DisplayOrderLineNumber, ServiceName, TreatmentType, ServiceCategory, ServiceDescription, ServiceAvailableFor, EnableOnlineBookings, EnableStaffCommission, EnableExtraTime, IsResourceRequired, TaxRateName, EnableVoucherSales, VoucherExpiryPeriod, Default_Price, Default_Duration, locations, members, callback) {

  //create query using the data in the req.body to update the clients in the db
  const updateServicesQuery = `UPDATE services c SET 
    DisplayOrderLineNumber = ${DisplayOrderLineNumber}, 
    ServiceName = '${ServiceName}', 
    TreatmentType = '${TreatmentType}',
    ServiceCategory = '${ServiceCategory}',
    ServiceDescription = '${ServiceDescription}',
    ServiceAvailableFor = '${ServiceAvailableFor}',
    EnableOnlineBookings = ${EnableOnlineBookings},
    EnableStaffCommission = ${EnableStaffCommission},
    EnableExtraTime = ${EnableExtraTime},
    IsResourceRequired = ${IsResourceRequired},
    TaxRateName = '${TaxRateName}',
    EnableVoucherSales = ${EnableVoucherSales},
    VoucherExpiryPeriod = '${VoucherExpiryPeriod}',
    modified_datetime = NOW(),
    modified_by = '${param.userid}',
    Default_Price = ${(isNaN(Number(Default_Price)) ? 0 : Number(Default_Price))},
    Default_Duration = ${(isNaN(Number(Default_Duration)) ? 0 : Number(Default_Duration))}
    WHERE ServiceID = '${ServiceID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateServicesQuery, [], function (res) {

    const removeservicelocation = `DELETE FROM serviceslocations WHERE ServiceID = '${ServiceID}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", removeservicelocation, [], function (res) {

      const removeservicemembers = `DELETE FROM servicesmember WHERE ServiceID = '${ServiceID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", removeservicemembers, [], function (res) {

        const sqllocation = `INSERT INTO serviceslocations (ServiceID, TenantLocationID, LocationName) VALUES?`;
        let values = [];

        if (!locations) {
          callback(dataResponseObject);

        } else {
          for (let i = 0; i < locations.length; i++) {
            values.push([ServiceID, locations[i].TenantLocationID, locations[i].LocationName])
          }
        }

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqllocation, [values], function(result){

          const sqlstaff = `INSERT INTO servicesmember (ServiceID, StaffID, FirstName, LastName) VALUES?`;
          let values = [];

          if (!members) {
            callback(dataResponseObject);

          } else {
            for (let i = 0; i < members.length; i++) {
              values.push([ServiceID, members[i].StaffID, members[i].FirstName, members[i].LastName])
            }
          }

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlstaff, [values], callback)

        });
      });
    });
  });
}

function deleteServicesInDB(param, ServiceID, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteServicesQuery = `DELETE FROM services WHERE ServiceID = '${ServiceID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteServicesQuery, [], function (res) {

    const removeservicelocation = `DELETE FROM serviceslocations WHERE ServiceID = '${ServiceID}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", removeservicelocation, [], function (res) {

      const removeservicemembers = `DELETE FROM servicesmember WHERE ServiceID = '${ServiceID}'`

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", removeservicemembers, [], callback)

    });
  });
}

//getServicesById

function getServices(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM services GROUP BY ServiceCategory, ServiceID ORDER BY ServiceName`;

  logger.info('getServices query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function getServicesById(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT s.ServiceID, s.DisplayOrderLineNumber, s.ServiceName, s.TreatmentType, s.ServiceCategory,
    s.ServiceDescription, s.ServiceAvailableFor, s.EnableOnlineBookings, s.EnableStaffCommission, s.EnableExtraTime,
    s.IsResourceRequired, s.TaxRateName, s.EnableVoucherSales, s.VoucherExpiryPeriod, Default_Price, Default_Duration,
    created_datetime FROM services s 
    WHERE s.ServiceID = '${param.ServiceID}'`;

    logger.info('getServices query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);
      }else{
        if(dataResponseObject.results.length == 0){
          var resp = createDataResponseObject("Services not found.", null);
        }else{
          var services = {
            servicesInfo: dataResponseObject.results,
            locations: [],
            members: []
          };

          const qry = `SELECT s.TenantLocationID, s.LocationName
            FROM serviceslocations s
            WHERE s.ServiceID = '${param.ServiceID}'`;

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
              if (dataResponseObject.error) {
                callback(dataResponseObject);
              }
              else {

                services.locations = dataResponseObject.results;

                const qry = `SELECT s.StaffID, s.FirstName, s.LastName
                  FROM servicesmember s
                  WHERE s.ServiceID = '${param.ServiceID}'`;

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

                    if (dataResponseObject.error) {
                      callback(dataResponseObject);
                    }
                    else {
                      services.members = dataResponseObject.results;
                    }                    
                  var resp = createDataResponseObject(null, services);
                  callback(resp);
                  });
              }
            });
        }
      }
  });
}

//getServicesCategory

function getServicesCategory(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT DISTINCT ServiceCategory FROM services`;

  logger.info('getServicesCategory query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

//Calendars
function createCalendarInDB(param, customer_id, resource_id, staffs_id, service_id, entry_type, start_datetime, end_datetime, notes, reference_number, status, location_id, callback) {

  //create query using the data in the req.body to create the clients in the db
  const createCalendarsQuery = `INSERT INTO calendars (customer_id, resource_id, staff_id, service_id, location_id, entry_type, start_datetime, end_datetime, notes, created_by, reference_number, status, cancelled_reasonid) 
  VALUES ('${(!customer_id ? null : customer_id)}', '${resource_id}', '${staffs_id}', '${service_id}', '${location_id}', '${entry_type}', '${mySQLDate(start_datetime)}', '${mySQLDate(end_datetime)}', '${notes}', '${param.userid}', ${(!reference_number ? 0 : reference_number)}, '${(!status ? "null" : status)}', 'NULL')`

  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createCalendarsQuery, [], callback)
}

function updateCalendarInDB(param, calendar_entryid, customer_id, resource_id, staffs_id, service_id, entry_type, start_datetime, end_datetime, notes, reference_number, location_id, callback) {
  //create query using the data in the req.body to update the clients in the db
  const updateCalendarQuery = `UPDATE calendars c SET 
  customer_id = '${(!customer_id ? null : customer_id)}', 
  resource_id = '${resource_id}', 
  staff_id = '${staffs_id}',
  service_id = '${service_id}',
  location_id = '${location_id}',
  entry_type = '${entry_type}',
  start_datetime = '${(!mySQLDate(start_datetime) ? null : mySQLDate(start_datetime))}',
  end_datetime = '${(!mySQLDate(end_datetime) ? null : mySQLDate(end_datetime))}', 
  notes = '${(!notes ? null : notes)}',
  reference_number = ${(!reference_number ? null : reference_number)},
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE calendar_entryid = '${calendar_entryid}'`

  logger.info('updateCalendarInDB query is: ', updateCalendarQuery);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateCalendarQuery, [], callback)
}

function updateCalendarStatusInDB(param, calendar_entryid, status, cancelled_reasonid, callback) {
  //create query using the data in the req.body to update the clients in the db
  const updateCalendarStatusQuery = `UPDATE calendars c SET 
  status = '${(!status ? "null" : status)}',
  cancelled_reasonid = '${(!cancelled_reasonid ? "null" : cancelled_reasonid)}',
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE calendar_entryid = '${calendar_entryid}'`

  logger.info('updateCalendarStatusInDB query is: ', updateCalendarStatusQuery);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateCalendarStatusQuery, [], callback)
}

function deleteCalendarInDB(param, calendar_entryid, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteCalendarQuery = `DELETE FROM calendars WHERE calendar_entryid = '${calendar_entryid}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteCalendarQuery, [], callback)
}

function getCalendars(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
  r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
  c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
  FROM calendars c
  LEFT JOIN customers cs ON c.customer_id = cs.customer_id
  LEFT JOIN resources r ON c.resource_id = r.resourceid
  LEFT JOIN services sr ON c.service_id = sr.ServiceID
  LEFT JOIN staffs s ON c.staff_id = s.StaffID
  LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
  LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
  LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
  ORDER BY at.appointment_types ASC`;

  logger.info('getCalendars query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function getCalendarById(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
  r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
  c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
  FROM calendars c
  LEFT JOIN customers cs ON c.customer_id = cs.customer_id
  LEFT JOIN resources r ON c.resource_id = r.resourceid
  LEFT JOIN services sr ON c.service_id = sr.ServiceID
  LEFT JOIN staffs s ON c.staff_id = s.StaffID
  LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
  LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
  LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
  WHERE c.calendar_entryid = '${param.calendar_entryid}'
  ORDER BY at.appointment_types ASC`;

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {

    if(!dataResponseObject.error){
      callback(dataResponseObject);
      
    }else{
      var resp = createDataResponseObject("Calendar entry not found.", null);
      callback(resp);
      
      if(!dataResponseObject.results || dataResponseObject.results.length == 0){
        callback(resp);

      } else {

        var calendars = {
          calendarsInfo: dataResponseObject.results
        };

        var resp = createDataResponseObject(null, calendars);
        callback(resp);
      }
    }
  });
}

//getCalendarFilterInDB
function getCalendarFilterInDB(param, start_datetime, end_datetime, staffs, entry_type, services, customers, resources, locations, callback) {
  //create query using the data in the req.body to register the user in the db

  try {

    var selStaff = "";
    if (!staffs) {
      selStaff = "''";
    }  
    else {
      if (staffs.length === 0) {
        selStaff = "''";
      }
      else {
        for (let i = 0; i < staffs.length; i++) {
          if (selStaff == "") {
            selStaff += "'" + staffs[i].staff_id + "'";
          }
          else {
            selStaff += ",'" + staffs[i].staff_id + "'";
          }
        }
      }
    }

    var selEntryTypes = "";
    if (!entry_type) {
      selEntryTypes = "''";
    }  
    else {
      if (entry_type.length === 0) {
        selEntryTypes = "''";
      }
      else {
        for (let i = 0; i < entry_type.length; i++) {
          if (selEntryTypes == "") {
            selEntryTypes += "'" + entry_type[i].entry_type_id + "'";
          }
          else {
            selEntryTypes += ",'" + entry_type[i].entry_type_id + "'";
          }
        }
      }
    }

    var selServices = "";
    if (!services) {
      selServices = "''";
    }  
    else {
      if (services.length === 0) {
        selServices = "''";
      }
      else {
        for (let i = 0; i < services.length; i++) {
          if (selServices == "") {
            selServices += "'" + services[i].services_id + "'";
          }
          else {
            selServices += ",'" + services[i].services_id + "'";
          }
        }
      }
    }

    var selCustomers = "";
    if (!customers) {
      selCustomers = "''";
    }  
    else {
      if (customers.length === 0) {
        selCustomers = "''";
      }
      else {
        for (let i = 0; i < customers.length; i++) {
          if (selCustomers == "") {
            selCustomers += "'" + customers[i].customers_id + "'";
          }
          else {
            selCustomers += ",'" + customers[i].customers_id + "'";
          }
        }
      }
    }

    var selResources = "";
    if (!resources) {
      selResources = "''";
    }  
    else {
      if (resources.length === 0) {
        selResources = "''";
      }
      else {
        for (let i = 0; i < resources.length; i++) {
          if (selResources == "") {
            selResources += "'" + resources[i].resources_id + "'";
          }
          else {
            selResources += ",'" + resources[i].resources_id + "'";
          }
        }
      }
    }

    var selLocation = "";
    if (!locations) {
      selLocation = "''";
    }  
    else {
      if (locations.length === 0) {
        selLocation = "''";
      }
      else {
        for (let i = 0; i < locations.length; i++) {
          if (selLocation == "") {
            selLocation += "'" + locations[i].location_id + "'";
          }
          else {
            selLocation += ",'" + locations[i].location_id + "'";
          }
        }
      }
    }

    let qry = ``;
    if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0) && (customers.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE '${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime`;
      
    } else if ((entry_type.length === 0) && (services.length === 0) && (customers.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `)`;

    } else if ((staffs.length === 0) && (services.length === 0) && (customers.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (customers.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.service_id IN(` + selServices + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.customer_id IN(` + selCustomers + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0) && (customers.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0) && (customers.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.location_id IN(` + selLocation + `)`;

    } else if ((services.length === 0) && (customers.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.entry_type IN(` + selEntryTypes + `)`;

    } else if ((entry_type.length === 0) && (customers.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.service_id IN(` + selServices + `)`;

    } else if ((entry_type.length === 0) && (services.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.customer_id IN(` + selCustomers + `)`;

    } else if ((entry_type.length === 0) && (services.length === 0) && (customers.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.resource_id IN(` + selResources + `)`;

    } else if ((entry_type.length === 0) && (services.length === 0) && (customers.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (resources.length === 0) && (customers.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.service_id IN(` + selServices + `)`;

    } else if ((staffs.length === 0) && (resources.length === 0) && (services.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.customer_id IN(` + selCustomers + `)`;

    } else if ((staffs.length === 0) && (customers.length === 0) && (services.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.resource_id IN(` + selResources + `)`;

    } else if ((staffs.length === 0) && (customers.length === 0) && (services.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (customers.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.service_id IN(` + selEntryTypes + `) AND c.resource_id IN(` + selResources + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.service_id IN(` + selEntryTypes + `) AND c.customer_id IN(` + selCustomers + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (resources.length === 0) && (customers.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.service_id IN(` + selEntryTypes + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.customer_id IN(` + selCustomers + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0) && (customers.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.customer_id IN(` + selCustomers + `) AND c.service_id IN(` + selServices + `)`;

    } else if ((staffs.length === 0) && (entry_type.length === 0) && (services.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.customer_id IN(` + selCustomers + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (customers.length === 0) && (services.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (customers.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.service_id IN(` + selServices + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.location_id IN(` + selLocation + `)`;

    }else if ((staffs.length === 0) && (entry_type.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.service_id IN(` + selServices + `) AND c.customer_id IN(` + selStaff + `) AND
      c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.customer_id IN(` + selCustomers + `) AND c.service_id IN(` + selServices + `) AND 
      c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (services.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.customer_id IN(` + selCustomers + `) AND c.resource_id IN(` + selResources + `) AND 
      c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (customers.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.service_id IN(` + selServices + `) AND c.resource_id IN(` + selResources + `) AND 
      c.location_id IN(` + selLocation + `)`;

    } else if ((staffs.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.entry_type IN(` + selEntryTypes + `) AND c.service_id IN(` + selServices + `) AND c.resource_id IN(` + selResources + `) AND 
      c.customer_id IN(` + selCustomers + `)`;

    } else if ((entry_type.length === 0) && (services.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.location_id IN(` + selLocation + `) AND c.resource_id IN(` + selResources + `) AND 
      c.customer_id IN(` + selCustomers + `)`;

    } else if ((entry_type.length === 0) && (customers.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.location_id IN(` + selLocation + `) AND c.resource_id IN(` + selResources + `) AND 
      c.service_id IN(` + selServices + `)`;

    } else if ((entry_type.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.location_id IN(` + selLocation + `) AND c.customer_id IN(` + selCustomers + `) AND 
      c.service_id IN(` + selServices + `)`;

    } else if ((entry_type.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.resource_id IN(` + selResources + `) AND c.customer_id IN(` + selCustomers + `) AND 
      c.service_id IN(` + selServices + `)`;

    } else if ((services.length === 0) && (customers.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.resource_id IN(` + selResources + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.location_id IN(` + selLocation + `)`;

    } else if ((services.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.customer_id IN(` + selCustomers + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.location_id IN(` + selLocation + `)`;

    } else if ((services.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.customer_id IN(` + selCustomers + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.resource_id IN(` + selResources + `)`;

    } else if ((customers.length === 0) && (resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.service_id IN(` + selServices + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.location_id IN(` + selLocation + `)`;

    } else if ((customers.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.service_id IN(` + selServices + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.resource_id IN(` + selResources + `)`;

    } else if ((resources.length === 0) && (locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.staff_id IN(` + selStaff + `) AND c.service_id IN(` + selServices + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.customer_id IN(` + selCustomers + `)`;

    } else if ((staffs.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.service_id IN(` + selServices + `) AND c.entry_type IN(` + selEntryTypes + `) AND 
      c.customer_id IN(` + selCustomers + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((entry_type.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.service_id IN(` + selServices + `) AND c.staff_id IN(` + selStaff + `) AND 
      c.customer_id IN(` + selCustomers + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((services.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.staff_id IN(` + selStaff + `) AND 
      c.customer_id IN(` + selCustomers + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((customers.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.resource_id IN(` + selResources + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.staff_id IN(` + selStaff + `) AND 
      c.service_id IN(` + selServices + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((resources.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.customer_id IN(` + selCustomers + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.staff_id IN(` + selStaff + `) AND 
      c.service_id IN(` + selServices + `) AND c.location_id IN(` + selLocation + `)`;

    } else if ((locations.length === 0)) {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.customer_id IN(` + selCustomers + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.staff_id IN(` + selStaff + `) AND 
      c.service_id IN(` + selServices + `) AND c.resource_id IN(` + selResources + `)`;

    } else {

      qry = `SELECT c.calendar_entryid, c.customer_id, c.resource_id, c.service_id, c.location_id, c.staff_id, CONCAT(cs.first_name, ' ', cs.last_name) AS CustomerName,
      r.name AS ResourceName, CONCAT(s.FirstName, ' ', s.LastName) AS StaffName, sr.ServiceName, t.LocationName,
      c.entry_type, at.appointment_types AS EntryType, c.start_datetime, c.end_datetime, c.notes, sr.Default_Price, c.created_by, CONCAT(u.firstname, ' ', u.lastname) AS CreatedBy, c.created_datetime, c.reference_number, c.status
      FROM calendars c
      LEFT JOIN customers cs ON c.customer_id = cs.customer_id
      LEFT JOIN resources r ON c.resource_id = r.resourceid
      LEFT JOIN services sr ON c.service_id = sr.ServiceID
      LEFT JOIN staffs s ON c.staff_id = s.StaffID
      LEFT JOIN appointment_types at ON c.entry_type = at.appointment_typesid
      LEFT JOIN rbtech_admindb.users u ON c.created_by = u.user_id
      LEFT JOIN rbtech_admindb.tenantlocations t ON c.location_id = t.TenantLocationID 
      WHERE ('${start_datetime}' <= c.start_datetime AND '${end_datetime}' >= c.end_datetime) AND
      c.customer_id IN(` + selCustomers + `) AND c.entry_type IN(` + selEntryTypes + `) AND c.staff_id IN(` + selStaff + `) AND 
      c.service_id IN(` + selServices + `) AND c.resource_id IN(` + selResources + `) AND c.location_id IN(` +selLocation+ `)`;
      
    }

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
    });
    
  } catch (err) {
    callback(createDataResponseObject(err, "Unable to get Calendars Records"));
  }
}

//Staff
function createStaffInDB(param, FirstName, LastName, StaffTitle, Notes, Email, MobileNumber, StartDate, EndDate, AllowCalendarBookings, CalendarColor, StaffPermissionCode, PhotoFilePath, is_active, locations, services, commisions, callback) {

  try {
      const registerUserQuery = `INSERT INTO users (username, user_password, active, mobilenumber, emailaddress, created_by, lastname, firstname) 
    VALUES ('${Email}', SHA('12345'), ${is_active}, '${MobileNumber}', '${Email}', '${param.userid}', '${LastName}', '${FirstName}')`

    logger.info('registerUserInDB query is: ', registerUserQuery);

    mySqlConnection.adminDataAccess(registerUserQuery, function (res) {

      const getUserID = `SELECT user_id FROM users WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

      mySqlConnection.adminDataAccess(getUserID, function (res) {

        var useridInfo = res.results[0];

        //var endDateFormatted = (EndDate === "" ? null : "'" + mySQLDate(StartDate) + "'");
        //const IS_NULL = EndDate ? `'${mySQLDate(StartDate)}'` : 'NULL';

        //create query using the data in the req.body to create the clients in the db
        const createStaffQuery = `INSERT INTO staffs (user_id, FirstName, LastName, StaffTitle, Notes, Email, MobileNumber, StartDate, AllowCalendarBookings, CalendarColor, StaffPermissionCode, PhotoFilePath, Created_By, is_active) 
        VALUES ('${useridInfo.user_id}','${FirstName}', '${LastName}', '${StaffTitle}', '${Notes}', '${Email}', '${MobileNumber}', '${mySQLDate(StartDate)}', ${AllowCalendarBookings}, '${CalendarColor}', '${StaffPermissionCode}', '${PhotoFilePath}', '${param.userid}', ${is_active})`

        //execute the query to create the product
        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createStaffQuery, [], function (res) {

          const insertenantuser = `INSERT INTO tenantusers (tenant_id, user_id) 
          VALUES ('${param.tenantid}', (SELECT user_id FROM users WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1))`

          mySqlConnection.adminDataAccess(insertenantuser, function (res) {

            const querygetstaffid = `SELECT StaffID FROM staffs WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetstaffid, [], function (dataResponseObject) {

              var staffidinfo = dataResponseObject.results;
              const staff_idinfo = staffidinfo.StaffID;

              // console.log(staff_idinfo + ' : Staff ID');

              if (!locations) {
                callback(dataResponseObject);
              } else {

                const sqllocation = `INSERT INTO stafflocations (StaffID, TenantLocationID, LocationName) VALUES?`;
                let values = [];

                for (let i = 0; i < locations.length; i++) {
                  values.push([staff_idinfo, locations[i].TenantLocationID, locations[i].LocationName])
                }
              
              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqllocation, [values], function(dataResponseObject){

                if (!services) {
                  callback(dataResponseObject);
                } else {

                  const sqlservices = `INSERT INTO servicestaffs (StaffID, ServiceID, ServiceName) VALUES?`;
                  let values = [];

                  for (let i = 0; i < services.length; i++) {
                    values.push([staff_idinfo, services[i].ServiceID, services[i].ServiceName])
                  }
                
                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlservices, [values], function(dataResponseObject){

                  if (!commisions) {
                    callback(dataResponseObject);
                  } else {
                    const sqlcommisions = `INSERT INTO staffcommisions (StaffID, CommisionID) VALUES?`;
                    let values = [];
                
                      for (let i = 0; i < commisions.length; i++) {
                        values.push([staff_idinfo, commisions[i].CommisionID])
                      }

                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlcommisions, [values], callback)
                  }
                });
                }
              });
              }
            });
          });
        });
      });
    });
  } catch (error) {
    callback(error);
  }
}

function updateStaffInDB(param, StaffID, FirstName, LastName, StaffTitle, Notes, Email, MobileNumber, StartDate, EndDate, AllowCalendarBookings, CalendarColor, StaffPermissionCode, PhotoFilePath, is_active, locations, services, commisions, callback) {

  try {
      //create query using the data in the req.body to update the clients in the db
    const updateStaffQuery = `UPDATE staffs c SET 
    FirstName = '${FirstName}', 
    LastName = '${LastName}', 
    StaffTitle = '${StaffTitle}',
    Notes = '${Notes}',
    Email = '${Email}',
    MobileNumber = '${MobileNumber}',
    StartDate = '${(!mySQLDate(StartDate) ? 'null' : mySQLDate(StartDate))}',
    EndDate = '${(!mySQLDate(EndDate) ? 'null' : mySQLDate(EndDate))}',
    AllowCalendarBookings = ${AllowCalendarBookings},
    CalendarColor = '${CalendarColor}',
    StaffPermissionCode = '${StaffPermissionCode}',
    PhotoFilePath = '${PhotoFilePath}',
    Mofified_By = '${param.user_id}',
    Modified_DateTime = NOW(),
    is_active = ${is_active}
    WHERE StaffID = '${StaffID}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateStaffQuery, [], function (res) {

    const getUserIDfromStaffs = `SELECT user_id FROM staffs WHERE StaffID = '${StaffID}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getUserIDfromStaffs, [], function (res) {

        //var useridInfo = res.results;
        var useridInfo = res.results;
        console.log(useridInfo.user_id + ' : UserID')

        const updateUserQuery = `UPDATE users c SET 
          username = '${Email}', 
          user_password = SHA('12345'), 
          active = ${is_active},
          mobilenumber = '${MobileNumber}',
          emailaddress = '${Email}',
          lastname = '${LastName}',
          firstname = '${FirstName}',
          modified_datetime = NOW(),
          modified_by = '${param.user_id}'
          WHERE user_id = '${useridInfo.user_id}'`

          //removeLocations(StaffID);
          //removeServices(StaffID);
          //removeCommisions(StaffID);

        mySqlConnection.adminDataAccess(updateUserQuery, function (res) {

          const sql = "DELETE FROM stafflocations WHERE StaffID = '" + StaffID + "'";

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function (res) {

            const sql = "DELETE FROM servicestaffs WHERE StaffID = '" + StaffID + "'";

              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function (res) {

                const sql = "DELETE FROM staffcommissions WHERE StaffID = '" + StaffID + "'";

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function (dataResponseObject) {
            
                if (!locations) {
                  callback(dataResponseObject);
                } else {
                  const sqllocation = `INSERT INTO stafflocations (StaffID, TenantLocationID, LocationName) VALUES?`;
                  let values = [];

                  for (let i = 0; i < locations.length; i++) {
                    values.push([staff_idinfo, locations[i].TenantLocationID, locations[i].LocationName])
                  }
                

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqllocation, [values], function(dataResponseObject){
                  
                      if (!services) {
                        callback(dataResponseObject);
                      } else {
                        const sqlservices = `INSERT INTO servicestaffs (StaffID, ServiceID, ServiceName) VALUES?`;
                        let values = [];

                        for (let i = 0; i < services.length; i++) {
                          values.push([staff_idinfo, services[i].ServiceID, services[i].ServiceName])
                        }
                      

                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlservices, [values], function(dataResponseObject){

                      if (!commisions) {
                        callback(dataResponseObject);
                      } else {
                        const sqlcommisions = `INSERT INTO staffcommisions (StaffID, CommisionID) VALUES?`;
                        let values = [];
                    
                          for (let i = 0; i < commisions.length; i++) {
                            values.push([staff_idinfo, commisions[i].CommisionID])
                          }
    
                        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sqlcommisions, [values], callback)
                      }
                  });
                  }
                });
                }
              });
            });
          });
        });
      });
    });
  } catch (error) {
    callback(error);
  }
}

function deleteStaffInDB(param, StaffID, callback) {

  try {
      //create query using the data in the req.body to delete the clients in the db
  const deleteStaffQuery = `DELETE FROM staffs WHERE StaffID = '${StaffID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteStaffQuery, [], function (res) {

    const getUserIDfromStaffs = `SELECT user_id FROM staffs WHERE StaffID = '${StaffID}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getUserIDfromStaffs, [], function (res) {

      var useridInfo = res.results;

      const deleteStaffUser = `DELETE FROM users WHERE user_id = '${useridInfo.user_id}'`

      mySqlConnection.adminDataAccess(deleteStaffUser, function (res) {

        const deleteTenantUser = `DELETE FROM tenantusers WHERE user_id = '${useridInfo.user_id}'`

          mySqlConnection.adminDataAccess(deleteStaffUser, function (res) {

            const sql = "DELETE FROM stafflocations WHERE StaffID = '" + StaffID + "'";

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function (res) {

              const sql = "DELETE FROM servicestaffs WHERE StaffID = '" + StaffID + "'";

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function (res) {

                  const sql = "DELETE FROM staffcommissions WHERE StaffID = '" + StaffID + "'";

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], callback)

              });
            });
          });
        });
      });
    });
  } catch (error) {
    callback(error);
  }
}

function getStaff(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM staffs ORDER BY LastName`;

  logger.info('getStaff query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

//getStaffByID

function getStaffByID(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT s.StaffID, s.user_id, s.FirstName, s.LastName, s.StaffTitle, s.Notes, s.Email,
    s.MobileNumber, s.StartDate, s.EndDate, s.AllowCalendarBookings, s.CalendarColor,
    s.StaffPermissionCode, s.PhotoFilePath, s.Created_DateTime, s.is_active
    FROM staffs s
    WHERE s.StaffID = '${param.StaffID}'`;

  logger.info('getStaffByID query is: ', qry);
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
   
    if (dataResponseObject.error) {
      callback(dataResponseObject);
    }
    else {
      if (dataResponseObject.results.length == 0) {
        var resp = createDataResponseObject("Staff transaction not found.", null);
        callback(resp);
      }
      else {
        var staff = {
          staffInfo: dataResponseObject.results,
          locations: [],
          services: [],
          commisions: []
        };
  
        const qry = `SELECT s.TenantLocationID, s.LocationName
          FROM stafflocations s
          WHERE s.StaffID = '${param.StaffID}'`;
  
        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
          if (dataResponseObject.error) {
            callback(dataResponseObject);
          }
          else {

            staff.locations = dataResponseObject.results;

            const qry = `SELECT s.ServiceID, s.ServiceName
              FROM servicestaffs s
              WHERE s.StaffID = '${param.StaffID}'`;
    
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

              if (dataResponseObject.error) {
                callback(dataResponseObject);
              }
              else {
                staff.services = dataResponseObject.results;

                  const qry = `SELECT s.CommisionID
                    FROM staffcommisions s
                    WHERE s.StaffID = '${param.StaffID}'`;

                    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {

                      if (dataResponseObject.error) {
                        callback(dataResponseObject);
                      }
                      else {
        
                        staff.commisions = dataResponseObject.results;
                      }

                    var resp = createDataResponseObject(null, staff);
                    callback(resp);
                  });
              }
            });
          }
        });
      }
    }
  });
}


//Create Cancellation
function createCancelReasonInDB(param, DisplaySortOrder, Name, CanNotBeDeleted, callback) {

  //create query using the data in the req.body to create the clients in the db
  const createCancelReasonQuery = `INSERT INTO cancellationreasons (DisplaySortOrder, Name, CanNotBeDeleted, created_by) 
  VALUES (${DisplaySortOrder}, '${Name}', ${CanNotBeDeleted}, '${param.userid}')`

  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createCancelReasonQuery, [], callback)
}

function updateCancelReasonInDB(param, CancellationReasonID, DisplaySortOrder, Name, CanNotBeDeleted, callback) {

  //create query using the data in the req.body to update the clients in the db
  const updateCancelReasonQuery = `UPDATE cancellationreasons c SET 
  DisplaySortOrder = ${DisplaySortOrder}, 
  Name = '${Name}', 
  CanNotBeDeleted = ${CanNotBeDeleted},
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE CancellationReasonID = '${CancellationReasonID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateCancelReasonQuery, [], callback)
}

function deleteCancelReasonInDB(param, CancellationReasonID, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteCancelReasonsQuery = `DELETE FROM cancellationreasons WHERE CancellationReasonID = '${CancellationReasonID}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteCancelReasonsQuery, [], callback)
}

function getCancelReason(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT * FROM cancellationreasons ORDER BY DisplaySortOrder`;

  logger.info('getCancelReason query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

//Customers

function createCustomersInDB(param, first_name, last_name, mobile_number, email_address, gender, date_of_birth, important_client_info, display_on_all_bookings, 
  additional_phone_number, client_source, send_email_notif, client_accept_marketing_notif, preferred_language, password, registered_from, is_email_verified, 
  is_sms_verified, is_socialmedia_verified, is_active, current_location_id, business_name, business_type, address_type, address_name, Address, Apartment, District, City, County, State, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, Is_Default_Address, next_invoice_number, callback) {

  const registerUserQuery = `INSERT INTO users (username, user_password, active, mobilenumber, emailaddress, created_by, current_location_id, business_name, business_type) 
  VALUES ('${email_address}', SHA('12345'), ${is_active}, '${mobile_number}', '${email_address}', '${param.userid}', '${current_location_id}', '${business_name}', '${business_type}')`

  logger.info('registerUserInDB query is: ', registerUserQuery);

  mySqlConnection.adminDataAccess(registerUserQuery, function (res) {

    const getUserID = `SELECT user_id FROM users WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

    mySqlConnection.adminDataAccess(getUserID, function (res) {

      console.log(res);
      let useridInfo = res.results[0];
      console.log(useridInfo.user_id);

      //create query using the data in the req.body to create the clients in the db
      const createClientsQuery = `INSERT INTO customers (user_id, first_name, last_name, mobile_number, email_address, gender, date_of_birth, important_client_info, display_on_all_bookings, additional_phone_number, client_source, send_email_notif, client_accept_marketing_notif, preferred_language, password, registered_from, is_email_verified, is_sms_verified, is_socialmedia_verified, is_active, created_by) 
        VALUES ('${useridInfo.user_id}', '${first_name}', '${last_name}', '${mobile_number}', '${email_address}', '${gender}', '${mySQLDate(date_of_birth)}', '${important_client_info}', ${display_on_all_bookings}, '${additional_phone_number}', '${client_source}', ${send_email_notif}, ${client_accept_marketing_notif}, '${preferred_language}', '${password}', '${registered_from}', ${is_email_verified}, ${is_sms_verified}, ${is_socialmedia_verified}, ${is_active}, '${param.userid}')`

      //execute the query to create the product
      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createClientsQuery, [], function (res) {

        const insertenantuser = `INSERT INTO tenantusers (tenant_id, user_id) 
          VALUES ('${param.tenantid}', (SELECT user_id FROM users WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1))`

        mySqlConnection.adminDataAccess(insertenantuser, function (res) {

          const useraddresses = `INSERT INTO user_addresses (user_id, address_type, address_name, Address, Apartment, District, City, County, State, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, Is_Default_Address, created_by, next_invoice_number) 
            VALUES ('${useridInfo.user_id}', '${(!address_type ? 'null' : address_type)}', '${(!address_name ? 'null' : address_name)}', '${(!Address ? 'null' : Address)}', '${(!Apartment ? 'null' : Apartment)}', '${(!District ? 'null' : District)}', '${(!City ? 'null' : City)}', '${(!County ? 'null' : County)}', '${(!State ? 'null' : State)}', '${(!AreasOfInterest ? 'null' : AreasOfInterest)}', '${(!AdministrativeArea ? 'null' : AdministrativeArea)}', '${(!SubAdministrativeArea ? 'null' : SubAdministrativeArea)}', '${(!SubLocality ? 'null' : SubLocality)}', '${(!SubThoroughfare ? 'null' : SubThoroughfare)}', '${(!Thoroughfare ? 'null' : Thoroughfare)}', '${(!Locality ? 'null' : Locality)}', '${(!Latitude ? 'null' : Latitude)}', '${(!Longtitude ? 'null' : Longtitude)}', '${(!PostalCode ? 'null' : PostalCode)}', '${(!CountryCode ? 'null' : CountryCode)}', '${(!CountryName ? 'null' : CountryName)}', ${(isNaN(Number(LocationRating)) ? 0 : Number(LocationRating))}, ${(isNaN(Number(Is_Instant_Confirmation_Enabled)) ? 0 : Number(Is_Instant_Confirmation_Enabled))}, ${(isNaN(Number(Is_Default_Address)) ? 0 : Number(Is_Default_Address))}, '${param.userid}', ${(isNaN(Number(next_invoice_number)) ? 0 : Number(next_invoice_number))})`

            mySqlConnection.adminDataAccess(useraddresses, callback)
        });
      });
    });
  });
}

function updateCustomersInDB(param, customer_id, first_name, last_name, mobile_number, email_address, gender, date_of_birth, important_client_info, display_on_all_bookings, 
  additional_phone_number, client_source, send_email_notif, client_accept_marketing_notif, preferred_language, password, registered_from, is_email_verified, is_sms_verified, 
  is_socialmedia_verified, is_active, current_location_id, business_name, business_type, address_type, address_name, Address, Apartment, District, City, County, State, AreasOfInterest, AdministrativeArea, SubAdministrativeArea, SubLocality, SubThoroughfare, Thoroughfare, Locality, Latitude, Longtitude, PostalCode, CountryCode, CountryName, LocationRating, Is_Instant_Confirmation_Enabled, Is_Default_Address, next_invoice_number, callback) {

  //create query using the data in the req.body to update the clients in the db
  const updateClientsQuery = `UPDATE customers c SET 
    first_name = '${first_name}', 
    last_name = '${last_name}', 
    mobile_number = '${mobile_number}', 
    email_address = '${email_address}', 
    gender = '${gender}', 
    date_of_birth = '${mySQLDate(date_of_birth)}', 
    important_client_info = '${important_client_info}', 
    display_on_all_bookings = ${display_on_all_bookings}, 
    additional_phone_number = '${additional_phone_number}', 
    client_source = '${client_source}', 
    send_email_notif = ${send_email_notif}, 
    client_accept_marketing_notif = ${client_accept_marketing_notif}, 
    preferred_language = '${preferred_language}',
    password = '${password}',
    registered_from = '${registered_from}',
    is_email_verified = ${is_email_verified},
    is_sms_verified = ${is_sms_verified},
    is_socialmedia_verified = ${is_socialmedia_verified},
    is_active = ${is_active},
    modified_datetime = NOW(),
    modified_by = '${param.userid}'
    WHERE customer_id = '${customer_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateClientsQuery, [], function (res) {

    const getUserIDfromCustomers = `SELECT user_id FROM customers WHERE customer_id = '${customer_id}'`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", getUserIDfromCustomers, [], function (res1) {

      console.log(res1);
      let result = Object.values(JSON.parse(JSON.stringify(res1)));
      console.log(result[1].user_id);
      let user_ids = result[1].user_id;

      const updateUserQuery = `UPDATE users c SET 
        username = '${email_address}', 
        user_password = SHA('12345'), 
        active = ${is_active},
        mobilenumber = '${mobile_number}',
        emailaddress = '${email_address}',
        lastname = '${last_name}',
        firstname = '${first_name}',
        modified_datetime = NOW(),
        modified_by = '${param.userid}',
        current_location_id = '${current_location_id}',
        business_name = '${business_name}',
        business_type = '${business_type}'
        WHERE user_id = '${user_ids}'`

      mySqlConnection.adminDataAccess(updateUserQuery, function (res2) {

        const updateuseraddresses = `UPDATE user_addresses c SET 
          address_type = '${(!address_type ? 'null' : address_type)}', 
          address_name = '${(!address_name ? 'null' : address_name)}',
          Address = '${(!Address ? 'null' : Address)}',
          Apartment = '${(!Apartment ? 'null' : Apartment)}',
          District = '${(!District ? 'null' : District)}',
          City = '${(!City ? 'null' : City)}',
          County = '${(!County ? 'null' : County)}', 
          State = '${(!State ? 'null' : State)}', 
          AreasOfInterest = '${!AreasOfInterest ? 'null' : AreasOfInterest}', 
          AdministrativeArea = '${(!AdministrativeArea ? 'null' : AdministrativeArea)}',
          SubAdministrativeArea = '${(!SubAdministrativeArea ? 'null' : SubAdministrativeArea)}',
          SubLocality = '${(!SubLocality ? 'null' : SubLocality)}',
          SubThoroughfare = '${(!SubThoroughfare ? 'null' : SubThoroughfare)}',
          Thoroughfare = '${(!Thoroughfare ? 'null' : Thoroughfare)}',
          Locality = '${(!Locality ? 'null' : Locality)}',
          Latitude = '${(!Latitude ? 'null' : Latitude)}',
          Longtitude = '${(!Longtitude ? 'null' : Longtitude)}',
          PostalCode = '${(!PostalCode ? 'null' : PostalCode)}',
          CountryCode = '${(!CountryCode ? 'null' : CountryCode)}',
          CountryName = '${(!CountryName ? 'null' : CountryName)}',
          LocationRating = ${(isNaN(Number(LocationRating)) ? 0 : Number(LocationRating))},
          Is_Instant_Confirmation_Enabled = ${(isNaN(Number(Is_Instant_Confirmation_Enabled)) ? 0 : Number(Is_Instant_Confirmation_Enabled))},
          Is_Default_Address = ${(isNaN(Number(Is_Default_Address)) ? 0 : Number(Is_Default_Address))},
          modified_datetime = NOW(),
          modified_by = '${param.userid}',
          next_invoice_number = ${(isNaN(Number(next_invoice_number)) ? 0 : Number(next_invoice_number))}
          WHERE user_id = '${user_ids}'`

          mySqlConnection.adminDataAccess(updateuseraddresses, callback)

      });
    });
  });
}

function deleteCustomersInDB(param, customer_id, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteClientsQuery = `DELETE FROM customers WHERE customer_id = '${customer_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteClientsQuery, [], callback)
}

function doesCustomersExist(param, first_name, last_name, callback) {

  //create query to check if the clients already exists
  const doesCustomersExistQuery = `SELECT * FROM customers WHERE first_name = '${first_name}' AND last_name = '${last_name}'`

  //holds the results  from the query
  const sqlCallback = (dataResponseObject) => {

    //calculate if clients exists or assign null if results is null
    const doesCustomersExist = dataResponseObject.results !== null ? dataResponseObject.results.length > 0 ? true : false : null

    //check if there are any clients with this firstname & lastname and return the appropriate value
    callback(dataResponseObject.error, doesCustomersExist)
  }

  //execute the query to check if the user exists
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", doesCustomersExistQuery, [], sqlCallback)
}

function getCustomers(param, callback) {
  //create query using the data in the req.body to register the user in the db
  const qry = `SELECT c.*, u.business_name, u.business_type, s.total_sales, 0 AS reviews FROM customers c
  LEFT JOIN rbtech_admindb.users u ON c.user_id = u.user_id
  LEFT JOIN (SELECT s.customer_id, SUM(s.total_amount) AS total_sales FROM sales s GROUP BY s.customer_id) AS s ON c.customer_id = s.customer_id
  ORDER BY last_name, first_name`;

  logger.info('getCustomers query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function createProductInDB(param, product_name, barcode, brand, measure, amount, short_description, product_description, product_category, supply_price, 
  enable_retail_sales, retail_price, special_price, supplier_id, markup_price, retail_tax, enable_commision, stock_keeping_unit, default_supplier, track_stock_quantity, current_stock_quantity, reorder_limit, reorder_quantity, product_image, pcbox, product_subcategory, product_size, locations, is_package, package_items, callback){

  //create query using the data in the req.body to create the product in the db
  const createProductQuery = `INSERT INTO products (product_name, barcode, brand, measure, amount, short_description, product_description, product_category, supply_price, 
      enable_retail_sales, retail_price, special_price, markup_price, retail_tax, enable_commision, stock_keeping_unit, default_supplier, track_stock_quantity, current_stock_quantity, reorder_limit, reorder_quantity, created_by, product_image, pcbox, product_subcategory, product_size, is_package) 
    VALUES ('${(!product_name ? 'null' : product_name)}', '${(!barcode ? 'null' : barcode)}', '${(!brand ? 'null' : brand)}', '${(!measure ? 'null' : measure)}', ${(isNaN(Number(amount)) ? 0 : Number(amount))}, '${(!short_description ? 'null' : short_description)}', '${(!product_description ? 'null' : product_description)}', '${(!product_category ? 'null' : product_category)}', ${(isNaN(Number(supply_price)) ? 0 : Number(supply_price))}, ${(isNaN(Number(enable_retail_sales)) ? 0 : Number(enable_retail_sales))}, 
    ${(isNaN(Number(retail_price)) ? 0 : Number(retail_price))}, ${(isNaN(Number(special_price)) ? 0 : Number(special_price))}, ${(isNaN(Number(markup_price)) ? 0 : Number(markup_price))}, '${(!retail_tax ? 'null' : retail_tax)}', ${(isNaN(Number(enable_commision)) ? 0 : Number(enable_commision))}, '${(!stock_keeping_unit ? 'null' : stock_keeping_unit)}', '${(!default_supplier ? 'null' : default_supplier)}', ${(isNaN(Number(track_stock_quantity)) ? 0 : Number(track_stock_quantity))}, 
    ${(isNaN(Number(current_stock_quantity)) ? 0 : Number(current_stock_quantity))}, ${(isNaN(Number(reorder_limit)) ? 0 : Number(reorder_limit))}, ${(isNaN(Number(reorder_quantity)) ? 0 : Number(reorder_quantity))}, '${param.userid}', '${product_image}', '${(!pcbox ? 'null' : pcbox)}', '${(!product_subcategory ? 'null' : product_subcategory)}', '${(!product_size ? 'null' : product_size)}', ${is_package})`

  //execute the query to create the product
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createProductQuery, [], function (dataResponseObject) {

    const querygetproductid = `SELECT product_id FROM products WHERE created_datetime = (select max(created_datetime)) ORDER BY created_datetime DESC LIMIT 1`

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", querygetproductid, [], function (dataResponseObject) {

      var prodidinfo = dataResponseObject.results;
      const prod_idinfo = prodidinfo.product_id;

      if (!locations) {
        callback(dataResponseObject);
      } else {

        const insertintoproductjournal = `INSERT INTO productjournals (product_id, location_id, quantity, reason, supplier_price, supplier_id, created_by) 
        VALUES?`;
        let values = [];
  
        for (let i = 0; i < locations.length; i++) {
          values.push([prod_idinfo, locations[i].location_id, (isNaN(Number(current_stock_quantity)) ? 0 : Number(current_stock_quantity)), 'Initial Stock', (isNaN(Number(supply_price)) ? 0 : Number(supply_price)), (!supplier_id ? 'null' : supplier_id), param.userid])
        }

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertintoproductjournal, [values], function(dataResponseObject){

          const insertproductlocation = `INSERT INTO product_locations (product_id, location_id, created_by) 
          VALUES?`;
          let values1 = [];

          for (let i = 0; i < locations.length; i++) {
            values1.push([prod_idinfo, locations[i].location_id, param.userid])
          }

          if (is_package) {

            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertproductlocation, [values1], function(dataResponseObject){

              let sql = `insert into package_items (product_id, item_type, quantity) values?`;
    
              let values2 = [];
    
              for (let i = 0; i < package_items.length; i++) {
                values2.push([prod_idinfo, package_items[i].item_type, package_items[i].quantity])
              }
              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql, [values2], callback)
            })
          } else {
            mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertproductlocation, [values1], callback)
          }
        });
      }
    });
  });
}

function updateProductInDB(param, product_id, product_name, barcode, brand, measure, amount, short_description, product_description, product_category, supply_price, 
  enable_retail_sales, retail_price, special_price, markup_price, retail_tax, enable_commision, stock_keeping_unit, default_supplier, track_stock_quantity, reorder_limit, reorder_quantity, product_image, pcbox, product_subcategory, product_size, locations, is_package, package_items, callback) {

    try {

        //create query using the data in the req.body to update the product in the db
        const updateProductQuery = `UPDATE products SET 
        product_name = '${(!product_name ? 'null' : product_name)}', 
        barcode = '${(!barcode ? 'null' : barcode)}', 
        brand = '${(!brand ? 'null' : brand)}', 
        measure = '${(!measure ? 'null' : measure)}', 
        amount =  ${(isNaN(Number(amount)) ? 0 : Number(amount))},  
        short_description = '${(!short_description ? 'null' : short_description)}', 
        product_description = '${(!product_description ? 'null' : product_description)}', 
        product_category = '${(!product_category ? 'null' : product_category)}', 
        supply_price = ${(isNaN(Number(supply_price)) ? 0 : Number(supply_price))},
        supply_price = ${(isNaN(Number(supply_price)) ? 0 : Number(supply_price))},
        enable_retail_sales = ${(isNaN(Number(enable_retail_sales)) ? 0 : Number(enable_retail_sales))}, 
        retail_price = ${(isNaN(Number(retail_price)) ? 0 : Number(retail_price))}, 
        special_price = ${(isNaN(Number(special_price)) ? 0 : Number(special_price))},
        markup_price = ${(isNaN(Number(markup_price)) ? 0 : Number(markup_price))},
        retail_tax = '${(!retail_tax ? 'null' : retail_tax)}', 
        enable_commision = ${(isNaN(Number(enable_commision)) ? 0 : Number(enable_commision))},
        stock_keeping_unit = '${(!stock_keeping_unit ? 'null' : stock_keeping_unit)}',  
        default_supplier = '${(!default_supplier ? 'null' : default_supplier)}', 
        track_stock_quantity = ${(isNaN(Number(track_stock_quantity)) ? 0 : Number(track_stock_quantity))},
        reorder_limit = ${(isNaN(Number(reorder_limit)) ? 0 : Number(reorder_limit))},
        reorder_quantity =  ${(isNaN(Number(reorder_quantity)) ? 0 : Number(reorder_quantity))},
        pcbox = '${(!pcbox ? 'null' : pcbox)}', 
        product_subcategory = '${(!product_subcategory ? 'null' : product_subcategory)}', 
        product_size = '${(!product_size ? 'null' : product_size)}', 
        modified_datetime = NOW(),
        modified_by = '${param.userid}',
        product_image = '${product_image}'
        WHERE product_id = '${product_id}'`

      mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateProductQuery, [], function(dataResponseObject){

        const sql = "DELETE FROM product_locations WHERE product_id = '" + product_id + "'";

        mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function(dataResponseObject){

          if (!locations) {
            callback(dataResponseObject);
          } else {
    
            const insertproductlocation = `INSERT INTO product_locations (product_id, location_id, created_by) 
            VALUES?`;
            let values1 = [];
  
            for (let i = 0; i < locations.length; i++) {
              values1.push([product_id, locations[i].location_id, param.userid])
            }

            if (is_package){

              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertproductlocation, [values1], function(dataResponseObject){

                const sql = "DELETE FROM package_items WHERE product_id = '" + product_id + "'";

                mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", sql, [], function(dataResponseObject){
  
                  let sql1 = `insert into package_items (product_id, item_type, quantity) values?`;
    
                  let values2 = [];
        
                  for (let i = 0; i < package_items.length; i++) {
                    values2.push([prod_idinfo, package_items[i].item_type, package_items[i].quantity])
                  }

                  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", sql1, [values2], callback)

                })
              })
            } else {
              mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", insertproductlocation, [values1], callback)
            }
          }
        });
      });
    } catch (err) {
      callback(createDataResponseObject(err, "Unable to update Products"));
    }
}

function deleteProductInDB(param, product_id, callback) {

  const qry = `DELETE FROM products WHERE product_id = '${product_id}'`

  logger.info('deleteProduct query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], callback)
}

function doesProductExist(param, product_name, barcode, callback) {
  //create query to check if the user already exists
  const doesProductExistQuery = `SELECT * FROM products WHERE product_name = '${product_name}' AND barcode = '${barcode}'`
  //holds the results  from the query
  const sqlCallback = (dataResponseObject) => {
    //calculate if user exists or assign null if results is null
    const doesProductExist = dataResponseObject.results !== null ? dataResponseObject.results.length > 0 ? true : false : null
    //check if there are any users with this username and return the appropriate value
    callback(dataResponseObject.error, doesProductExist)
  }
  //execute the query to check if the user exists
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", doesProductExistQuery, [], sqlCallback)
}

function getProducts(param, callback) {

  const qry = `SELECT * FROM products ORDER BY product_name`;
  logger.info('getProducts query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

function getProductsById(param, callback) {

  const qry = `SELECT p.product_id, p.product_name, pb.brand_name, p.brand, p.measure, p.amount, p.short_description, p.product_description, pc.category_name, p.product_category, 
    p.supply_price, p.enable_retail_sales, p.retail_price, p.special_price, p.markup_price, p.retail_tax, p.enable_commision, s.supplier_name,
    p.track_stock_quantity, p.current_stock_quantity, p.stock_keeping_unit, p.reorder_limit, p.reorder_quantity, p.created_datetime, p.product_subcategory, p.pcbox, p.product_size
    FROM products p
    LEFT JOIN product_brands pb ON p.brand = pb.brand_id
    LEFT JOIN product_categories pc ON p.product_category = pc.category_id
    LEFT JOIN suppliers s ON p.default_supplier = s.supplier_id
    WHERE p.product_id = '${param.product_id}'`;

    logger.info('getProducts query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {
    
      if(dataResponseObject.error){
        callback(dataResponseObject);
      }else{
        if(dataResponseObject.results.length == 0){
          var resp = createDataResponseObject("Products not found.", null);
        }else{
          var products = {
            productsInfo: dataResponseObject.results,
            locations: []
          };

          const qry1 = `SELECT p.location_id, t.LocationName FROM product_locations p
          LEFT JOIN rbtech_admindb.tenantlocations t ON p.location_id = t.TenantLocationID 
          WHERE p.product_id = '${param.product_id}'`;

          mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry1, [], function (dataResponseObject) {

            if(dataResponseObject.error){
              callback(dataResponseObject);
            }else{

              products.locations = dataResponseObject.results;
            }

            var resp = createDataResponseObject(null, products);
            callback(resp);
          });
        }
      }
  });
}

//

//Deals CRUD
function createDealInDB(param, deal_name, deal_value, php_or_pctg, enable_service_sale, enable_product_sale, enable_voucher_sale, enable_membership_sale, callback) {

  //create query using the data in the req.body to create the deal in the db
  const createDealkQuery = `INSERT INTO deals (deal_name, deal_value, php_or_pctg, enable_service_sale, enable_product_sale, enable_voucher_sale, enable_membership_sale, created_by) 
  VALUES ('${deal_name}', '${deal_value}', '${php_or_pctg}', ${enable_service_sale}, ${enable_product_sale}, ${enable_voucher_sale}, ${enable_membership_sale}, '${param.userid}')`

  //execute the query to create the deal
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createDealkQuery, [], callback)
}

function updateDealInDB(param, deals_id, deal_name, deal_value, php_or_pctg, enable_service_sale, enable_product_sale, enable_voucher_sale, enable_membership_sale, callback) {

  //create query using the data in the req.body to update the deal in the db
  const updateDealsQuery = `UPDATE deals SET 
  deal_name = '${deal_name}', 
  deal_value = '${deal_value}', 
  php_or_pctg = '${php_or_pctg}', 
  enable_service_sale = ${enable_service_sale}, 
  enable_product_sale = ${enable_product_sale}, 
  enable_voucher_sale = ${enable_voucher_sale}, 
  enable_membership_sale = ${enable_membership_sale},
  modified_datetime = NOW(), 
  modified_by = '${param.userid}'
  WHERE deals_id = '${deals_id}'`

  //execute the query to update the deal
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateDealsQuery, [], callback)
}

function deleteDealInDB(param, deals_id, callback) {

  //create query using the data in the req.body to delete the deal in the db
  const deleteDealsQuery = `DELETE FROM deals WHERE deals_id = '${deals_id}'`

  //execute the query to delete the deal
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteDealsQuery, [], callback)
}

function getDeals(param, callback) {

  const qry = `SELECT * FROM deals ORDER BY deal_name`;
  logger.info('getDeals query is: ', qry);

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
    callback(dataResponseObject);
  });
}

//Supplier CRUD
function createSupplierInDB(param, supplier_name, supplier_description, contact_first_name, contact_last_name, contact_phone_number, contact_tel_number, contact_email, contact_website, address_street, address_suburb, address_city, address_state, address_zip_postalcode, address_country, callback) {

  //create query using the data in the req.body to create the suppliers in the db
  const createSuppliersQuery = `INSERT INTO suppliers (supplier_name, supplier_description, contact_first_name, contact_last_name, contact_phone_number, contact_tel_number, contact_email, contact_website, address_street, address_suburb, address_city, address_state, address_zip_postalcode, address_country, created_by) 
  VALUES ('${supplier_name}', '${supplier_description}', '${contact_first_name}', '${contact_last_name}', '${contact_phone_number}', '${contact_tel_number}', '${contact_email}', '${contact_website}', '${address_street}', '${address_suburb}', '${address_city}', '${address_state}', '${address_zip_postalcode}', '${address_country}', '${param.userid}')`

  //execute the query to create the suppliers
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", createSuppliersQuery, [], callback)
}

function updateSupplierInDB(param, supplier_id, supplier_name, supplier_description, contact_first_name, contact_last_name, contact_phone_number, contact_tel_number, contact_email, contact_website, address_street, address_suburb, address_city, address_state, address_zip_postalcode, address_country, callback) {

  //create query using the data in the req.body to update the suppliers in the db
  const updateSuppliersQuery = `UPDATE suppliers SET 
  supplier_name = '${supplier_name}', 
  supplier_description = '${supplier_description}', 
  contact_first_name = '${contact_first_name}', 
  contact_last_name = '${contact_last_name}', 
  contact_phone_number = '${contact_phone_number}', 
  contact_tel_number = '${contact_tel_number}', 
  contact_email = '${contact_email}',
  contact_website = '${contact_website}',
  address_street = '${address_street}',
  address_suburb = '${address_suburb}',
  address_city = '${address_city}',
  address_state = '${address_state}',
  address_zip_postalcode = '${address_zip_postalcode}',
  address_country = '${address_country}',
  modified_datetime = NOW(),
  modified_by = '${param.userid}'
  WHERE supplier_id = '${supplier_id}'`

  //execute the query to update the suppliers
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", updateSuppliersQuery, [], callback)
}

function deleteSupplierInDB(param, supplier_id, callback) {

  //create query using the data in the req.body to delete the suppliers in the db
  const deleteSuppliersQuery = `DELETE FROM suppliers WHERE supplier_id = '${supplier_id}'`

  //execute the query to delete the deal
  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", deleteSuppliersQuery, [], callback)
}

function getSuppliers(param, callback) {

  const qry = `SELECT s.supplier_id, s.supplier_name, s.supplier_description, s.contact_first_name, s.contact_last_name,
    s.contact_phone_number, s.contact_tel_number, s.contact_email, COUNT(p.product_id) AS TotalProducts, s.contact_website, s.address_street, s.address_suburb, s.address_city,
    s.address_state, s.address_zip_postalcode, s.address_country, s.created_datetime
    FROM suppliers s
    LEFT JOIN products p ON s.supplier_id = p.default_supplier
    GROUP BY s.supplier_id
    ORDER BY s.supplier_name ASC`;

    logger.info('getSuppliers query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "multiple", qry, [], function (dataResponseObject) {
      callback(dataResponseObject);
  });
}

//getSuppliersById

function getSuppliersById(param, callback) {

  const qry = `SELECT s.supplier_id, s.supplier_name, s.supplier_description, s.contact_first_name, s.contact_last_name,
    s.contact_phone_number, s.contact_tel_number, s.contact_email, COUNT(p.product_id) AS TotalProducts, s.contact_website, s.address_street, s.address_suburb, s.address_city,
    s.address_state, s.address_zip_postalcode, s.address_country, s.created_datetime
    FROM suppliers s
    LEFT JOIN products p ON s.supplier_id = p.default_supplier
    WHERE s.supplier_id = '${param.supplier_id}'`;

    logger.info('getSuppliersById query is: ', qry);

    mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, "single", qry, [], function (dataResponseObject) {

      if(dataResponseObject.error){
        callback(dataResponseObject);
      }else{
        if(dataResponseObject.results.length == 0){
          var resp = createDataResponseObject("Suppliers not found.", null);
        }else{
          var suppliers = {
            suppliersInfo: dataResponseObject.results
          };
          var resp = createDataResponseObject(null, suppliers);
          callback(resp);
        }
      }
  });
}

function mySQLDate(sDate) {

  var resultDate = (new Date(sDate)).toISOString().slice(0, 19).replace('T', ' ');
  logger.info("mySQLDate: orig:" + sDate + " converted:" + resultDate);

  return resultDate;
}

function searchTenantProductService(param, callback) {
  let query = `SELECT * FROM tenants INNER JOIN tenantproductsandservices ON tenants.tenant_id = tenantproductsandservices.tenant_id`;
  // let query = `SELECT * FROM tenantproductsandservices WHERE product_service_type = "${param.service_type}"`;
  if (param.search) {
    query += ` and tenantproductsandservices.name LIKE "%${param.search}%" OR tenants.tenant_name LIKE "%${param.search}"`;
  }
  if (param.location) {
    
  }
  query += ` GROUP BY tenants.tenant_id`;
  mySqlConnection.queryAdminDatabase(query, response => {
    callback(response);
  });
}

function getTenantProductsAndServices(param, callback) {
  let query = `SELECT * FROM tenantproductsandservices WHERE tenant_id = "${param.tenant_id}" ORDER BY product_service_type ASC`;
  mySqlConnection.queryAdminDatabase(query, response => {
    callback(response);
  });
}

function getTenantStaffs(param, callback) {
  let query = `SELECT tenantuser_id, firstname, lastname, emailaddress, users.user_id FROM tenantusers LEFT JOIN users ON tenantusers.user_id = users.user_Id WHERE tenantusers.tenant_id = "${param.tenant_id}"`;
  mySqlConnection.queryAdminDatabase(query, response => {
    callback(response);
  });
}

function getAllMyBookings(param, callback) {
  let query = `SELECT * FROM mybookings LEFT JOIN tenants ON mybookings.tenant_id = tenants.tenant_id WHERE user_id = "${param.user_id}"`;
  mySqlConnection.queryAdminDatabase(query, response => {
    callback(response);
  });
}

function getAllTenants(param, callback) {
  let query = `SELECT * FROM tenants LEFT JOIN companyinfo ON tenants.tenant_id = companyinfo.Tenant_ID`;
  if(param.tenant) {
    // query += ` WHERE tenant_id IN (${(JSON.parse(param.tenant)).map((val) => `"${val}"`)})`;
    query += ` WHERE tenants.tenant_id IN (${(JSON.parse(JSON.parse(param.tenant)).map((val) => String(`"${val}"`))).join(",")})`;
  }
  mySqlConnection.queryAdminDatabase(query, response => {
    callback(response);
  });
}

function getAllTenantTypes(param, callback) {
  let query = `SELECT * FROM tenantproductsandservices GROUP BY product_service_type`;
  mySqlConnection.queryAdminDatabase(query, response => {
    callback(response);
  });
}

function createMyBookingUser(param, customer_id, resource_id, staffs_id, service_id, entry_type, start_datetime, end_datetime, notes, callback) {
  const createMyBookingQuery = `INSERT INTO mybookings (tenant_id, user_id, resource_id, staff_id, service_id, entry_type, start_datetime, end_datetime, notes, created_by) 
  VALUES ('${param.tenantid}', '${customer_id}', '${resource_id}', '${staffs_id}', '${service_id}', '${entry_type}', '${mySQLDate(start_datetime)}', '${mySQLDate(end_datetime)}', '${notes}', '${param.userid}')`;
  mySqlConnection.queryAdminDatabase(createMyBookingQuery, response => {
    callback(response);
  });
}

function sendErrorResponse(res, message, error) {
  logger.error("mySqlDbAccess: sendErrorResponse: Message: " +
    message + "; Error: " + error);
  res
    .status(error !== null ? error !== null ? 400 : 400 : 200)
    .json({
      'message': message,
      'error': error,
    });
}

function createDataResponseObject(error, results) {
  return {
    error: error,
    results: results === undefined ? null : results === null ? null : results
  };
}
