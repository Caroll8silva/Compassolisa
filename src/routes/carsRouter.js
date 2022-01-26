const carsController = require('../app/controllers/carsController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', carsController.createCar)
    routes.get('/', carsController.getAllCars)
    server.use(prefix, routes)
  } 
