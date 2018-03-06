import { makeExecutableSchema } from 'graphql-tools';
// querys and mutations
import Query from './querys';
import {Mutation} from './mutations';
import Types from './types';
import resolvers from './resolvers';

const schemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        Query,
        Mutation,
        ...Types
    ],
    resolvers
});
