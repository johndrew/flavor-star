import React from 'react';
import { storiesOf } from '@storybook/react';
import * as _ from 'lodash';
import Arrow from './Arrow.component';

storiesOf('Arrow', module)
    .add('without props', arrowWithoutProps)
    .add('vertical arrow', arrowVertical)
    .add('horizontal arrow', arrowHorizontal)
    .add('top left diagonal arrow', arrowTopLeftDiagonal)
    .add('bottom left diagonal arrow', arrowBottomLeftDiagonal)
    .add('top right diagonal arrow', arrowTopRightDiagonal)
    .add('bottom right diagonal arrow', arrowBottomRightDiagonal)
    .add('non uniform diagonal arrow', arrowNonUniformDiagonal)
    .add('double sided arrow', arrowDoubleSided)
    .add('bug', bug);

function arrowWithoutProps() {
    
    return <Arrow />;
}

function arrowVertical() {
    
    const props = {
        headX: 100,
        headY: 10,
        tailX: 100,
        tailY: 110,
    };
    return <Arrow {...props} />;
}

function arrowHorizontal() {
    
    const props = {
        headX: 50,
        headY: 100,
        tailX: 150,
        tailY: 100,
    };
    return <Arrow {...props} />;
}

/**
 * Starts from top left and goes to bottom right
 */
function arrowTopLeftDiagonal() {
    
    const props = {
        headX: 50,
        headY: 50,
        tailX: 150,
        tailY: 150,
    };
    return <Arrow {...props} />;
}
/**
 * Starts from bottom left and goes to top right
 */
function arrowBottomLeftDiagonal() {
    
    const props = {
        headX: 50,
        headY: 150,
        tailX: 150,
        tailY: 50,
    };
    return <Arrow {...props} />;
}

function arrowTopRightDiagonal() {

    const props = {
        headX: 150,
        headY: 50,
        tailX: 50,
        tailY: 150,
    };
    return <Arrow {...props} />;
}

function arrowBottomRightDiagonal() {

    const props = {
        headX: 150,
        headY: 150,
        tailX: 50,
        tailY: 50,
    };
    return <Arrow {...props} />;
}

function arrowNonUniformDiagonal() {
    
    const props = {
        headX: 30,
        headY: 60,
        tailX: 100,
        tailY: 70,
    };
    return <Arrow {...props} />;
}

function arrowDoubleSided() {
    
    const props = {
        doubleSided: true,
    };
    return <Arrow {...props} />;
}

function bug() {
    
    const props = {
        headX: 135,
        headY: 97.34574719946391,
        tailX: 73.19660112501055,
        tailY: 217.55705045849464,
    };
    return <Arrow {...props} />;
}
