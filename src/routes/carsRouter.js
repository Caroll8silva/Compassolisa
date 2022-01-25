const carsController = require('../app/controllers/carsController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', carsController.createCar)
    server.use(prefix, routes);
  } 
