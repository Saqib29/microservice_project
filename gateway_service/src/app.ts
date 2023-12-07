import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import authRouter from "./routes/auth.route";
import userRoute from "./routes/user.route";
import orderRoute from './routes/order.route';

dotenv.config();

const port = process.env.PORT || 5000;
const app: Application = express();

app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

// Basic Home
app.get("/", (req: Request, res: Response) => {
  res.send("welcome to Express and Typescript server!");
});

app.listen(port, () => {
  console.log(`Server is fire at http://localhost:${port}`);
});
