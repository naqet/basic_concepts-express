import { Router } from 'express';
import UserController from '../../controllers/user';
import BaseError from '../../utils/baseError';

const router = Router();

router.get('/', async (_req, res, next): Promise<void> => {
  try {
    const controller = new UserController();
    const response = await controller.getAllUsers();
    res.send(response);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next): Promise<void> => {
  try {
    const controller = new UserController();
    const response = await controller.getUser(Number(req.params.id));

    if (!response) {
      throw new BaseError(404, 'User not found');
    }

    res.send(response);
  } catch (err) {
    next(err);
  }
});

export default router;
