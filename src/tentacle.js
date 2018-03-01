/**
 * Makes a single tentacle.
 * A tentacle is roughly defined as starting with a thick circle, then circles with varying
 * radii, tangent to each other at some angle, until some minimum size is met.
 */
export function tentacle (svg, width, height) {
    let color = randomColor();
    let initRadius = width/2 * (0.1 + Math.random()*0.2);
    let direction = Math.random(2*Math.PI);
    let [startX, startY] = findCenter(width/2, height/2, width/2, -direction);

    extendTentacle(svg, startX, startY, initRadius, color, direction, width*0.01);
}

/**
 * Add spot if radius > minRadius (else return)
 * Decide next spot s.t. tangent to current spot, randomish angle.
 */
function extendTentacle(svg, centerX, centerY, radius, color, direction, minRadius) {
    //let radius = width/2 * (0.8 + Math.random()*0.2);
    if (radius < minRadius) {
        return;
    }
    addSpot(svg, centerX, centerY, radius, color);
    direction += (1 + delta(Math.PI/2));
    let nextRadius = radius * (0.8 + Math.random()*0.1);
    [centerX, centerY] = findCenter(centerX, centerY, radius + nextRadius, direction);
    extendTentacle(svg, centerX, centerY, nextRadius, color, direction, minRadius);
}

function addSpot(svg, centerX, centerY, radius, color) {
    svg.append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', radius)
        .style('fill', color)
        .style('stroke', 'black')
        .style('stroke-width', '2');
}

function randomColor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    return 'rgba(' + r + ',' + g + ',' + b + ', 0.5)';
}

/**
 * Given the center of one spot, find the center of the next.
 * This gets calculated by r*sin dir
 */
function findCenter(x, y, r, dir) {
    return [x + r * Math.cos(dir), y + r * Math.sin(dir)];
}

function delta(range) {
    return (Math.random()*range) - (range);
}

/**
 * Translate to an edge along the negative direction starting from the center.
 */
function findStartPoint(x, y, dir) {
    dir = dir * -1;

}
