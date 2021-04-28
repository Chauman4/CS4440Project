import './App.css';
import React, { useState, Component } from 'react';
import { useHistory, Switch, Route, Link, HashRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeatMap from "./components/HeatMap";
import DateWMostCollisionsPerQuadrant from "./components/DateWMostCollisionsPerQuadrant";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import BarGraph from "./components/BarGraph";
import BarGraphContainer from "./components/BarGraphContainer";
import data from "./components/DummyData/bargraph.json";
// import { getCollisionByGender, testing } from "./backend/controllers/collisionController.js";
import axios from "axios";
import Collisions from './backend/models/Schema.js'
import BarGraphRaceAgeGender from './components/BarGraphRaceAgeGender';
import BarGraphGenderByMonth from './components/BarGraphGenderByMonth';

import BarGraphHolidays from './components/BarGraphHolidays';

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
  }

  render () {
    return (
      <HashRouter>
      <div className="App">
        <NavBar/>    
        <div>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/1" component={HeatMap}/>
          <Route path="/2" component={BarGraphRaceAgeGender}/>
          <Route path="/4" component={BarGraphGenderByMonth}/>
          <Route path="/7" component={DateWMostCollisionsPerQuadrant}/>
          <Route path="/9" component={BarGraphHolidays}/>
          </Switch>
        </div>  
      </div>
    </HashRouter>

    )
  }
}

export default App;
