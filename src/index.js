import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './graphql/schema';
import models from './models/index.js';
import { normalizePort, handleError, onError, startApp } from './utils/utils';

const app = express();

models.sequelize.sync()
	.then(() => {
		startApp(3000, app);
	})
	.catch((e) => {
		handleError(e);
	});

app.use('/graphql', bodyParser.json(),
	graphqlExpress({ 
		schema,
		context: { db: models}
	})
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
