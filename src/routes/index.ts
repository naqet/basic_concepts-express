import { Express } from "express";
import healthcheckRoute from "../routes/healthcheck";
import userRoute from "../routes/user";

export default function routes(app: Express) {
  app.use("/healthcheck", healthcheckRoute);
  app.use("/user", userRoute);
}
