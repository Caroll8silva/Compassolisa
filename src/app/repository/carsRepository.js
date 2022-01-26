const carsSchema = require('../schema/cars.js')

class CarsRepository { 
    async create(payload) {
      
      return carsSchema.create(payload)
  }

    async find(payload) {

      return carsSchema.find(payload)
  }

}

module.exports = new CarsRepository() 

