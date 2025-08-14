import mongoose from 'mongoose'
import helmet from 'helmet'
import express from 'express'
import routes from './backend/routes/routes.js'
import cors from 'cors'
import bodyparser from 'bodyparser'

const app = express();

app.use(bodyparser.json())
app.use(cors())
app.use(helmet());
app.use(express.json());

app.use('/', routes)