import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import {
  getFilteredGenres,
  getFilteredActors,
} from '../selectors';
import {
  setKeywordFilter,
  setGenresFilter,
  setActorsFilter,
} from '../redux/ui';

@connect(
  state => ({
    genres: getFilteredGenres(state),
    actors: getFilteredActors(state),
    selectedGenres: state.ui.genresFilter,
    selectedActors: state.ui.actorsFilter,
  }),
  {setKeywordFilter, setGenresFilter, setActorsFilter}
)
export default class Home extends React.Component {
  render() {
    const {
      movies,
      genres,
      actors,
      setKeywordFilter,
      setGenresFilter,
      setActorsFilter,
    } = this.props;

    return (
      <div className='filter-tool'>
        <input
          type='text'
          placeholder='Filter by name'
          onChange={(event) => setKeywordFilter(event.target.value)}
        />

        <Select
          placeholder='Filter by genres'
          name='select-genres'
          multi={true}
          simpleValue={true}
          value={this.props.selectedGenres}
          onChange={(value) => setGenresFilter(value)}
          options={genres}
        />

        <Select
          placeholder='Filter by actors'
          name='select-actors'
          multi={true}
          simpleValue={true}
          value={this.props.selectedActors}
          onChange={(value) => setActorsFilter(value)}
          options={actors}
        />
      </div>
    );
  }
}