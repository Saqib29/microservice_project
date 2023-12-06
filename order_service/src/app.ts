import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { AppDataSource } from "./database/data-source";
import orderRouter from "./routes/order.route";
import AppError from "./utils/appError";
import validateEnv from "./utils/validateEnv";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    validateEnv();
    const app = express();

    app.use(express.json());

    // ROUTES
    app.use("/order", orderRouter);

    app.get("/", (req, res) => {
      res.send("Hello");
    });

    // UNHANDLED ROUTE
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found!`));
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

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
