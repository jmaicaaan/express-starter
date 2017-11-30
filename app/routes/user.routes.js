import express from 'express';
import { UserHandler } from '../handlers/index';
import { RouteMiddleware } from '../middlewares/route.middleware';
import modelRoutes from './user.routes.json';

const UserRoutes = express.Router();

const userHandler = new UserHandler();
const routeMiddleware = new RouteMiddleware(); 

/**
 * Preseving the context `this`
 * 
 * When a function is passed as an argument(eg: callback)
 * its context is lost. In order to preseve the context of 
 * the function you can do a closure technique as 
 * illustrated below in the acl middleware.
 */

UserRoutes.use((req, res, next) => {
  const routes = modelRoutes.authorized;
  routeMiddleware.acl(req, res, next, routes);
});

UserRoutes.get('/', userHandler.find);
UserRoutes.post('/', userHandler.addUser);
UserRoutes.post('/login', userHandler.login);

module.exports.UserRoutes = UserRoutes;