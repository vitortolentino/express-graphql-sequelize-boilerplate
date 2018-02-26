const testTypes = `
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

const testQuerys = `
    books: [Book]
    root: Root
`;

const testMutations = `
    createBook(input: BookCreateInput!): Book
`;

export {
    testTypes,
    testQuerys,
    testMutations
}