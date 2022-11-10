export class UserController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  USER_MESSAGES = {
    invalidCredential: 'INVALID_CREDENTIAL',
    missingParameter: 'MISSING_PARAMETER',
  };

  login(username, password) {
    return this.networkService.request({
      method: 'GET',
      params: {
        recordType: 'auth',
        email: username,
        password,
      },
    });
  }

  logout() {
    return new Promise((resolve) => {
      setTimeout(resolve, 250);
    });
  }
}
