import React from 'react';
import { mount } from 'enzyme';
import Circle from './Circle.component';

describe('<Circle />', () => {

    it('renders correctly', () => {

        expect(mount(<Circle />)).toMatchSnapshot();
    });
});