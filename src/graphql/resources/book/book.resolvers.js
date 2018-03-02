export const bookResolvers = {
	Query: {
		book: (book, {id}, {db} , info) => {
			return db.book
				.findById(id)
				.then(book => book)
				.catch(err => console.log(err));
		},
		books: (book, args, {db} , info) => {
			return db.book
				.findAll()
				.catch(err => console.log(err));
		}
	},

	Mutation: {
		createBook: (book, { input }, { db }, info) => {
			return db.sequelize.transaction((transaction) => {
				return db.book
					.create(input, { transaction: transaction })
			})
		},
		updateBook: (book, { id, input }, { db }, info) => {
			return db.sequelize.transaction((transaction) => {
				return db.book
						.findById(id)
						.then((book) => {
							book
								.update(input, {transaction})
								.then(book => !book ? false : true);
						});
			})
		},
		deleteBook: (book, { id }, { db }, info) => {
			return db.sequelize.transaction((transaction) => {
				return db.book
						.findById(id)
						.then((book) => {
							return book
									.destroy({transaction})
									.then(book => !book ? false : true);
						});
			})
		}
	}
};

