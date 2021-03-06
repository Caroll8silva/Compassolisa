const carsController = require('../app/controllers/CarsController');
const postCarValidation = require('../app/validation/cars/createCar');
const getCarValidation = require('../app/validation/cars/getCar');
const patchAcessoryValidation = require('../app/validation/cars/patchAcessory');
const authentication = require('../app/validation/authentication');
const idValidation = require('../app/validation/idValidation');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', authentication, postCarValidation, carsController.createCar);
  routes.get('/', authentication, getCarValidation, carsController.getAllCars);
  routes.get('/:id', idValidation, authentication, getCarValidation, carsController.getOneCar);
  routes.delete('/:id', idValidation, authentication, carsController.deleteCar);
  routes.put('/:id', authentication, getCarValidation, carsController.updateCar);
  routes.patch('/:id/acessorios/:id2', authentication,  patchAcessoryValidation, carsController.updateAcessories);
  server.use(prefix, routes); 
};