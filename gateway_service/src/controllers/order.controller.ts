import { Request, Response } from "express";
import orderService from "../services/order.service";

const orderController = {
  async getOrders(req: Request, res: Response) {
    try {
      const orderResponse = await orderService.getOrders();
      res.status(200).json(orderResponse.data);
    } catch (error: any) {
      console.log(`Error:- ${error.message}`);
      res.status(500).json({ error: "Internal Server error" });
    }
  },

  async getOrder(req: Request, res: Response) {
    try {
      const orderResponse = await orderService.getOrder(req.params.id);
      res.status(200).json(orderResponse.data);
    } catch (error: any) {
      console.log(`Error:- ${error.message}`);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async createOrder(req: Request, res: Response) {
    try {
      console.log(req.body);
      const orderResponse = await orderService.createOrder(req.body);
      res.status(201).json(orderResponse.data);
    } catch (error: any) {
      console.log(`Error:- ${error.message}`);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default orderController;
