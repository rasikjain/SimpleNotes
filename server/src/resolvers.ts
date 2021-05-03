import { Resolvers, Task } from './generated/graphql';
import {Context} from './index';

export const resolvers: Resolvers = {
    Query: {
      tasks: async (_, {}, context: Context): Promise<Task[]> => {
        const {taskRepo} = context;
        const tasks = await taskRepo.getAllTasks();
        return tasks;

      }
    },
  };