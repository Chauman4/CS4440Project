import './App.css';
import React, { useState, Component } from 'react';
import { useHistory, Switch, Route, Link, HashRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeatMap from "./components/HeatMap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import BarGraph from "./components/BarGraph";
import BarGraphContainer from "./components/BarGraphContainer";
import data from "./components/DummyData/bargraph.json";
// import { getCollisionByGender, testing } from "./backend/controllers/collisionController.js";
import axios from "axios";
import Collisions from './backend/models/Schema.js'


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
// const dbName = 'LATrafficCollisions';
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect(function(err) {
//   //assert.equal(null, err);
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   client.close();
// });

class App extends Component {
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
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeGen = this.handleChangeGen.bind(this);
    // this.handleSubmitGen = this.handleSubmitGen.bind(this);
    // this.displayCollisions = this.displayCollisions.bind(this);
    // this.handleChangeMaxAge = this.handleChangeMaxAge.bind(this);
    // this.handleChangeMinAge = this.handleChangeMinAge.bind(this);
    // this.handleChangeRace = this.handleChangeRace.bind(this);
    // this.handleSubmitRaceAgeGender = this.handleSubmitRaceAgeGender.bind(this);

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
      this.setState({ collisions : data });
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
      this.setState({ collisions : data });
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data!!!');
    });
  }


  displayCollisions = (collision) => {

    if (!collision) return null;
    //console.log(collision)

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

  render () {
    return (
      <HashRouter>
      <div className="App">
        
        <NavBar/>
        
        <div>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/1" component={HeatMap}/>
          <Route path="/2" render={() => <BarGraphContainer data={data}/>}/>
        </Switch>
        </div>
        
      </div>
      <form onSubmit={this.handleSubmit}>
            <label >Enter collision id: </label>
            <input
              id="name"
              type="text"
              value={this.state.id}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        <form onSubmit={this.handleSubmitGen}>
            <label >Enter gender: </label>
            <input
              id="name"
              type="text"
              value={this.state.victimSex}
              onChange={this.handleChangeGen}
            />
            <button type="submit">Submit</button>
        </form>
        <form onSubmit={this.handleSubmitRaceAgeGender}>
            <label >Enter gender: </label>
            <input
              id="gender"
              type="text"
              value={this.state.victimSex}
              onChange={this.handleChangeGen}
            />
            <label >Enter Min Age: </label>
            <input
              id="minAge"
              type="text"
              value={this.state.victimMinAge}
              onChange={this.handleChangeMinAge}
            />
            <label >Enter Max Age: </label>
            <input
              id="maxAge"
              type="text"
              value={this.state.victimMaxAge}
              onChange={this.handleChangeMaxAge}
            />
            <label >Enter Race: </label>
            <input
              id="descent"
              type="text"
              value={this.state.victimDescent}
              onChange={this.handleChangeRace}
            />
            <button type="submit">Submit</button>
        </form>
        {/* <p>{this.state.drNumber}</p>
        <p>{this.state.dateOccured}</p>
        <p>{this.state.timeOccured}</p>
        <p>{this.state.areaName}</p>
        <p>{this.state.victimSex}</p>
        <p>{this.state.victimDescent}</p>
        <p>{this.state.address}</p>
        <p>{this.state.crossStreet}</p>
        <p>{this.state.longitude}</p>
        <p>{this.state.latitude}</p>
        <p>{this.state.quadrant}</p>
        <p>{this.state.zipCode}</p> */}
        <div>
          {this.displayCollisions(this.state.collisions[0])}
          {console.log(typeof(this.state.collisions))}
          <BarGraphContainer data = {this.state.collisions}/>
        </div>
        {/* <div>
          {getCollisionByGender}
        </div> */}
        {/* {testing} */}
    </HashRouter>

    )
  }
}

export default App;
