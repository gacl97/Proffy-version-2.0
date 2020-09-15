import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from './errors/AppError';

// Injection dependencies
import './container';
// Db connection
import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Middleware of Errors
app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.json(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Servidor iniciado na porta: 3333');
});
