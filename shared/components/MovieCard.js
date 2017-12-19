import React from 'react';

export default function MovieCard(props) {
  return (
    <div className='movie-card shadow'>
      <a href="/movie/1234/">
        <img src='//placehold.it/345x200' />
        <div className='movie-card__body'>
          <h3>This is the movie titleeasdfadf</h3>
          <p>This is the movie descriptionasdfasd</p>
        </div>
      </a>
    </div>
  );
}