import {Task} from '../../../generated/graphql';

export interface ITaskRepo {
    getAllTasks(): Promise<Task[]>; 
}