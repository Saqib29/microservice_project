import { Request, Response } from "express";
import userService from "../services/user.service";

const userController = {
  async getUsers(req: Request, res: Response) {
    try {
      const userResponse = await userService.getUsers();
      res.status(200).json(userResponse.data);
    } catch (error: any) {
      console.log(`Error:- ${error.message}`);
      res.status(500).json({ error: "Internal Server error" });
    }
  },

  async getUser(req: Request, res: Response) {
    try {
      const userResponse = await userService.getUser(req.params.id);
      res.status(200).json(userResponse.data);
    } catch (error: any) {
      console.log(`Error:- ${error.message}`);
      res.status(500).json({ error: "Internal Server error" });
    }
  },
};

export default userController;
