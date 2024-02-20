import {Router } from 'express';
import { auth } from './AuthRouters';

export const routerApi = Router();

routerApi.use('/auth', auth);

