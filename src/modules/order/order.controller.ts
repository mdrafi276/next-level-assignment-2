import { Request, Response } from "express";
import Product from "../product/product.model";
import { OrderServices } from "./order.service";
import { orderValidationSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const payload = req.body;

        const product = await Product.findById(payload.productId);
        if (!product) {
            res.status(404).json({
                success: false,
                message: 'Product not found',
            });
            return;
        }
        if (!product.inventory.inStock
            || product.inventory.quantity < payload.quantity

        ) {
            res.status(400).json({
                success: false,
                message: 'Insufficient quantity available in inventory',
            });
            return;
        }
        product.inventory.quantity -= payload.quantity;
        product.inventory.inStock = product.inventory.quantity > 0 ? true : false;
        await product.save();
        const zodParsedData = orderValidationSchema.parse(payload);

        const result = await OrderServices.createOrder(zodParsedData);

        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message || 'Something went wrong',
            error: error,
        });
    }
}
export const orderController = {
    createOrder
}