import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <form>
        <input type="text" className="Searchbar" placeholder="Search by Movie Title or Actor"></input>
      </form>
    );
  }
}

export default Searchbar;