import React, { Component } from 'react';
import * as d3 from 'd3';

class Arrow extends Component {

    constructor(props) {
        super(props);

        this.svg = null;
        this.defaultThickness = 6;
        this.headIsDown = this.props.headY > this.props.tailY;
        // console.log('------------------------------------');
        // console.log(this.props);
        // console.log('slope', this.slope);
        // console.log('angle', this.angle);
        // console.log('------------------------------------');
    }

    render() {

        return (
            <svg
                height={this.width}
                ref='svg'
                width={this.width}
                x={this.props.headX}
                y={this.props.headY}>
            </svg>
        );
    }

    componentDidMount() {

        this.svg = d3.select(this.refs.svg);
        this.renderArrow();
    }

    renderArrow() {

        const foo = this.angle >= 90 && this.angle <= -90;
        this.renderArrowHead(foo);
        // this.renderArrowHead(this.headIsDown);
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

        const ratioA = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c);
        const ratioB = (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c);
        const ratioC = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
        // console.log('------------------ratioA------------------');
        // console.log('ratio', ratioA)
        // console.log('cos',  (Math.cos(ratioA) * 180) / Math.PI);
        // console.log('sin',  (Math.sin(ratioA) * 180) / Math.PI);
        // console.log('tan',  (Math.tan(ratioA) * 180) / Math.PI);
        // console.log('acos', (Math.acos(ratioA) * 180) / Math.PI);
        // console.log('asin', (Math.asin(ratioA) * 180) / Math.PI);
        // console.log('atan', (Math.atan(ratioA) * 180) / Math.PI);
        // console.log('------------------------------------');
        // console.log('------------------ratioB------------------');
        // console.log('ratio', ratioB)
        // console.log('cos',  (Math.cos(ratioB) * 180) / Math.PI);
        // console.log('sin',  (Math.sin(ratioB) * 180) / Math.PI);
        // console.log('tan',  (Math.tan(ratioB) * 180) / Math.PI);
        // console.log('acos', (Math.acos(ratioB) * 180) / Math.PI);
        // console.log('asin', (Math.asin(ratioB) * 180) / Math.PI);
        // console.log('atan', (Math.atan(ratioB) * 180) / Math.PI);
        // console.log('------------------------------------');
        console.log('------------------ratioC------------------');
        console.log('ratio', ratioC)
        console.log('cos',  (Math.cos(ratioC) * 180) / Math.PI);
        console.log('sin',  (Math.sin(ratioC) * 180) / Math.PI);
        console.log('tan',  (Math.tan(ratioC) * 180) / Math.PI);
        console.log('acos', (Math.acos(ratioC) * 180) / Math.PI);
        console.log('asin', (Math.asin(ratioC) * 180) / Math.PI);
        console.log('atan', (Math.atan(ratioC) * 180) / Math.PI);
        console.log('------------------------------------');
        return ((!this.headIsDown ? Math.acos(ratioC) : Math.asin(ratioC)) * 180) / Math.PI;
    }

    /**
     * Returns the distance between the given coordinates
     * @returns {Number}
     */
    getDistance(x1 = this.props.headX, y1 = this.props.headY, x2 = this.props.tailX, y2 = this.props.tailY) {

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    get slope() {

        return (this.props.tailY - this.props.headY) / (this.props.tailX - this.props.headX);
    }

    renderArrowHead(arrowTipDown) {

        const arrowHeadLength = this.width / 5;
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