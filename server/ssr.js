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

  const store = createStore(reducers);
  const context = {};

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

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    const html = renderToStaticMarkup(
      <HTML
        bodyString={renderToStaticMarkup(app)}
        initialReduxStoreState={JSON.stringify(store.getState())}
      />
    );

    res.status(200).send( `<!DOCTYPE html>${ html }` );
  }
});


export default router;
