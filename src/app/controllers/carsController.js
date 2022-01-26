const carsService = require('../service/carsService')

class CarsController { 

    async createCar(req, res) {
        try {
            const result = await carsService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json(error.message)
          }
    }
    async getAllCars(req, res) {
        try {

          const result = await carsService.find(req.query)
          return res.status(200).json(result)

        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}


module.exports = new CarsController()
