# Postman

permet de vérifier l'api en communiquant avec le controller

- créer un environnmement avec des variables (ex : URLtodo - http://localhost:3000/todo)
- créer une collection en utilisant l'environnement créé juste avant
- créer des requetes pour vérifier automatiquement et simplement (body -> raw -> json)

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
- npm i ts-node-dev (equivalent à un live serveur) => tester les modifs
- npm i

# script :

- "start": "tsc && node ./dist/app.js",
- "build": "tsc",
- "start:dev": "ts-node-dev ./src/app.ts"

exec = npm run <cmd>

# env

le fichier env ne va pas sur github.
Un fichier env.example existe pour recreer chez soit le fichier env.
