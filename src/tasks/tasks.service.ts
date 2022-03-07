import { Injectable } from '@nestjs/common';
import { TaskModel, TaskStatusModel } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: TaskModel[] = [];

  getAllTask(): TaskModel[] {
    return this.tasks;
  }

  getTaskWithFilters(filterDto: GetTasksFilterDto): TaskModel[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTask();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }

        return false;
      });
    }

    return tasks;
  }

  getTaskById(id: string): TaskModel {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): TaskModel {
    const { title, description } = createTaskDto;
    const task: TaskModel = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatusModel.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatusModel): TaskModel {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
