import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// Corpo (Request Body): Dados para criação ou atualização dos registros
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);