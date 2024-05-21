import { TProduct } from "./porduct.interface";
import Product from "./product.model";



const createProduct = async (payload: TProduct) => {
    const product = new Product(payload);
    await product.save();


    return product;
}
export const ProductService = {

    createProduct

}