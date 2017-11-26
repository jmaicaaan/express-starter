const app = require('../../../dist/app');
const assert = require('assert');
const models = require('../../../models');
const server = require('supertest')(app);

describe('<%= name %>', () => {
  before(() => {
    return models.sequelize.sync();
  });
});