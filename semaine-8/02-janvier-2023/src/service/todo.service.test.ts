import TodoController from "../controller/todo.controller";
import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";
import TodoService from "./todo.service";

const repository: TodoRepository = new TodoRepository();
const service: TodoService = new TodoService(repository);
const controller: TodoController = new TodoController(service);

const resulat: TodoModel[] = service.getAll();

describe("service.getall()", () => {
  it("should return 3 json object", () => {
    expect(service.getAll()).toBe(resulat);
  });
});
