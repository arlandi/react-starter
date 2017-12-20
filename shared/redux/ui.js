// Actions Constants
const SET_KEYWORD_FILTER = 'SET_KEYWORD_FILTER';
const SET_GENRES_FILTER  = 'SET_GENRES_FILTER';
const SET_ACTORS_FILTER  = 'SET_ACTORS_FILTER';

// Initial State
const initialState = {
  keywordFilter: '',
  genresFilter: '',
  actorsFilter: '',
}

// The reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_KEYWORD_FILTER:
      return {
        ...state,
        keywordFilter: action.keyword,
      }
    case SET_GENRES_FILTER:
      return {
        ...state,
        genresFilter: action.genres,
      }
    case SET_ACTORS_FILTER:
      return {
        ...state,
        actorsFilter: action.actors,
      }
    default:
      return state;
  }
}

// Action Creators
export function setKeywordFilter(keyword) {
  return {
    type: SET_KEYWORD_FILTER,
    keyword,
  };
}

export function setGenresFilter(genres) {
  return {
    type: SET_GENRES_FILTER,
    genres,
  };
}

export function setActorsFilter(actors) {
  return {
    type: SET_ACTORS_FILTER,
    actors,
  };
}