# PDVAPI

Este projeto é uma API para gerenciamento de produtos, utilizando **Node.js**, **Express**, **Sequelize** como ORM e **PostgreSQL** como banco de dados.

## Tecnologias

- **Node.js**: Plataforma de execução de JavaScript no lado do servidor.
- **Express**: Framework minimalista para criação de APIs e servidores web.
- **Sequelize**: ORM (Object Relational Mapper) para trabalhar com bancos de dados relacionais no Node.js.
- **PostgreSQL**: Banco de dados relacional utilizado para persistência de dados.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:

- [Node.js](https://nodejs.org/) (v14.x ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v12.x ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/guilhermeoln/pdvapi.git
   cd pdvapi

2. Instale as dependências:

    Com NPM:

    ```bash
    npm install
    ```

    Ou com Yarn:

    ```bash
    yarn install
    ```

4. Execute as migrações do banco de dados:

    ```bash
    yarn sequelize db:migrate
    ```

5. Execute o projeto:

    Para iniciar o servidor de desenvolvimento:

    Com NPM:

    ```bash
    npm run dev
    ```

    Ou com Yarn:

    ```bash
    yarn dev
    ```

    O servidor estará disponível em `http://localhost:3333`.

## Scripts úteis

- `npm run dev` ou `yarn dev`: Inicia o servidor com hot-reloading (usando nodemon).
- `yarn sequelize db:migrate`: Executa as migrações para criar as tabelas no banco de dados.
