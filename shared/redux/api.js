const LOAD         = 'API/LOAD';
const LOAD_SUCCESS = 'API/LOAD_SUCCESS';
const LOAD_FAIL    = 'API/LOAD_FAIL';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch ( action.type ) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: JSON.parse(action.result),
        error: null,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export function isLoaded( globalState ) {
  return globalState.api && globalState.api.loaded;
}

export function load( params ) {
  return {
    types: [
      LOAD,
      LOAD_SUCCESS,
      LOAD_FAIL,
    ],
    promise: ( client ) => client.get( `/${ params.slug }` ),
  };
}