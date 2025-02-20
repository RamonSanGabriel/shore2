import express from 'express';
import cors from 'cors';
import logger from 'morgan';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'UPDATE', 'DELETE', 'PATCH'],
  credentials: true,
};

app.use(logger(formatsLogger));
app.use(cors(corsOptions));

app.use((req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

export { app };
