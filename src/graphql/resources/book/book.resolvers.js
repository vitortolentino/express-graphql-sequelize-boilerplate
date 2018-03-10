import { handleError }  from '../../../utils/utils.js'

export const bookResolvers = {
	Book: {
		author: (book, args, {db}, info) => {
			return db.Author
						.findById(book.get('author'))
						.catch(handleError);
		}
	},
	Query: {
		book: (parent, {id}, {db} , info) => {
			id = parseInt(id);			
			return db.Book
					.findById(id)
					.catch(handleError);
		},
		books: (book, args, {db} , info) => {
			return db.Book
				.findAll()
				.catch(handleError);
		}
	},

	Mutation: {
		createBook: (book, { input }, { db }, info) => {
			return db.sequelize.transaction(t => {
				return db.Book
					.create(input, { transaction: t });
			})
		},
		updateBook: async (parent, { id, input }, { db }, info) => {
			id = parseInt(id);
			const t = await db.sequelize.transaction();
			const book = await db.Book.findById(id);
                    
			if(!book) throw new Error(`Book with id ${id} not find!`);
			try {
				const result  = await book.update(input, {transaction: t}); 
				t.commit();                   
				return result;
			}
			catch(e) {
				t.roolback();
				handleError;
			}            
		},
		deleteBook: async (parent, { id }, { db }, info) => {
			id = parseInt(id);
            const t = await db.sequelize.transaction();
			const book = await db.Book.findById(id);
			
			if(!book) throw new Error(`Book with id ${id} not find!`);
			try {
				const result  = await book.destroy({transaction: t})
				t.commit();                   
				return result;
			}
			catch(e) {
				t.roolback();
				handleError;
			}			
		}
	}
};

