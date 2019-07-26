import * as d3 from 'd3';

export function getTextSize(text) {
    
    // Create arbitrary element to hold the text to size
    const buffer = d3.select('body').append('svg');

    // Add text off screen since it is not meant to be displayed like this
    buffer.append('text').text(text).attr({ x: -99999, y: -99999 });
    const { width, height } = buffer.node().getBBox();
    buffer.remove();
    return { height, width };
}