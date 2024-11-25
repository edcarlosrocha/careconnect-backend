import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './database/connection.js';
import router from './routes/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

const API_URL = process.env.API_URL || 'localhost';
const PORT = process.env.PORT || 5000;

app.listen(PORT, API_URL, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
