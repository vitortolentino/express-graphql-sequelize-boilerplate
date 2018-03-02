export const bookResolvers = {
	Query: {
		books: (parent, args, {db} , info) => {

			console.log(db.book);
			return db.book
				.findAll()
				.catch(err => console.log(err));
		}
	},

	Mutation: {
		createBook: (parent, { input }, { db }, info) => {
			return db.sequelize.transaction((transaction) => {
				return db.book
					.create(input, { transaction: transaction })
			})
		}
	}
};

