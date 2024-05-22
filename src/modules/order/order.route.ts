import express, { Request, Response } from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.createOrder);

// router.get('/', orderControllers.getAllOrders);

export const orderRoute = router;