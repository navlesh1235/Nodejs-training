import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Base Route
app.use('/api', routes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;