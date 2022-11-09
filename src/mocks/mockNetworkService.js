import { strings } from '@/localization';

export const mockLoginNetworkService = {
  setAccessToken(_token) {},
  request(req ) {
    if (req.params.password === 'invalidPassword') {
      return { data: {name: 'INVALID_CREDENTIAL'} };
    }

    const user = {
      id: 1,
      name: req.params.email,
    };

    return { data: user };
  },
};

export const mockLogoutNetworkService = {
  clearAccessToken() {},
  request() {},
};
