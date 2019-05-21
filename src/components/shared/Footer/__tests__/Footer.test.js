import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

jest.mock('react-router-dom');

describe('HomePage snapshot',() => {
    it('should render correctly',() => {
        const HeaderSnap = renderer.create(<Footer/>);
        const HeaderJson = HeaderSnap.toJSON();
        expect(HeaderJson).toMatchSnapshot();
    });
});