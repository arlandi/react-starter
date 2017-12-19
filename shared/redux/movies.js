import request from 'superagent';

// Actions Constants
const GET_ALL = 'GET_ALL';

// Variables
const initialState = [];
const authToken = '3b502b3f-b1ff-4128-bd99-626e74836d9c';
const base = 'https://interview.zocdoc.com/api/1/FEE/AllMovies';

// The reducer
export default function reducer( state = initialState, action = {} ) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        movies: action.movies,
      }
    default:
      return state;
  }
}

// Action Creators
export function getAllMovies() {
  if ( typeof window !== 'object' ) {
    return {
      type: GET_ALL,
      movies: [],
    };
  }

  return function(dispatch) {
    return request
      .get(base)
      .query({authToken})
      .end((err, res) => {
        if (res && res.body) {
          dispatch( {
            type: GET_ALL,
            movies: res.body,
          } );
        }
      });
  };
}