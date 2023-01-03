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

  public createTodo = (name: string): TodoModel => {
    const todo = new TodoModel(name);
    this._todos.push(todo);
    return todo;
  };
}
