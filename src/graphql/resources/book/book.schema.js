const bookTypes = `
    type Book { 
        title: String
        author: String 
    }
    input BookCreateInput {
        title: String!
        author: String!
    }
    type Root {
        book: Book 
    }
`;

const bookQuerys = `
    books: [Book]
    root: Root
`;

const bookMutations = `
    createBook(input: BookCreateInput!): Book
`;

export {
    bookTypes,
    bookQuerys,
    bookMutations
}