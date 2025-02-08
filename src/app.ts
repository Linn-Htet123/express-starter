import express, { Application } from "express";
import router from "./routes/index.js";
export const setupApp = () => {
  const app: Application = express();

  app.use(router);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  return app;
};
