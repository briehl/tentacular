import * as d3 from 'd3';
import { tentacle } from './tentacle';

const width = 500;
const height = 500;

function main() {
    var svgCanvas = document.createElement('div');
    document.body.appendChild(svgCanvas);
    var svg = d3.select(svgCanvas).append('svg')
        .attr('width', width)
        .attr('height', height);

    for (var i=0; i<10; i++) {
        tentacle(svg, width, height);
    }
}

main();
