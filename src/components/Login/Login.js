import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import { postData } from '../../utils/getData';
import './Login.scss';

class Login extends Component {
  onSubmit = () => {
    postData('http://localhost:8080/login', {email:'shashwat@gmail.com',password:'Pass@1'})
    .then(({data, status})=> {
      console.log(data,status);
      if(data==='Authenticated') {
        this.props.history.push('/home');
      }
    });
  }
  render() {
    console.log(this.props);
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
                  placeholder={'example@mail.com'}
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
                  placeholder={'Password'}
                  autoComplete={'off'}
                />
              </div>   
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
