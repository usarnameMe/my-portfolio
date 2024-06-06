import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index';
import errorHandler from './middleware/errorHandler';
import logger from './middleware/logger';
import rateLimiter from './middleware/rateLimiter';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

app.use('/api', rateLimiter);

app.use('/api', routes);

app.use(errorHandler);

export default app;
