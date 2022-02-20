/* eslint-disable no-undef */
const supertest = require('supertest');
const rentalSchema = require('../../../src/app/schema/rental');
const peopleSchema = require("../../../src/app/schema/people");
const app = require('../../infra/AppTest');

let token;
beforeAll(async () => {


  const peopleInformation = {
    nome: "joaozinho ciclano",
    cpf: "131.147.860-49",
    data_nascimento: "03/03/2000",
    email: "joazinho@email.com",
    senha: "123456",
    habilitado: "sim"
  
  };

  await supertest(app).post('/api/v1/people/').send(peopleInformation);

  const response = await supertest(app).post('/api/v1/authenticate/').send({ 
    email: peopleInformation.email, 
    senha: peopleInformation.senha 
  });

  const { body } = response;
  token = body.token;

});

beforeEach(async () => {
    
  await rentalSchema.deleteMany();
  await peopleSchema.deleteMany();
});
  
describe("creating a rental", () => {
  const rentalInformation = {
    nome: "Localiza Rent a Car",
    cnpj: "16.670.085/0001-55",
    atividades: "Aluguel de Carros E Gestão de Frotas",
    endereco: [ 
      {
        cep: "96200-200",
        number:"1234",
        isFilial: false
      }  
    ]
  };

  it("Should be possible to create a rental", async () => {
    
    const response = await supertest(app).post('/api/v1/rental/').set('Authorization', `Bearer ${token}`)
      .send(rentalInformation);
      
    const { status } = response;
    expect(status).toBe(201);
  });
  it("Should return error if user does not submit all required data", async () => {

    const incompleteInformation = {
      nome: "Localiza Rent a Car",
      cnpj: "16.670.085/0001-55",
      atividades: "Aluguel de Carros E Gestão de Frotas"
    };

    const response = await supertest(app).post('/api/v1/people/').set('Authorization', `Bearer ${token}`)
      .send(incompleteInformation);
      
    const { status } = response;
    expect(status).toBe(400);
  });
});
