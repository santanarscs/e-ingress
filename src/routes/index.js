import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import ListEvents from '../pages/Events/ListEvents';
import DetailEvents from '../pages/Events/DetailEvents';
import NewEvents from '../pages/Events/NewEvents';
import EditEvents from '../pages/Events/EditEvents';

const Routes = () => (
  <Switch>
    <Route path="/events/detail/:id" component={DetailEvents} />
    <Route path="/events/edit/:id" component={EditEvents} />
    <Route path="/events/new" component={NewEvents} />
    <Route path="/events" component={ListEvents} />
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
