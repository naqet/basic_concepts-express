import { generateUsersData } from '../../utils/tests/generate';
import UsersController from '.';
import * as UsersRepository from '../../repositories/users';

describe('UsersController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllUsers', () => {
    it('should return empty array', async () => {
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
});
