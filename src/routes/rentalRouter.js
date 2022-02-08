const RentalController = require('../app/controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalController.createRental);
  routes.get('/', RentalController.getAllRentals);
  server.use(prefix, routes); 
};