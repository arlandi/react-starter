import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getMoviesById } from '../redux/movies';

@connect(
  (state, props) => {
    return {
      movie: state.movies.movies.find(movie => movie.Id === parseInt(props.match.params.id)),
    }
  },
  {getMoviesById}
)
export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    if (!props.movie) {
      props.getMoviesById(parseInt(props.match.params.id));
    }
  }

  render() {
    const { movie } = this.props;

    // Dont render if there's no movie data
    if (!movie) {
      return null;
    }

    return (
      <div className='page'>
        <div className='card movie-page__card'>
          <img src='//placehold.it/300x400' />
          <div className='movie-page__body'>
            <h2>{movie.Name}</h2>
            <p><b>Rank:</b> {`${movie.Rank || 1}`}</p>
            <p><b>Director:</b> {`${movie.Director}`}</p>
            <p><b>Duration:</b> {`${movie.Duration}`}</p>
            <p><b>Genres:</b> {`${movie.Genres.join(', ')}`}</p>
            <p><b>Actors:</b> {`${movie.Actors.join(', ')}`}</p>
            <p>{`${movie.Description}`}</p>
            <a
              className='button'
              target='_blank'
              href={`https://www.google.com/search?q=buy+ticket+for+${movie.Name}`}
            >Purchase Ticket</a>
          </div>
        </div>
      </div>
    );
  }
}
