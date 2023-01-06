import Express from "express";
import TodoControllerPersistant from "../controller/todo.controller.persistant";
import TodoRepositoryPersistant from "../repository/todo.repository.persistant";
import TodoServicePersistant from "../service/todo.service.persistant";

const repo = new TodoRepositoryPersistant();
const service = new TodoServicePersistant(repo);
const controller = new TodoControllerPersistant(service);

const router = Express.Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.patch("/:id", controller.patch);

export default router;
