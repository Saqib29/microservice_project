import * as dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "./database/data-source";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello");
    });

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
