import React, { Component } from 'react';
import './Drag.css';

class Drag extends Component {
  render() {
    return (
      <div className="dragable">
        <div className="drag-view"></div>
      </div>
    );
  }
}

export default Drag;