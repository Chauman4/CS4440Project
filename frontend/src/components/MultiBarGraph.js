import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
    LabelSeries
} from "react-vis";

class MultiBarGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiData: props.data,
            index: null,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                multiData: this.props.data
            })
          }
    }

    render () {
        const data = this.state.multiData;
        const index = this.state.index;
        var colorArr = ["#F44336", "#2196F3", "#FBC02D"]
        var maxHeight = 0
        Object.keys(data).map((key) => {
            for (const point in data[key]) {
                if (data[key][point].y > maxHeight) {
                    maxHeight = data[key][point].y
                }
            }
        })
        const dataWithColor = Object.keys(data).map((key, i) => 
            data[key].map(function(d, index) {
                return ({x: d.x, y: d.y, color : colorArr[i]})
            })
        )
        const chartWidth = 800;
        const chartHeight = 500;
        const chartDomain = [0, maxHeight];
        const verticalBars = dataWithColor.map((data, i) => 
            <VerticalBarSeries 
                color={colorArr[i]}
                data={data}
                key={i}
                onNearestX={(d, {index}) => this.setState({index: index})}
            />
        )
        return (
            <XYPlot
                margin={{left: 100}}
                xType="ordinal"
                width={chartWidth}
                height={chartHeight}
                yDomain={chartDomain}
                onMouseLeave = {() => this.setState({index : null})}
            >
                <XAxis />
                <YAxis />
                {verticalBars? verticalBars : null}
            </XYPlot>
        )

    }
}

export default MultiBarGraph;