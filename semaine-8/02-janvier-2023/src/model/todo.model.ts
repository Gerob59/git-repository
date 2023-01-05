/**
 * c'est un DTO (data transfer object) qui permet de transformer la donnée
 */
export default class TodoModel {
  public id: number;
  public task: string;
  public completed: boolean;
  private static count: number = 0;

  constructor(task: string, completed?: boolean) {
    this.id = ++TodoModel.count;
    this.task = task;
    this.completed = completed || false;
  }
}
