import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../shared/redux/rootReducer';
import App from '../shared/components/App';
import HTML from './html';

const router = express.Router();

router.get('/', (req, res) => {

  // Create redux store
  const store = createStore(reducers);

  // Context object for StaticRouter that allows us to
  // query for the results of the render
  const context = {};

  // The react application
  const app = (
    <Provider store={store}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  // Do redirect if router context contains a URL
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {

    // Generate the html response
    const html = renderToStaticMarkup(
      <HTML
        bodyString={renderToStaticMarkup(app)}
        initialReduxStoreState={JSON.stringify(store.getState())}
      />
    );

    // Set 404 header if render context contains a "missed" match
    // 404 page will be rendered by the app
    // Otherwise send a 200 OK status
    res.status(context.missed ? 404 : 200).send( `<!DOCTYPE html>${ html }` );
  }
});


export default router;
