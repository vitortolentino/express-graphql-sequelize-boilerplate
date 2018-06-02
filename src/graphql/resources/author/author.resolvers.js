'use strict';
import { handleError }  from '../../../utils/utils';
import { getFields } from '../../../utils/graphqlHelpers';

export const authorResolvers = {

	Author: {
		books: async (author, { offset = 0 , limit = 10 }, {db}, info) => {	
			let attributes = getFields(db.Book, info);	
			try {
				const book = await db.Book.findAll({
					where: {author: author.get('id')},
					limit,
					offset,
					attributes
				});
				return book;
			} catch(err) {				l
				handleError(err);
			}
		}
	},

	Query: {
		author: async (parent, {id}, {db} , info) => {
			id = parseInt(id);
			let attributes = getFields(db.Author, info);
			try {
				const author = await db.Author.findOne({
					where :{id : id},
					attributes
				});
				return author;
			} catch(err) {
				handleError(err);
			} 
		},
		authors: async (author, { offset = 0, limit = 10 }, {db} , info) => {
			let attributes = getFields(db.Author, info);			
			try {
				const authors = await db.Author.findAll({
					limit,
					offset,
					attributes
				});
				return authors;
			} catch(err) {
				handleError(err);
			} 
		}
	},

	Mutation: {
		createAuthor: async (author, { input }, { db }, info) => {
			const transaction = db.sequelize.transaction()
																				.then(t => t)
																				.catch(err => handleError(err));
			try {
				const author = await db.Author.create(input, { transaction });
				return author;
			} catch(err) {
				handleError(err);
			}	
			
		},
		updateAuthor: async (parent, { id, input }, { db }, info) => {
			id = parseInt(id);
			const transaction = db.sequelize.transaction()
																				.then(t => t)
																				.catch(err => handleError(err));
			try {
				const author 		= await db.Author.findById(id);
											
				if(!author) throw new Error(`Author with id ${id} not find!`);

				const result  = await author.update(input, { transaction }); 
				transaction.commit();                   
				return result;
			}
			catch(err) {
				transaction.roolback();
				handleError(err);
			}            
		},
		deleteAuthor: async (parent, { id }, { db }, info) => {
			id = parseInt(id);
			const transaction = db.sequelize.transaction()
																				.then(t => t)
																				.catch(err => handleError(err));
			try {
				const author 		= await db.Author.findById(id);	

				if(!author) throw new Error(`Author with id ${id} not find!`);

				const result  = await author.destroy({ transaction })
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
