import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <h1>Welcome to Movie Time</h1>
        <p>To begin, select a folder containing your movies</p>
        <p>Prefernces > Select Folder</p>
      </div>
    );
  }
}

export default Welcome;