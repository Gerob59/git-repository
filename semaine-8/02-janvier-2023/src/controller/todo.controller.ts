import { Request, Response } from "express";
import TodoService from "../service/todo.service";

export default class TodoController {
  service: TodoService;

  constructor(service: TodoService) {
    this.service = service;
  }

  public getAll = (req: Request, res: Response): void => {
    res.send(this.service.getAll());
  };
}
