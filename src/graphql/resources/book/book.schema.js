const bookTypes = `
    type Book { 
        id: ID!
        title: String
        author: String 
    }
    input BookCreateInput {
        title: String!
        author: String!
    }
`;

const bookQuerys = `
    book(id: ID!): Book!
    books: [Book!]!
`;

const bookMutations = `
    createBook(input: BookCreateInput!): Book
    updateBook(id: ID!, input: BookCreateInput): Boolean
    deleteBook(id: ID!): Boolean
`;

export {
    bookTypes,
    bookQuerys,
    bookMutations
}