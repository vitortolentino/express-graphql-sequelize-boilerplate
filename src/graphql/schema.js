import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
// querys and mutations
import Query from './querys';
import {Mutation} from './mutations';
// types
import {bookTypes} from './resources/book/book.schema';
// resolvers
import { bookResolvers } from './resources/book/book.resolvers'

const resolvers = merge(
    bookResolvers
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
        bookTypes
    ],
    resolvers
});
