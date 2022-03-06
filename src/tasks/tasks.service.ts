import { Injectable } from '@nestjs/common';
import { TaskModel, TaskStatusModel } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: TaskModel[] = [];

  getAllTask(): TaskModel[] {
    return this.tasks;
  }

  createTask(title: string, description: string): TaskModel {
    const task: TaskModel = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatusModel.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
