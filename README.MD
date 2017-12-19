# Universal React Starter
 - A simple boilerplate that uses Express, React, Redux, React Router, and SCSS.
 - Webpack and Babel to compile client and server bundles.
 - Hot Reload on development.

# Getting Started
`npm install`, `npm run dev`, and app should be running on localhost:3000. `npm run start` will build the app for production mode before running the app.

# Directory Structure
 - `client`: has client entry file
 - `public`: directory for static files served with express
 - `server`: express server with server side rendering of the react app
 - `shared`:
  - `components`: the react component library
  - `redux`: redux [ducks](https://github.com/erikras/ducks-modular-redux)
  - `scss`: stylesheets
 - `webpack`: webpack config files