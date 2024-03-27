import express from 'express';
import { initConnection } from './db/connect.js';
import { userRoutes } from './modules/user/user.routes.js';
import { sellerRoutes } from './modules/seller/seller.routes.js';
import { productRoutes } from './modules/product/product.routes.js';
import { orderRoutes } from './modules/order/order.routes.js';
import dotenv from 'dotenv';

let server= express();

server.use(express.json());
server.use(userRoutes);
server.use(sellerRoutes);
server.use(productRoutes);
server.use(orderRoutes);

initConnection();

dotenv.config();

server.listen(3000);