import { createOrder, order, orders } from '../controllers/order.controller';
import express from 'express'

const router = express.Router();

router.route('/orders').get(orders)
router.route('/:id').get(order)
router.route('/create').post(createOrder);

export default router;