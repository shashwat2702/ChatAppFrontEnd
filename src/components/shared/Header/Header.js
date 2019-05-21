import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
import hamburger from '../../../assets/iconfinder_menu-alt_134216.svg';
import Button from '../Button/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'home'
    };
  }
  onSubmit = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <nav className="pageHeader">
      <div className="navLinks">
        <Link to="/" className="active">Home</Link>
        <Link to="/" >News</Link>
        <Link to="/" >Contact</Link>
        <Link to="/" >About</Link>
        {isLoggedIn&&
          <Button className="logoutButton" type="submit" label={'Sign out'} onClick={this.onSubmit}/>
        }
        <img src={hamburger} alt="hamburger menu"/>
      </div>
    </nav>
    )
  }
};
export default withRouter(Header);
