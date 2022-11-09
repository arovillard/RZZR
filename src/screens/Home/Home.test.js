import { render } from '@testing-library/react-native';
import React from 'react';
import { strings } from '@/localization';
import { Home } from '@/screens/Home/Home';
import { withProviders } from '@/test-utils';

const fakeStore = {
  error: {},
  status: {},
  user: {
    name: 'johndoe',
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
