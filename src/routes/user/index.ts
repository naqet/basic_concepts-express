import { Router } from "express";
import UserController from "../../controllers/user";
import validateRequest from "../../middleware/validateResource";
import { createUserSchema } from "../../schema/user.schema";
import { BaseError } from "../../utils/baseError";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const controller = new UserController();
    const response = await controller.getAllUsers();
    return res.send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const controller = new UserController();
    const response = await controller.getUser(Number(req.params.id));

    if (!response) {
      throw new BaseError(404, "User not found");
    }

    return res.send(response);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateRequest(createUserSchema), async (req, res) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);
  return res.send(response);
});

export default router;
