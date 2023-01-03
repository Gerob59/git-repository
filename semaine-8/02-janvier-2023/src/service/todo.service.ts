import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";

/**
 * Sert à faire la logique métier
 */
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

  public deleteById(id: number): void {
    let indexTodo: number = -1;
    indexTodo = this.repo.getAll().findIndex((todo) => todo.id === id);
    if (indexTodo === -1) throw "Todo not found";
    else this.repo.delete(indexTodo);
  }
}
