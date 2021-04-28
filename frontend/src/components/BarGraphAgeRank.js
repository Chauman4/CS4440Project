import React, { Component } from 'react';
import axios from "axios";
import BarGraphContainer from "./BarGraphContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

class BarGraphAgeRank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: '',
            collisions: []
        }
    }

    handleChangeRank = (event) => {
        this.setState({ rank: event.target.value });
    }

    handleSubmitRank = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/collisions/getAgeRank/${encodeURIComponent(this.state.rank)}`)
        .then((response) => {
            const data = response.data;
            console.log(typeof(data))
            console.log(data);
            var cleanedData = data.map((element, i) => ({
                x: element[Object.keys(element)[0]],
                y: element[Object.keys(element)[1]]
            }))
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
                        <button type="submit">Submit</button>
                </form>
                <BarGraphContainer data={this.state.collisions}/>
            </div>
        )
    }

}

export default BarGraphAgeRank;
