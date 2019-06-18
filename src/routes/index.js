import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import ListEvents from '../pages/Events/ListEvents';

const Routes = () => (
  <Switch>
    <Route path="/events" component={ListEvents} />
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
