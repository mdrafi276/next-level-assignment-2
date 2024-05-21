import { TProduct } from "./porduct.interface";
import Product from "./product.model";



const createProduct = async (payload: TProduct) => {
    const product = new Product(payload);
    const result = await product.save();


    return result;
}
export const ProductService = {

    createProduct

}