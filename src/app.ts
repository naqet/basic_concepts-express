import * as dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger";
import express from "express";

const app = express();

app.listen(process.env.PORT || 5000, () => {
  logger.info("App is running");
});
