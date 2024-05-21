import { Request, Response } from "express";
import Product from "./product.model";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    const productData = req.body
    const result = await ProductService.createProduct(productData)
    console.log("result:", result);

    try {

        res.status(200).send({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err?.message || 'faield to create product',
            error: err,
        });
    }


}

const getAllProduct = async (req: Request, res: Response) => {
    try {
        let query: any = {};
        const result = ProductService.getAllProduct(query);

        res.status(200).send({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })


    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err?.message || 'failed to get product',
            error: err,
        });
    }
}
const getProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductService.getProductById(id);

        if (!result) {
            return res
                .status(404)
                .json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err?.message || 'Something  went wrong',
            error: err,
        });
    }
};

export const productControllers = {
    createProduct,
    getAllProduct,
    getProductById
}