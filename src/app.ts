import express = require('express');

const app: express.Application = express();

app.get('/', (request, response) => {
    response.send('Running');
});

export {app};