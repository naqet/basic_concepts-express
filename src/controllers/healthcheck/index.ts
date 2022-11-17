import { Request, Response } from "express";

const handleHealthcheck = (_req: Request, res: Response) => {
  res.sendStatus(200);
};

export default { handleHealthcheck };
