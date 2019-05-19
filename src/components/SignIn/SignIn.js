import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

export default class SignInPage extends Component {
  render() {
    return (
      <Fragment>
      <div class="pageHeader">
        Welcome to Sign In Page
      </div>
      <br/>
      <div>
        <Link to="/">
          Click here to go Home Page
        </Link>
      </div>
      </Fragment>
    )
  }
}
