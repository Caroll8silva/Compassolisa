const CarsRepository = require('../repository/carsRepository.js')

class CarsService { 

    async create(payload) {
        
        const result = await CarsRepository.create(payload)
        return result

    }
    async find(payload) {
        
        const result = await CarsRepository.find(payload)
        return result

    }
} 

module.exports = new CarsService()



