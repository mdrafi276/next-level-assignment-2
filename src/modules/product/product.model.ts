import { Schema, model } from "mongoose";
import { Inventory, ProductVariant, TProduct } from "./porduct.interface";

// Schema for ProductVariant
const ProductVariantSchema = new Schema<ProductVariant>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

// Schema for Inventory
const InventorySchema = new Schema<Inventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});

// Schema for Product
const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    variants: {
        type: [ProductVariantSchema],
        required: true
    },
    inventory: {
        type: InventorySchema,
        required: true
    }
});

// Create a model for the Product schema
const Product = model('Product', ProductSchema);

export default Product;
