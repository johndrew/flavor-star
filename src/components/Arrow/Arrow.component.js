import React, { Component } from 'react';
import * as d3 from 'd3';

class Arrow extends Component {

    constructor(props) {
        super(props);

        this.svg = null;
        this.defaultThickness = 6;

        // Draw the arrowhead on the left if the arrowhead will rotate upwards
        // Draw the arrowhead on the right if the arrowhead will rotate downwards
        // Default to the left
        this.headIsDown = this.props.headY > this.props.tailY;
    }

    render() {

        return (
            <div>
                <svg
                    height={this.width}
                    ref='svg'
                    width={this.width}
                    style={{ border: 'solid 1px black' }}
                    x={this.props.headX}
                    y={this.props.headY}>
                </svg>
            </div>
        );
    }

    componentDidMount() {

        this.svg = d3.select(this.refs.svg);
        this.renderArrow();
    }

    renderArrow() {

        this.renderArrowHead(this.headIsDown);
        if (this.props.doubleSided) this.renderArrowHead(!this.headIsDown);
        this.svg.append('rect')
            .attr('x', 0)
            .attr('y', Math.abs(this.width / 2))
            .attr('width', this.width)
            .attr('height', this.defaultThickness)
            .attr('fill', this.props.color)
            .attr('transform', `rotate(${this.angle}, ${this.width / 2}, ${this.width / 2})`);
    }

    get width() {

        return Math.abs((this.props.tailX - this.props.headX) || (this.props.tailY - this.props.headY));
    }

    /**
     * Returns the angle of the line between the given coordinates against the x axis
     */
    get angle() {

        const a = this.getDistance(this.width, this.width, 0, this.width);
        const b = this.getDistance(); // default from head to tail
        let c;
        // Get a different hypotenuse length depending on if the head is up or down
        if (this.headIsDown) {

            c = this.getDistance(this.props.headX - this.width, this.props.headY, this.props.tailX, this.props.tailY);
        } else {

            c = this.getDistance(this.props.tailX - this.width, this.props.tailY, this.props.headX, this.props.headY);
        }

        const ratioC = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
        return ((ratioC >= 0 ? Math.acos(ratioC) : Math.asin(ratioC)) * 180) / Math.PI;
    }

    /**
     * Returns the distance between the given coordinates
     * @returns {Number}
     */
    getDistance(x1 = this.props.headX, y1 = this.props.headY, x2 = this.props.tailX, y2 = this.props.tailY) {

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    renderArrowHead(arrowTipDown) {

        const arrowHeadLength = 20;
        const arrowTipX = arrowTipDown ? this.width : 0;
        const arrowTipY = Math.abs(this.width / 2);
        const arrowX = arrowTipDown ? arrowTipX + 5 : arrowTipX - 5;
        const arrowY = arrowTipY + (this.defaultThickness / 2);
        const firstPoint = {
            x: arrowTipDown ? arrowX - arrowHeadLength : arrowX + arrowHeadLength,
            y: arrowTipDown ? arrowY - arrowHeadLength : arrowY + arrowHeadLength,
        };
        const secondPoint = {
            x: arrowTipDown ? arrowX - arrowHeadLength : arrowX + arrowHeadLength,
            y: arrowTipDown ? arrowY + arrowHeadLength : arrowY - arrowHeadLength,
        };
        this.svg
            .append('path')
            .attr('d', `
                M ${arrowX} ${arrowY}
                L ${firstPoint.x} ${firstPoint.y}
                L ${secondPoint.x} ${secondPoint.y}
            `)
            .style('fill', this.props.color)
            .attr('transform', `rotate(${this.angle}, ${this.width / 2}, ${this.width / 2})`);

        if (this.props.doubleSided) {}
    }
}

Arrow.defaultProps = {
    color: 'gray',
    doubleSided: false,
    headX: 50,
    headY: 100,
    tailX: 150,
    tailY: 100,
}

export default Arrow;