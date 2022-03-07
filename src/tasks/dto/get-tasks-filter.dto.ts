import { TaskStatusModel } from '../tasks.model';
export class GetTasksFilterDto {
  status?: TaskStatusModel;
  search?: string;
}
