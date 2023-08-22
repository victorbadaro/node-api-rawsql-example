# node-api-rawsql-example

[![README.md](https://img.shields.io/badge/-Read%20in%20English-brightgreen?style=for-the-badge)](./README.md)

## Índice
- [🧾 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Principais tecnologias](#-principais-tecnologias)
- [💻 Como usar](#-como-usar)
- [👌 Requisições](#-requisições)

## 🧾 Sobre o projeto
Este projeto foi feito para ser um simples exemplo de uma aplicação back-end usando SQL puro (sem ORMs ou Query builders)

## 🚀 Principais tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Babel](https://babeljs.io/)
- [Nodemon](https://nodemon.io/)

_(Você pode ver todas as dependências do projeto no arquivo [package.json](./package.json))_

## 💻 Como usar
Como você pode ver no tópico [🚀 Principais tecnologias](#-principais-tecnologias), esta aplicação depende de um banco de dados PostgreSQL, então você deve tê-lo instalado.

1. Faça o clone do projeto (você vai precisar de um [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-api-rawsql-example.git
   ```

2. Acesse o diretório correspondente:
   ```bash
   $ cd node-api-rawsql-example
   ```

3. Instale as dependências:
   ```bash
   $ yarn
   # sinta-se livre para usar outro gerenciador de pacotes, mas talvez você queira usar o yarn uma vez que já existe um arquivo yarn.lock na raíz do projeto
   ```

4. Acesse o teu servidor PostgreSQL e crie o banco de dados (você pode nomear o banco de dados como quiser):
   ```sql
   CREATE DATABASE node_api_rawsql_db;
   ```

5. Execute os comandos SQL que estão no arquivo [database.sql](./database.sql)
6. Crie um arquivo `.env` na raíz do projeto com o mesmo conteúdo que está no arquivo [.env.example](./.env.example) e preencha as variáveis com os seus dados:<br />
   Por exemplo:<br />
   ![image](https://github.com/victorbadaro/node-api-rawsql-example/assets/9096344/4948c4e7-aaf1-4134-bf7b-d1c7fc280f60)

7. Inicie o servidor executando o script `dev`:
   ```bash
   yarn dev
   ```

## 👌 Requisições
Agora o servidor está pronto para receber suas requisições! Tem uma [request collection](./request_collection.json) na raíz do projeto para que você possa usar (utilize o [insomnia](https://insomnia.rest/) para importar a collection). Lembre-se de informar a porta do servidor na variável de ambiente `baseUrl`!<br />
Aqui estão as requisições que você pode fazer:

- GET /users
- POST /users
  ```json
  {
    "name": "",
    "email": ""
  }
  ```
- GET /users/:id
- PUT /users/:id
  ```json
  {
    "name": "",
    "email": ""
  }
  ```
- DELETE /users/:id

- GET /products
- POST /products
  ```json
  {
    "description": "",
    "user_id": 
  }
  ```
- GET /products/:id
- PUT /products/:id
  ```json
  {
    "description": "" 
  }
  ```
- DELETE /products/:id

---

<p align="center">Este projeto foi criado e desenvolvido com ❤ por <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
