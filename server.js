import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import routes from './src/routes/index.js';

const app = express();
const server = createServer(app);
const port = 4001;

app.use(express.static('public'));
app.use(cors()); // validaciones de peticiones en el servidor.
app.use(express.json()); // cualquier información recibida la intentará convertir a json.
app.use(routes);

server.listen(port);
console.log(`Servidor iniciado en el puerto: ${port}.`);

