import {BASE_URL, API_KEY} from '../helpers/config';
import {getFetch} from '../helpers/api';

export function getMoviesByCategoryId(genreId: number) {
  const URL = BASE_URL + 'discover/movie';
  return getFetch(URL, {
    api_key: API_KEY,
    with_genre: genreId,
  });
}
