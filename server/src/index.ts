import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { taskRepo } from './modules/tasks/repos';
import { ITaskRepo } from './modules/tasks/repos/taskRepo';


export type Context = { taskRepo: ITaskRepo }


const server = new ApolloServer({
  context: () => ({ taskRepo } as Context),
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});