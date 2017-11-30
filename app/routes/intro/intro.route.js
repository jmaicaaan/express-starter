import express from 'express';
import { IntroHandler } from '../../handlers/index';
import modelRoutes from './intro.route.json';

const IntroRoutes = express.Router();

const introHandler = new IntroHandler();

IntroRoutes.get('/', introHandler.intro);

module.exports.IntroRoutes = IntroRoutes;