import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import AppError from "./utils/appError";
import { AppDataSource } from "./database/db-connection";
import userRouter from "./routes/user.route";
import validateEnv from "./utils/validateEnv";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    validateEnv();

    const app = express();
    app.use(express.json());

    // ROUTES
    app.use("/user", userRouter);

    app.get("/", (req, res) => {
      res.send("Hello from user service");
    });

    // UNHANDLED ROUTE
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );

    app.listen(process.env.PORT, () => {
      console.log(`server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err: any) => {
    console.log(`Error:- ${err}`);
  });
