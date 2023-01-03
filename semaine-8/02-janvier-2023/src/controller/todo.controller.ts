import { Request, Response } from "express";
import TodoModel from "../model/todo.model";
import TodoService from "../service/todo.service";

/**
 * 1. permet de récupérer la donnée de l'extérieur pour l'envoyer a l'api
 * 2. permet de récupérer la donnée de l'api pour l'envoyer a l'extérieur
 */
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

  public deleteById = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    res.send(this.service.deleteById(id));
  };

  public createTodo = (req: Request, res: Response): void => {
    const todo: TodoModel = req.body;
    res.send(this.service.createTodo(todo));
  };
}
