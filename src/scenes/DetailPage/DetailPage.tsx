import {View} from 'react-native';
import React, {FC, useState, useEffect, useCallback} from 'react';
import styles from './DetailPageStyles';
import {getMovie} from '../../services/movies/movies';

const DetailPage: FC<any> = ({route}) => {
  const {movieId} = route.params;
  console.log('Movie ID', movieId);
  const [movieDetails, setMovieDetails] = useState({});

  const fetchMovie = useCallback(async () => {
    const movie = await getMovie(movieId);
    console.log('movie details ', movie);

    setMovieDetails(movie);
  }, [movieId]);
  useEffect(() => {
    fetchMovie().catch(console.error);
  }, [fetchMovie]);

  console.log('what are details ', movieDetails);

  return <View style={styles.mainWrapper} />;
};

export default DetailPage;
