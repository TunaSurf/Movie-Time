import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Drag from './Drag';
import Searchbar from './Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drag />
        <Searchbar />
        <Welcome />
      </div>
    );
  }
}

export default App;
