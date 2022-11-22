import { Router } from "express";
import CommentController from "../../controllers/comment";
const router = Router();

router.get("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.getComment(Number(req.params.id));

  if (!response) return res.status(404).send({ message: "Comment not found" });

  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.createComment(req.body);
  return res.send(response);
});

router.delete("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.deleteComment(Number(req.params.id));
  return res.send(response);
});

export default router;
