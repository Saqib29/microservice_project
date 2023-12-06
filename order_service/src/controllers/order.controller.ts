import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import UserDto from "../dto/order.dto";
import { createNewOrder, getOrder, getOrders } from "../services/order.service";
import AppError from "../utils/appError";

export const orders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await getOrders();

    res.status(200).json({
      status: "success",
      data: { orders },
    });
  } catch (error: any) {
    next(error);
  }
};

export const order = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await getOrder(parseInt(req.params.id));

    if (!order) return next(new AppError(404, "Post with that Id not found!"));

    res.status(200).json({
      status: "success",
      data: { order },
    });
  } catch (error: any) {
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    // strict to DTO
    const payload = plainToClass(UserDto, req.body);
    const errors = await validate(payload);

    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0].constraints });
    }

    const createdOrder = await createNewOrder(payload);

    res.status(201).json({
      status: "success",
      data: { createdOrder },
    });
  } catch (error: any) {
    next(error);
  }
};
