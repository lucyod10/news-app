import React, { Component } from 'react'
import TagLabel from './TagLabel'
import '../style.css';
import share from "../images/icons/share.svg"
import heart from "../images/icons/heart.svg"
import comment from "../images/icons/comment.svg"

class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: this.props.title,
      imageURL: this.props.imageURL,
      content: this.props.content,
      linkTo: this.props.linkTo
    }
  }

  render () {
    return (
      <div className="article">
        <div className="tags">
          <TagLabel colorTag="tagOne" />
          <TagLabel colorTag="tagTwo" />
          <TagLabel colorTag="tagThree" />
          <TagLabel colorTag="tagFour" />
        </div>
        <span class="title"><a href={this.state.linkTo}>{this.state.title}</a></span>
        <img src={this.state.imageURL} className="featureimg" />
        <p>{this.state.content}</p>
        <span className="end">
          <span className="likes"><img src={ heart } />300</span>
          <span className="comments"><img src={ comment } />300</span>
          <span className="share"><img src={ share } /></span>
        </span>
      </div>
    );
  };
}

export default Story;
