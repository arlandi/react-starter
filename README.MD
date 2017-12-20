# ZocDoc Take Home Challenge
Using the movie API, create an app that displays the top rated movies and the ability to compare movies by genres and actors.

# Running the App
 - `npm install`
 - `npm start`
 - Go to http://localhost:3000

# Directory Structure
 - `client`: the client entry file
 - `public`: static assets to be served by express
 - `server`: express server with server side rendering of the react app
 - `shared`:
   - `components`: the react component library
   - `redux`: redux [ducks](https://github.com/erikras/ducks-modular-redux)
   - `scss`: stylesheets
 - `webpack`: webpack config files

# About
 - Express, React, Redux, React Router, Reselect
 - Server side rendering (data fetch only on the client-side)
 - Memoized selectors for efficient computed data from redux state tree
 - No css modules for simplicity, use BEM convention instead
 - TODO: linting, typecheck with prop-types, data fetch on the server(?), normalize redux state tree