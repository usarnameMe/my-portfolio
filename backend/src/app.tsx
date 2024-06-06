import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
import routes from './routes';
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
