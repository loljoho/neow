import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import RacePage from './pages/RacePage';
import OverviewPage from './pages/OverviewPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (<OverviewPage />)} />
          <Route path="/race" render={() => (<RacePage />)} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
