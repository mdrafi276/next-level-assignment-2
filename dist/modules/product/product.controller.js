"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductService.createProduct(productData);
        console.log("result:", result);
        res.status(200).send({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || 'faield to create product',
            error: err,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {};
        const search = req.query.searchTerm;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
            ];
        }
        ;
        const result = yield product_service_1.ProductService.getAllProduct(query);
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
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Products fetched successfully!',
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || 'failed to get product',
            error: err,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductService.getProductById(id);
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
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || 'Something  went wrong',
            error: err,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProduct,
    getProductById
};
