import React, { useState } from 'react';
import { useHistory, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

function NavBar() {
    return (
        <div class="navbar navbar-expand-lg navbar-inverse">
            <div class="navbar-inner">
                <div class="container">
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to="/">Home</Link></li>
                        <li><Link to="/1">HeatMap</Link></li>
                        <li><Link to="/2">Collisions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;