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

describe("deleting a person", () => {
 
  const peopleInformation = {
    nome: "joaozinho ciclano",
    cpf: "131.147.860-49",
    data_nascimento: "03/03/2000",
    email: "joazinho@email.com",
    senha: "123456",
    habilitado: "sim"
  
  };
  it("Should be possible to delete a person", async () => {
    
    const { text } = await supertest(app).post('/api/v1/people/').set('Authorization', `Bearer ${token}`).send(peopleInformation);    
    const { _id } = JSON.parse(text);
    await supertest(app).get('/api/v1/people/').set('Authorization', `Bearer ${token}`);
    const response = await supertest(app).delete(`/api/v1/people/${_id.toString()}`).set('Authorization', `Bearer ${token}`);
    
    const { status } = response;
    expect(status).toBe(204);
 
  });

  it("Should be possible to throw an error if you can't delete", async () => {


    const deleteError = await supertest(app).delete('/api/v1/people/:id');

    const { status } = deleteError;
    expect(status).toBe(400);


    
  });

});