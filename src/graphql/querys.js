import { bookQuerys } from './resources/book/book.schema';

export default `
    type Query {
        ${bookQuerys}
    }
`;