import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Dashboard />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
