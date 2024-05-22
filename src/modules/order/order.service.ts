import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: IOrder) => {
    const result = await Order.create(payload);
    return result;
};
export const OrderServices = {
    createOrder
}