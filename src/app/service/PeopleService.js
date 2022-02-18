const PeopleRepository = require('../repository/peopleRepository');
const isUnique = require('../utils/people/isUniqueValidate');


class PeopleService { 

  async create(payload) {
     
    await isUnique(payload.cpf);
    await isUnique(payload.email);
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

    await isUnique(payload.cpf);
    await isUnique(payload.email);
    const result = await PeopleRepository.update(id, payload);
    return result;

  }  
} 

module.exports = new PeopleService(); 


