import {View, Image, Text} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import styles from './DetailPageStyles';
import {getMovie} from '../../services/movies/movies';
import TextHeader from '../../components/TextHeader/TextHeader';
import {MovieDetails} from '../../typings';
const CARD_SIZE = 'w400';
import {getImagePath} from '../../utils/getImagePath';

const DetailPage: FC<any> = ({route, navigation}) => {
  const {movieId} = route.params;
  console.log('Movie ID', movieId);
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  // const fetchMovie = useCallback(async () => {
  //   const {id, title, tagline, overview, poster_path} = await getMovie(movieId);
  //   setMovieDetails({id, title, tagline, overview, poster_path});
  // }, [movieId]);

  useEffect(() => {
    console.log('UseEffect called ');

    const fetchMovie = async () => {
      const {id, title, tagline, overview, backdrop_path} = await getMovie(
        movieId,
      );
      setMovieDetails({id, title, tagline, overview, backdrop_path});
    };

    fetchMovie().catch(console.error);
  }, [movieId]);

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

      <View style={styles.bodyContainer}>
        {/* TODO in components */}
        <View style={styles.taglineContainer}>
          <Text style={styles.taglineStyles} numberOfLines={4}>
            {movieDetails?.tagline}
          </Text>
        </View>

        <Image
          style={styles.imageStyle}
          source={{uri: getImagePath(CARD_SIZE, movieDetails?.backdrop_path)}}
        />

        <View style={styles.overviewContainer}>
          <View style={{marginBottom: 12}}>
            <Text style={styles.overviewHeadline}>{'Overview'}</Text>
          </View>
          <Text style={styles.overviewStyles}>{movieDetails?.overview}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailPage;
