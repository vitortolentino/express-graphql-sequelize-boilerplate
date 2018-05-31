// Starting app
export const startApp = (port, app) => {
	port = normalizePort(port);
	app.listen(port, () => {
		console.log(`Server is listening on port ${port}. Go to localhost:${port}/graphiql`);
	});
	app.on('error', err => onError(err));
}

// function ensures that the port is valid
export const normalizePort = (val) => {
    let port = (typeof val === 'string') ? parseInt(val) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}

// handle Error state into application
export const onError = (server) => {
    return (error) => {
        let port = server.address().port;
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? `pipe ${port}` : `port ${port}`;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}

// handle errors
export const handleError = (error) => {
    let errorMessage = `${error.name}: ${error.message}`;
    return Promise.reject(new Error(errorMessage)).catch(err => err);
}
