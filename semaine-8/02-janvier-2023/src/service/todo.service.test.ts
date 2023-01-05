import TodoController from "../controller/todo.controller";
import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";
import TodoService from "./todo.service";

const repository: TodoRepository = new TodoRepository();
const service: TodoService = new TodoService(repository);
const controller: TodoController = new TodoController(service);

const todo: TodoModel = service.getAll()[0];

describe("service.getAll()[0]", () => {
  it("should return todo with id 1", () => {
    expect(service.getById(1)).toBe(todo);
  });
});
