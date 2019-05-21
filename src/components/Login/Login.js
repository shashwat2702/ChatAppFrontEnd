import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import './Login.scss';

export default class Login extends Component {
  render() {
    return (
        <div className="loginForm">
          <ul class="tab-group">
            <li class="tab"><Link to="/registration">Sign Up</Link></li>
            <li class="tab active"><Link to="/">Log In</Link></li>
          </ul>
  
          <div class="tab-content"> 
            <h1>Welcome Back</h1>
            <form>
              <div class="field-wrap">
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
              <div class="field-wrap">
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
              <Button type="submit" label={'Log In'}/>
            </form>
            <div id="login">   
            </div>
          </div>
        </div>
    )
  }
}
