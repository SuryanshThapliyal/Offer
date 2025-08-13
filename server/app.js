import mongoose from 'mongoose'
import helmet from 'helmet'
import express from 'express'
import routes from 

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/', routes)