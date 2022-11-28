import { generateUserData, generateUsersData } from '../../utils/tests/generate';
import UsersController from '.';
import * as UsersRepository from '../../repositories/users';

describe('UsersController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllUsers', () => {
    it('should return empty array, if no users found', async () => {
      const spy = jest
        .spyOn(UsersRepository, 'getAllUsers')
        .mockResolvedValueOnce([]);
      const controller = new UsersController();
      const users = await controller.getAllUsers();

      expect(users).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return list of users', async () => {
      const usersList = generateUsersData(2);
      const spy = jest
        .spyOn(UsersRepository, 'getAllUsers')
        .mockResolvedValueOnce(usersList);

      const controller = new UsersController();
      const users = await controller.getAllUsers();

      expect(users).toEqual(usersList);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUserByEmail', () => {
    it('should return null, when no user found', async () => {
      const spy = jest
        .spyOn(UsersRepository, 'getUserByEmail')
        .mockResolvedValueOnce(null);
      const controller = new UsersController();
      const user = await controller.getUserByEmail('test@test.com');

      expect(user).toEqual(null);
      expect(spy).toHaveBeenCalledWith('test@test.com');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return the user', async () => {
      const userInfo = generateUserData();
      const spy = jest
        .spyOn(UsersRepository, 'getUserByEmail')
        .mockResolvedValueOnce(userInfo);

      const controller = new UsersController();
      const users = await controller.getUserByEmail('test@test.com');

      expect(users).toEqual(userInfo);
      expect(spy).toHaveBeenCalledWith('test@test.com');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('createUser', () => {
    it('should return user after adding it to the db', async () => {
      const userData = generateUserData();
      const spy = jest
        .spyOn(UsersRepository, 'createUser')
        .mockResolvedValueOnce(userData);
      const controller = new UsersController();
      const userPayload = { email: userData.email, name: userData.name, passwordHash: userData.passwordHash };
      const user = await controller.createUser(userPayload);

      expect(user).toEqual(userData);
      expect(spy).toHaveBeenCalledWith(userPayload);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
