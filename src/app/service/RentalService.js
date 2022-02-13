/* eslint-disable no-await-in-loop */
const NotUnique = require('../errors/NotUnique');
const BadRequest = require('../errors/BadRequest');
const RentalRepository = require('../repository/RentalRepository');
const isUnique = require('../utils/rental/isUniqueCnpj');

class RentalService { 

  async create(payload) {

    const address = payload.endereco;
    for (let countCEP = 0; countCEP < payload.endereco.length; countCEP += 1) {
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
    const countIsFilial = address.filter((value) => value.isFilial !== true);

    if (countIsFilial.length === 0 )   {
      throw new BadRequest('There is no parent rental company in addresses ');
    } 
    else if( countIsFilial.length > 1 ){
      throw new NotUnique('There can only be one parent rental company');
      
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
    const countIsFilial = address.filter((value) => value.isFilial !== true);

    if (countIsFilial.length === 0 )   {
      throw new BadRequest('There is no parent rental company in addresses ');
    } 
    else if( countIsFilial.length > 1 ){
      throw new NotUnique('There can only be one parent rental company');
      
    }
    await isUnique(payload.cnpj);
    const result = await RentalRepository.update(id, payload);
    return result;

  }  

}   

module.exports = new RentalService();  
