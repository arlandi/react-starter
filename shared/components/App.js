import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
  </div>
);

export default App;
