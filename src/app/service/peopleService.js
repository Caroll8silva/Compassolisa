const PeopleRepository = require('../repository/peopleRepository');
const isUniqueCpf = require('../utils/people/isUniqueCpf');
const isUniqueEmail = require('../utils/people/isUniqueEmail');

class PeopleService { 

  async create(payload) {
     
    await isUniqueCpf(payload.cpf);
    await isUniqueEmail(payload.email);
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

    await isUniqueCpf(payload.cpf);
    await isUniqueEmail(payload.email);
    const result = await PeopleRepository.update(id, payload);
    return result;

  }  
} 

module.exports = new PeopleService(); 


