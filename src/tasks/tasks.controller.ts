import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskModel } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskModel[] {
    return this.tasksService.getAllTask();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): TaskModel {
    return this.tasksService.createTask(title, description);
  }
}
