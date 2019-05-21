import React, { Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import  './HomePage.scss';


class HomePage extends Component {
  componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if(!isLoggedIn){
      history.push('/');
    }
  }
  render() {
    return (
    <Fragment> 
      <p> Secure Page</p>
    </Fragment>
    )
  }
};
export default withRouter(HomePage);
