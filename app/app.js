import express from 'express';
import { json, urlencoded } from 'body-parser';
import { UserRoutes } from './routes/user.routes';
import { IntroRoutes } from './routes/intro.routes';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/', IntroRoutes);
app.use('/user', UserRoutes);

module.exports = app;