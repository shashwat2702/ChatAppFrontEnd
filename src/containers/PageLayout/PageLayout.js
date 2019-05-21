import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../../redux/actions';
import Header from '../../components/shared/Header/Header';

export class PageLayout extends Component{

  render() {
      const {
          component: Component, isLoggedIn, username, login, logout
      } = this.props;
      return (
              <Fragment>
                <Header isLoggedIn={isLoggedIn} logout={logout}/>
                <Component 
                  isLoggedIn={isLoggedIn}
                  username={username}
                  login={login}
                  logout={logout}
                />
              </Fragment>
      );
  }
};
export const mapStateToProps = state => {
  return {
    isLoggedIn : state.login.login,
    username: state.login.username
  }
}
export const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        login,
        logout
    }, dispatch);
const pageLayoutConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout)
export default pageLayoutConatiner;



