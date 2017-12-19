import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';
import MovieDetail from './MovieDetail';

const App = () => (
  <div>
    <Header />
    <Switch>
      { /* Homepage */ }
      <Route exact path='/' component={Home} />

      { /* Movie Detail Page */ }
      <Route exact path='/movie/:id' component={MovieDetail} />

      { /* 404 */ }
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
