import { Task, TaskDbObject } from "../../../../generated/graphql";
import { ITaskRepo } from "../taskRepo";


export class MongoDBTaskRepo implements ITaskRepo {

    private tasks: Task[] = [
        {
          id: "1",
          description: "Task11",
          completed: false
        },
        {
          id: "2",
          description: "Task22",
          completed: false,
        },
        {
          id: "3",
          description: "Task3",
          completed: true,
        },
      ]

    public async getAllTasks(): Promise<Task[]> {
        return this.tasks;
    }
    
}