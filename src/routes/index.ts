import { Express } from "express";
import healthcheck from "../routes/healthcheck";

export default function routes(app: Express) {
  app.use("/healthcheck", healthcheck);
}
