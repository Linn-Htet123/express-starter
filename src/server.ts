import { setupApp } from "./app.js";
import cors from "cors";
import { ENV } from "./constants/env.js";
const startServer = async () => {
  const app = setupApp();

  app.use(cors());
  app.listen(ENV.PORT, () => {
    console.log("Server started on port http://localhost:" + ENV.PORT);
  });
};

startServer();
