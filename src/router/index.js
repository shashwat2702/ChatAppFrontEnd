import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import SignInPage from '../components/SignIn/SignIn';

const Router = () => {
    return(
    <Switch>
        <Route exact path="/signin" component={ SignInPage } />
        <Route path="/" component={ HomePage } />
    </Switch>
    );
}

export default withRouter(Router);
