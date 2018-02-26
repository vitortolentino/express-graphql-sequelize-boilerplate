import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
// querys and mutations
import Query from './querys';
import {Mutation} from './mutations';
// types
import {testTypes} from './resources/test/test.schema';
// resolvers
import { testResolvers } from './resources/test/test.resolvers'

const resolvers = merge(
    testResolvers
);

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
        testTypes
    ],
    resolvers
});
