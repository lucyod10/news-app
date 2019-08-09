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
      <div class="settings">
        <div>
          <img class="icon" src={plus} />
          <img class="icon" src={signin} />
          <img class="icon" src={cog} />
        </div>
        <div id="accountUsername">
          <p><b>Username:</b> { this.state.username }</p>
        </div>
      </div>
    )
  }
}
export default Menu;
