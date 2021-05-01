import React, { useRef, useEffect, Component } from 'react';
import * as d3 from "d3";
import PieChart from './PieChart';
// import rd3 from 'react-d3-library'
// const RD3Component = rd3.Component;

// function update(data) {
//   var margin = {top: 10, right: 30, bottom: 30, left: 60},
//   width = 460 - margin.left - margin.right,
//   height = 400 - margin.top - margin.bottom;
// var svg = d3.select("#linegraph")
// .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
// .append("g")
//   .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");      
//     var x = d3.scaleTime()
//       .domain(d3.extent(data, function(d) { return d._id; }))
//       .range([ 0, width ]);
//     svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x));
//     // Add Y axis
//     var y = d3.scaleLinear()
//       .domain([0, d3.max(data, function(d) { return + d.count; })])
//       .range([ height, 0 ]);
//     svg.append("g")
//       .call(d3.axisLeft(y));

//     // Add the line
//     svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "blue")
//       .attr("stroke-width", 1.5)
//       .attr("d", d3.line()
//         .x(function(d) { return x(d._id) })
//         .y(function(d) { return y(d.count) })
//         )
// }


function LineGraphCreation(props) {
    const {data} = props;
    const ref = useRef(null);

  useEffect(() => {
    drawLineGraph();
  }, [data]);

  function drawLineGraph() {
    d3.select('#linegraph')
        .select('svg')
        .remove();
    var margin = {top: 10, right: 30, bottom: 30, left: 60};
    /*const yMinValue = d3.min(data, d => d.value);
    const yMaxValue = d3.max(data, d => d.value);
    const xMinValue = d3.min(data, d => d.label);
    const xMaxValue = d3.max(data, d => d.label);*/
    var	parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");
    console.log(parseDate('2012-06-03T04:00:00.000Z'))
    data.forEach(function(d) {
        d.label = parseDate(d.label);
        d.value = +d.value
    })
    console.log(data);
    var width = 560 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;
    const svg = d3.select("#linegraph")
                 .append("svg")
                 .attr("width", width + margin.left + margin.right)
                 .attr("height", height + margin.top + margin.bottom)
                 .append("g")
                 .attr("transform",
                         "translate(" + margin.left + "," + margin.top + ")");
    var x = d3
        .scaleTime()
        .domain([Date.parse('2009-01-01T05:00:00.000Z'), Date.parse('2019-12-31T05:00:00.000Z')])
        .range([ 0, width ]);

    var y = d3
        .scaleLinear()
        .domain([0, 1000])
        .range([ height, 0 ]);

    svg
        .append("g")
        .attr('class', 'grid')
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg
        .append("g")
        .attr('class', 'grid')
        .call(d3.axisLeft(y));

    svg.append("path")
                .data(data)
                .attr("fill", "none")
                .attr("stroke", "blue")
                .attr("stroke-width", 3)
                .attr("d", d3.line()
                    .x(function(d) {
                        console.log(d.label);
                         return x(d.label) })
                    .y(function(d) { return y(d.value) })
                )
    /*var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.label; }))
        .range([ 0, width ]);
    var y = d3.scaleLinear()
                                          .domain([0, d3.max(data, function(d) { return d.value; })])
                                          .range([ height, 0 ]);
                                          svg.append("g")
                                          .call(d3.axisLeft(y));
    svg.append("path")
                    .data(data)
                    .attr("fill", "none")
                    .attr("stroke", "blue")
                    .attr("stroke-width", 1.5)
                    .attr("d", d3.line()
                    .x(function(d) { return x(d.label) })
                    .y(function(d) { return y(d.value) })
                    )
    console.log("HERE",this.collisions)*/
  }

    /* let size = 500;
    let svg = d3.select(this.myRef.current)
                .append('svg')
                .attr('width', size)
                .attr('height', size);
    let rect_width = 10;
    svg.selectAll('rect')
        .data(this.collisions)
        .enter()
        .append('rect')
        .attr('x', (d, i) => 5 + i*(rect_width + 5))
        .attr('y', d => size - d)
        .attr('width', rect_width)
        .attr('height', d => d)
        .attr('fill', 'teal');
    console.log("HERE",this.collisions) */
    
    // var data = this.state.data
    
    // data.margin = {top: 10, right: 30, bottom: 30, left: 60};
    // data.width = 460 - data.margin.left - data.margin.right;
    // data.height = 400 - data.margin.top - data.margin.bottom;
    // data.dataset = this.state.collisions
    // data.x_display_name = 'X VALUE';
    // data.y_display_name = 'Y VALUE';


    // var svg = d3.select(node)
    //             .append("svg")
    //             .attr("width", data.width + data.margin.left + data.margin.right)
    //             .attr("height", data.height + data.margin.top + data.margin.bottom)
    //             .append("g")
    //             .attr("transform",
    //                     "translate(" + data.margin.left + "," + data.margin.top + ")");      
    // var x = d3.scaleTime()
    //           .domain(d3.extent(data, function(d) { return d.label; }))
    //           .range([ 0, data.width ]);
    // svg.append("g")
    //     .attr("transform", "translate(0," + data.height + ")")
    //     .call(d3.axisBottom(x));
    //     // Add Y axis
    // var y = d3.scaleLinear()
    //                 .domain([0, d3.max(data, function(d) { return d.value; })])
    //                 .range([ data.height, 0 ]);
    //                 svg.append("g")
    //                 .call(d3.axisLeft(y));

    // // Add the line
    // svg.append("path")
    //     .data(data)
    //     .attr("fill", "none")
    //     .attr("stroke", "blue")
    //     .attr("stroke-width", 1.5)
    //     .attr("d", d3.line()
    //     .x(function(d) { return x(d.label) })
    //     .y(function(d) { return y(d.value) })
    //     )
    // console.log("HERE", node)
    // console.log("HERE", data)
    // this.setState({d3: node});

    return <div id="linegraph" ref={ref}></div>;

// render () {
//   update(this.state.collisions)
//   return (
//     <div id="#linegraph"></div>
//   )
// }
}

export default LineGraphCreation;