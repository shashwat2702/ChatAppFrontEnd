import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';

jest.mock('react-router-dom');

describe('Login snapshot', () => {
  it('should render correctly', () => {
    const LoginSnap = renderer.create(<Login />);
    const LoginJson = LoginSnap.toJSON();
    expect(LoginJson).toMatchSnapshot();
  });
});
