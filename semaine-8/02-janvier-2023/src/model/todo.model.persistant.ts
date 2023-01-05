export default class TodoModelPersistant {
  id!: number;
  task: string;
  completed: boolean;

  constructor(task: string = "", completed?: boolean) {
    this.task = task;
    this.completed = completed || false;
  }
}
