import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";

export default class TodoService {
  repo: TodoRepository;

  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  public getAll = (): TodoModel[] => {
    return this.repo.getAll();
  };

  public getById(id: number): TodoModel {
    const result: TodoModel | undefined = this.repo
      .getAll()
      .find((todo) => todo.id === id);
    if (!result) throw "Todo not found";
    return result;
  }
}
