import { HelloController } from "../../controllers/hello.controller.js";
import { Router } from "express";

const helloWorldRoute = Router();
const helloWorldController = new HelloController();

helloWorldRoute.get("/", helloWorldController.hello);

export default helloWorldRoute;
