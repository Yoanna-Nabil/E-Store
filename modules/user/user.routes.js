import express from 'express';
import { createUser, editInfo, login} from './user.controller.js';
import { auth } from '../../middleware/auth.js';

export const userRoutes= express.Router();

userRoutes.post('/users', createUser);
userRoutes.post('/users/login', login);
userRoutes.patch('/users/:id',auth(), editInfo);