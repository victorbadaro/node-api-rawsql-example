# node-api-rawsql-example

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary
- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [💻 Usage](#-usage)
- [👌 Requests](#-requests)

## 🧾 About
This project was made to be a simple example of a back-end application using raw SQL (no ORMs or Query builders)

## 🚀 Main technologies
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Babel](https://babeljs.io/)
- [Nodemon](https://nodemon.io/)

_(You can see all the dependencies in the [package.json](./package.json) file)_

## 💻 Usage
As you can see on [🚀 Main technologies](#-main-technologies) topic, this application depends on a postgreSQL database, so you must have it installed.
First things first:

1. Clone the project (you'll need a [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-api-rawsql-example.git
   ```

2. Access its directory:
   ```bash
   $ cd node-api-rawsql-example
   ```

3. Install its dependencies:
   ```bash
   $ yarn
   # feel free to use another package manager, but you might want use yarn once there's already a yarn.lock file in the root directory
   ```

4. Access your PostgreSQL server and create the database (you can use any name):
   ```sql
   CREATE DATABASE node_api_rawsql_db;
   ```

5. Run the SQL commands that is in [database.sql](./database.sql) file
6. Create a `.env` file in the root directory with the same content that is in the [.env.example](./.env.example) file and fill the variables with your own data:<br />
   For example:<br />
   ![image](https://github.com/victorbadaro/node-api-rawsql-example/assets/9096344/4948c4e7-aaf1-4134-bf7b-d1c7fc280f60)

7. Start the server by running the `dev` script:
   ```bash
   yarn dev
   ```

## 👌 Requests
Now the server is ready to receive your requests! There's a [request collection](./request_collection.json) in the root directory so you can use (use [insomnia](https://insomnia.rest/) to import the collection). Remember to inform the server port in the `baseUrl` environment variable!<br />
Here are the requests you can make:

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

<p align="center">This project was created and developed with ❤ by <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
