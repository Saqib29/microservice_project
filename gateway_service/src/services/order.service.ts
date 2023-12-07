import axios from "axios";

const orderService = {
  async getOrders() {
    const response = axios.get(`${process.env.ORDER_SERVICE_URL}/orders`);
    return response;
  },

  async getOrder(id: string) {
    const response = axios.get(`${process.env.ORDER_SERVICE_URL}/${id}`);
    return response;
  },

  async createOrder(orders: any) {
    const response = axios.post(`${process.env.ORDER_SERVICE_URL}/create`, orders);
    return response;
  },
};

export default orderService;
