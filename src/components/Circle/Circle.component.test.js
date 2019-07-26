import React from 'react';
import { mount } from 'enzyme';
import Circle from './Circle.component';

describe('<Circle />', () => {

    // TODO: d3.utilities is breaking this since there is no html body to bind to
    xit('renders correctly', () => {

        expect(mount(<Circle />)).toMatchSnapshot();
    });
});