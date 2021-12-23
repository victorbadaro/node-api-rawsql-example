import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.index);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export { router };