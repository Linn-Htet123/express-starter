import "reflect-metadata";
import { DataSource } from "typeorm";
import { ENV } from "./env.js";
import { entities } from "./entities.js";

const basePath = ENV.NODE_ENV === "development" ? "src" : "dist";
const fileExt = ENV.NODE_ENV === "development" ? "ts" : "js";
console.log(`${basePath}/migration/*.${fileExt}`);

export const AppDataSource = new DataSource({
  type: ENV.MYSQL.DB_TYPE as "mysql",
  host: ENV.MYSQL.DB_HOST,
  port: ENV.MYSQL.DB_PORT,
  username: ENV.MYSQL.DB_USER,
  password: ENV.MYSQL.DB_PASSWORD,
  database: ENV.MYSQL.DB_NAME,
  synchronize: ENV.MYSQL.DB_SYNCHRONIZE ?? false,
  logging: ENV.MYSQL.DB_LOGGING,
  entities: entities,
  migrations: [`${basePath}/migration/*.${fileExt}`],
  subscribers: [],
});
