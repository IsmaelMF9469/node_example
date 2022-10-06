import * as express from 'express';

const app = express();
const port = 3000

app.get('/participante', (request, response) => {
    response.send(` Hello participante `)
});

app.listen(port, () => {
    console.log(` server is running at port ${port} `)
});