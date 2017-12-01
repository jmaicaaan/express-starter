import express from 'express';
import { UserHandler } from '../../handlers/index';
import { RouteMiddleware } from '../../middlewares/route.middleware';

const UserRoutes = express.Router();

const userHandler = new UserHandler();
const routeMiddleware = new RouteMiddleware();

UserRoutes.get('/', userHandler.find);
UserRoutes.post('/', userHandler.addUser);
UserRoutes.post('/login', userHandler.login);

module.exports.UserRoutes = UserRoutes;