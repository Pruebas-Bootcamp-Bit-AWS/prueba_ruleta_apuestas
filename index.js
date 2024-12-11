import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './src/config/db.js';
import apiRoutes from './src/routes/api.routes.js';

const app = express();

databaseConnection();

dotenv.config();

const PORT = process.env.PORT_ENV || 4000;

app.use(express.json());
app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`[SERVER] El servidor esta corriendo en el puerto http://localhost:${PORT}`);
});