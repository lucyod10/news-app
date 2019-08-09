import React, { Component } from 'react'
import Tag from './Tag'
import refresh from "../images/icons/sync.svg"
import '../style.css';

class Tags extends Component {
  constructor (props) {
    super(props);
    this.state = {


    }

  }
  render () {
    return (
      <div class="tags">
        <ul>
          <Tag colorTag="tagOne" />
          <Tag colorTag="tagTwo" />
          <Tag colorTag="tagThree" />
          <Tag colorTag="tagFour" />
          <Tag colorTag="tagFive" />
          <Tag colorTag="tagSix" />
          <Tag colorTag="tagSeven" />
        </ul>
      </div>
    );
  };
}

export default Tags;
