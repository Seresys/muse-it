import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import fileRouter from './files/router';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/muse-it';

mongoose.connect(mongoUri);

app.get('/', (req, res) => res.send('Yo'));
app.use('/file', fileRouter);

app.listen(port);
