import {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mergeSchemas,
} from 'graphql-tools';
// querys and mutations
import Query from './querys';
import Mutation from './mutations';
// types
import {testTypes} from './resources/test/test.schema';
// const resolvers = merge(
//     test
// );
  

const schemaDefinition = `
    type Schema {
        query: Query
        mutatuin: Mutation
    }
`;


export default makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        Query,
        Mutation,
        testTypes
    ]
});
