import React, { Component } from 'react';
import axios from "axios";
import BarGraphContainer from "./BarGraphContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

class BarGraphAgeRank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: '',
            collisions: [],
            year: '',
        }
    }

    handleChangeRank = (event) => {
        this.setState({ rank: event.target.value });
    }

    handleChangeYear = (event) => {
        this.setState({ year: event.target.value });
    }

    handleSubmitRank = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/collisions/getAgeRank/${encodeURIComponent(this.state.rank)}/${encodeURIComponent(this.state.year)}`)
        .then((response) => {
            const data = response.data;
            console.log(typeof(data))
            console.log(data);
            var cleanedData = data.map((element, i) => ({
                x: element[Object.keys(element)[0]],
                y: element[Object.keys(element)[1]]
            }))
            //.sort((a, b) => a.y > b.y ? -this.state.rank : this.state.rank)
            this.setState({collisions: cleanedData})
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
    }    

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmitRank}>
                    <label >Enter Sort (1 for acs, -1 for dec): </label>
                    <input
                        id="name"
                        type="text"
                        value={this.state.rank}
                        onChange={this.handleChangeRank}
                        />
                    <label >Enter Year: </label>
                    <input
                        id="year"
                        type="text"
                        value={this.state.year}
                        onChange={this.handleChangeYear}
                        />
                        <button type="submit">Submit</button>
                </form>
                <BarGraphContainer xAxis="Age" yAxis="Count" orientation="Horizontal" data={this.state.collisions}/>
            </div>
        )
    }

}

export default BarGraphAgeRank;
