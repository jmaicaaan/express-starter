import express from 'express';
import promise from 'bluebird';
import { json, urlencoded } from 'body-parser';
import { router } from './routes';
import * as models from '../models';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(router);


module.exports = app;