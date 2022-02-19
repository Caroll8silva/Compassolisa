/* eslint-disable no-undef */
const supertest = require('supertest');
const carSchema = require("../../../src/app/schema/cars");
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

  await carSchema.deleteMany();
  await peopleSchema.deleteMany();
});


describe("listing a car", () => {
  const carsInformation = {
    modelo: 'GM S10 2.5',
    cor: 'branco',
    ano: '2021',
    acessorios: [
      { descricao: 'Tração 4x4' },
      { descricao: '4 portas' },
      { descricao: 'Diesel' },
      { descricao: 'Air bag' },
      { descricao: 'ABS' }
    ],
    quantidadePassageiros: 5
  };

  it("Should be possible to list a car", async () => {
    
    const { text } = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`).send(carsInformation);
    const { _id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/v1/car/${_id.toString()}`).set('Authorization', `Bearer ${token}`);
    
    const { status } = response;
    expect(status).toBe(200);
  });

  it("Should be possible to give an error when listing", async () => { 
    
    const { text } = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`).send(carsInformation);
    const { _id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/v1/car/${_id.toString()}`);

    const { status } = response;
    expect(status).toBe(400);

  });


});