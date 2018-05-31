import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './graphql/schema';
import db from './models';
import { normalizePort, handleError, onError, startApp } from './utils/utils';

const app = express();

db.sequelize.sync()
	.then(() => {
		startApp(3000, app);
	})
	.catch((err) => {
		console.log(handleError(err));
	});

app.use('/graphql', bodyParser.json(),
	graphqlExpress({ 
		schema,
		context: { db: db }
	})
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
