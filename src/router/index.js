import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import HomePage from '../components/HomePage/HomePage';
import PageLayout from '../containers/PageLayout/PageLayout';

const Router = () => {
    return(
    <Switch>
        <Route exact path="/login" component={() => (<PageLayout component={Login}/>)} />
        <Route exact path="/registration" component={() => (<PageLayout component={Register}/>)} />
        <Route path="/" component={ HomePage } />
    </Switch>
    );
}

export default withRouter(Router);
