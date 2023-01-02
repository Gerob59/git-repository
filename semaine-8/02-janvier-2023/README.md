# Postman

permet de vérifier l'api en communiquant avec le controller

# Config

nmp init :

- entry point: (index.js) app.ts
- author: "robin"

tsc --init

modifier tsconfig.json :

- "rootDir": "./src",
- "outDir": "./dist",

Dependances à installer :

- npm i express
- npm i @types/express
- npm i @types/node
- npm i dotenv
- npm i ts-node-dev
- npm i

## script :

- "start": "tsc && node ./dist/app.js",
- "build": "tsc",
- "start:dev": "ts-node-dev ./src/app.ts"

run commande : npm run <cmd>
