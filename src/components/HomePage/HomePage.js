import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import io from "socket.io-client";
import  './HomePage.scss';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
    this.socket = io('localhost:8080');
    this.socket.on('RECEIVE_MESSAGE', function(data){
      console.log(data);
});
  }
  componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if(!isLoggedIn){
      history.push('/');
    }
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  sendMessage = (event) => {
    event.preventDefault();
    const { username } = this.props;
    this.socket.emit('SEND_MESSAGE', {
        author: username,
        message: this.state.message
    });
    this.setState({message: ''});
  };
  render() {
    const { message } = this.state;
    return (
      <Fragment>
        <div className="homePageConatiner">
          <div className="activeUsers">
            List Of Participants
          </div>
          <div className="actualMessages"> 
            <div className="receivedMessages">
            Received Msgs go here
            </div>
            <div className="sendMessageContainer">
              <div className="messageInput">
                <Input
                  id={'textForSending'}
                  type={'text'}
                  name={'message'}
                  placeholder={'Type your messages here'}
                  value={message}
                  onChange={this.handleInputChange}
                  autoComplete={'off'}
                />
              </div>
              <div className="sendButton">
                <Button className={'sendButton button'} type="submit" label={'Send'} onClick={this.sendMessage}/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
};
export default withRouter(HomePage);
