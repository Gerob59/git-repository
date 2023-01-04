import { Request, Response } from "express";
import TodoModel from "../model/todo.model";
import TodoService from "../service/todo.service";

/**
 * 1. permet de récupérer la donnée de l'extérieur pour l'envoyer a l'api
 * 2. permet de récupérer la donnée de l'api pour l'envoyer a l'extérieur
 */
export default class TodoController {
  private service: TodoService;

  /**
   * Aggregation.
   * si le controller meurt, le service existe toujours
   */
  constructor(service: TodoService) {
    this.service = service;
  }

  /**
   * Methode GET de HTTP pour recupérer toutes les données de la base de donnée.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public getAll = (req: Request, res: Response): void => {
    res.send(this.service.getAll());
  };

  /**
   * Methode GET de HTTP pour recupérer une donnée de la base de donnée grâce à son id.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public getById = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    res.send(this.service.getById(id));
  };

  /**
   * Methode DELETE de HTTP pour supprimer une donnée de la base de donnée grâce à son id.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public deleteById = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    res.send(this.service.deleteById(id));
  };

  /**
   * Methode POST de HTTP pour créer une donnée dans la base de donnée grâce à un JSON dans son body.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public create = (req: Request, res: Response): void => {
    const task: string = req.body.task;
    const todo: TodoModel = this.service.create(task);
    res.send(todo);
  };

  /**
   * Methode PUT de HTTP pour modifier les données d'un objet dans la base de donnée grâce à un JSON dans son body, ou la créer si elle n'existe pas.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public createOrUpdate = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    const todo: TodoModel = req.body;
    const data = this.service.createOrUpdate(id, todo);
    res.send(data);
  };

  /**
   * Methode PATCH de HTTP pour modifier les données d'un objet dans la base de donnée grâce à un JSON dans son body.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public update = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    const todo: TodoModel = req.body;
    const data = this.service.update(id, todo);
    res.send(data);
  };
}
