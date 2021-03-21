import './App.css';
import React, { useState } from 'react';
import { useHistory, Switch, Route, Link, HashRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeatMap from "./components/HeatMap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BarGraph from "./components/BarGraph";
import data from "./components/DummyData/bargraph.json";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/1" component={HeatMap}/>
          {console.log("App", data)}
          <Route path="/2" render={() => <BarGraph data={data}/>}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
