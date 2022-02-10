/* eslint-disable no-await-in-loop */
const RentalRepository = require('../repository/RentalRepository');
const isUnique = require('../utils/rental/isUniqueCnpj');

class RentalService { 

  async create(payload) {
  
    for (let countCEP = 0; countCEP < payload.endereco.length; countCEP += 1) {
      const address = payload.endereco;
      const response = address[countCEP];
      const data = await RentalRepository.findCep(response.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = data;
      response.cep = cep;
      response.logradouro = logradouro;
      response.complemento = complemento;
      response.bairro = bairro;
      response.localidade = localidade;
      response.uf = uf;
    }

    await isUnique(payload.cnpj);
    const result = await RentalRepository.create(payload);
    return result;
  
  }
  
  async find(payload) {

    const result = await RentalRepository.find(payload);
    return result;

  }

  async findOne(payload) {

    const result = RentalRepository.findOne(payload);
    return result;

  }

  async delete(payload) {

    const result = await RentalRepository.delete(payload);
    return result;

  }

  async update(id, payload) {
    
    await isUnique(payload.cnpj);
    const result = await RentalRepository.update(id, payload);
    return result;

  }  

}   

module.exports = new RentalService();  
