import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Circle from '../Circle/Circle.component';

export default class FlavorCircle extends Component {

    render() {

        const {
            circle_color,
            label_color,
            label_secondary_text,
            label_text,
        } = this.getCircleDetails(this.props.type);
        const labelX = this.props.x / this.props.radius;
        const labelY = this.props.y / this.props.radius + 20;
        const labelSize = this.props.radius / 3 + 'px';
        return (
            <g>
                <Circle
                    color={circle_color}
                    grow_duration="500"
                    height={this.props.radius * 2}
                    label_details={{
                        text: label_text,
                        text_color: label_color,
                        text_size: labelSize,
                        secondary_text: label_secondary_text,
                        x: labelX,
                        y: labelY,
                    }}
                    radius={this.props.radius}
                    width={this.props.radius * 2}
                    x={this.props.x}
                    y={this.props.y} />
                }
            </g>
        )
    }

    /**
     * Retrieves details for context and style of a circle depending on the flavor type
     * @typedef {object} LabelDetail
     * @prop {string} circle_color The background color of the circle
     * @prop {string} label_color The color to display the label with. This should complement the
     * @prop {string} [label_secondary_text] A second label to display under the main label. This should be part of the main label semantically. This is not subtext
     * @prop {string} label_text
     * @param {string} type A supported flavor type
     * @returns {LabelDetail}
     * @throws
     */
    getCircleDetails(type) {

        switch (type) {
            case 'spice': return {
                circle_color: '#f05332',
                label_color: '#fef3ef',
                label_text: 'Spice',
            };
            case 'salty_umami': return {
                circle_color: '#ffdf01',
                label_color: '#786c32',
                label_secondary_text: 'Umami',
                label_text: 'Salty/',
            };
            case 'sweet': return {
                circle_color: '#7f3a66',
                label_color: '#fef3ef',
                label_text: 'Sweet',
            };
            case 'sour': return {
                circle_color: '#6abe45',
                label_color: '#fef3ef',
                label_text: 'Sour',
            };
            case 'bitter': return {
                circle_color: '#5c828f',
                label_color: '#fef3ef',
                label_text: 'Bitter',
            };
            default: throw new Error(`Type ${type} is not supported`);
        }
    }
}

FlavorCircle.propTypes = {
    type: PropTypes.string,
    radius: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
};