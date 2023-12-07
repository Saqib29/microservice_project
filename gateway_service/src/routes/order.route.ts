import orderController from "../controllers/order.controller";
import express from "express";

const router = express.Router();

router.route("/").get(orderController.getOrders);
router.route("/:id").get(orderController.getOrder);
router.route("/create").post(orderController.createOrder);

export default router;
