const checkAttribute: string[] = ["task", "completed"];

export default class TodoModelPersistant {
  id!: number;
  [task: string]: any;
  completed?: boolean;

  constructor(...data: any[]) {
    const [obj]: any[] = data;

    if (typeof obj === "string") {
      this.create(obj);
    } else {
      this.update(obj);
    }
  }

  create = (obj: string) => {
    this.task = obj;
    this.completed = false;
  };

  update = (obj: any[]) => {
    for (let key in obj) {
      if (checkAttribute.includes(key)) {
        this[key] = obj[key];
      }
    }
  };
}
