import { Express } from "express";
import healthcheckRoute from "../routes/healthcheck";
import userRoute from "../routes/user";
import postRoute from "../routes/post";
import commentRoute from "../routes/comment";

export default function routes(app: Express) {
  app.use("/healthcheck", healthcheckRoute);
  app.use("/user", userRoute);
  app.use("/post", postRoute);
  app.use("/comment", commentRoute);
}
