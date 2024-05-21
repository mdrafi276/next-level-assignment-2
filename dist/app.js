"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const product_route_1 = require("./modules/product/product.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors());
app.use('/api/products', product_route_1.ProductRouter);
app.use('/api/products', product_route_1.ProductRouter);
app.get('/', (req, res) => {
    res.send('Server is running...');
});
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found!',
        status: 404,
    });
});
exports.default = app;
