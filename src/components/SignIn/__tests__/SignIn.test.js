import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../SignIn';

jest.mock('react-router-dom');

describe('SignIn snapshot',() => {
    it('should render correctly',() => {
        const SignInSnap = renderer.create(<SignIn/>);
        const SignInJson = SignInSnap.toJSON();
        expect(SignInJson).toMatchSnapshot();
    });
});