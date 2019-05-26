import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../HomePage';

jest.mock('react-router-dom');

describe('HomePage snapshot', () => {
  it('should render correctly', () => {
    const HomePageSnap = renderer.create(<HomePage />);
    const HomePageJson = HomePageSnap.toJSON();
    expect(HomePageJson).toMatchSnapshot();
  });
});
