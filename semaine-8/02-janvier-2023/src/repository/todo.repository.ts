import TodoModel from "../model/todo.model";

/**
 * chemin pour la base de donnée.
 * accessible avec des requetes sql
 */
export default class TodoRepository {
  private _todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Se reveiller"),
    new TodoModel("Aller bosser"),
  ];

  public getAll = (): TodoModel[] => {
    return this._todos;
  };

  public delete = (index: number): void => {
    this._todos.splice(index, 1);
  };
}
