import React from 'react';
import { shallow } from 'enzyme';
import FlavorStar from './FlavorStar.component';

describe('<FlavorStar />', () => {

    it('renders correctly', () => {

        // TODO: learn why mount caused Jest te4st runner to stall
        expect(shallow(<FlavorStar />)).toMatchSnapshot();
    });

    describe('method getCoordinates', () => {

        let instance;
        beforeEach(() => {
            
            instance = shallow(<FlavorStar />).instance();
        });
        
        describe('Positive Tests', () => {
            
            it('it should return correct coordinates', () => {
                
                const x = 100;
                const y = 0;
                const length = 100;
                const actual = instance.getCoordinates({ x, y, length });
                expect(actual.top_left).toEqual({ x: 100, y: 0 });
                expect(actual.top_right).toEqual({ x: 200, y: 0 });
                expect(actual.bottom_right).toEqual({ x: 119.09830056250527, y: 58.77852522924732 });
                expect(actual.top).toEqual({ x: 150, y: -36.32712640026804 });
                expect(actual.bottom_left).toEqual({ x: 180.90169943749478, y: 58.77852522924731 });
            });
        });
    });
});