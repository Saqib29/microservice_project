import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);

export default router;
