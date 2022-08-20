import {View, Image, Text, ScrollView} from 'react-native';
import React, {FC, useState, useEffect, useCallback} from 'react';
import styles from './DetailPageStyles';
import {getMovie} from '../../services/movies/movies';
import TextHeader from '../../components/TextHeader/TextHeader';
import {MovieDetails} from '../../typings';
import {getImagePath} from '../../utils/getImagePath';
import useFavHook from '../../hooks/useFavHook';
import Favorite from '../../components/Favorite/Favorite';

const CARD_SIZE = 'w400';

const DetailPage: FC<any> = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [favMovies, setFavItem, removeFavItem] = useFavHook();

  const isFav: boolean = !!favMovies.find(m => m.id === movieDetails?.id);
  console.log('is Fav ', isFav);

  const fetchMovie = useCallback(async () => {
    console.log('fetching Movie API');
    const {id, title, tagline, overview, backdrop_path, poster_path} =
      await getMovie(movieId);
    setMovieDetails({id, title, tagline, overview, backdrop_path, poster_path});
  }, [movieId]);

  useEffect(() => {
    fetchMovie().catch(console.error);
  }, [fetchMovie]);

  const addToFavorite = () => {
    setFavItem(movieDetails);
  };

  const removeFavorite = () => {
    removeFavItem(movieDetails?.id);
  };

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.mainWrapper}>
      <TextHeader
        onPressBack={() => navigation.goBack()}
        headerText={movieDetails?.title}
      />

      <View style={styles.bodyContainer}>
        {/* TODO in components */}
        <View style={styles.taglineContainer}>
          <Text style={styles.taglineStyles}>{movieDetails?.tagline}</Text>
        </View>

        <Image
          style={styles.imageStyle}
          source={{uri: getImagePath(CARD_SIZE, movieDetails?.backdrop_path)}}
        />

        <View style={styles.overviewContainer}>
          <View style={styles.overviewFav}>
            <Text style={styles.overviewHeadline}>{'Overview'}</Text>
            <Favorite
              isFav={isFav}
              addToFavorite={addToFavorite}
              removeFavorite={removeFavorite}
            />
          </View>
          <Text style={styles.overviewStyles}>{movieDetails?.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailPage;
