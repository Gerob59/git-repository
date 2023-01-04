import Express from "express";
import TodoController from "../controller/todo.controller";
import TodoRepository from "../repository/todo.repository";
import TodoService from "../service/todo.service";

const repo = new TodoRepository();
const service = new TodoService(repo);
const controller = new TodoController(service);

const router = Express.Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.post("/", controller.create);
router.put("/:id", controller.update);

export default router;
