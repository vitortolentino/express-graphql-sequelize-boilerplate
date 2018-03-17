# express-graphql-sequelize-boilerplate

A boilerplate using NodeJs, Express, Sequelize and ApolloGraphQL.

## Getting up and running

1. Clone the repository
2. `npm install`
3. `npm start`
4. Visit `https://localhost:3000/graphiql`

.
├── config
│   └── config.json
├── graphql
│   ├── mutations.js
│   ├── querys.js
│   ├── resolvers.js
│   ├── resources
│   │   ├── author
│   │   │   ├── author.resolvers.js
│   │   │   └── author.schema.js
│   │   └── book
│   │       ├── book.resolvers.js
│   │       └── book.schema.js
│   ├── schema.js
│   └── types.js
├── index.js
├── models
│   ├── Author.js
│   ├── Book.js
│   └── index.js
├── package.json
├── package-lock.json
├── README.md
└── utils
    └── utils.js