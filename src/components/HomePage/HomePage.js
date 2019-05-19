import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
      <div class="pageHeader">
        Welcome to Home Page
      </div>
      <br/>
      <div>
        <Link to="/signin">
          Click here to go Sign In Page
        </Link>
      </div>
      </Fragment>
    )
  }
}
