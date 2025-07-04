import express, { Application, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Basic route for testing
app.get('/', (_, res: Response) => {
  res.send('Welcome to AssureSafe - Secure Your Tomorrow Today');
});

export default app;
