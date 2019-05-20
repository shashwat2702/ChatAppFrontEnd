import React, { Component, Fragment} from 'react';
import  './HomePage.scss';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import Login from '../Login/Login';

export default class HomePage extends Component {
  render() {
    return (
    <Fragment> 
      <Header/>
        <div>
        <Login/>
        </div>
      <Footer/>
    </Fragment>
    )
  }
}
