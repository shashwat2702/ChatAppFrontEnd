import React, { Component } from 'react';
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
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <img src={hamburger} alt="hamburger menu"/>
      </div>
    </nav>
    )
  }
}
