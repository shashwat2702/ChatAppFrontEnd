import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

jest.mock('react-router-dom');

describe('Input Component snapshot', () => {
  const props = {
    id: 'inputField',
    label: 'Name',
    className: 'spanStyle',
    spanContent: '*',
    type: 'text',
    autoComplete: 'off',
  };
  it('should render correctly', () => {
    const HeaderSnap = renderer.create(<Input {...props} />);
    const HeaderJson = HeaderSnap.toJSON();
    expect(HeaderJson).toMatchSnapshot();
  });
});
