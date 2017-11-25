import express from 'express';
import promise from 'bluebird';
import { json, urlencoded } from 'body-parser';
import { routes } from './routes';
import models from '../models';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: false }));
routes(app);

models.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App is listening on port ${port}`));
});

module.exports = app;