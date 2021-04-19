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
      zipCodes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/collisions/${encodeURIComponent(this.state.id)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
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
