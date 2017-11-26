import express from 'express';
import promise from 'bluebird';
import { json, urlencoded } from 'body-parser';
import { routes } from './routes';
import models from '../models';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
routes(app);

module.exports = app;