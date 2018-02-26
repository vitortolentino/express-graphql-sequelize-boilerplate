const books = [
    {
      title: "Harry Potter and the Sorcerer's stone",
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
];

export const resolvers = {
  Query: { 
    books: () => books 
  },

  Mutation: {
    createBook: (book, args, context, info) => books.push(book)
  }
};