import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: process.env.PORT ?? 3000,
  MYSQL: {
    DB_HOST: process.env.DB_HOST ?? "127.0.0.1",
    DB_USER: process.env.DB_USER ?? "root",
    DB_PASSWORD: process.env.DB_PASSWORD ?? "secret",
    DB_NAME: process.env.DB_NAME ?? "mydatabase",
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE === "true",
    DB_TYPE: process.env.DB_TYPE ?? "mysql",
    DB_LOGGING: process.env.DB_LOGGING === "true",
  },
};
