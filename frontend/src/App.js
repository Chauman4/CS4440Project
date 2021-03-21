import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        CS4440 Project: Traffic Collision Data Visualizer
      </header>
      <Button>Hello</Button>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body>

      <div class="sidenav">
        <a href="#">Home</a>
        <a href="#">Query One</a>
        <a href="#">Query Two</a>
        <a href="#">Query Three</a>
        <a href="#">Query Four</a>
        <a href="#">...</a>
      </div>

      <div class="main">
        <h2>Sidenav Example</h2>
        <p>This sidenav is always shown.</p>
        <p>Tutorial from: https://www.w3schools.com/howto/howto_js_sidenav.asp .</p>
        <p>We can easily adjust the width of this navbar in app.css.</p>
      </div>

      </body>
    </div>
  );
}

export default App;
