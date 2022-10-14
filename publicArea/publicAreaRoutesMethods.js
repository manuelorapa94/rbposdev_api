let db

module.exports = injectedDBAccess => {

    db = injectedDBAccess

    return {
        searchTenant: searchTenant,
        getTenantProductsServices: getTenantProductsServices,
        getTenantStaffs, getTenantStaffs,
        getAllTenants: getAllTenants,
        getAllTenantTypes: getAllTenantTypes,
        myBookings: myBookings
        
    }
}

function uploadSingle(req, res) {
   
};

function searchTenant(req, res) {
    db.searchTenantProductService(req.query, objectResponse => {
        res.status(200).json({
            'message': 'Successfully search tenant',
            'data': objectResponse.results
        });
    });
};

function getTenantProductsServices(req, res) {
    db.getTenantProductsAndServices(req.query, objectResponse => {
        res.status(200).json({
            'message': 'Successfully get tenant products and services',
            'data': objectResponse.results
        });
    });
};

function getTenantStaffs(req, res) {
    db.getTenantStaffs(req.query, objectResponse => {
        res.status(200).json({
            'message': 'Successfully get tenant staffs',
            'data': objectResponse.results
        });
    });
};

function getAllTenants(req, res) {
    db.getAllTenants(req.query, objectResponse => {
        res.status(200).json({
            'message': 'Successfully get tenant staffs',
            'data': objectResponse.results
        });
    });
};

function getAllTenantTypes(req, res) {
    db.getAllTenantTypes(req.query, objectResponse => {
        res.status(200).json({
            'message': 'Successfully get tenant types',
            'data': objectResponse.results
        });
    });
};

function myBookings(req, res) {
    db.getAllMyBookings(req.query, objectResponse => {
        res.status(200).json({
            'message': 'Successfully get all bookings types',
            'data': objectResponse.results
        });
    });
}