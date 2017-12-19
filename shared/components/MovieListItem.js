import React from 'react';

export default function MovieListitem({rank, movie}) {
  return (
    <a href="/movie/1234">
      <li className='list-item'>
        <div className='list-item__rank'>{rank}</div>
        <div className='list-item__body'>
          <h3>{movie.Name}</h3>
          <p>{movie.Duration}</p>
        </div>
      </li>
    </a>
  );
}