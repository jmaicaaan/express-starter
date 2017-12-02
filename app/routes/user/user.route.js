import express from 'express';
import { UserHandler } from '../../handlers/index';
import { RouteMiddleware } from '../../middlewares/route.middleware';
import { MeMiddleware } from '../../middlewares/me.middleware';

const UserRoutes = express.Router();

const userHandler = new UserHandler();
const routeMiddleware = new RouteMiddleware();
const meMiddleware = new MeMiddleware();

UserRoutes.get('/', userHandler.find);
UserRoutes.post('/', userHandler.addUser);
UserRoutes.post('/login', userHandler.login);

UserRoutes.get('/me', (req, res, next) => routeMiddleware.acl(req, res, next), 
  (req, res, next) => meMiddleware.getMe(req, res, next));

module.exports.UserRoutes = UserRoutes;