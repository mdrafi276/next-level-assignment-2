import express, { Request, Response } from 'express';
import Product from './product.model';
import { productControllers } from './product.controller';

const router = express.Router();


router.post('/', productControllers.createProduct);

export const ProductRouter = router;

