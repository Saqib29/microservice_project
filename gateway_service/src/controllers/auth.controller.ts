import { Request, Response } from "express";
import authService from "../services/auth.service";

const authController = {
  async login(req: Request, res: Response) {
    try {
      const loginResponse = await authService.login(req.body);
      res.status(200).json(loginResponse.data);
    } catch (error: any) {
      console.log(`Login error -> ${error.message}`);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async register(req: Request, res: Response) {
    try {
      const registerResponse = await authService.register(req.body);
      res.status(200).json(registerResponse.data);
    } catch (error: any) {
      console.log(`Registration fail -> ${error.message}`);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default authController;
