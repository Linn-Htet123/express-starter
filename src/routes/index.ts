import { Router } from "express";
import helloWorldRoute from "./api/helloworld.route.js";

const router = Router();

router.use("/hello", helloWorldRoute);

export default router;
