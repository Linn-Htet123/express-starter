import { Router } from "express";

const helloWorldRoute = Router();

helloWorldRoute.get("/", (req, res) => {
  res.send("Hello World!");
});

export default helloWorldRoute;
