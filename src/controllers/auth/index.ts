import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { createUser, getUserByEmail } from '../../repositories/user';
import { CreateUserInput } from '../../schema/user.schema';
import BaseError from '../../utils/baseError';

export default class AuthController {
  public async register(payload: CreateUserInput): Promise<User> {
    const userInDb = await getUserByEmail(payload.email);

    if (userInDb) throw new BaseError(400, 'User with this email already exists');

    const passwordHash = await bcrypt.hash(payload.password, 10);

    return createUser({ email: payload.email, name: payload.name, passwordHash });
  }
}
