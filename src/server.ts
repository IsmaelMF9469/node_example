import * as express from 'express';

const app = express();
const port = 4000

app.get('/', (request, response) => {
    response.send(' Hello world ')
});

app.get('/participante', (request, response) => {
    response.send('Hello participante ')
});

app.listen(port, () => {
    console.log(` server is running at port ${port} `)
});