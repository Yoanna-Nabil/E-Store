import express from 'express';
import { createProduct, deleteProduct, getProduct, newSeller, updateProduct } from './seller.controller.js';

export const sellerRoutes= express.Router();

sellerRoutes.post('/seller', newSeller);
sellerRoutes.get('/sellerGetProduct/:id', getProduct);
sellerRoutes.post('/sellerCreateProduct', createProduct);
sellerRoutes.patch('/sellerUpdateProduct/:id', updateProduct);
sellerRoutes.delete('/sellerDeleteProduct/:id', deleteProduct);
