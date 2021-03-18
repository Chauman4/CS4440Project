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
    </div>
  );
}

export default App;
