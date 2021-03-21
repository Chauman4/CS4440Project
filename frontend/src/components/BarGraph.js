import React, { useState } from 'react';
import { useHistory, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
    LabelSeries
} from "react-vis";

class BarGraph extends React.Component {
    render () {
        const data = this.props.data;
        console.log(this.props)
        const chartWidth = 800;
        const chartHeight = 500;
        const chartDomain = [0, chartHeight];
        return (
            <XYPlot
                xType="ordinal"
                width={chartWidth}
                height={chartHeight}
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={data}/>
                <LabelSeries
          data={data.map((obj) => {
            return { ...obj, label: obj.y.toString() };
          })}
          labelAnchorX="middle"
          labelAnchorY="text-after-edge"
        />
            </XYPlot>
        )

    }
}

export default BarGraph;