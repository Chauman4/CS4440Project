import React, { useState, useEffect } from 'react';
import axios from "axios";
import MultiBarGraphContainer from "./MultiBarGraphContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

class BarGraphGenderByMonth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: ['M', 'F'],
            collisions: {}
        }
    }

    componentDidMount() {
        var requests = this.state.gender.map((sex) => 
            axios.get(`http://localhost:5000/api/collisions/getGenderByMonth/${encodeURIComponent(sex)}`)
        )
        axios.all(requests)
        .then(axios.spread((...responses) => {
            var newCollisions = this.state.collisions
            responses.map((response, i) => {
                var data = response.data
                var cleanedData = data.map((element) => ({
                    x: element[Object.keys(element)[0]],
                    y: element[Object.keys(element)[1]]
                })).sort((a, b) => a.x > b.x ? 1 : -1)
                newCollisions[this.state.gender[i]] = cleanedData
            })
            this.setState({collisions: newCollisions});
        }))
        .catch(() => {
            alert('Error retrieving data!!!');
        });
    }

    render() {
        return (
            <div>
                {console.log(this.state.collisions)}
                {this.state.collisions && Object.keys(this.state.collisions).length ? <MultiBarGraphContainer data={this.state.collisions}/> : null}
            </div>
        )
    }
}

export default BarGraphGenderByMonth;

