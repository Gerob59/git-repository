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

  public create = (req: Request, res: Response): void => {
    const task: string = req.body.task;
    const todo: TodoModel = this.service.createTodo(task);
    res.send(todo);
  };

  public updateTodo = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    const todo: TodoModel = req.body;
    const data = this.service.updateTodo(id, todo);
    res.send(data);
  };
}
