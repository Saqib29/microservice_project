import userController from "../controllers/user.controller";
import express from "express";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get('/:id', userController.getUser);

export default router;
