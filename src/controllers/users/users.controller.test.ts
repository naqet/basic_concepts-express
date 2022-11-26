import UsersController from '.';
import * as UsersRepository from '../../repositories/users';

describe('UsersController', () => {
  describe('getUsers', () => {
    it('should return empty array', async () => {
      const spy = jest
        .spyOn(UsersRepository, 'getAllUsers')
        .mockResolvedValueOnce([]);
      const controller = new UsersController();
      const users = await controller.getAllUsers();

      expect(users).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });

    it('should return list of users', async () => {
      const usersList = [{
        id: 1,
        email: 'test@gmail.com',
        name: 'Test name',
        passwordHash: 'testPasswordHash',
        posts: [],
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date(),

      }];
      const spy = jest
        .spyOn(UsersRepository, 'getAllUsers')
        .mockResolvedValueOnce(usersList);

      const controller = new UsersController();
      const users = await controller.getAllUsers();

      expect(users).toEqual(usersList);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });
});
