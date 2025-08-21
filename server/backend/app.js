import mongoose from 'mongoose'
import helmet from 'helmet'
import express from 'express'
import routes from './routes/routes.js'
import cors from 'cors'
import bodyparser from 'body-parser'

const app = express();

app.use(bodyparser.json())
app.use(cors())
app.use(helmet());
app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});

app.use('/', routes)