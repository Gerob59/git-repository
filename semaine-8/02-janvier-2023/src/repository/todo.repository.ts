import TodoModel from "../model/todo.model";

export default class TodoRepository {
  private _todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Se reveiller"),
    new TodoModel("Aller bosser"),
  ];

  public getAll = (): TodoModel[] => {
    return this._todos;
  };
}
