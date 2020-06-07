import React from 'react';
import { mount } from 'enzyme';
import LandingPage from '../../pages';

describe('index page', () => {
    it('should have App component', () => {
        const subject = mount(<LandingPage />);

        expect(subject).toHaveLength(1);
    });
});
