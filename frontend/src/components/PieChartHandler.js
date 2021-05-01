import React, { useRef, useEffect, Component } from 'react';
import axios from "axios";
import PieChart from "./PieChart";
import 'bootstrap/dist/css/bootstrap.min.css';

class PieChartHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collisions: []
        }
    }

    handleGenderRatio = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/collisions/getGenderRatio/1`)
        .then((response) => {
            const data = response.data;
            console.log(typeof(data))
            console.log(data);
            var cleanedData = data.map((element, i) => ({
                label: element[Object.keys(element)[0]],
                value: element[Object.keys(element)[1]]
            }))
            this.setState({collisions: cleanedData})
            console.log(this.state.collisions)
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
    }

    handleRaceRatio = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/collisions/getRaceRatio/1`)
        .then((response) => {
            const data = response.data;
            console.log(typeof(data))
            console.log(data);
            var cleanedData = data.map((element, i) => ({
                label: element[Object.keys(element)[0]],
                value: element[Object.keys(element)[1]]
            }))
            this.setState({collisions: cleanedData})
            console.log(this.state.collisions)
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
    }



    render() {
        return (
            <div>
                { <button onClick={this.handleGenderRatio}>
                    <label >Gender Ratio </label>
                </button>}
                { <button onClick={this.handleRaceRatio}>
                    <label >Race Ratio </label>
                </button>}

                    <PieChart data={this.state.collisions} outerRadius={400} innerRadius={0}/>
            </div>  
        )
    }
}

export default PieChartHandler;