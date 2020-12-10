import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import RaceContainer from './containers/RaceContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Dashboard />)} />
        <Route path="/race" render={() => (<RaceContainer />)} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
