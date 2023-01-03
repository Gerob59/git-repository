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
    this.repo.deleteById(id);
  }

  public createTodo = (task: string): TodoModel => {
    if (!task) throw "Task not found";
    else {
      const todo: TodoModel = new TodoModel(task);
      this.repo.createTodo(todo);
      return todo;
    }
  };

  public put = (id: number, todo: TodoModel): TodoModel => {
    let todoAModifier: TodoModel | undefined = this.repo
      .getAll()
      .find((item) => item.id === id);
    if (!todoAModifier) {
      todoAModifier = this.createTodo(todo.task);
    } else {
      todoAModifier.task = todo.task;
      todoAModifier.completed = todo.completed;
    }
    return todoAModifier;
  };
}
