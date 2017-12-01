import express from 'express';
import { IntroHandler } from '../../handlers/index';

const IntroRoutes = express.Router();

const introHandler = new IntroHandler();

IntroRoutes.get('/', introHandler.intro);

module.exports.IntroRoutes = IntroRoutes;