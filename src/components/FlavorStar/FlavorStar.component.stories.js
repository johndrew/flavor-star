import React from 'react';
import { storiesOf } from '@storybook/react';
import FlavorStar from './FlavorStar.component';

storiesOf('FlavorStar', module)
    .add('without props', flavorStarWithoutProps)
    .add('small scale', flavorStarSmallScale);

function flavorStarWithoutProps() {
    
    return <FlavorStar />;
}

function flavorStarSmallScale() {
    
    const props = {
        width: 320,
    };
    return <FlavorStar {...props}/>;
}