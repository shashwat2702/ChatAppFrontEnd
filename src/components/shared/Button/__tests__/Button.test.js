import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../Button';

jest.mock('react-router-dom');

describe('Button Component snapshot', () => {
  const props = {
    label: 'Submit',
    type: 'button',
  };
  it('should render correctly', () => {
    const HeaderSnap = renderer.create(<Button {...props} />);
    const HeaderJson = HeaderSnap.toJSON();
    expect(HeaderJson).toMatchSnapshot();
  });
});
describe('Button Component', () => {
  xit('should call onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const props = {
      onClick: onClickMock,
      label: 'abc',
      type: 'button',
    };
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
