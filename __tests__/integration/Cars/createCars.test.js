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
  
describe("creating a car", () => {
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
  it("Should be possible to create a car", async () => {
    
    const response  = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`)
      .send(carsInformation);
      
    if(!response) { 
      const { status } = response;
      expect(status).toBe(400);}

    else {
      const { status } = response;
      const { body } = response;
      expect(status).toBe(201);
      expect(body).toHaveProperty('_id');
    }
    
  });
  it("Should return an error if the model already exists", async () => {
    const OtherInformation = {modelo: 'GM S10 2.5',
      cor: 'branco',
      ano: '2021',
      acessorios: [
        { descricao: 'Tração 4x4' },
        { descricao: '4 portas' },
        { descricao: 'Diesel' },
        { descricao: 'Air bag' },
        { descricao: 'ABS' }
      ],
    };
    const response = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`)
      .send(OtherInformation);
    
    const { status } = response;
    expect(status).toBe(400);

  });

  it("Should return error if user does not submit all required data", async () => {

    const incompleteInformation = {modelo: 'GM S10 2.5',
      cor: 'branco',
      acessorios: [ ],
    };

    const response = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`)
      .send(incompleteInformation);
      
    const { status } = response;
    expect(status).toBe(400);
  });
  it("Should return an error if the model is not entered", async () => {

    const modelInformation = {
      modelo: ' ',
      cor: 'branco',
      ano: '2020',
      acessorios: [
        { descricao: 'Tração 4x4' },
        { descricao: '4 portas' },
        { descricao: 'Diesel' },
        { descricao: 'Air bag' },
        { descricao: 'ABS' }
      ],
    };

    const response = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`)
      .send(modelInformation);
    if(modelInformation.modelo === null){ 
      
      const { status } = response;
      expect(status).toBe(400);

    } 
    
  });
  
  it("Should return an error if the color is not entered", async () => {

    const colorInformation = {
      modelo: 'GM 24 S',
      cor: ' ',
      ano: '2020',
      acessorios: [
        { descricao: 'Tração 4x4' },
        { descricao: '4 portas' },
        { descricao: 'Diesel' },
        { descricao: 'Air bag' },
        { descricao: 'ABS' }
      ],
    };
  
    const response = await supertest(app).post('/api/v1/car/').set('Authorization', `Bearer ${token}`)
      .send(colorInformation);
    if(colorInformation.color === null){ 
        
      const { status } = response;
      expect(status).toBe(400);
  
    }
  });

});
