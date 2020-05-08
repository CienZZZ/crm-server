<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS CRM API

This project uses [@nestjsx/crud](https://github.com/nestjsx/crud) to simplify and standardize the REST API

This backend is based on NestJS Framework V6 (https://nestjs.com/)

- DB: Postgres
- Websockets: Socket.io
- Synchronises sockets thourgh Redis adapter for horizontal scaling 


## Env VARS:
      SERVER_PORT: 3000
      POSTGRES_HOST: db
      POSTGRES_PORT: 5432
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: root
      POSTGRES_DB: crm_db
      REDIS_HOST: redis
      REDIS_PORT: 6379
      REDIS_ENABLED: 'true'

## Run

Server will be running on http://localhost:3000

# Endpoints

 - `GET /company` : returns an array of `Companies`
 - `GET /company/:id`: returns a `Company` shape 
 - `POST /company`: Create a company, returns a `Company` shape
 - `PATCH /company/:id`: Partially update a `Company`, returns a `Comapny` shape
 - `DELETE /company/:id`: Delete a `Company`, empty response

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

