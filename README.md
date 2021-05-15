# CREATE-TSGRAPHQL-SERVER

Creates a GraphQL server with TypeScript and TypeORM.

## Includes

- [Docker](https://www.docker.com/) setted up with [PostgreSQL](https://www.postgresql.org/);
- User Entity:
  - Name, E-mail, Password and Phone Number;
- Queries and Mutations:
  - `createUser`, `login`, `getOneUser` and `getManyUsers`;
- Input Validation;
- Crypto Password;
- Authentication with Token;
- Error Handlers;
- Environment Variables;

## Installation

Using npm:

```
$ npm i -g create-tsgraphql-server
$ npm i --save create-tsgraphql-server
```

## Usage

Run for global install:

```
$ create-tsgraphql-server project-name
```

Or run npx:

```
$ npx create-tsgrapqgl-server project-name
```

Into project folder

```
$ npm install
$ npm run dev
```

This will create a directory and clone the [GraphQL-API](https://github.com/LucasGobatto/graphql-api) repository.

## Bugs on Issues?

Open an issue into [issues](https://github.com/LucasGobatto/create-tsgraphql-server) section on repository.

## Want to Help?

Open a pull request to the [repository](https://github.com/LucasGobatto/graphql-api).

#

Based on [create-express-api](https://github.com/w3cj/create-express-api).
