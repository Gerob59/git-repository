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

  public getById = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    res.send(this.service.getById(id));
  };
}
