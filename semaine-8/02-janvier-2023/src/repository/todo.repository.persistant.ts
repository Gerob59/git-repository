import axios from "axios";
import "dotenv/config";
import TodoModelPersistant from "../model/todo.model.persistant";

export default class TodoRepositoryPersistant {
  private URL: string = process.env.JSONSERVER as string;

  getAll = async (): Promise<TodoModelPersistant[]> => {
    return axios.get(`${this.URL}`).then((res) => res.data);
  };

  getById = async (id: number): Promise<TodoModelPersistant> => {
    return axios
      .get(`${this.URL}/${id}`)
      .then((res) => res.data)
      .catch(() => "id not found");
  };

  create = async (todo: TodoModelPersistant): Promise<TodoModelPersistant> => {
    return axios.post(`${this.URL}`, todo).then((res) => res.data);
  };

  update = async (todo: TodoModelPersistant): Promise<TodoModelPersistant> => {
    return axios.put(`${this.URL}/${todo.id}`, todo).then((res) => res.data);
  };

  deleteById = (id: number): Promise<any> => {
    return axios.delete(`${this.URL}/${id}`);
  };

  patch = async (
    id: number,
    todo: TodoModelPersistant
  ): Promise<TodoModelPersistant> => {
    return axios.patch(`${this.URL}/${id}`, todo).then((res) => res.data);
  };
}
