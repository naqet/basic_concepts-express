import * as dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import errorHandler from "./middleware/errorHandler";

const app = express();

// Parse JSON
app.use(express.json());

// Routes
routes(app);

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, res);
});

app.listen(process.env.PORT || 1337, () => {
  logger.info("App is running");
});
