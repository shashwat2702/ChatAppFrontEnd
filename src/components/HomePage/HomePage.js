/* eslint-disable react/forbid-prop-types */
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import './HomePage.scss';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      allActiveUsers: [],
      username: props.username,
    };
    this.socket = io('https://chat-app-b.herokuapp.com/');
    const { username } = this.state;
    this.socket.emit('NEW USER', {
      username,
    });
    this.socket.on('LIST OF ACTIVE USERS', (data) => {
      this.setState({ allActiveUsers: data });
    });
    this.socket.on('RECEIVE_MESSAGE', (data) => {
      props.addMessage(data.author, data.message);
    });
  }

  componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (!isLoggedIn) {
      history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn !== prevProps.isLoggedIn) {
      history.push('/');
    }
  }

  componentWillUnmount() {
    const { username } = this.state;
    this.socket.emit('USER DISCONNECTED', {
      username,
    });
    this.socket.off();
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  sendMessage = (event) => {
    event.preventDefault();
    const { username } = this.props;
    const { message } = this.state;
    this.socket.emit('SEND_MESSAGE', {
      author: username,
      message,
    });
    this.setState({ message: '' });
  };

  showAllMessages = () => {
    const { messages } = this.props;
    return messages.map(messageItem => (
      <div>
        {' '}
        {messageItem.sender}
        {' '}
:
        {' '}
        {messageItem.message}
      </div>
    ));
  }

  showAllActiveUsers = () => {
    const { allActiveUsers } = this.state;
    return allActiveUsers.map(user => (<div>{user}</div>));
  }

  render() {
    const { message } = this.state;
    return (
      <Fragment>
        <div className="homePageConatiner">
          <div className="activeUsers">
            List Of Participants
            {this.showAllActiveUsers()}
          </div>
          <div className="actualMessages">
            <div className="receivedMessages">
              {this.showAllMessages()}
            </div>
            <form className="sendMessageContainer" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="messageInput">
                <Input
                  id="textForSending"
                  type="text"
                  name="message"
                  placeholder="Type your messages here"
                  value={message}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="sendButton">
                <Button className="sendButton button" type="submit" label="Send" onClick={this.sendMessage} />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
HomePage.propTypes = {
  username: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addMessage: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};
export default withRouter(HomePage);
