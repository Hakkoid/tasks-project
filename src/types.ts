export interface IDayState {
  id: number;
  tasks: ITask[];
}

export interface ITask {
  done: boolean;
  msg: string;
}