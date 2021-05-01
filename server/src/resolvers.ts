import { Resolvers } from './generated/graphql';

export const resolvers: Resolvers = {
    Query: {
      tasks: () => [
        {
          id: "1",
          description: "Task1",
          completed: false
        },
        {
          id: "2",
          description: "Task2",
          completed: false,
        },
        {
          id: "3",
          description: "Task3",
          completed: true,
        },
      ],
    },
  };