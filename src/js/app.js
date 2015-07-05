import React from 'react';
import {Route, DefaultRoute } from 'react-router';
import Router from 'react-router';

import Template from './pages/template.jsx';
import DashboardPage from './pages/dashboard/index.jsx';

var routes = (
  <Route name="app" path="/" handler={Template}>
    <Route name="home" path="/dasboard" handler={DashboardPage} />
    <DefaultRoute handler={DashboardPage} />
  </Route>
);

var mountNode = document.getElementById('application');

Router.run(routes, function (Handler, state) {
  var params = state.params;
  var path = state.path;

  React.render(<Handler params={params} path={path} />, mountNode);
});
