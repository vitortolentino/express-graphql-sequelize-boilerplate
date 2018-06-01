const bookTypes = `
    type Book { 
        id: ID!
        title: String
        author: Author!
    }
    input BookCreateInput {
        title: String!
        author: Int!
    }
`;

const bookQuerys = `
    book(id: ID!): Book!
    books(first: Int, limit: Int): [Book!]!
`;

const bookMutations = `
    createBook(input: BookCreateInput!): Book
    updateBook(id: ID!, input: BookCreateInput): Book
    deleteBook(id: ID!): Boolean
`;

export {
    bookTypes,
    bookQuerys,
    bookMutations
}