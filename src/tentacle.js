/**
 * Makes a single tentacle.
 * A tentacle is roughly defined as starting with a thick circle, then circles with varying
 * radii, tangent to each other at some angle, until some minimum size is met.
 */

import * as d3 from 'd3';

export function tentacle (svg, width, height) {
    svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', width/2 -2)
        .style('fill', 'purple')
        .style('stroke', 'black')
        .style('stroke-width', '2');
}
