import express from 'express';
import cors from 'cors';
import nocache from 'nocache';
import { dbConnection } from './database/database.conn';
import { userRouter } from '../adapters/routes/user.routes';

const app = express();
const port = 3003;

app.use(cors());
app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
