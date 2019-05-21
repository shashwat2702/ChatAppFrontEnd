import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import { postData } from '../../utils/getData';
import './Register.scss';

class Register extends Component {
  onSubmit = () => {
    const {history} = this.props;
    postData('http://localhost:8080/login', {email:'shashwat@gmail.com',password:'Pass@1'})
    .then(({data, status})=> {
      console.log(data,status);
      if(data==='Authenticated') {
        history.push('/home');
      }
    });
  }
  render() {
    return (
        <div className="registrationForm">
      
          <ul className="tab-group">
            <li className="tab active"><Link to="/registration">Sign Up</Link></li>
            <li className="tab"><Link to="/">Log In</Link></li>
          </ul>
      
        <div className="tab-content">
          <div id="signup">   
            <h1>Sign Up for Free</h1>
          
            <form
              onSubmit={ (e) => { e.preventDefault(); } }
            >
          
                <div className="field-wrap">
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
        
                <div className="field-wrap">
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
                <div className="field-wrap">
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
                <div className="field-wrap">
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
              <Button type="submit" label={'Get Started'} onClick={this.onSubmit}/>
          
            </form>

          </div>
        
          <div id="login">   
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Register);
