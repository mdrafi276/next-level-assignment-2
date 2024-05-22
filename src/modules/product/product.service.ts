import { TProduct } from "./porduct.interface";
import Product from "./product.model";



const createProduct = async (payload: TProduct) => {
    const product = new Product(payload);
    const result = await product.save();


    return result;
};

const getAllProduct = async (query: any) => {
    const result = await Product.find(query);
    return result;
};

const getProductById = async (id: string) => {
    const result = await Product.findOne({ _id: id });
    return result;
};

const updateProduct = async (
    id: string,
    payload: TProduct,
) => {
    const updateData = payload;
    const result = await Product.findByIdAndUpdate(
        { _id: id },
        { $set: updateData },
        { new: true },
    );
    return result;
};
const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndDelete({ _id: id });
    return result;
};
export const ProductService = {

    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct

}