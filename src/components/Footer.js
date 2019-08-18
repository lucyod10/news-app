import React, { Component } from 'react'
import '../style.css';

class Footer extends Component {
  render () {
    return (
      <footer>
        Copyright &copy; Lucy co.
        <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </footer>
    );
  };
}

export default Footer;
