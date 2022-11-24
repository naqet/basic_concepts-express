import { Router } from 'express';
import AuthController from '../../controllers/auth';
import validateRequest from '../../middleware/validateRequest';
import { loginSchema, registerSchema } from '../../schema/auth.schema';

const router = Router();

router.post('/register', validateRequest(registerSchema), async (req, res, next): Promise<void> => {
  try {
    const controller = new AuthController();
    await controller.register(req.body);
    res.status(201).send({ message: 'User created' });
  } catch (err) {
    next(err);
  }
});

router.post('/login', validateRequest(loginSchema), async (req, res, next): Promise<void> => {
  try {
    const controller = new AuthController();
    const token = await controller.login(req.body);
    res.status(201)
      .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 15 })
      .send({ message: 'Logged successfully' });
  } catch (err) {
    next(err);
  }
});

export default router;
