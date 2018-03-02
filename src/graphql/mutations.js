import { bookMutations }  from './resources/book/book.schema'

const Mutation = `
    type Mutation {
        ${bookMutations}
    }
`;

export {
    Mutation
}