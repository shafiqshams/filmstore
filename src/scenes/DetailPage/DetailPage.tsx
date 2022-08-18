import {View} from 'react-native';
import React, {FC, useState, useEffect, useCallback} from 'react';
import styles from './DetailPageStyles';
import {getMovie} from '../../services/movies/movies';
import TextHeader from '../../components/TextHeader/TextHeader';
import {MovieDetails} from '../../typings';

const DetailPage: FC<any> = ({route, navigation}) => {
  const {movieId} = route.params;
  console.log('Movie ID', movieId);
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  const fetchMovie = useCallback(async () => {
    const {id, title, tagline, overview, poster_path} = await getMovie(movieId);
    setMovieDetails({id, title, tagline, overview, poster_path});
  }, [movieId]);

  useEffect(() => {
    fetchMovie().catch(console.error);
  }, [fetchMovie]);

  console.log('what are details ', movieDetails);

  const addToFavorite = () => {
    console.log('added to fav');
  };

  return (
    <View style={styles.mainWrapper}>
      <TextHeader
        onPressBack={() => navigation.goBack()}
        headerText={movieDetails?.title}
        onPressFav={addToFavorite}
      />
    </View>
  );
};

export default DetailPage;
