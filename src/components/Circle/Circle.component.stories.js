import React from 'react';
import { storiesOf } from '@storybook/react';
import * as _ from 'lodash';
import Circle from './Circle.component';

const WRAPPER_HEIGHT = '200';
const WRAPPER_WIDTH = '200';
storiesOf('Circle', module)
    .addDecorator(storyFn =>
        <svg
            height={WRAPPER_HEIGHT}
            style={{ textAlign: 'center', border: '1px solid black' }}
            width={WRAPPER_WIDTH}>
            {storyFn()}
        </svg>
    )
    .add('without props', circle_withoutProps)
    .add('required props', circle_requiredProps)
    .add('secondary label', circle_secondaryLabel)
    .add('large scale', circle_largeScale);

/**
 * Displays the component with no props
 * Expected: Should not display anything
 */
function circle_withoutProps() {
    
    return <Circle />;
}

/**
 * Displays the component with required props only
 * Expected: Should display a circle with a label
 * @param {object} [props_override] Customize props. Used so required props are not duplciated
 */
function circle_requiredProps(props_override = {}) {

    const radius = 30;
    const requiredProps = {
        color: '#f05332',
        height: radius * 2,
        label_details: {
            text: 'Spice',
            text_color: '#fef3ef',
            text_size: `${radius / 3}px`,
        },
        radius: radius,
        width: radius * 2,
        x: (WRAPPER_WIDTH / 2) - radius,
        y: (WRAPPER_HEIGHT / 2) - radius,
    };
    
    return <Circle {..._.merge({}, requiredProps, props_override)} />;
}

/**
 * Display the component with a primary label and a secondary label
 * Expected: Should display a circle with two labels
 */
function circle_secondaryLabel() {
    
    return circle_requiredProps({
        color: '#ffdf01',
        label_details: {
            text: 'Salty',
            text_color: '#786c32',
            secondary_text: 'Umami',
        },
    });
}

function circle_largeScale() {
    
    const radius = 100;
    return circle_requiredProps({
        height: radius * 2,
        radius,
        width: radius * 2,
        x: 0,
        y: 0,
    });
}