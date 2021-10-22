import { Router } from 'express';
import { getAllProducts } from '../../controllers/product/productController';

const router = Router();
router.get('/', getAllProducts);

export default router;
