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
        const {index} = this.state;
        const dataWithColor = data.map((d, i) => ( {...d, color : Number(i !== index)}));
        const chartWidth = 800;
        const chartHeight = 500;
        const chartDomain = [0, chartHeight];
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