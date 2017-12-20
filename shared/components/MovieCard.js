import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({rank, movie}) {
  return (
    <div className='movie-card'>
      <Link to={`/movie/${movie.Id}`}>
        <img src='//placehold.it/345x200' />
        <div className='movie-card__body'>
          <h3>{`${rank}. ${movie.Name}`}</h3>
          <p><b>Director:</b> {`${movie.Director}`}</p>
          <p><b>Duration:</b> {`${movie.Duration}`}</p>
          <p>{`${movie.Description}`}</p>
        </div>
      </Link>
    </div>
  );
}