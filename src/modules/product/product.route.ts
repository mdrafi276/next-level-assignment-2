import express, { Request, Response } from 'express';
import Product from './product.model';
import { productControllers } from './product.controller';

const router = express.Router();


router.post('/', productControllers.createProduct);
router.get('/', productControllers.getAllProduct);
router.get('/:productId', productControllers.getProductById);
router.put('/:productId', productControllers.updateProduct);

export const ProductRouter = router;

