import express from 'express';
import { TestHandler } from '../../handlers/index';
import { RouteMiddleware } from '../../middlewares/route.middleware';
import modelRoutes from './test.routes.json';

const TestRoutes = express.Router();

const testHandler = new TestHandler();
const routeMiddleware = new RouteMiddleware();

/**
 * Preseving the context `this`
 * 
 * When a function is passed as an argument(eg: callback)
 * its context is lost. In order to preseve the context of 
 * the function you can do a closure technique as 
 * illustrated below in the acl middleware.
 */

TestRoutes.use((req, res, next) => {
  const routes = modelRoutes.authorized;
  routeMiddleware.acl(req, res, next, routes);
});


TestRoutes.get('/', testHandler.intro);

module.exports.TestRoutes = TestRoutes;