import {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MovieDetails} from '../typings';

const key = 'FAV_MOVIES';

export default function useFavHook() {
  const [favMovies, setFavMovies] = useState<Array<MovieDetails>>([]);

  // returning array of moives
  const getFavs = useCallback(async () => {
    try {
      const movies: string | null = await AsyncStorage.getItem(key);
      setFavMovies(movies ? JSON.parse(movies) : []);
    } catch (e) {
      // saving error
      console.log('Unable to get data error', e);
    }
  }, []);

  useEffect(() => {
    getFavs();
  }, [getFavs]);

  const setMovies = async (movies: MovieDetails[]) => {
    try {
      setFavMovies(movies);
      await AsyncStorage.setItem(key, JSON.stringify(movies));
    } catch (e) {
      // saving error
      console.log('Saving error', e);
    }
  };

  const setFavItem = (item: any) => {
    const updatedMovies = [...favMovies, item];
    setMovies(updatedMovies);
  };

  const removeFavItem = (id?: number) => {
    const updatedMovies = favMovies.filter(movie => movie.id !== id);
    setMovies(updatedMovies);
  };

  return {favMovies, setFavItem, removeFavItem, getFavs};
}
