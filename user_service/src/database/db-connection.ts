import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

const getConnectionString = () => {
  let connectionUrl: string = "";
  if (process.env.MYSQL_URL) {
    connectionUrl = process.env.MYSQL_URL;
  } else if (process.env.PORT) {
    connectionUrl = `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`;
  }
  return connectionUrl;
};

export const AppDataSource = new DataSource({
  type: "mysql",
  url: getConnectionString().trim(),
  entities: ["src/entities/**/*.entity{.ts,.js}"],
  logging: true,
  synchronize: true,
});
