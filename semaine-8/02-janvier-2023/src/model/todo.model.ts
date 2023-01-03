/**
 * c'est un DTO (data transfer object) qui permet de transformer la donnée
 */
export default class TodoModel {
  private _id: number;
  private _task: string;
  private _completed: boolean;
  private static count: number = 0;

  constructor(task: string) {
    this._id = ++TodoModel.count;
    this._task = task;
    this._completed = false;
  }

  get id() {
    return this._id;
  }

  get task() {
    return this._task;
  }

  get completed() {
    return this._completed;
  }

  set task(task: string) {
    this._task = task;
  }

  public finished() {
    this._completed = !this._completed;
  }
}
