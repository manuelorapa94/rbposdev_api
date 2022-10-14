const { route } = require("express/lib/application")

module.exports = (router, expressApp, publicAreaRoutesMethods) => {

    router.get('/all-tenants', publicAreaRoutesMethods.getAllTenants)
    router.get('/all-tenants-type', publicAreaRoutesMethods.getAllTenantTypes)
    router.get('/search-tenant', publicAreaRoutesMethods.searchTenant)
    router.get('/tenant-product-services',  publicAreaRoutesMethods.getTenantProductsServices)
    router.get('/tenant-staffs',  publicAreaRoutesMethods.getTenantStaffs)

    router.get('/my-bookings',  expressApp.oauth.authorise(), publicAreaRoutesMethods.myBookings)


    // // Single file
    // expressApp.post('/upload/single', upload.single('uploaded_file'), function (req, res) {
    //     // req.file is the name of your file in the form above, here 'uploaded_file'
    //     // req.body will hold the text fields, if there were any 
    //     console.log(req.file, req.body)
    //     logger.info("upload/single", req.body)
    // });

  
    router.post('/upload/single',  expressApp.oauth.authorise(), publicAreaRoutesMethods.myBookings)

    return router
}