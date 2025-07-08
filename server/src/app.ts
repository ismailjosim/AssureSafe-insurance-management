import express, { Application, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/v1', router);

// Basic route for testing
app.get('/', (_, res: Response) => {
  res.send({
    status: true,
    message: 'Welcome to AssureSafe - Secure Your Tomorrow Today',
  });
});

export default app;
