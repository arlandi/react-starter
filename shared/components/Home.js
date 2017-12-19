import React from 'react';
import MovieListitem from './MovieListitem';
import { getAllMovies } from '../redux/movies';
import { connect } from 'react-redux';

@connect(
  (state, props) => ({
    movies: state.movies.movies,
  }),
  { getAllMovies }
)
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.props.getAllMovies();
  }

  render() {
    const { movies } = this.props;
    console.log( 'anggi', movies );

    return (
      <div className='page'>
        <h2 className='headline'>Top 10 Movies This Year</h2>
        <ul className='list shadow'>
          { movies && movies.map((movie, index) => {
            return <MovieListitem key={movie.Id} rank={index+1} movie={movie} />
          }) }
        </ul>
      </div>
    );
  }
}