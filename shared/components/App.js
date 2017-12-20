import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';
import MoviePage from './MoviePage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          { /* Homepage */ }
          <Route exact path='/' component={Home} />

          { /* Movie Detail Page */ }
          <Route exact path='/movie/:id' component={MoviePage} />

          { /* 404 */ }
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
