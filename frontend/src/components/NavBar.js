import React, { useState } from 'react';
import { useHistory, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div class="sidenav">
            CS4440 Project: Traffic Collision Data Visualizer
            <Link to="/">Home</Link>
            <Link to="/1">HeatMap</Link>
            <Link to="/2">Collisions</Link>
        </div>
    )
}

export default NavBar;