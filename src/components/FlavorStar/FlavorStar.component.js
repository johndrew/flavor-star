import React, { Component } from 'react';
import FlavorCircle from '../FlavorCircle/FlavorCircle.component';

export default class FlavorStar extends Component {

    render() {

        const width = 640;
        const height = width;
        const radius = width * 0.109375;
        const length = width * 0.625;
        const {
            bottom_left,
            bottom_right,
            top,
            top_left,
            top_right,
        } = this.getCoordinates({
            x: width * 0.109375,
            y: width * 0.3125,
            length,
        });

        return (
            <div>
                <svg
                    height={height}
                    width={width}>
                    <FlavorCircle type="salty_umami" x={top.x} y={top.y} radius={radius} />
                    <FlavorCircle type="sweet" x={top_right.x} y={top_right.y} radius={radius} />
                    <FlavorCircle type="sour" x={bottom_right.x} y={bottom_right.y} radius={radius} /> */}
                    <FlavorCircle type="bitter" x={bottom_left.x} y={bottom_right.y} radius={radius} />
                    <FlavorCircle type="spice" x={top_left.x} y={top_left.y} radius={radius} />
                </svg>
            </div>
        );
    }

    /**
     * Determines the coordinates of the star based on specific size parameters
     * Logic pulled from https://rosettacode.org/wiki/Pentagram#Java
     * @typedef {object} Coordinates
     * @prop {number} x
     * @prop {number} y
     * @typedef {object} StarCoordinates
     * @prop {Coordinates} bottom_left The bottom left point of the star
     * @prop {Coordinates} bottom_right The bottom right point of the star
     * @prop {Coordinates} top The top point of the star
     * @prop {Coordinates} top_left The top left point of the star
     * @prop {Coordinates} top_right The top right point of the star
     * @param {number} [angle] An angle in radians
     * @param {number} length The length of the sides
     * @param {number} radius The radius of the star, from center to top point, if a circle were drawn around it
     * @returns {StarCoordinates} Cartesian coordinates to draw the star
     */
    getCoordinates({ x = 0, y = 0, length, angle = 0 }) {
        // TODO: remove x,y defaults and update tests

        let calcAngle = angle;

        // Points start with the top left
        const points = [{ x, y}];
        for (var i = 0; i < 5; i += 1) {

            // This calculation will move in this order: top left, top right, bottom right, top, bottom left
            const point = {
                x: x + Math.cos(calcAngle) * length,
                y: y + Math.sin(-calcAngle) * length,
            };
            points.push(point);
            ({ x, y } = point);
            calcAngle -= 144 * (Math.PI / 180); // 144 degrees in radians
        }
        return {
            bottom_left: points[4],
            bottom_right: points[2],
            top: points[3],
            top_left: points[0],
            top_right: points[1],
        };
    }
}