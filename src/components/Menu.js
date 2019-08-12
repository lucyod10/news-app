import React, { Component } from 'react';
import cog from '../images/icons/cog.svg';
import signin from '../images/icons/sign-in.svg';
import signout from '../images/icons/sign-out.svg';
import plus from '../images/icons/plus.svg';
import '../style.css';

class Menu extends Component {
  constructor () {
    super();
    this.state = {
      username: "Lulu"
    };
  }

  render () {
    return (
      <div className="settings">
        <div>
          <img className="icon" src={plus} />
          <img className="icon" src={signin} />
          <img className="icon" src={cog} />
        </div>
        <div id="accountUsername">
          <p><b>Username:</b> { this.state.username }</p>
        </div>
      </div>
    )
  }
}
export default Menu;
