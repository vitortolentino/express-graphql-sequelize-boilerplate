import { handleError }  from '../../../utils/utils.js'

export const authorResolvers = {
	Author: {
		books: (author, {first, offset}, {db}, info) => {
			console.log(db.Book);
			return db.Book
					.findAll({
						where: {author: author.get('id')}
					})
					.catch(handleError);
		}
	},
	Query: {
		author: (parent, {id}, {db} , info) => {
			id = parseInt(id);
			return db.Author
						.findById(id)
						.catch(handleError);
		},
		authors: (author, args, {db} , info) => {
			return db.Author
				.findAll()
				.catch(handleError);
		}
	},

	Mutation: {
		createAuthor: (author, { input }, { db }, info) => {
			return db.sequelize.transaction(t => {
				return db.Author
					.create(input, { transaction: t });
			})
		},
		updateAuthor: async (parent, { id, input }, { db }, info) => {
			id = parseInt(id);
			const t = await db.sequelize.transaction();
			const author = await db.Author.findById(id);
                    
			if(!author) throw new Error(`Author with id ${id} not find!`);
			try {
				const result  = await author.update(input, {transaction: t}); 
				t.commit();                   
				return result;
			}
			catch(err) {
				t.roolback();
				handleError(err);
			}            
		},
		deleteAuthor: async (parent, { id }, { db }, info) => {
			id = parseInt(id);
            const t = await db.sequelize.transaction();
			const author = await db.Author.findById(id);
			
			if(!author) throw new Error(`Author with id ${id} not find!`);
			try {
				const result  = await author.destroy({transaction: t})
				t.commit();                   
				return result;
			}
			catch(err) {
				t.roolback();
				handleError(err);
			}			
		}
	}
};

