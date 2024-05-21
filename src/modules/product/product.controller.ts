import { Request, Response } from "express";
import Product from "./product.model";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    const productData = req.body
    const result = await ProductService.createProduct(productData)




    try {

        res.status(200).send({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Failed to create product",

        });
    }


}

export const productControllers = {
    createProduct
}