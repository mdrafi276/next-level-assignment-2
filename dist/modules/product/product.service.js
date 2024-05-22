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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_model_1.default(payload);
    const result = yield product.save();
    return result;
});
const getAllProduct = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find(query);
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOne({ _id: id });
    return result;
});
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = payload;
    const result = yield product_model_1.default.findByIdAndUpdate({ _id: id }, { $set: updateData }, { new: true });
    return result;
});
exports.ProductService = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct
};
