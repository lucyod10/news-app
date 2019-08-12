import React, { Component } from 'react'
import '../style.css';

class TagLabel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color: this.props.colorTag,
    }
  }

  render () {
    return (
      <li className={`${this.state.color} tag selectTag`}>Tag</li>
    );
  };
}

export default TagLabel;
