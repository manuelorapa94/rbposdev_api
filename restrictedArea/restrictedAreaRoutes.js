module.exports =  (router, expressApp, restrictedAreaRoutesMethods) => {

    //route for entering into the restricted area.

    //Permissions
    router.post('/permissions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createpermissions)
    router.put('/permissions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatepermissions)
    router.get('/permissions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getpermissions)

    //Working Hours 
    router.post('/working_hours',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createworkinghourse)
    router.put('/working_hours',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateworkinghourse)
    router.delete('/working_hours',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteworkinghourse)
    router.get('/working_hours',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getworkinghours)

    //Tips
    router.post('/tips',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createtips)
    router.put('/tips',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatetips)

    //Taxes
    router.post('/taxes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createtaxes)
    router.put('/taxes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatetaxes)
    router.delete('/taxes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletetaxes)
    router.get('/taxes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.gettaxes)
    router.get('/taxes/:taxes_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.gettaxesbyid)

    //Purchase Order
    router.post('/purchase_order',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createpurchaseorder)
    router.put('/purchase_order',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatepurchaseorder)
    router.post('/get_purchase_order',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getpurchaseorder)
    router.get('/get_purchase_order/:purchase_order_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getpurchaseorderbyid)

    //Memberships
    router.post('/memberships',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createmembership)
    router.put('/memberships',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatemembership)
    router.delete('/memberships',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletemembership)
    router.get('/memberships',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getmembership)

    //Send Invoice Email
    router.post('/send_email',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.send_mail)

    //Invoice Sequencing
    router.get('/invoice_sequencing',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getinvoicesequencing)
    router.put('/update_invoice_sequencing',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateinvoicesequencing)
    
    //Vouchers
    router.post('/vouchers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createvouchers)
    router.put('/vouchers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatevouchers)
    router.delete('/vouchers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletevouchers)
    router.get('/vouchers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistvouchers)
    router.get('/vouchers/:VoucherID',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getvouchersbyid)
    router.post('/voucher_sales_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.vouchersales)
    router.post('/voucher_redeemption_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.voucherredemptions)
    router.post('/voucher_outstandingbalance_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.voucheroutstandingbalance)
    router.post('/customer_vouchers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getcustomersvouchers)

    //Source of Sales
    router.post('/sourceofsales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createsourceofsales)
    router.put('/sourceofsales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatesourceofsales)
    router.delete('/sourceofsales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletesourceofsales)
    router.get('/sourceofsales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getsourceofsales)

    //User Profile
    router.post('/userprofile',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createuserprofile)
    router.put('/userprofile',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateuserprofile)
    router.get('/userprofile',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getusersprofile)

    //Appointment Types
    router.post('/appointmenttypes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createappointmenttypes)
    router.put('/appointmenttypes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateappointmenttypes)
    router.delete('/appointmenttypes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteappointmenttypes)
    router.get('/appointmenttypes',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getappointmenttypes)

    //Shipping Courier
    router.post('/shippingcourier',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createshippingcourier)
    router.put('/shippingcourier',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateshippingcourier)
    router.delete('/shippingcourier',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteshippingcourier)
    router.get('/shippingcourier',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getshippingcourier)

    //Commisions
    router.post('/commisions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createcommision)
    router.put('/commisions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatecommision)
    router.delete('/commisions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletecommision)
    router.get('/commisions',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getListcommision)
    router.get('/commisions/:CommisionID',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getcommisionbyid)

    //Business Details
    router.put('/businessdetails',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatebusinessdetails)
    router.get('/businessdetails',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getbusinessdetailsbytenant)

    //Close Dates
    router.post('/closedates',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createclosedates)
    router.put('/closedates',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateclosedates)
    router.delete('/closedates',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteclosedates)
    router.get('/closedates',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getclosedates)

    //Referral Sources
    router.post('/referralsources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createreferralsources)
    router.put('/referralsources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatereferralsources)
    router.delete('/referralsources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletereferralsources)
    router.get('/referralsources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getreferralsources)

    //Resources
    router.post('/resources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createresourcesdb)
    router.put('/resources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateresourcesdb)
    router.delete('/resources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteresourcesdb)
    router.get('/resources',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistresoureces)
    router.get('/resources/:resourceid',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getresourcesbyid)

    //Payment Types
    router.post('/payment_types',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createpaymenttype)
    router.put('/payment_types',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatepaymenttype)
    router.delete('/payment_types',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletepaymenttype)
    router.get('/payment_types',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistpaymenttype)
    router.get('/payment_types/:payment_typeid',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getpaymenttypebyid)

    //Locations
    router.post('/locations',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createlocations)
    router.put('/locations',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatelocations)
    router.delete('/locations',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletelocations)
    router.get('/locations',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistlocations)
    router.get('/locationsbytenantid',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistlocationbytenantid)

    //Product Brand
    router.post('/product_brands',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createproductbrand)
    router.put('/product_brands',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateproductbrand)
    router.delete('/product_brands',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteproductbrand)
    router.get('/product_brands',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistproductbrand)

    //Product Unit of Measures
    router.post('/product_unitOfMeasures',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createproductunitofmeasure)
    router.put('/product_unitOfMeasures',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateproductunitofmeasure)
    router.delete('/product_unitOfMeasures',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteproductunitofmeasure)
    router.get('/product_unitOfMeasures',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistproductunitofmeasure)

    //Product Category
    router.post('/product_categories',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createproductcategory)
    router.put('/product_categories',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateproductcategory)
    router.delete('/product_categories',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteproductcategory)
    router.get('/product_categories',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getlistproductcategory)

    //Sales
    router.post('/sales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createsales)
    router.put('/sales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatesales)
    router.delete('/sales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletesales)
    router.post('/sales_history',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.sales)
    router.get('/sales/:sale_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.saleById)
    router.post('/daily_sales_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dailysalesreport)
    router.post('/sales_paymenttypes_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbypaymenttype)
    router.post('/sales_byproductcategories_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salebyproductcategory)
    router.post('/sales_byshippingcourier_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyshippingcourier)
    router.post('/sales_byitem_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyitem)
    router.post('/sales_location_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbylocation)
    router.post('/sales_byhours_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyhours)
    router.post('/sales_bycustomers_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbycustomers)
    router.post('/sales_bychannel_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbychannel)
    router.post('/sales_byteammembers_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyteammembers)
    router.get('/sales_defaultcustomer',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.defaultcustomer)
    router.put('/updateinvoicestatus',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateinvoicestatus)
    router.put('/updatedeliverystatus',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatedeliverystatus)
    router.post('/multi_payments',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createmultipayments)
    router.get('/sales_voucherslist',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getsalesvouchers)
    router.post('/sales_bystaffmembers_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbystaffmembers)
    router.post('/sales_bymembersbreakdown_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbymemberbreakdown)
    router.post('/sales_byyear_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyyear)
    router.post('/sales_bylogs_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbylogs)
    router.post('/sales_bymonths_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbymonths)
    router.post('/sales_byday_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbydays)
    router.post('/sales_byhourofday_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyhourofday)
    router.post('/sales_byquarter_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesbyquarter)
    router.post('/sales_membership_list',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salesmembership)

    //Finances
    router.post('/finances_paymentsummary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.financespaymentsummary)
    router.post('/finances_paymentlogs_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.financespaymentslog)
    router.post('/finances_taxessummary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.financestaxessummary)
    router.post('/finances_summary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.financessummary)
    router.post('/finances_outstandinginvoices_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.outstandinginvoices)

    //Tip Collected
    router.post('/tips_collected_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.tipscollected)

    //Discount Summary
    router.post('/discount_summary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.discountsummary)

    //Inventory
    router.post('/inventorystockmovementlog_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventorystockmovementlog)
    router.post('/inventorystockmovementsummary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventorystockmovementsummary)
    router.post('/inventorystockonhand_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventorystockonhand)
    router.post('/inventoryproductsalesperformance_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventoryproductsalesperformance)
    router.post('/inventorystockconsumption_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventorystockconsumption)

    //Appointment
    router.post('/appointmentsummary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.appointmentsummary)
    router.post('/appointmentcancellations_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.appointmentcancellations)

    //Bookings
    router.post('/bookings',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createbookings)
    router.put('/bookings',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatebookings)
    router.delete('/bookings',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletebookings)
    router.get('/bookings',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.bookings)

    //Services
    router.post('/services',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createservices)
    router.put('/services',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateservices)
    router.delete('/services',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteservices)
    router.get('/services',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.services)
    router.get('/services/:ServiceID',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.servicesgetbyid)
    router.get('/servicescategory',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.servicescategory)

    //Calendars
    router.post('/calendars',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createcalendar)
    router.put('/calendars',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatecalendar)
    router.delete('/calendars',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletecalendar)
    router.get('/calendars',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.calendars)
    router.get('/calendars/:calendar_entryid',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.calendarById)
    router.post('/calendarsfilter',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.calendarfilter)
    router.put('/calendar_status',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatecalendarstatus)

    //Staffs
    router.post('/staffs',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createstaff)
    router.put('/staffs',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatestaff)
    router.delete('/staffs',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletestaff)
    router.get('/staffs',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.staff)
    router.get('/staffs/:StaffID',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.staffbyid)

    //Team Member Reports
    router.post('/teammemberworkinghours_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.teammemberworkinghours)
    router.post('/tipsbyteammember_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.tipsbyteammember)
    router.post('/teammembercommssiondetailed_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.teammembercommssiondetailed)
    router.post('/teammembercommssionsummary_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.teammembercommssionsummary)

    //Cancel Reason
    router.post('/cancelreason',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createcancelreason)
    router.put('/cancelreason',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatecancelreason)
    router.delete('/cancelreason',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletecancelreason)
    router.get('/cancelreason',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.cancelreason)

    //Customers
    router.post('/customers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createcustomers)
    router.put('/customers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatecustomers)
    router.delete('/customers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletecustomers)
    router.get('/customers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.customers)
    router.get('/customers/:customer_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.customerbyid)
    router.post('/user_addresses',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createuseraddresses)
    router.put('/user_addresses',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateuseraddresses)
    router.post('/client_list_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.clientlist)
    router.post('/client_retention_report',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.clientretention)
    
    //Products
    router.post('/products',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createproducts)
    router.put('/products',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateproducts)
    router.delete('/products',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deleteproducts)
    router.get('/products',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.products)
    router.put('/products_in_stock',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updateinstock)
    router.put('/products_dec_stock',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatedestock)
    router.get('/products/:product_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.productsbyid)
    router.get('/productstocksonhandperlocation/:product_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.productstocksonhandperlocation)
    
    //Deals
    router.post('/deals',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createdeals)
    router.put('/deals',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatedeals)
    router.delete('/deals',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletedeals)
    router.get('/deals',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deals)
    router.get('/dealsbyid',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getdealsbyid)
    
    //Suppliers
    router.post('/suppliers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.createsuppliers)
    router.put('/suppliers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.updatesuppliers)
    router.delete('/suppliers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.deletesuppliers)
    router.get('/suppliers',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.suppliers)
    router.get('/suppliers/:supplier_id',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.suppliersbyid)

    router.post('/users/changecurrentlocation',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.changecurrentlocation)


    // REPORTS ======================================================================

    // Dashboard Recent Sales
    router.post('/dashboard_recentsales',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardrecentsales)

    // Dashboard Top Services
    router.get('/dashboard_topservices',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardtopservices)

    // Dashboard Top Team Member
    router.get('/dashboard_topteammember',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardtopteammember)

    // Dashboard Appointments Activity
    router.get('/dashboard_appointmentsactivity',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardappointmentsactivity)

    // Dashboard Today's Next Appointments
    router.get('/dashboard_todaysnextappointments',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardtodaysnextappointments)

    // Dashboard Upcoming Appointments
    router.post('/dashboard_upcomingappointments',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardupcomingappointments)

    // Report on the current product stocks on hand
    router.post('/inventoryperlocationreport',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventoryperlocationreport)

    // Report on the products that has 0 stocks
    router.post('/outofstockreport',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.outofstockreport)

    // Report on the scheduled appointments per day
    router.post('/appointmentsreport',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.appointmentsreport)

    // Report on product Ins and Outs (Increase and Decrease)
    router.post('/inventorytransactionsreport',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.inventorytransactionsreport)

    // Report on Sales per Day
    router.post('/salessummaryreport',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.salessummaryreport)

    // Dashboard Report
    router.post('/dashboardreport',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.dashboardreport)

    return router
}
