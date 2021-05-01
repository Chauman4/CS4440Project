import React, { useRef, useEffect, Component } from 'react';
import data from "./DummyData/bargraph.json";
import axios from "axios";
import BarGraphContainer from "./BarGraphContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

class BarGraphRaceAgeGender extends Component {
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
            collisions: [] 
        }
    }

    handleChange = (event) => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/api/collisions/${encodeURIComponent(this.state.id)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
    }
    
    handleChangeGen = (event) => {
    this.setState({ victimSex: event.target.value });
    }

    handleChangeRace = (event) => {
    this.setState({ victimDescent: event.target.value });
    }

    handleChangeMaxAge = (event) => {
    this.setState({ victimMaxAge: event.target.value });
    }
    
    handleChangeMinAge = (event) => {
    this.setState({ victimMinAge: event.target.value });
    }

    handleSubmitGen = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/collisions/getGender/${encodeURIComponent(this.state.victimSex)}`)
        .then((response) => {
            const data = response.data;
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

    handleSubmitRaceAgeGender = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/collisions/getRaceAgeGender/${encodeURIComponent(this.state.victimSex)}/${encodeURIComponent(this.state.victimMaxAge)}/${encodeURIComponent(this.state.victimMinAge)}/${encodeURIComponent(this.state.victimDescent)}`)
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
    
    displayCollisions = (collision) => {

        if (!collision) return null;
    
        return (
          <div>
            <h3>{collision.drNumber}</h3>
            <p>{collision.dateOccured}</p>
            <p>{collision.timeOccured}</p>
            <p>{collision.areaName}</p>
            <p>{collision.victimSex}</p>
            <p>{collision.victimAge}</p>
            <p>{collision.victimDescent}</p>
            <p>{collision.address}</p>
            <p>{collision.crossStreet}</p>
            <p>{collision.longitude}</p>
            <p>{collision.latitude}</p>
            <p>{collision.zipCode}</p>
            <p>{collision.quadrant}</p>
          </div>)
      };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitRaceAgeGender}>
                    <label >Enter Race: </label>
                    <input
                    id="descent"
                    type="text"
                    value={this.state.victimDescent}
                    onChange={this.handleChangeRace}
                    />
                    <br/>
                    <label >Enter Min Age: </label>
                    <input
                    id="minAge"
                    type="text"
                    value={this.state.victimMinAge}
                    onChange={this.handleChangeMinAge}
                    />
                    <br/>
                    <label >Enter Max Age: </label>
                    <input
                    id="maxAge"
                    type="text"
                    value={this.state.victimMaxAge}
                    onChange={this.handleChangeMaxAge}
                    />
                    <br/>
                    <label >Enter gender: </label>
                    <input
                    id="gender"
                    type="text"
                    value={this.state.victimSex}
                    onChange={this.handleChangeGen}
                    />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {/* {this.displayCollisions(this.state.collisions[0])} */}
                    {/* {console.log(typeof(this.state.collisions))} */}
                    <h1>Number of Collisions by Race, Age Group, Gender per Area Name</h1>
                    <BarGraphContainer xAxis="Area Name" yAxis="Count" orientation="Vertical" data={this.state.collisions}/>
                </div>
            </div>  
        )
    }
}

export default BarGraphRaceAgeGender;