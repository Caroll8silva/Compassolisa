/* eslint-disable no-undef */
const supertest = require('supertest');
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

  await peopleSchema.deleteMany();
});

describe("listing people", () => {
  
  const peopleInformation = {
    nome: "joaozinho ciclano",
    cpf: "131.147.860-49",
    data_nascimento: "03/03/2000",
    email: "joazinho@email.com",
    senha: "123456",
    habilitado: "sim"
  
  };

  it("Should be possible to list people", async () => {

    await supertest(app).post('/api/v1/people/').set('Authorization', `Bearer ${token}`).send(peopleInformation);
    const response = await supertest(app).get('/api/v1/car/').set('Authorization', `Bearer ${token}`);
  
    const { status } = response;
    expect(status).toBe(200);

  });
  it("Should be possible to give an error when listing sintax", async () => {

    const response = await supertest(app).get('/api/v1/peopl');
  
    const { status } = response;
    expect(status).toBe(404);

  });
});
