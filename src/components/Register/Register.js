import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                  <label>
                    Username<span class="req">*</span>
                  </label>
                  <input type="text" required autocomplete="off" />
                </div>
        
                <div class="field-wrap">
                  <label>
                    Name<span class="req">*</span>
                  </label>
                  <input type="text"required autocomplete="off"/>
                </div>
                <div class="field-wrap">
                  <label>
                    Email ID<span class="req">*</span>
                  </label>
                  <input type="text"required autocomplete="off"/>
                </div>
                <div class="field-wrap">
                  <label>
                    Password<span class="req">*</span>
                  </label>
                  <input type="text"required autocomplete="off"/>
                </div>    
              <button type="submit" class="button button-block">Get Started</button>
          
            </form>

          </div>
        
          <div id="login">   
            <h1>Welcome Back!</h1>
          
            <form action="/" method="post">
          
              <div class="field-wrap">
                <label>
                  Email Address<span class="req">*</span>
                </label>
                <input type="email"required autocomplete="off"/>
              </div>
          
              <div class="field-wrap">
                <label>
                  Password<span class="req">*</span>
                </label>
                <input type="password"required autocomplete="off"/>
              </div>
              <button class="button button-block">Log In</button>
          
            </form>

          </div>
        
        </div>
      
      </div>
    )
  }
}
