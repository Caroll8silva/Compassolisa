const PeopleRepository = require('../repository/peopleRepository')

class PeopleService { 

    async create(payload) {
        
        const result = await PeopleRepository.create(payload)
        return result

    }
} 

module.exports = new PeopleService() 


