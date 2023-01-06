const checkAttribute: string[] = ["task", "completed"];

export default class TodoModelPersistant {
  id!: number;
  [task: string]: any;
  completed?: boolean;

  constructor(...data: any[]) {
    const [obj]: any[] = data;

    if (typeof obj === "string") {
      this.task = obj;
      this.completed = false;
    } else {
      for (let key in obj) {
        if (checkAttribute.includes(key)) {
          this[key] = obj[key];
        }
      }
    }
  }
}
