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
import { findByAge, findByGender, closeConnection} from './server.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      drNumber: '',
      dateOccured: '',
      timeOccured: '',
      area: '',
      sex: '',
      descent: '',
      address: '',
      crossStreet: '',
      location: '',
      zipCodes: '',
      age: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callFunction = this.callFunction.bind(this);
  }

  handleChange(event) {
    this.setState({ age: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/collisions/${encodeURIComponent(this.state.id)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  callFunction(event) {
    event.preventDefault();
    // const MongoClient = require('mongodb').MongoClient;
    // const url = 'mongodb://localhost:27017';
    // const dbName = 'LATrafficCollisions';
    // const client = new MongoClient(url, { useNewUrlParser: true });
    // findByAge(30).then(response => {
    //   console.log(response)
    //   response[0].json()
    // }, (state) => this.setState({...this.state}));
    // response => result[0];
    // console.log(result);
    // state => this.setState({...this.state, age: String(result)})
    // return (<p>Hello</p>)
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
          <Route path="/2" render={() => <BarGraphContainer data={data}/>}/>
        </Switch>
        </div>
        
      </div>
      <div>
        {this.state.age}
      </div>
      <form onSubmit={this.callFunction}>
            <label >Enter collision id: </label>
            <input
              id="name"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        <p>{this.state.drNumber}</p>
        <p>{this.state.dateOccured}</p>
        <p>{this.state.timeOccured}</p>
        <p>{this.state.area}</p>
        <p>{this.state.sex}</p>
        <p>{this.state.descent}</p>
        <p>{this.state.address}</p>
        <p>{this.state.crossStreet}</p>
        <p>{this.state.location}</p>
        <p>{this.state.zipCodes}</p>
    </HashRouter>

    )
  }
}

export default App;
