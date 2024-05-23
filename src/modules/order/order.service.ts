import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: IOrder) => {
    const result = await Order.create(payload);
    return result;
};

const getAllOrders = async (query: IOrder) => {
    const result = await Order.find(query);
    return result;
};
export const OrderServices = {
    createOrder,
    getAllOrders
}