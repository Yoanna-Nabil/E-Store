import express from 'express';
import { makeOrder } from './order.controller.js';
import { auth } from '../../middleware/auth.js';

export const orderRoutes= express.Router();

orderRoutes.post('/order', auth(), makeOrder);

