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
            collisions: [] 
        }
    }

    handleChangeYear = (event) => {
        this.setState({ year: event.target.value });
    }

    handleSubmitHoliday = (event) => {
        axios.get(`http://localhost:5000/api/collisions/getHoliday/${encodeURIComponent(this.state.year)}`)
        .then((response) => {
            const data = response.data;
            console.log(typeof(data))
            console.log(data);
            var cleanedData = data.map((element) => ({
                x: element[Object.keys(element)[0]],
                y: element[Object.keys(element)[1]]
            })).sort((a, b) => a.x > b.x ? 1 : -1)
            this.setState({ collisions : cleanedData });
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
                    <BarGraphContainer data={this.state.collisions}/>
                </div>
            </div>  
        )
    }
}

export default BarGraphHolidays;