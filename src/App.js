import React, { Component } from 'react';
import './App.css';

import FlavorStar from './components/FlavorStar/FlavorStar.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FlavorStar />
        </header>
      </div>
    );
  }
}

export default App;
