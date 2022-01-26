const carsController = require('../app/controllers/carsController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', carsController.createCar)
  routes.get('/', carsController.getAllCars)
  routes.get('/:id', carsController.getOneCar)
  server.use(prefix, routes) 
}