import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarGraph from './BarGraph';

class BarGraphContainer extends React.Component {
    
    render () {
        var data = this.props.data;
        console.log(data)
        return (
            <div class="container">
                <BarGraph data={data}/>
            </div>
        )
    }
}

export default BarGraphContainer;