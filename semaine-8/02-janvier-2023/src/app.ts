import express from "express";
import TodoRouter from "./router/todo.router";

// utilisation d'une variable d'environnement
import "dotenv/config";
const port = process.env.PORT;

// instance de Express
const app = express();

// lire un formulaire
// app.use(express.encodeddata());

// permet de lire le json
app.use(express.json());

// instance du router de express ayant pour route par defaut todo
app.use("/todo", TodoRouter);

// définition du port d'écoute du server
app.listen(port, () => {
  console.log(`server lancé sur le port ${port}`);
});
