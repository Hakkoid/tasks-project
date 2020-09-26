export interface IDayState {
  id: number;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  done: boolean;
  msg: string;
}