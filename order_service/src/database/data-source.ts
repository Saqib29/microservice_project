import "reflect-metadata"
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

const getConnectionString = () => {
  return process.env.POSTGRES_URL
    ? process.env.POSTGRES_URL
    : `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
};

export const AppDataSource = new DataSource({
    type: "postgres",
    url: getConnectionString().trim(),
    synchronize: true,
    logging: true,
    entities: ['src/entities/**/*.entity{.ts,.js}'],
    migrations: [],
})
