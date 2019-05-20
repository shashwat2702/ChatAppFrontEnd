import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';

const Router = () => {
    return(
    <Switch>
        <Route exact path="/login" component={ Login } />   
        <Route path="/" component={ HomePage } />
    </Switch>
    );
}

export default withRouter(Router);
