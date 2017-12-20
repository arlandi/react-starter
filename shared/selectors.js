// Memoized selectors for efficient computed data from redux state tree

import { createSelector } from 'reselect'

const getMovies = (state) => state.movies.movies
const getKeywordFilter = (state) => state.ui.keywordFilter
const getGenresFilter = (state) => state.ui.genresFilter
const getActorsFilter = (state) => state.ui.actorsFilter

// Returns an array of movies filtered by keyword, genres, and actors
export const getFilteredMovies = createSelector(
  [getMovies, getKeywordFilter, getGenresFilter, getActorsFilter],
  (movies, keywordFilter, genresFilter, actorsFilter) => {
    let filteredMovies = movies;

    // Filter movies if movie Name contains keyword
    if (keywordFilter) {
      filteredMovies = filteredMovies.filter(movie => {
        const movieName = movie.Name.toLowerCase();
        return movieName.includes(keywordFilter.toLowerCase());
      })
    }

    // Filter movies if movie Genres contains all genres from genresFilter
    if (genresFilter) {
      filteredMovies = filteredMovies.filter(movie => {
        return genresFilter.split(',').every(genre => movie.Genres.indexOf(genre) > -1);
      })
    }

    // Filter movies if movie Actors contains all actors from actorsFilter
    if (actorsFilter) {
      filteredMovies = filteredMovies.filter(movie => {
        return actorsFilter.split(',').every(actor => movie.Actors.indexOf(actor) > -1);
      })
    }

    return filteredMovies;
  }
)

// Return array of genres from filtered movies
export const getFilteredGenres = createSelector(
  [getFilteredMovies],
  (movies) => {
    // Combine all unique genres from filtered movies into one array
    const filteredGenres = movies.reduce((genres, movie) => {
      movie.Genres.forEach(genre => {
        if (!genres.includes(genre)) {
          genres.push(genre);
        }
      });
      return genres;
    }, []);

    // Return friendly array for Select
    return filteredGenres.map(genre => {
     return { value: genre, label: genre };
    });
  }
)

// Return array of actors from filtered movies
export const getFilteredActors = createSelector(
  [getFilteredMovies],
  (movies) => {
    // Combine all unique actors from filtered movies into one array
    const filteredActors = movies.reduce((actors, movie) => {
      movie.Actors.forEach(actor => {
        if (!actors.includes(actor)) {
          actors.push(actor);
        }
      });
      return actors;
    }, []);

    // Return friendly array for Select
    return filteredActors.map(actor => {
     return { value: actor, label: actor };
    });
  }
)