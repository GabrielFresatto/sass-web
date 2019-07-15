import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Container } from './styles';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Main from '../pages/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;