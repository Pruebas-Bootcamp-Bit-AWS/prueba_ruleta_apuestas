import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './src/config/db.js';

const app = express();

databaseConnection();

dotenv.config();

const PORT = process.env.PORT_ENV || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log(`[SERVER] El servidor esta corriendo en el puerto http://localhost:${PORT}`);
});