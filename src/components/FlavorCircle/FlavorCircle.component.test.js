import React from 'react';
import { shallow, mount } from 'enzyme';
import FlavorCircle from './FlavorCircle.component';

describe('<FlavorCircle />', () => {

    let requiredProps;
    beforeEach(() => {
        
        requiredProps = {
            type: 'spice', // no default color
        };
    });
    
    it('should render', () => {
        
        expect(shallow(<FlavorCircle {...requiredProps} />)).toMatchSnapshot();
    });

    describe('when setting the color prop', () => {

        describe('Positive Tests', () => {
        
            xit('should render red', () => {
                
                const wrapper = mount(<FlavorCircle
                    type="spice"
                    radius={10} />);
                expect(wrapper.find('svg').prop('fill')).toEqual(0);
            });

            xit('should render purple', () => {
                
                shallow(<FlavorCircle type="sweet" />);
            });
        });

        describe('Negative Test', () => {
            
            it('should error if color is not supported', () => {
                
                expect(() => shallow(<FlavorCircle type="pink" />)).toThrowError();
            });
        });
    });
});