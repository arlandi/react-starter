import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from '../shared/redux/rootReducer';
import App from '../shared/components/App';

import styles from '../shared/scss/main.scss';

// Create store from the server rendered state
const initialState = window.__INITIAL_STATE__;
const store = createStore(reducers, initialState);

// Use React 16's hydrate function to match client side rendering
const render = (Component) => {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

render(App);

// Hot Reload
if (module.hot) {
  module.hot.accept('../shared/components/App', () => {
    const nextApp = require('../shared/components/App').default;
    render(nextApp);
  });
}