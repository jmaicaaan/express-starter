import express from 'express';
import { <%= upCaseName %>Handler } from '../../handlers/index';
import { RouteMiddleware } from '../../middlewares/route.middleware';

const <%= upCaseName %>Routes = express.Router();

const <%= name %>Handler = new <%= upCaseName %>Handler();
const routeMiddleware = new RouteMiddleware();


<%= upCaseName %>Routes.get('/', <%= name %>Handler.intro);

module.exports.<%= upCaseName %>Routes = <%= upCaseName %>Routes;