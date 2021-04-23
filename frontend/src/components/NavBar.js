import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg navbar-inverse">
            <div className="navbar-inner">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/1">HeatMap</Link></li>
                        <li><Link to="/2">Collisions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;