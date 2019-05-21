import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import hamburger from '../../../assets/iconfinder_menu-alt_134216.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'home'
    };
  }
  render() {
    return (
      <nav className="pageHeader">
      <div className="navLinks">
        <Link to="/" className="active">Home</Link>
        <Link to="/" >News</Link>
        <Link to="/" >Contact</Link>
        <Link to="/" >About</Link>
        <img src={hamburger} alt="hamburger menu"/>
      </div>
    </nav>
    )
  }
}
