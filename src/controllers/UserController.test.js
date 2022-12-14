import { UserController } from '@/controllers/UserController';

describe('UserController', () => {
  describe('login', () => {
    it('should make the login request', async () => {
      const credentials = {
        email: 'username',
        password: 'password',
      };

      const fakeNetworkService = { request: jest.fn() };
      const userController = new UserController(fakeNetworkService);
      await userController.login(credentials.email, credentials.password);

      expect(fakeNetworkService.request).toHaveBeenCalledWith({
        method: 'GET',
        params: { recordType: 'auth', password: credentials.password, email: credentials.email },
      });
    });
  });

  describe('logout', () => {
    it('should make the logout request', async () => {
      const fakeNetworkService = { request: jest.fn() };
      const userController = new UserController(fakeNetworkService);
      await userController.logout();
    });
  });
});
