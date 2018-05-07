const products = require('./products');

module.exports = function (app, db) {
    products(app, db); // this module is tested and works
    
}