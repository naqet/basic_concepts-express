import { Express, Response, Request } from "express";

export default function routes(app: Express) {
  app.get("/healthcheck", (_req: Request, res: Response) =>
    res.sendStatus(200)
  );
}
