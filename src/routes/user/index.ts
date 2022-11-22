import { Router } from "express";
import UserController from "../../controllers/user";
import validateRequest from "../../middleware/validateResource";
import { createUserSchema } from "../../schema/user.schema";
const router = Router();

router.get("/", async (_req, res) => {
	const controller = new UserController();
	const response = await controller.getAllUsers();
	return res.send(response);
});

router.get("/:id", async (req, res) => {
	const controller = new UserController();
	const response = await controller.getUser(Number(req.params.id));

	if (!response) return res.status(404).send({ message: "User not found" });

	return res.send(response);
});

router.post("/", validateRequest(createUserSchema), async (req, res) => {
	const controller = new UserController();
	const response = await controller.createUser(req.body);
	return res.send(response);
});

export default router;
