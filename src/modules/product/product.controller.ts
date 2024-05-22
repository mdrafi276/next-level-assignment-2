import { Request, Response } from "express";
import Product from "./product.model";
import { ProductService } from "./product.service";
import { productValidationSchema } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {

    try {
        const zodParsedData = productValidationSchema.parse(req.body);
        const result = await ProductService.createProduct(zodParsedData)
        console.log("result:", result);



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
        const query: any = {};
        const search = req.query.searchTerm;

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
            ];
        };
        const result = await ProductService.getAllProduct(query);

        if (result.length === 0 || !result) {
            res.status(404).json({ success: false, message: 'Product not found' });
            return;
        }

        if (search) {


            res.status(200).json({
                success: true,
                message: `Products matching search term '${search}' fetched successfully!`,
                data: result,
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Products fetched successfully!',
                data: result,
            });
        }



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



const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const updatedData = req.body;
        const zodData = productValidationSchema.parse(updatedData);

        const result = await ProductService.updateProduct(id, zodData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message || 'Something went wrong',
            error: error,
        });
    }
};



// delete
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;

        const result = await ProductService.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message || 'Something went wrong',
            error: error,
        });
    }
};

export const productControllers = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}