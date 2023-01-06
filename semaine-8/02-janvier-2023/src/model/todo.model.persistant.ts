export default class TodoModelPersistant {
  id!: number;
  [task: string]: any;
  completed!: boolean;

  constructor(task?: string, completed?: boolean) {
    if (task) this.create(task, completed);
  }

  create = (task: string, completed: boolean = false) => {
    this.task = task;
    this.completed = completed;
  };

  update = (obj: any) => {
    const checkAttribute: string[] = ["id", "task", "completed"];
    for (let key in obj) {
      if (checkAttribute.includes(key)) {
        this[key] = obj[key];
      }
    }
  };
}
