/* eslint-disable no-await-in-loop */
const RentalRepository = require('../../repository/RentalRepository');
const NotUnique = require('../../errors/NotUnique');
const BadRequest = require('../../errors/BadRequest');

class AddressValid {

  async searchCep (payload) {
    
    const address = payload.endereco;
    for (let countCEP = 0; countCEP < address.length; countCEP += 1) {
      const response = address[countCEP];
      const search = await RentalRepository.findCep(response.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = search;
      response.cep = cep;
      response.logradouro = logradouro;
      response.complemento = complemento;
      response.bairro = bairro;
      response.localidade = localidade;
      response.uf = uf;
      
    }

  };

  async filialValid (payload) {
    
    const address = payload.endereco;
    const countIsFilial = address.filter((value) => value.isFilial !== true);
    if (countIsFilial.length === 0 )   {

      throw new BadRequest('There is no parent rental company in addresses ');
    } 
    else if( countIsFilial.length > 1 ){
      throw new NotUnique('There can only be one parent rental company');
      
    }
  }
}

module.exports = new AddressValid();