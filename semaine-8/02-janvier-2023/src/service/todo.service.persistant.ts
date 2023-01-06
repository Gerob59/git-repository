import TodoModelPersistant from "../model/todo.model.persistant";
import TodoRepositoryPersistant from "../repository/todo.repository.persistant";

export default class TodoServicePersistant {
  private repository: TodoRepositoryPersistant;

  constructor(repository: TodoRepositoryPersistant) {
    this.repository = repository;
  }

  getAll = (): Promise<TodoModelPersistant[]> => {
    return this.repository.getAll();
  };

  getById = (id: number): Promise<TodoModelPersistant> => {
    return this.repository.getById(id);
  };

  deleteById = (id: number): Promise<any> => {
    return this.repository.deleteById(id);
  };

  create = (
    task: string,
    completed?: boolean
  ): Promise<TodoModelPersistant> => {
    const data: TodoModelPersistant = new TodoModelPersistant(task, completed);
    return this.repository.create(data);
  };

  update = async (
    id: number,
    todo: TodoModelPersistant
  ): Promise<TodoModelPersistant> => {
    if (todo.id !== id) throw "object corrompted";
    const checkId: TodoModelPersistant = await this.getById(id);
    const data: TodoModelPersistant = new TodoModelPersistant();

    if (typeof checkId === "string") {
      data.create(todo.task, todo.completed);
      return this.repository.create(data);
    } else {
      data.update(todo);
      return this.repository.update(data).catch((err) => err);
    }
  };

  patch = (
    id: number,
    todo: TodoModelPersistant
  ): Promise<TodoModelPersistant> => {
    const data: TodoModelPersistant = new TodoModelPersistant();
    data.update(todo);
    return this.repository.patch(id, data).catch((err) => err);
  };
}
