import { generateUserData, generateUsersData } from '../../utils/tests/generate';
import { prismaMock } from '../../__mocks__/prisma';
import {
  getAllUsers, getUser, getUserByEmail, createUser,
} from './index';

describe('Users repository', () => {
  describe('getAllUsers', () => {
    it('it should return empty array, if no users found', async () => {
      prismaMock.user.findMany.mockResolvedValue([]);

      await expect(getAllUsers()).resolves.toEqual([]);
    });

    it('it should return users array', async () => {
      const users = generateUsersData(2);
      prismaMock.user.findMany.mockResolvedValue(users);

      await expect(getAllUsers()).resolves.toEqual(users);
    });
  });

  describe('getUser', () => {
    it('it should return null, if no user is found', async () => {
      prismaMock.user.findFirst.mockResolvedValue(null);

      await expect(getUser(1234)).resolves.toEqual(null);
    });

    it('it should return users array', async () => {
      const user = generateUserData();
      prismaMock.user.findFirst.mockResolvedValue(user);

      await expect(getUser(user.id)).resolves.toEqual(user);
    });
  });

  describe('getUserByEmail', () => {
    it('it should return null, if no user is found', async () => {
      prismaMock.user.findFirst.mockResolvedValue(null);

      await expect(getUserByEmail('test@gmail.com')).resolves.toEqual(null);
    });

    it('it should return users array', async () => {
      const user = generateUserData();
      prismaMock.user.findFirst.mockResolvedValue(user);

      await expect(getUserByEmail(user.email)).resolves.toEqual(user);
    });
  });

  describe('createUser', () => {
    it('it should return a user that was added to db', async () => {
      const user = generateUserData();
      prismaMock.user.create.mockResolvedValue(user);

      await expect(createUser({ email: user.email, name: user.name, passwordHash: user.passwordHash })).resolves.toEqual(user);
    });
  });
});
