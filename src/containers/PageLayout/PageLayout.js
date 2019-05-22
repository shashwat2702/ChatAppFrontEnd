import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout, addMessage } from '../../redux/actions';
import Header from '../../components/shared/Header/Header';

export class PageLayout extends Component{

  render() {
      const {
          component: Component, isLoggedIn, username, login, logout, addMessage, messages
      } = this.props;
      return (
              <Fragment>
                <Header isLoggedIn={isLoggedIn} logout={logout}/>
                <Component 
                  isLoggedIn={isLoggedIn}
                  username={username}
                  login={login}
                  logout={logout}
                  addMessage={addMessage}
                  messages={messages}
                />
              </Fragment>
      );
  }
};
export const mapStateToProps = state => {
  return {
    isLoggedIn : state.login.login,
    username: state.login.username,
    messages: state.conversation.messages
  }
}
export const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        login,
        logout,
        addMessage
    }, dispatch);
const pageLayoutConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout)
export default pageLayoutConatiner;



