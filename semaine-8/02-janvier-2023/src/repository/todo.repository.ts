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

  public deleteById = (id: number): void => {
    this._todos = this._todos.filter((todo) => todo.id !== id);
  };

  public createTodo = (todo: TodoModel): TodoModel => {
    const nouveau = new TodoModel(todo.task);
    this._todos.push(nouveau);
    return nouveau;
  };
}
