import { combineReducers } from 'redux';
import movies from './movies';
import ui from './ui';

const rootReducer = combineReducers({
  movies,
  ui,
});

export default rootReducer;
