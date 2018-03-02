import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './graphql/schema';
import models from './models/index.js';

const app = express();

const startApp = (port) => {
	app.listen(port, () => {
		console.log('Server is listening on port ' + port);
	});
}

models.sequelize.sync()
	.then(() => {
		startApp(3000);
	})
	.catch((e) => {
		throw new Error(e);
	});

app.use('/graphql', bodyParser.json(),
	graphqlExpress({ 
		schema,
		context: { db: models}
	})
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
