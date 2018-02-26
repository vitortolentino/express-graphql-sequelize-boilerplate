const testTypes = `
    type Book { 
        title: String, 
        author: String 
    }
    input BookCreateInput {
        name: String!
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
    createBook(input: BookCreateInput!): User
`;

export {
    testTypes,
    testQuerys,
    testMutations
}