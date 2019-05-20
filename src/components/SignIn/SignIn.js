import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

export default class SignInPage extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
      <div>
        <Link to="/">
          Click here to go Home Page
        </Link>
      </div>
      <Footer/>
      </Fragment>
    )
  }
}
