const PeopleRepository = require('../repository/peopleRepository')

class PeopleService { 

    async create(payload) {
        
        const result = await PeopleRepository.create(payload)
        return result

    }
    async find(payload) {

        const result = await PeopleRepository.find(payload)
        return result

    }
    async findOne(payload) {

        const result = PeopleRepository.findOne(payload)
        return result

      }
} 

module.exports = new PeopleService() 


