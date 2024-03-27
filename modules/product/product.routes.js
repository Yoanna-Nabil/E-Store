import express from 'express';
import { getProduct, getUserSearch, newProduct } from './product.controller.js';
import { auth, restrictTo } from '../../middleware/auth.js';

export const productRoutes= express.Router();


productRoutes.post('/product',restrictTo('User'), newProduct);
productRoutes.post('/product', auth(), restrictTo('User'), getUserSearch);
productRoutes.get('/product', getProduct);

