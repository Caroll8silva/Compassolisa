const RentalController = require('../app/controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalController.createRental);
  routes.get('/', RentalController.getAllRentals);
  routes.get('/:id', RentalController.getOneRental);
  routes.delete('/:id', RentalController.deleteRental);
  routes.put('/:id', RentalController.updateRental);
  server.use(prefix, routes); 
};