import * as app from './app.js';
import * as models from '../models';

const port = process.env.PORT || 3000;
app.set('port', port);

models.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App is listening on port ${port}`));
});