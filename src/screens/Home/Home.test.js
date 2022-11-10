import { render } from '@testing-library/react-native';
import React from 'react';
import { Home } from '@/screens/Home/Home';
import { withProviders } from '@/test-utils';

const fakeStore = {
  error: {},
  status: {},
  user: {
    name: 'johndoe',
  },
  customer: {
    customers: [
      {
        email: 'example@test02.com',
        id: 10076,
        is_active: true,
        is_person: false,
        name: 'RM test 02',
        phone: '2222222',
      },
      {
        email: 'example@test01.com',
        id: 10075,
        is_active: true,
        is_person: false,
        name: 'RM test 01',
        phone: '1231231',
      },
    ],
  },
};

describe('Home', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Home />, { initialState: fakeStore }));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a welcome message with the user name', () => {
    const { getByText } = render(withProviders(<Home />, { initialState: fakeStore }));

    expect(getByText(`Hello,`)).toBeTruthy();
    expect(getByText(`johndoe`)).toBeTruthy();
  });
});
