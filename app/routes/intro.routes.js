import express from 'express';
import { IntroHandler } from '../handlers/index';
import { RouteMiddleware } from '../middlewares/route.middleware';
import modelRoutes from './intro.routes.json';

const IntroRoutes = express.Router();

const introHandler = new IntroHandler();
const routeMiddleware = new RouteMiddleware();


IntroRoutes.get('/', introHandler.intro);

module.exports.IntroRoutes = IntroRoutes;