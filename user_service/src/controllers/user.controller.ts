import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import AppError from "../utils/appError";

const userService = new UserService();
const userController = {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getUsers();
      res.status(200).json({
        status: "success",
        data: { users },
      });
    } catch (error: any) {
      next(error);
    }
  },

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.getUser(req.params.id);

      if (!user) {
        return next(new AppError(401, "User not found!"));
      }

      res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (error: any) {
      next(error);
    }
  },
};

export default userController;
