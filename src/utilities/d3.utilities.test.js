//import React from 'react';
import {
    getTextSize,
} from './d3.utilities';

// React is needed so we can render the svg to determine its size
describe('D3 Utilities', () => {
    
    describe('method getTextSize', () => {
        
        describe('Positive Tests', () => {
            
            // TODO: find a way to test this in a headless browser because d3 will have nothing to bind to otherwise
            xit('should return width and height', () => {
                
                const actual = getTextSize('Spice');
                expect(actual.width).toBeDefined();
                expect(actual.height).toBeDefined();
            });
        });
        
        describe('Negative Tests', () => {
            
            // TBD
        });
    });
});