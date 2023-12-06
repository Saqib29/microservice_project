import UserDto from "dto/order.dto";
import { AppDataSource } from "../database/data-source";
import { Order } from "../entities/order.entity";

const orderRepository = AppDataSource.getRepository(Order);

export const getOrders = async () => {
  return await orderRepository.find();
};

export const getOrder = async (id: number) => {
  return await orderRepository.findOneByOrFail({ id });
};

export const createNewOrder = async (order: UserDto) => {
    return await orderRepository.save(orderRepository.create(order));
};
