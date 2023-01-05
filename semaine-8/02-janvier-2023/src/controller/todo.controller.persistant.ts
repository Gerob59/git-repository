import { Request, Response } from "express";
import TodoServicePersistant from "../service/todo.service.persistant";

/**
 * 1. permet de récupérer la donnée de l'extérieur pour l'envoyer a l'api
 * 2. permet de récupérer la donnée de l'api pour l'envoyer a l'extérieur
 */
export default class TodoControllerPersistant {
  private service: TodoServicePersistant;

  /**
   * Aggregation.
   * si le controller meurt, le service existe toujours
   */
  constructor(service: TodoServicePersistant) {
    this.service = service;
  }

  /**
   * Methode GET de HTTP pour recupérer toutes les données de la base de donnée.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAll();
    res.send(data);
  };

  /**
   * Methode GET de HTTP pour recupérer une donnée de la base de donnée grâce à son id.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public getById = async (req: Request, res: Response): Promise<void> => {
    const id: number = +req.params.id;
    const data = await this.service.getById(id);
    res.send(data);
  };

  /**
   * Methode DELETE de HTTP pour supprimer une donnée de la base de donnée grâce à son id.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public deleteById = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    this.service
      .deleteById(+id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.send("you cannot delete that");
      });
  };

  /**
   * Methode POST de HTTP pour créer une donnée dans la base de donnée grâce à un JSON dans son body.
   * @param req La requete HTTP avec des informations pour le serveur.
   * @param res La reponse du serveur pour la requete HTTP.
   */
  public create = async (req: Request, res: Response): Promise<void> => {
    const task: string = req.body.task;
    const completed: boolean = req.body.completed;
    const todo = await this.service.create(task, completed);
    res.send(todo);
  };

  //   /**
  //    * Methode PUT de HTTP pour modifier les données d'un objet dans la base de donnée grâce à un JSON dans son body, ou la créer si elle n'existe pas.
  //    * @param req La requete HTTP avec des informations pour le serveur.
  //    * @param res La reponse du serveur pour la requete HTTP.
  //    */
  //   public createOrUpdate = (req: Request, res: Response): void => {
  //     const id: number = +req.params.id;
  //     const todo: TodoModel = req.body;
  //     const data = this.service.createOrUpdate(id, todo);
  //     res.send(data);
  //   };

  //   /**
  //    * Methode PATCH de HTTP pour modifier les données d'un objet dans la base de donnée grâce à un JSON dans son body.
  //    * @param req La requete HTTP avec des informations pour le serveur.
  //    * @param res La reponse du serveur pour la requete HTTP.
  //    */
  //   public update = (req: Request, res: Response): void => {
  //     const id: number = +req.params.id;
  //     const todo: TodoModel = req.body;
  //     const data = this.service.update(id, todo);
  //     res.send(data);
  //   };
}
