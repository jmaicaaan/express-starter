import express from 'express';
import { introHandler, UserHandler } from './handlers/index';
import routeACL from './route.acl.json';
import { RouteMiddleware } from './middlewares/route.middleware';

const router = express.Router();
const userHandler = new UserHandler();
const routeMiddleware = new RouteMiddleware();

router.get('/', introHandler);

/**
 * Preseving the context `this`
 * 
 * When a function is passed as an argument(eg: callback)
 * its context is lost. In order to preseve the context of 
 * the function you can do a closure technique as 
 * illustrated below in the acl middleware.
 */

router.use((req, res, next) => {
  return routeMiddleware.acl(req, res, next);
});

router.get('/user', userHandler.find);
router.post('/user', userHandler.addUser);
router.post('/user/login', userHandler.login);

module.exports.router = router;