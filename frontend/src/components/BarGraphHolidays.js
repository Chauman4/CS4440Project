import React, { useRef, useEffect, Component } from 'react';
import axios from "axios";
import BarGraphContainer from "./BarGraphContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

class BarGraphHolidays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            drNumber: '',
            dateOccured: '',
            timeOccured: '',
            areaName: '',
            victimSex: '',
            victimAge: '',
            victimMaxAge: '',
            victimMinAge: '',
            victimDescent: '',
            address: '',
            crossStreet: '',
            longitude: '',
            latitude: '',
            zipCode: '',
            quadrant: '',
            year: '',
            collisions: [],
            holidays: {1: "New Year's", 15: "MLK Day", 46: "President's Day", 76: "St. Patrick's Day", 145: "Memorial Day", 185: "Independence Day", 244: "Labor Day", 281: "Columbus Day", 315: "Veteran's Day", 326: "Thanksgiving", 359: "Christmas" }
        }
    }

    handleChangeYear = (event) => {
        this.setState({ year: event.target.value });
    }

    handleSubmitHoliday = (event) => {
        axios.get(`http://localhost:5000/api/collisions/getHoliday/${encodeURIComponent(this.state.year)}`)
        .then((response) => {
            const data = response.data;
            var cleanedData = data.map((element, i) => ({
                x: element[Object.keys(element)[0]],
                y: element[Object.keys(element)[1]]
            })).sort((a, b) => a.x > b.x ? 1 : -1)
            
            var labledData = cleanedData.map((element) => ({
                x: this.state.holidays[element[Object.keys(element)[0]]],
                y: element[Object.keys(element)[1]]
            }))
            this.setState({ collisions : labledData });
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitHoliday}>
                    <label >Enter year: </label>
                    <input
                        id="name"
                        type="text"
                        value={this.state.year}
                        onChange={this.handleChangeYear}
                        />
                        <button type="submit">Submit</button>
                </form>
                <div>
                    <h1>Number of Collisions During Holidays in a Given Year</h1>
                    <BarGraphContainer xAxis="Holiday" yAxis="Count" orientation="Vertical" data={this.state.collisions}/>
                </div>
            </div>  
        )
    }
}

export default BarGraphHolidays;