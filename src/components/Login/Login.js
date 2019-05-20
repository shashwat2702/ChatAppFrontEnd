import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export default class Login extends Component {
  render() {
    return (
        <div className="loginForm">
          <ul class="tab-group">
            <li class="tab"><Link to="/registration">Sign Up</Link></li>
            <li class="tab active"><Link to="/login">Log In</Link></li>
          </ul>
  
          <div class="tab-content"> 
            <h1>Welcome Back</h1>
            <form>
              <div class="field-wrap">
                <label>
                  Email ID <span class="req">*</span>
                </label>
                <input type="text" required autocomplete="off" />
              </div>
              <div class="field-wrap">
                <label>
                  Password <span class="req">*</span>
                </label>
                <input type="text"required autocomplete="off"/>
              </div>   
              <button type="submit" class="button button-block">Log In</button>
            </form>
            <div id="login">   
            </div>
          </div>
        </div>
    )
  }
}
