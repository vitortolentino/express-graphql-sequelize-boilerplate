import { handleError }  from '../../../utils/utils.js'

export const bookResolvers = {
	Book: {
		author: (book, args, {db}, info) => {
			return db.Author
						.findById(book.get('author'))
						.catch(err => handleError(err));
		}
	},
	Query: {
		book: (parent, {id}, {db} , info) => {
			id = parseInt(id);			
			return db.Book
					.findById(id)
					.catch(err => handleError(err));
		},
		books: (book, {first = 0 , limit = 10}, {db} , info) => {
			return db.Book
				.findAll({first, limit})
				.catch(err => handleError(err));
		}
	},

	Mutation: {
		createBook: (book, { input }, { db }, info) => {
			return db.sequelize.transaction(transaction => {
				return db.Book
					.create(input, { transaction: transaction });
			})
			.catch(err => handleError(err));
		},
		updateBook: async (parent, { id, input }, { db }, info) => {
			id = parseInt(id);
			const transaction = db.sequelize.transaction()
																				.then(t => t)
																				.catch(err => handleError(err));
			try {
				const book = await db.Book.findById(id);
				if(!book) throw new Error(`Book with id ${id} not find!`);
				const result  = await book.update(input, { transaction }); 
				transaction.commit();                   
				return result;
			}
			catch(err) {
				transaction.roolback();
				handleError(err);
			}            
		},
		deleteBook: async (parent, { id }, { db }, info) => {
			id = parseInt(id);
			const transaction = db.sequelize.transaction()
																				.then(t => t)
																				.catch(err => handleError(err));
			
			try {

				const book = await db.Book.findById(id);
				if(!book) throw new Error(`Book with id ${id} not find!`);

				const result  = await book.destroy({ transaction })
				transaction.commit();                   
				return result;
			}
			catch(err) {
				transaction.roolback();
				handleError(err);
			}			
		}
	}
};

