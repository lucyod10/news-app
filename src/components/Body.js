import React, { Component } from 'react'
import Tags from './Tags'
import Filter from './Filter'
import '../style.css';

class Body extends Component {
  render () {
    return (
      <div className="body">
        <Tags />
        <Filter />

      </div>
    );
  };
}

export default Body;
