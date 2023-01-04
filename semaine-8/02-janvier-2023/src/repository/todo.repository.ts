import TodoModel from "../model/todo.model";

/**
 * chemin pour la base de donnée.
 * accessible avec des requetes sql en suivant la méthodologie CRUD.
 */
export default class TodoRepository {
  /**
   * Données en brut.
   * Normalement on accede a la base de donnée avec des requêtes sql.
   */
  private _todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Se reveiller"),
    new TodoModel("Aller bosser"),
  ];

  // create
  /**
   * Méthode create du CRUD pour les todos.
   * Permet d'ajouter une nouvelle todo à la base de donnée;
   * @param todo
   */
  public create = (todo: TodoModel): void => {
    this._todos.push(todo);
  };

  // read
  /**
   * Méthode read du CRUD pour les todos.
   * Permet d'avoir accès a toutes les todos de la base de donnée;
   */
  public getAll = (): TodoModel[] => {
    return this._todos;
  };

  /**
   * Méthode update du CRUD pour les todos.
   * Permet de modifier les données des todos sauf l'id qui est unique et autogénéré.
   * @param index Emplacement dans le tableau du todo à modifier.
   * @param todo Le nouveau todo a remplacer.
   */
  public update = (index: number, todo: TodoModel): void => {
    this._todos[index] = todo;
  };

  /**
   * Méthode delete du CRUD pour les todos.
   * Permet de supprimer le todo grâce à son id.
   * @param id L'id du todo à supprimer.
   */
  public deleteById = (id: number): void => {
    this._todos = this._todos.filter((todo) => todo.id !== id);
  };
}
