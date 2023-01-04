import TodoModel from "../model/todo.model";

/**
 * chemin pour la base de donnée.
 * accessible avec des requetes sql
 */
export default class TodoRepository {
  /**
   * Données en brut.
   * Normalement on accede a la base de donnée avec des requêtes sql
   */
  private _todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Se reveiller"),
    new TodoModel("Aller bosser"),
  ];

  public getAll = (): TodoModel[] => {
    return this._todos;
  };

  public deleteById = (id: number): void => {
    this._todos = this._todos.filter((todo) => todo.id !== id);
  };

  public create = (todo: TodoModel): void => {
    this._todos.push(todo);
  };

  public update = (index: number, todo: TodoModel): void => {
    this._todos[index] = todo;
  };
}
