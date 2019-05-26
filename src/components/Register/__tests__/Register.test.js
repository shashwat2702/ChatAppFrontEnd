import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../Register';

jest.mock('react-router-dom');

describe('Login snapshot', () => {
  it('should render correctly', () => {
    const RegisterSnap = renderer.create(<Register />);
    const RegisterJson = RegisterSnap.toJSON();
    expect(RegisterJson).toMatchSnapshot();
  });
});
