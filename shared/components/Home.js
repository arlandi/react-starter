import React from 'react';
import { connect } from 'react-redux';
import { getFilteredMovies } from '../selectors';
import FilterTool from './FilterTool';
import MovieListitem from './MovieListitem';
import MovieCard from './MovieCard';

@connect(state => ({
  movies: getFilteredMovies(state)
}))
export default class Home extends React.Component {
  state = {
    layoutOption: 'Grid',
  }

  switchLayout = () => {
    const layoutOption = this.state.layoutOption === 'List' ? 'Grid' : 'List';
    this.setState({ layoutOption });
  }

  render() {
    const { movies } = this.props;
    const { layoutOption } = this.state;

    // Dont render until we have movies data
    if (!movies) {
      return null;
    }

    return (
      <div className='page'>
        <h1 className='headline'>Top Rated Movies</h1>
        <FilterTool />
        <button className='button' onClick={this.switchLayout}>Switch to {layoutOption === 'List' ? 'Grid' : 'List'} View</button>

        { layoutOption === 'List' &&
          <ul className='list shadow'>
            { movies.map((movie, index) => {
              return <MovieListitem key={movie.Id} rank={index+1} movie={movie} />
            }) }
          </ul>
        }

        { layoutOption === 'Grid' &&
          <div className='cards-container'>
          { movies.map((movie, index) => {
            return <MovieCard key={movie.Id} rank={index+1} movie={movie} />
          })}
          </div>
        }
      </div>
    );
  }
}