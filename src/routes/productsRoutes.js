import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

router.get('/', ProductController.index);
router.post('/', ProductController.create);
router.get('/:id', ProductController.find);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

export { router };