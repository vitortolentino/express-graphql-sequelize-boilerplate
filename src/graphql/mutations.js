import { bookMutations }  from './resources/book/book.schema'
import { authorMutations } from './resources/author/author.schema';

const Mutation = `
    type Mutation {
        ${bookMutations}
        ${authorMutations}
    }
`;

export {
    Mutation
}