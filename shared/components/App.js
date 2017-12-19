import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

const App = () => (
  <div>
    <Switch>
      { /* Homepage */ }
      <Route exact path="/" component={Home} />

      { /* 404 */ }
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
