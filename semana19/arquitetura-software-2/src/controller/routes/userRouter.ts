import express from 'express';
import { getUserProfile, login, signup } from '../userController';

export const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/profile', getUserProfile);