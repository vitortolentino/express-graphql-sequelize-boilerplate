const authorTypes = `
    type Author { 
        id: ID!
        name: String
        last_name: String
        books(first: Int, limit: Int): [Book!]!
    }
    input AuthorCreateInput {
        name: String!
        last_name: String!
    }
`;

const authorQuerys = `
    author(id: ID!): Author!
    authors(first: Int!, limit: Int): [Author!]!
`;

const authorMutations = `
    createAuthor(input: AuthorCreateInput!): Author
    updateAuthor(id: ID!, input: AuthorCreateInput): Author
    deleteAuthor(id: ID!): Boolean
`;

export {
    authorTypes,
    authorQuerys,
    authorMutations
}