/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-shadow */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { login, logout, addMessage } from '../../redux/actions';
import Header from '../../components/shared/Header/Header';

export class PageLayout extends Component {
  render() {
    const {
      component: Component, isLoggedIn, username, login, logout, addMessage, messages,
    } = this.props;
    return (
      <Fragment>
        <Header isLoggedIn={isLoggedIn} logout={logout} />
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
}
export const mapStateToProps = state => ({
  isLoggedIn: state.login.login,
  username: state.login.username,
  messages: state.conversation.messages,
});
PageLayout.propTypes = {
  username: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.array.isRequired,
  component: PropTypes.element.isRequired,
};
export const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  logout,
  addMessage,
}, dispatch);
const pageLayoutConatiner = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageLayout);
export default pageLayoutConatiner;
