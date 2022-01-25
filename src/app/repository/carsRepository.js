const carsSchema = require('../schema/cars.js')

class CarsRepository { 
    async create(payload) {
      
    return carsSchema.create(payload);
  }
}

module.exports = new CarsRepository()

