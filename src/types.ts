export interface IDayState {
  id: number;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  done: boolean;
  msg: string;
}

export interface InputEvent {
  target: HTMLInputElement
}

export interface KeyEvent {
  target: HTMLInputElement
}
