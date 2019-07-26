import React from 'react';
import { mount, shallow } from 'enzyme';
import Arrow from './Arrow.component';

describe('<Arrow />', () => {

    it('renders correctly', () => {

        const wrapper = mount(<Arrow />);

        expect(wrapper).toMatchSnapshot();
    });

    describe.only('#angle', () => {

        it('should return 0 for a horizontal arrow', () => {
            
            const props = {
                headX: 50,
                headY: 100,
                tailX: 150,
                tailY: 100,
            };
            const wrapper = shallow(<Arrow {...props} />);
            expect(Math.round(wrapper.instance().angle)).toEqual(0);
        });

        it('should return 90 for a vertical arrow', () => {
            
            const props = {
                headX: 100,
                headY: 10,
                tailX: 100,
                tailY: 110,
            };
            const wrapper = shallow(<Arrow {...props} />);
            expect(Math.round(wrapper.instance().angle)).toEqual(90);
        });

        it('should return 45 for a top left diagonal arrow', () => {
            
            const props = {
                headX: 50,
                headY: 50,
                tailX: 150,
                tailY: 150,
            };
            const wrapper = shallow(<Arrow {...props} />);
            expect(Math.round(wrapper.instance().angle)).toEqual(45);
        });

        it('should return -45 for a top right diagonal arrow', () => {
            
            const props = {
                headX: 150,
                headY: 50,
                tailX: 50,
                tailY: 150,
            };
            const wrapper = shallow(<Arrow {...props} />);
            expect(Math.round(wrapper.instance().angle)).toEqual(-45);
        });

        it('should return -45 for a bottom left diagonal arrow', () => {
            
            const props = {
                headX: 50,
                headY: 150,
                tailX: 150,
                tailY: 50,
            };
            const wrapper = shallow(<Arrow {...props} />);
            expect(Math.round(wrapper.instance().angle)).toEqual(-45);
        });

        it('should return 45 for a bottom right diagonal arrow', () => {
            
            const props = {
                headX: 150,
                headY: 150,
                tailX: 50,
                tailY: 50,
            };
            const wrapper = shallow(<Arrow {...props} />);
            expect(Math.round(wrapper.instance().angle)).toEqual(45);
        });
    });
});