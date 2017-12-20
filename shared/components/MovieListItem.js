import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieListitem({movie}) {
  return (
    <Link to={`/movie/${movie.Id}`}>
      <li className='list-item'>
        <div className='list-item__rank'>{movie.Rank}</div>
        <div className='list-item__body'>
          <h3>{movie.Name}</h3>
          <p>{movie.Duration}</p>
        </div>
      </li>
    </Link>
  );
}