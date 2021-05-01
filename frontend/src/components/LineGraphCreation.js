import React, { useRef, useEffect, Component } from 'react';
import * as d3 from "d3";
import PieChart from './PieChart';
import { curveMonotoneX } from 'd3';

function LineGraphCreation(props) {
    const {
        data,
        year,
      } = props;
    const ref = useRef(null);

    useEffect(() => {
        drawLineGraph();
    }, [data]);

    function drawLineGraph() {
        d3.select('#linegraph')
            .select('svg')
            .remove();
        const margin = {top: 10, right: 30, bottom: 30, left: 100};
        const width = 1700 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");
        const parseYear = d3.timeParse("%Y");
        

        const x = d3
            .scaleTime()
            .domain([parseYear(year), parseYear(parseInt(year)+1)])
            .range([ 0, width ]);

        const y = d3
            .scaleLinear()
            .domain([0, 200])
            .range([ height, 0 ]);

        console.log(parseDate('2012-06-03T04:00:00.000Z'))
        
        data.forEach(function(d) {
            d.label = parseDate(d.label);
        })

        console.log(data);

        const svg = d3
                    .select("#linegraph")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                            "translate(" + margin.left + "," + margin.top + ")");

        svg.append("path")
                    .data([data])
                    .attr("class", "line")
                    .attr("fill", "none")
                    .attr("stroke", "blue")
                    .attr("stroke-width", 1.5)
                    .attr("d", d3.line()
                        .x(function(d) {
                            return x(d.label) })
                        .y(function(d) { return y(d.value) })
                        .curve(curveMonotoneX)
                    )
        svg
            .append("g")
            .attr('class', 'grid')
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg
            .append("g")
            .attr('class', 'grid')
            .call(d3.axisLeft(y));
        data.forEach(function(d) {
            d.value = +d.value
        })

        x.domain(
            d3.extent(data, function(d) {
            return d.label;
            })
        );
    }
    return (
        <div>
            <h1>Number of collisions over the course of a year</h1>
            <div id="linegraph" ref={ref}/>
        </div>
    )
}

export default LineGraphCreation;