import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import { postData } from '../../utils/getData';
import './Login.scss';

class Login extends Component {
    state = {
      email: '',
      password: '',
      error: false
    };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  setError = () => {
    this.setState({error: true});
  }
  onFocus = () => {
    this.setState({error: false});
  }
  onSubmit = () => {
    const { history, login } = this.props;
    const { email, password } = this.state
    postData('http://localhost:8080/login', {email,password})
    .then(({data, status})=> {
      const { authentication, userName } = data;
      if(authentication==='Authenticated'&&status===200) {
        login(userName);
        history.push('/home');
      } else {
        this.setError();
      }
    });
  }
  render() {
    const { email, password, error } = this.state;
    return (
        <div className="loginForm">
          <ul className="tab-group">
            <li className="tab"><Link to="/registration">Sign Up</Link></li>
            <li className="tab active"><Link to="/">Log In</Link></li>
          </ul>
  
          <div className="tab-content"> 
            <h1>Welcome Back</h1>
            <form
              onSubmit={ (e) => { e.preventDefault(); } }
            >
              <div className="field-wrap">
                <Input
                  id={ 'LoginEmail'}
                  label={'Email ID'}
                  className={'req'}
                  spanContent={'*'}
                  type={'email'}
                  name={'email'}
                  placeholder={'example@mail.com'}
                  onChange={this.handleInputChange}
                  onFocus={this.onFocus}
                  value={email}
                  autoComplete={'off'}
                />
              </div>
              <div className="field-wrap">
              <Input
                  id={ 'LoginPassword'}
                  label={'Password'}
                  className={'req'}
                  spanContent={'*'}
                  type={'password'}
                  name={'password'}
                  placeholder={'Password'}
                  onChange={this.handleInputChange}
                  onFocus={this.onFocus}
                  value={password}
                  autoComplete={'off'}
                />
              </div>
              {error &&
                <div className="field-wrap">
                  <p className="errorBox">Username or Password Error</p>
              </div> 
              }  
              <Button type="submit" label={'Log In'} onClick={this.onSubmit}/>
            </form>
            <div id="login">   
            </div>
          </div>
        </div>
    )
  }
}
export default withRouter(Login);
