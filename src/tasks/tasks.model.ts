export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: TaskStatusModel;
}

export enum TaskStatusModel {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
