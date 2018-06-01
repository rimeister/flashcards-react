import React, { Component } from 'react';
import Game from './components/Game.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Testing 123</h1>
          <Game />
        </header>
      </div>
    );
  }
}

export default App;
