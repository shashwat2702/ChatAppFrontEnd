import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import HomePage from '../components/HomePage/HomePage';
import PageLayout from '../containers/PageLayout/PageLayout';

const Router = () => {
    return(
    <Switch>
        <Route exact path="/home" component={() => (<PageLayout component={HomePage}/>)} />
        <Route exact path="/registration" component={() => (<PageLayout component={Register}/>)} />
        <Route path="/" component={() => (<PageLayout component={Login}/>)} />
    </Switch>
    );
}

export default withRouter(Router);
