import { Router } from "express";
import PostController from "../../controllers/post";
const router = Router();

router.get("/", async (_req, res) => {
  const controller = new PostController();
  const response = await controller.getAllPosts();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.getPost(Number(req.params.id));

  if (!response) return res.status(404).send({ message: "Post not found" });

  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new PostController();
  const response = await controller.createPost(req.body);
  return res.send(response);
});

router.delete("/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.deletePost(Number(req.params.id));
  return res.send(response);
});

export default router;
