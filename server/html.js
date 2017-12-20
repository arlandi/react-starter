import React from 'react';

const HTML = (props) => (
  <html lang='en'>
    <head>
      <title>ZocDoc Movie App</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel="stylesheet" type="text/css" href="/dist/main.css" lazyload="1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{ __html: props.bodyString }} />
      <script type='text/javascript' dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ =${props.initialReduxStoreState}` }} />
      <script type='text/javascript' src='/dist/main.js' />
    </body>
  </html>
);

export default HTML;
