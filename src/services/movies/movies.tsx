import {BASE_URL, API_KEY} from '../helpers/config';
import {getFetch} from '../helpers/api';

export function getCategories() {
  const URL = BASE_URL + 'genre/movie/list';
  return getFetch(URL, {
    api_key: API_KEY,
  });
}

export function getMoviesByCategoryId(genreId: number, page: number) {
  const URL = BASE_URL + 'discover/movie';
  return getFetch(URL, {
    api_key: API_KEY,
    with_genre: genreId,
    page: page,
  });
}

export function getMovie(movieId: any) {
  const URL = BASE_URL + 'movie/' + movieId;
  return getFetch(URL, {
    api_key: API_KEY,
  });
}
