import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import { dsv } from 'd3-fetch';
import {
  XYPlot,
  VerticalBarSeries,
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
    };
  }
  render() {
    var data = this.props.data;
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
          {
            <VerticalBarSeries
              onValueMouseOver={(d) => this.setState({...this.state, hoverData: d})}
              data={data}
            />
          }
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