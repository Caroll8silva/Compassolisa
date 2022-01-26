const carsSchema = require('../schema/cars.js')

class CarsRepository { 
  async create(payload) {

    return carsSchema.create(payload)
  }

  async find(payload) {

    return carsSchema.find(payload)
  }
  async findOne(payload) {
    
    return carsSchema.findById(payload)
  }
}

module.exports = new CarsRepository()   