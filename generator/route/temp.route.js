import express from 'express';
import { <%= upCaseName %>Handler } from '../../handlers/index';
import { RouteMiddleware } from '../../middlewares/route.middleware';
import modelRoutes from './<%= name %>.route.json';

const <%= upCaseName %>Routes = express.Router();

const <%= name %>Handler = new <%= upCaseName %>Handler();
const routeMiddleware = new RouteMiddleware();

/**
 * Preseving the context `this`
 * 
 * When a function is passed as an argument(eg: callback)
 * its context is lost. In order to preseve the context of 
 * the function you can do a closure technique as 
 * illustrated below in the acl middleware.
 */

<%= upCaseName %>Routes.use((req, res, next) => {
  const routes = modelRoutes.authorized;
  routeMiddleware.acl(req, res, next, routes);
});


<%= upCaseName %>Routes.get('/', <%= name %>Handler.intro);

module.exports.<%= upCaseName %>Routes = <%= upCaseName %>Routes;