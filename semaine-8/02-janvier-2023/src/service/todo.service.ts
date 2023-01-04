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

  public getAll = (): TodoModel[] => {
    return this.repo.getAll();
  };

  public getById(id: number): TodoModel {
    const result: TodoModel | undefined = this.findTodo(id);
    if (!result) throw "Todo not found";
    return result;
  }

  public deleteById(id: number): void {
    this.repo.deleteById(id);
  }

  public create = (task: string, completed?: boolean): TodoModel => {
    if (!task) throw "Task not found";
    else {
      const todo: TodoModel = new TodoModel(task, completed);
      this.repo.create(todo);
      return todo;
    }
  };

  public createOrUpdate = (id: number, todo: TodoModel): TodoModel => {
    if (todo.id != id) throw "Todo incorrecte";
    let todoAModifier: TodoModel | undefined = this.findTodo(id);
    if (!todoAModifier) {
      todoAModifier = this.create(todo.task, todo.completed);
    } else {
      todoAModifier = this.update(id, todo);
    }
    return todoAModifier;
  };

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

  private modifyTodo = (exist: TodoModel, todo: TodoModel): void => {
    if (todo.task !== undefined) exist.task = todo.task;
    if (todo.completed !== undefined) exist.completed = todo.completed;
  };

  private findTodo = (id: number): TodoModel | undefined => {
    return this.repo.getAll().find((todo) => todo.id === id);
  };

  private findTodoIndex = (id: number): number => {
    return this.repo.getAll().findIndex((item) => item.id === id);
  };
}
