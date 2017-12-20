import request from 'superagent';

// Actions Constants
const GET_MOVIES = 'GET_MOVIES';

// Variables
const authToken    = '3b502b3f-b1ff-4128-bd99-626e74836d9c';
const baseEndpoint = 'https://interview.zocdoc.com/api/1/FEE/';
const initialState = {
  movies: [],
};

// The reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      }
    default:
      return state;
  }
}

// Action Creators

// Gets all movies from the API
export function getAllMovies() {

  // Disable data fetching on the server for now
  if ( typeof window !== 'object' ) {
    return {
      type: GET_MOVIES,
      movies: [],
    };
  }

  // Return redux thunk
  return function(dispatch) {
    return request
      .get(`${baseEndpoint}AllMovies`)
      .query({authToken})
      .end((err, res) => {
        if (res && res.body) {
          dispatch( {
            type: GET_MOVIES,
            movies: res.body,
          } );
        }
      });
  };
}

// Get movies based on rank
export function getMoviesByRank(startRankIndex, numMovies) {

  // Disable data fetching on the server for now
  if ( typeof window !== 'object' ) {
    return {
      type: GET_MOVIES,
      movies: [],
    };
  }

  // Return redux thunk
  return function(dispatch) {
    return request
      .get(`${baseEndpoint}MoviesByRank`)
      .query({authToken, startRankIndex, numMovies})
      .end((err, res) => {
        if (res && res.body) {
          const movieIds = res.body.map(movie => movie.Id);
          return _requestMoviesById(movieIds)
            .end((err, res) => {
              if (res && res.body) {
                const movies = res.body.map((movie, index) => {
                  movie.Rank = index + 1;
                  return movie;
                });
                dispatch({
                  type: GET_MOVIES,
                  movies,
                });
              }
            });
        }
      });
  };
}

// Get movies by ID
export function getMoviesById(movieIds) {

  // Disable data fetching on the server for now
  if ( typeof window !== 'object' ) {
    return {
      type: GET_MOVIES,
      movies: [],
    };
  }

  // Return redux thunk
  return function(dispatch) {
    return _requestMoviesById(movieIds)
      .end((err, res) => {
        if (res && res.body) {
          dispatch({
            type: GET_MOVIES,
            movies: res.body,
          });
        }
      });
  };
}

// Internal functions
function _requestMoviesById(movieIds) {
  return request
    .get(`${baseEndpoint}MovieDetails`)
    .query({authToken, movieIds});
}