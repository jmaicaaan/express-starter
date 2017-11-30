import express from 'express';
import { json, urlencoded } from 'body-parser';
import { IntroRoutes, UserRoutes } from './routes/index';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/', IntroRoutes);
app.use('/user', UserRoutes);

module.exports = app;