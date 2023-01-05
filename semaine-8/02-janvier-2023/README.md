# Postman

permet de vérifier l'api en communiquant avec le controller (test logique)

- créer un environnmement avec des variables (ex : URLtodo - http://localhost:3000/todo)
- créer une collection en utilisant l'environnement créé juste avant
- créer des requetes pour vérifier automatiquement et simplement (body -> raw -> json)

# methode http

**Get** : recupérer un objet

**Post** : formulaire

**Put** : modifier l'objet ou le creer s'il existe pas

**Patch** : modifier une partie de l'objet

**Delete** : supprimer

# type

Monolythique: MVC

orienté service : pour les api

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

pour installer et lancer JSONserver :

- npm i json-server
- json-server --watch db.json

# script :

- "start": "tsc && node ./dist/app.js",
- "build": "tsc",
- "start:dev": "ts-node-dev ./src/app.ts"

exec = npm run <cmd>

# env

le fichier env ne va pas sur github.
Un fichier env.example existe pour recreer chez soit le fichier env.

# .gitignore

/node_modules
/dist <!-- le build de l'application, on ne l'envoie pas, car on peut l'avoir en transpilant le code. -->
.env <!-- proteger les données sensibles. -->

# installer jest

dependancies :

- npm i @types/jest
- npm i jest
- npm i ts-jest
- npm i typescript
- npm i ts-node

scripts :

- "test": "jest",
  -"test:watch": "jest --watch",
- "test:cov": "jest --coverage"
