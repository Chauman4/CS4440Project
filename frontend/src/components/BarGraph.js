import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
    LabelSeries
} from "react-vis";

class BarGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      index: null,
    }
  }
    render () {
        const data = this.props.data;
        console.log(data)
        console.log(data[0])
        const {index} = this.state;
        var maxHeight = 0
        const dataWithColor = data.map(function(d, i) { 
            if (d.count > maxHeight) {
              maxHeight = d.count
            }
            return ({x: d._id.toString(), y: d.count, color : Number(i !== index)})
          });
        console.log(dataWithColor)
        const chartWidth = 800;
        const chartHeight = 500;
        const chartDomain = [0, maxHeight];
        return (
            <XYPlot
                xType="ordinal"
                width={chartWidth}
                height={chartHeight}
                yDomain={chartDomain}
                onMouseLeave = {() => this.setState({index : null})}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={dataWithColor}
                 onNearestX={(d, {index}) => this.setState({index})}
                />
                <LabelSeries
          data={dataWithColor.map((obj) => {
            console.log(obj)
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