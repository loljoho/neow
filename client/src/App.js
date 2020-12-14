import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import RaceContainer from './containers/RaceContainer';
import OverviewContainer from './containers/OverviewContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<OverviewContainer />)} />
        <Route path="/race" render={() => (<RaceContainer />)} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
