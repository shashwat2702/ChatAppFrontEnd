import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import { getData, postData } from '../../utils/getData';
import './Register.scss';

class Register extends Component {
  state = {
      userName: '',
      name: '',
      email: '',
      password: '',
      usernameTaken: false,
      usernameAvailable: false,
      emailTaken: false,
      emailAvailable: false
    };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  onSubmit = () => {
    const {history} = this.props;
    const { userName, name, email, password } = this.state;
    if(userName!==''&&name!==''&&email!==''&&password!==''){
      postData('http://localhost:8080/register', { userName, name, email, password })
        .then(({data, status})=> {
      if(data===userName) {
        history.push('/home');
      }
    });
    }
  };
  isUsernameAvailable = () => {
    const { userName } = this.state;
    if(userName!==''){
      getData('http://localhost:8080/checkUserName?userName='+userName).then(({data})=> {
      if(data==='UserName Already Exists'){
        this.setState({usernameTaken: true, usernameAvailable: false});
      } else {
        this.setState({usernameTaken: false, usernameAvailable: true});
      }
    });
    }
  }
  isEmailAvailable = () => {
    const { email } = this.state;
    if(email!==''){
      getData('http://localhost:8080/checkEmail?email='+email).then(({data})=> {
      if(data==='Email Already Exists'){
        this.setState({emailTaken: true, emailAvailable: false});
      } else {
        this.setState({emailTaken: false, emailAvailable: true});
      }
    });
    }
  }
  render() {
    const { userName,
     name,
     email,
     password,
     usernameTaken,
     usernameAvailable,
     emailTaken,
     emailAvailable } = this.state;
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
                    name={'userName'}
                    placeholder={'Barack@president'}
                    onChange={this.handleInputChange}
                    onFocus={this.onFocus}
                    onBlur={this.isUsernameAvailable}
                    value={userName}
                    autoComplete={'off'}
                />
                </div>
                {usernameTaken &&
                  <div className="field-wrap">
                    <p className="errorBox">User Name is Already Taken</p>
                  </div> 
                }
                {usernameAvailable &&
                  <div className="field-wrap">
                    <p className="successBox">User Name is Available</p>
                  </div> 
                } 
        
                <div className="field-wrap">
                  <Input
                    id={ 'RegistrationName'}
                    label={'Name'}
                    className={'req'}
                    spanContent={'*'}
                    type={'text'}
                    name={'name'}
                    placeholder={'Barack Obama'}
                    onChange={this.handleInputChange}
                    value={name}
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
                    name={'email'}
                    placeholder={'example@mail.com'}
                    onChange={this.handleInputChange}
                    onFocus={this.onFocus}
                    onBlur={this.isEmailAvailable}
                    value={email}
                    autoComplete={'off'}
                />
                </div>
                {emailTaken &&
                  <div className="field-wrap">
                    <p className="errorBox">Email is Already Taken</p>
                  </div> 
                }
                {emailAvailable &&
                  <div className="field-wrap">
                    <p className="successBox">Email is Available</p>
                  </div> 
                } 
                <div className="field-wrap">
                 <Input
                  id={ 'RegistrationPassword'}
                  label={'Password'}
                  className={'req'}
                  spanContent={'*'}
                  type={'password'}
                  name={'password'}
                  placeholder={'Password'}
                  onChange={this.handleInputChange}
                  value={password}
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
