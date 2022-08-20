import {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MovieDetails} from '../typings';

const key = 'FAV_MOVIES';

export default function useFavHook() {
  const [favMovies, setFavMovies] = useState<Array<MovieDetails>>([]);

  // returning array of moives
  const getFavs = useCallback(async () => {
    const movies: string | null = await AsyncStorage.getItem(key);
    setFavMovies(movies ? JSON.parse(movies) : []);
  }, []);

  console.log('fav movies ', favMovies);

  // useEffect(() => {
  //   getFavs();
  // }, [favMovies, getFavs]);

  useEffect(() => {
    getFavs();
  }, [getFavs]);

  const setMovies = async (movies: any) => {
    setFavMovies(movies);
    await AsyncStorage.setItem(key, JSON.stringify(movies));
  };

  const setFavItem = (item: any): boolean => {
    console.log('item', item);
    console.log('favMovies', favMovies);
    const exists = favMovies.find(m => m.id === item.id);
    if (exists) {
      return false;
    }
    if (!exists) {
      const updatedMovies = [...favMovies, item];
      console.log('updatedMovies ', updatedMovies);

      setMovies(updatedMovies);
    }
    return true;
  };

  const removeFavItem = async (id?: number) => {
    console.log('id removeFavItem', id);

    const updatedMovies = favMovies.filter(movie => movie.id !== id);
    console.log('updatedMovies ', updatedMovies);
    setMovies(updatedMovies);

    return true;
  };

  return [favMovies, setFavItem, removeFavItem] as const;
}
