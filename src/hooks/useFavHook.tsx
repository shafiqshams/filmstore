import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MovieDetails} from '../typings';
const key = 'FAV_MOVIES';

export default function useFavHook() {
  const [favMovies, setFavMovies] = useState<Array<MovieDetails>>([]);

  useEffect(() => {
    getFavs();
  }, []);

  // returning array of moives
  const getFavs = async () => {
    try {
      const movies: string | null = await AsyncStorage.getItem(key);
      setFavMovies(movies ? JSON.parse(movies) : []);
    } catch (error) {
      console.error(error);
    }
  };

  const setMovies = async (movies: Array<MovieDetails>) => {
    try {
      setFavMovies(movies);
      await AsyncStorage.setItem(key, JSON.stringify(movies));
    } catch (error) {
      console.error(error);
    }
  };

  const setFavItem = (item: MovieDetails) => {
    const exists = favMovies.find(m => m.id === item.id);
    if (exists) {
      return;
    }
    if (!exists) {
      const updatedMovies = [...favMovies, item];
      setMovies(updatedMovies);
    }
    return true;
  };

  const removeFavItem = (id: number) => {
    const index = favMovies.findIndex(m => m.id === id);
    if (index) {
      const updatedMovies = favMovies.splice(index, 1);
      setMovies(updatedMovies);
    }
    return true;
  };

  return [favMovies, setFavItem, removeFavItem] as const;
}
