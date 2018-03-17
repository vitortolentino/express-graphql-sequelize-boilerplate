import { bookQuerys } from './resources/book/book.schema';
import { authorQuerys } from './resources/author/author.schema';

export default `
    type Query {
        ${bookQuerys}
        ${authorQuerys}
    }
`;