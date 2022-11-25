import { Router } from 'express';
import PostController from '../../controllers/post';
import validateBody from '../../middleware/validateBody';
import validateParams from '../../middleware/validateParams';
import { createPostSchema } from '../../schema/post.schema';
import BaseError from '../../utils/baseError';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const controller = new PostController();
    const response = await controller.getAllPosts();
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', validateParams({ id: 'number' }), async (req, res, next) => {
  try {
    const controller = new PostController();
    const response = await controller.getPost(Number(req.params.id));

    if (!response) throw new BaseError(404, 'Post not found');

    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.post('/', validateBody(createPostSchema), async (req, res, next) => {
  try {
    const controller = new PostController();
    const response = await controller.createPost(req.body);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', validateParams({ id: 'number' }), async (req, res, next) => {
  try {
    const controller = new PostController();
    const response = await controller.deletePost(Number(req.params.id));
    res.send(response);
  } catch (err) {
    next(err);
  }
});

export default router;
