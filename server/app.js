import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import tweetRouter from './router/tweetRouter.js';
import authRouter from './router/authRouter.js';
import { config } from './config.js';
import { initSocekt } from './connection/socket.js';
import { connectDB } from './db/database.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connectDB()
  .then(() => {
    const server = app.listen(config.host.port);
    initSocekt(server);
  })
  .catch(console.error);
