import 'dotenv/config';
import express from 'express';
import { router } from './routes';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(router);

app.listen(SERVER_PORT, () => console.log(`Server is running! Port: ${SERVER_PORT}`));