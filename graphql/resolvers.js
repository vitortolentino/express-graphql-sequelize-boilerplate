import { merge } from 'lodash';
// resolvers
import { bookResolvers } from './resources/book/book.resolvers'
import { authorResolvers } from './resources/author/author.resolvers';

export default merge(
    bookResolvers,
    authorResolvers
);