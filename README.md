# nestjs-api-mongodb

This repo aims to be a template and a exemple about how to use MongoDB in NestJS.

The `main` branch is the basic exemple. Don't hesitate to check other branches.

## Prerequisites

- Node.js
- MongoDB
- yarn

## Installation

To install this repo locally you can use :
- <b>ssh</b> : `git@github.com:alexVivier/nest-mongo-exemple.git`
- <b>https</b> : `https://github.com/alexVivier/nest-mongo-exemple.git`
- <b>github-cli</b> : `gh repo clone alexVivier/nest-mongo-exemple`

Once you've cloned the repo you can install deps :

````bash
cd nest-mongo-exemple
yarn install
````

## Starting

To start the project locally you will have to set your env vars in the `package.json` file :
- `HOST` : It's the host of your MongoDB server
- `PORT` : It's the port of your MongoDB server
- `DBNAME` : It's the database name in your MongoDB server

Now you can start locally using :
````bash
yarn start:dev
````

## Endpoints

You can view endpoint docs at this url while your server is running : `http://localhost:3000/docs`.

## Tests

Tests will be introduced later.