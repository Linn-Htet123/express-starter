import { Router } from "express";
import helloWorldRoute from "./helloworld.route";
import todoRoute from "./todo.route";

const apiRouter = Router();

apiRouter.use("/hello", helloWorldRoute);
apiRouter.use("/api", todoRoute)

export default apiRouter;
