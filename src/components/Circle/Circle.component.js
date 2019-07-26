import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { getTextSize } from '../../utilities/d3.utilities';

export default class Circle extends Component {

    constructor(props) {

        super(props);
        this.defaults = {
            grow_duration: 500,
        };
    }

    render() {

        return (
            <svg
                height={this.props.height}
                ref="svg"
                width={this.props.width}
                x={this.props.x}
                y={this.props.y}>
            </svg>
        );
    }

    componentDidMount() {

        this.renderCircle();
    }

    /**
     * Attaches one or more labels to the svg
     * If a secondary label is included, renders that too
     */
    renderLabels() {

        if (this.props.label_details) {

            const { height, width } = getTextSize(this.props.label_details.text);
            this.svg
                .append('text')
                .attr('x', this.props.radius - width / 2)
                .attr('y', this.props.radius)
                .attr('fill', this.props.label_details.text_color)
                .style('font-size', this.props.label_details.text_size)

                // Append a slash if there is a second label
                // .text(this.props.radius);
                .text(`${this.props.label_details.text}${this.props.label_details.secondary_text ? '/' : ''}`);
            
            // If included, add text directly below main label
            this.props.label_details.secondary_text && this.svg
                .append('text')
                .attr('x', this.props.radius - width / 2)
                .attr('y', this.props.radius + 10)
                .attr('fill', this.props.label_details.text_color)
                .style('font-size', this.props.label_details.text_size)
                .text(this.props.label_details.secondary_text);
        }
    }

    renderCircle() {

        this.svg = d3.select(this.refs.svg);
        this.circle = this.svg
            .append("circle")
            .attr("cx", this.props.width / 2)
            .attr("cy", this.props.height / 2)
            .style("fill", this.props.color)
            .attr("r", 0)
            .transition()
            .duration(this.props.grow_duration || this.defaults.grow_duration)
            .attr("r", this.props.radius);
        this.renderLabels();
    }
}

Circle.propTypes = {
    color: PropTypes.string,
    grow_duration: PropTypes.string,
    height: PropTypes.number,
    label_details: PropTypes.shape({
        text: PropTypes.string,
        text_color: PropTypes.string,
        text_size: PropTypes.string,
        secondary_text: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    radius: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
};