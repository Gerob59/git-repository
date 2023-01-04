/**
 * c'est un DTO (data transfer object) qui permet de transformer la donnée
 */
export default class TodoModel {
  id: number;
  task: string;
  completed: boolean;
  private static count: number = 0;

  constructor(task: string, completed?: boolean) {
    this.id = ++TodoModel.count;
    this.task = task;
    this.completed = completed || false;
  }

  public finished() {
    this.completed = !this.completed;
  }
}
