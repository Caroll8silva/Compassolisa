const PeopleRepository = require('../repository/peopleRepository');

class PeopleService { 

  async create(payload) {
        
    const result = await PeopleRepository.create(payload);
    return result;

  }

  async find(payload) {

    const result = await PeopleRepository.find(payload);
    return result;

  }

  async findOne(payload) {

    const result = PeopleRepository.findOne(payload);
    return result;

  }

  async delete(payload) {

    const result = await PeopleRepository.delete(payload);
    return result;

  }

  async update(id, payload) {

    const result = await PeopleRepository.update(id, payload);
    return result;

  }  
} 

module.exports = new PeopleService(); 


