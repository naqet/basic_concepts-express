import { Router } from 'express';
import CommentController from '../../controllers/comments';
import validateParams from '../../middleware/validateParams';
import BaseError from '../../utils/baseError';

const router = Router();

router.get('/:id', validateParams({ id: 'number' }), async (req, res, next) => {
  try {
    const controller = new CommentController();
    const response = await controller.getComment(Number(req.params.id));

    if (!response) throw new BaseError(404, 'Comment not found');

    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const controller = new CommentController();
    const response = await controller.createComment(req.body);
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', validateParams({ id: 'number' }), async (req, res, next) => {
  try {
    const controller = new CommentController();
    const response = await controller.deleteComment(Number(req.params.id));
    res.send(response);
  } catch (err) {
    next(err);
  }
});

export default router;
