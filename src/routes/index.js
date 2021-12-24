import { Router } from 'express';
import { router as usersRouter } from './usersRoutes';
import { router as productsRouter } from './productsRoutes';

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);

export { router };