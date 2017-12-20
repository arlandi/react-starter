import React from 'react';
import { connect } from 'react-redux';
import { getMoviesByRank, getAllMovies } from '../redux/movies';
import { getFilteredMovies } from '../selectors';
import FilterTool from './FilterTool';
import MovieListitem from './MovieListitem';
import MovieCard from './MovieCard';

@connect(
  state => ({
    movies: getFilteredMovies(state),
    totalMovies: state.movies.movies.length,
  }),
  {getMoviesByRank, getAllMovies}
)
export default class Home extends React.Component {
  state = {
    layoutOption: 'Grid',
  }

  constructor(props) {
    super(props);

    if (props.totalMovies < 10) {
      props.getMoviesByRank(1,10);
    }
  }

  switchLayout = () => {
    const layoutOption = this.state.layoutOption === 'List' ? 'Grid' : 'List';
    this.setState({ layoutOption });
  }

  render() {
    const { movies, getAllMovies } = this.props;
    const { layoutOption } = this.state;

    return (
      <div className='page'>
        <h1 className='headline'>{`Top ${movies.length} Movies`}</h1>
        <FilterTool />
        <div className='buttons-container'>
          <button className='button' onClick={this.switchLayout}>Switch to {layoutOption === 'List' ? 'Grid' : 'List'} View</button>
          <button className='button' onClick={getAllMovies}>Show All Movies</button>
        </div>

        { layoutOption === 'List' &&
          <ul className='list shadow'>
            { movies.map((movie, index) => {
              return <MovieListitem key={movie.Id} movie={movie} />
            }) }
          </ul>
        }

        { layoutOption === 'Grid' &&
          <div className='cards-container'>
          { movies.map((movie, index) => {
            return <MovieCard key={movie.Id} movie={movie} />
          })}
          </div>
        }
      </div>
    );
  }
}