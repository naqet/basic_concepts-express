import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, getUserByEmail } from '../../repositories/user';
import { LoginInput, RegisterInput } from '../../schema/auth.schema';
import BaseError from '../../utils/baseError';

export default class AuthController {
  public async register(payload: RegisterInput): Promise<User> {
    const userInDb = await getUserByEmail(payload.email);

    if (userInDb) throw new BaseError(400, 'User with this email already exists');

    const passwordHash = await bcrypt.hash(payload.password, 10);

    return createUser({ email: payload.email, name: payload.name, passwordHash });
  }

  public async login(payload: LoginInput): Promise<string> {
    const userInDb = await getUserByEmail(payload.email);

    if (!userInDb) throw new BaseError(400, 'Invalid email or password');

    const passwordMatch = await bcrypt.compare(payload.password, userInDb.passwordHash);

    if (!passwordMatch) throw new BaseError(400, 'Invalid email or password');

    const token = jwt.sign({ email: userInDb.email, name: userInDb.name, id: userInDb.id }, process.env.JWT_SECRET as jwt.Secret, { expiresIn: '15m' });

    return token;
  }
}
