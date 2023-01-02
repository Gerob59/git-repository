import Express, { Request, Response } from "express";
import TodoModel from "./model/todo.model";

// instance de Express
const app = Express();
// instance du routeur de Express
const router = Express.Router();

// route via router
router.get("/test", (req: Request, res: Response) => {
  res.send("page de test");
});
// appel fu router
app.use(router);

// route par defaut
app.get("/", (req: Request, res: Response) => {
  const model: TodoModel = new TodoModel("task 1");
  console.log(
    `id : ${model.id}, task : ${model.task}, completed : ${model.completed}`
  );
  res.send("c'est tout bon");
});

// définition du port d'écoute
app.listen("3000", () => {
  console.log(`server lancé sur le port 3000`);
});
