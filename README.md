![compassolisadesafio-01-01-01](https://user-images.githubusercontent.com/63256085/152074640-4050b4af-a802-4793-bbb5-9366ef28c165.png)


# API COMPASSOLISA - LOCADORA DE CARROS

Sistema para abertura da locadora de carros "Compassolisa", que atua no seguimento de aluguel de carros de luxo e semi luxo. Cada carro é exclusivo, ou seja, não existe mais de
um modelo de carro disponível por cidade. 
<br>
<br>

## TECNOLOGIAS UTILIZADAS PARA O DESENVOLVIMENTO DA API

Para o funcionamento da API é preciso ter instalado em sua maquina as seguintes tecnologias: 

![tecnologias](https://user-images.githubusercontent.com/63256085/152076865-cd775e23-e174-4ee3-bcf9-90c30f89acf8.png)

## PACOTES PARA O FUNCIONAMENTO DA API

- @joi/date
- bcryptjs
- express
- joi
- jsonwebtoken
- mongoose
- mongoose-paginate-v2

## EXECUTANDO A API

```bash
# Clone este repositório
$ git clone https://github.com/Caroll8silva/Compassolisa.git

# Acesse a pasta do projeto no terminal/cmd
$ cd compassolisa

# Instale as dependências
$ npm install @joi/date bcryptjs express joi jsonwebtoken mongoose mongoose-paginate-v2

# Execute a aplicação em modo de produção
$ npm start

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
```
## ACESSANDO AS ROTAS

### Rota de autenticação
Rota para autenticação do usuário (POST)
<br>

![postauth](https://user-images.githubusercontent.com/63256085/152078609-9230bf3a-a92b-4035-8ccd-c75a9d568b1a.PNG)
<br>

### Rota de carros
Rota para inserir um carro (POST)
<br>

![postcar](https://user-images.githubusercontent.com/63256085/152078840-eebdb4b0-41b6-4814-a970-68158915087a.PNG)

Rota para listar todos os carros (GET)
<br>

![getcar](https://user-images.githubusercontent.com/63256085/152079052-c25a4cd0-d34b-43dd-911d-82de0443f1bb.PNG)

Rota para listar um carro (GET)
<br>

![getidcar](https://user-images.githubusercontent.com/63256085/152079416-94c59a70-4101-4247-9be9-2af7578ad76c.PNG)

Rota para atualizar um carro (PUT)
<br>

![putcar](https://user-images.githubusercontent.com/63256085/152079575-d47dc50b-8ebf-43ad-bed3-5c9ad8c0b5ba.PNG)

Rota para deletar um carro (DELETE)
<br>

![deletecar](https://user-images.githubusercontent.com/63256085/152079724-8d7ea171-0eca-4df7-8831-d3907018240b.PNG)

### Rota de pessoas
Rota para inserir uma pessoa (POST)
<br>

![postpeople](https://user-images.githubusercontent.com/63256085/152080110-a17014d5-7f60-425a-93d3-9f0494d511bc.PNG)

Rota para listar todas as pessoas (GET)
<br>

![getpeople](https://user-images.githubusercontent.com/63256085/152080651-b7db4d80-8f1b-416d-8672-064f5701d677.PNG)

Rota para listar uma pessoa (GET)
<br>

![getidcar](https://user-images.githubusercontent.com/63256085/152080689-75c2d48e-a393-45d8-b436-76e2011e450f.PNG)

Rota para atualizar uma pessoa (PUT)
<br>

![putpeople](https://user-images.githubusercontent.com/63256085/152080711-561edf26-756d-436f-b185-522410ac35ba.PNG)

Rota para deletar uma pessoa (DELETE)
<br>

![deletepeople](https://user-images.githubusercontent.com/63256085/152080724-d6e4df03-30a9-4f2d-a264-2ec5e3d39a19.PNG)

