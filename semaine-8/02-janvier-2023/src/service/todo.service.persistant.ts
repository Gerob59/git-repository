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

  delete = (id: number): Promise<any> => {
    return this.repository.delete(id);
  };
}
