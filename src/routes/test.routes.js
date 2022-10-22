import { Router } from 'express';
import { saludoController,saludoController2 } from '../controllers/test.controller.js';

const test = Router();

test.get('/saludo', saludoController);

test.get('/saludo2', saludoController2);

export default test;