import { Router } from 'express';
import { router as usersRouter } from './usersRoutes';

const router = Router();

router.use('/users', usersRouter);

export { router };