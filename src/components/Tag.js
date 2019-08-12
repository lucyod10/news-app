import React, { Component } from 'react'
import '../style.css';

class Tag extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false,
      color: this.props.colorTag,
    }

    this.selectTag = this.selectTag.bind(this);
  }

  selectTag() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render () {
    const selected = this.state.clicked ? 'selectTag' : '';
    return (
      <li className={`${this.state.color} tag ${ selected }`} onClick={this.selectTag} >Tag</li>
    );
  };
}

export default Tag;
