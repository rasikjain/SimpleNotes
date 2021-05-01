import {gql} from 'apollo-server';

export const typeDefs = gql `

    type Task {
        id: ID!,
        description: String!,
        completed: Boolean!
        dueDate: String
    }

    type Query {
        tasks: [Task]!
    }
`;