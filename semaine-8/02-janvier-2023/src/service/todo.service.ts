import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";

/**
 * Sert à faire la logique métier
 */
export default class TodoService {
  private repo: TodoRepository;

  /**
   * Aggregation.
   * si le service meurt, le repo existe toujours
   */
  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  /**
   * Lien entre la méthode GET de HTTP et la méthode READ de CRUD appliqué pour les todos.
   * Permet de récupérer tous les todo de la base de donnée.
   * @returns La liste des todos.
   */
  public getAll = (): TodoModel[] => {
    return this.repo.getAll();
  };

  /**
   * Lien entre la méthode GET de HTTP et la méthode READ de CRUD appliqué pour les todos.
   * @param id L'id du todo que l'on cherche.
   * @returns Le todo que l'on cherche.
   */
  public getById(id: number): TodoModel {
    const result: TodoModel | undefined = this.findTodo(id);
    if (!result) throw "Todo not found";
    return result;
  }

  /**
   * Lien entre la méthode DELETE de HTTP et la méthode DELETE de CRUD appliqué pour les todos.
   * Permet de supprimer une todo de la base de donnée.
   * @param id L'id du todo a supprimer.
   */
  public deleteById(id: number): void {
    this.repo.deleteById(id);
  }

  /**
   * Lien entre la méthode POST de HTTP et la méthode CREATE de CRUD appliqué pour les todos.
   * Permet de créer une todo dans la base de donnée.
   * @param task Le nom de la tache à créer.
   * @param completed parametre optionnel qui permet de savoir si la tache est terminer ou non.
   * @returns Le todo créer
   */
  public create = (task: string, completed?: boolean): TodoModel => {
    if (!task) throw "Task not found";
    else {
      const todo: TodoModel = new TodoModel(task, completed);
      this.repo.create(todo);
      return todo;
    }
  };

  /**
   * Lien entre la méthode PUT de HTTP et la méthode UPDATE/CREATE de CRUD appliqué pour les todos.
   * Permet de modifier un todo de la base de donnée, et le créer s'il n'existe pas.
   * @param id Le todo dans la base de donnée que l'on veut modifier.
   * @param todo Les informations que l'on veut apporter au todo dans la base de donnée.
   * @returns Le todo modifié
   */
  public createOrUpdate = (id: number, todo: TodoModel): TodoModel => {
    if (todo.id != id) throw "Todo incorrecte";
    let exist: TodoModel | undefined = this.findTodo(id);
    if (!exist) {
      exist = this.create(todo.task, todo.completed);
    } else {
      exist = this.update(id, todo);
    }
    return exist;
  };

  /**
   * Lien entre la méthode PATCH de HTTP et la méthode UPDATE de CRUD appliqué pour les todos.
   * Permet de modifier les données des todos sauf l'id qui est unique et autogénéré.
   * @param id Le todo dans la base de donnée que l'on veut modifier.
   * @param todo Les informations que l'on veut apporter au todo dans la base de donnée.
   * @returns Le todo modifié
   */
  public update = (id: number, todo: TodoModel): TodoModel => {
    const exist: TodoModel | undefined = this.findTodo(id);
    if (!exist) throw "todo not found";
    else {
      const indexTodo: number = this.findTodoIndex(id);
      this.modifyTodo(exist, todo);
      this.repo.update(indexTodo, todo);
      return exist;
    }
  };

  /**
   * Vérifie toutes les variables une à une afin de modifier entierement le todo.
   * @param exist Le todo à modifier venant de la base de donnée.
   * @param todo Le todo avec les informations à modifier venant de l'extérieur.
   */
  private modifyTodo = (exist: TodoModel, todo: TodoModel): void => {
    if (todo.task !== undefined) exist.task = todo.task;
    if (todo.completed !== undefined) exist.completed = todo.completed;
  };

  /**
   * Permet de récupérer un todo dans la base de donnée grace a son ID.
   * @param id L'id du todo que l'on cherche.
   * @returns Le todo que l'on cherche ou undefined s'il n'existe pas.
   */
  private findTodo = (id: number): TodoModel | undefined => {
    return this.repo.getAll().find((todo) => todo.id === id);
  };

  /**
   * Permet de récupérer un l'indice du todo dans la base de donnée grace a son ID.
   * @param id L'id du todo que l'on cherche.
   * @returns L'indice du todo que l'on cherche ou -1 s'il n'existe pas.
   */
  private findTodoIndex = (id: number): number => {
    return this.repo.getAll().findIndex((item) => item.id === id);
  };
}
