import {IMAGE_URL} from '../services/helpers/config';

export function getImagePath(size: string, poster_path?: string) {
  return IMAGE_URL + size + poster_path;
}
