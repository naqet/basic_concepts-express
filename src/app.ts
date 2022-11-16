import * as dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger";
import express from "express";
import routes from "./routes";

const app = express();

app.listen(process.env.PORT || 1337, () => {
  logger.info("App is running");
  routes(app);
});
