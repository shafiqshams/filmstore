import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MovieCardStyles';
import {IMAGE_URL} from '../../services/helpers/config';
const MovieCard = (props: any) => {
  const {movieItem, onPressMovie} = props;
  const {id, poster_path} = movieItem;
  const imageUrl = IMAGE_URL + 'w200' + poster_path;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPressMovie(id)}>
      <Image style={styles.imageStyle} source={{uri: imageUrl}} />
    </TouchableOpacity>
  );
};

export default MovieCard;
