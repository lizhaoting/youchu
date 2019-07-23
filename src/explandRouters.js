import React from 'react';
import { Route } from 'react-router';

export default route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);
