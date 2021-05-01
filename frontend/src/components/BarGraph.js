import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import { dsv } from 'd3-fetch';
import {
  XYPlot,
  VerticalBarSeries,
  HorizontalBarSeries,
  LineMarkSeries,
  XAxis,
  YAxis,
  Hint,
} from 'react-vis';

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      hoverData: null,
      orientation: props.orientation,
      xAxis: props.xAxis,
      yAxis: props.yAxis
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
        this.setState({
          data: this.props.data
        })
      }
  }

  render() {
    var data = this.props.data;
    var orientation = this.state.orientation == "Horizontal" ? <HorizontalBarSeries
      onValueMouseOver={(d) => this.setState({...this.state, hoverData: d})}
      data={data}
      /> : <VerticalBarSeries
      onValueMouseOver={(d) => this.setState({...this.state, hoverData: d})}
      data={data}
      />;
    console.log("Hover Data")
    console.log(this.state.hoverData)
    if (!!this.state.hoverData) {
      this.state.hoverData[this.state.xAxis] = this.state.hoverData["x"]; // Assign new key
      this.state.hoverData[this.state.yAxis] = this.state.hoverData["y"]; // Assign new key

    }
    return (
      <div className="App">
        <XYPlot
          width={1200}
          height={600}
          margin={{
            left: 70
          }}
          xType="ordinal"
          onMouseLeave={() => this.setState({...this.state, hoverData: null})}
        >
          {orientation}
          {console.log("HERE", data)}
          
          {!!this.state.hoverData && <Hint value={this.state.hoverData} />}
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );

  }
}

export default BarGraph;