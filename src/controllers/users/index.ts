import { User } from '@prisma/client';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  getUserByEmail,
} from '../../repositories/users';
import IUserPayload from '../../types/IUserPayload';

export default class UsersController {
  public async getAllUsers(): Promise<User[]> {
    return getAllUsers();
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return getUserByEmail(email);
  }

  public async getUser(id: number): Promise<User | null> {
    return getUser(id);
  }

  public async createUser(body: IUserPayload): Promise<User> {
    return createUser(body);
  }
}
