'use strict';
import { handleError }  from '../../../utils/utils';
import { getFields } from "../../../utils/graphqlHelpers";

export const bookResolvers = {
	
	Book: {
		author: (book, args, {db}, info) => {
			let attributes = getFields(db.Author, info);
			return db.Author
						.findOne({ 
							where: {id : book.get('author')},
							attributes
						})
						.catch(err => handleError(err));
		}
	},

	Query: {
		book: (parent, {id}, {db} , info) => {
			let attributes = getFields(db.Book, info);
			id = parseInt(id);			
			return db.Book
					.findOne({ 
						where: {id : id},
						attributes
					})
					.catch(err => handleError(err));
		},
		books: (book, { offset = 0 , limit = 10 }, {db} , info) => {
			let attributes = getFields(db.Book, info);
			return db.Book
				.findAll({offset, limit, attributes})
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

