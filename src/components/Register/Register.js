import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import './Register.scss';

export default class Register extends Component {
  render() {
    return (
        <div className="registrationForm">
      
          <ul class="tab-group">
            <li class="tab active"><Link to="/registration">Sign Up</Link></li>
            <li class="tab"><Link to="/login">Log In</Link></li>
          </ul>
      
        <div class="tab-content">
          <div id="signup">   
            <h1>Sign Up for Free</h1>
          
            <form action="/" method="post">
          
                <div class="field-wrap">
                <Input
                    id={ 'RegistrationUserName'}
                    label={'Username'}
                    className={'req'}
                    spanContent={'*'}
                    type={'text'}
                    placeholder={'Barack@president'}
                    autoComplete={'off'}
                />
                </div>
        
                <div class="field-wrap">
                  <Input
                    id={ 'RegistrationName'}
                    label={'Name'}
                    className={'req'}
                    spanContent={'*'}
                    type={'text'}
                    placeholder={'Barack Obama'}
                    autoComplete={'off'}
                />
                </div>
                <div class="field-wrap">
                  <Input
                    id={ 'RegistrationEmail'}
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
                  id={ 'RegistrationPassword'}
                  label={'Password'}
                  className={'req'}
                  spanContent={'*'}
                  type={'password'}
                  placeholder={'Password'}
                  autoComplete={'off'}
                />
                </div>    
              <Button type="submit" label={'Get Started'}/>
          
            </form>

          </div>
        
          <div id="login">   
          </div>
        </div>
      </div>
    )
  }
}
