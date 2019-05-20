import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
      <div className="hyperLink">
        <Link to="/signin">
          Click here to go Sign In Page
        </Link>
      </div>
      <Footer/>
      </Fragment>
    )
  }
}
