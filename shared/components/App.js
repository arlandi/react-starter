import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';
import MoviePage from './MoviePage';
import { getAllMovies } from '../redux/movies';
import { withRouter } from 'react-router';

@withRouter
@connect(null, {getAllMovies})
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getAllMovies();
  }

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
