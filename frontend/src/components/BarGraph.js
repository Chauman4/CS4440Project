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
    const {
      data,
      hoverData
    } = this.state;

    if(!data) {
      return (<div className="App">
        Loading...
      </div>)
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
          onMouseLeave={() => this.setState({hoverData: null})}
        >
          {
            <VerticalBarSeries
              onValueMouseOver={(d) => this.setState({hoverData: d})}
              data={data}
            />
          }

          {!!hoverData && <Hint value={hoverData} />}
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );

  }
}

export default BarGraph;