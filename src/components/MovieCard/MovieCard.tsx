import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MovieCardStyles';
import {getImagePath} from '../../utils/getImagePath';
import {MovieCardProps} from '../../typings';

const MovieCard = (props: MovieCardProps) => {
  const {movieItem, onPressMovie} = props;
  const {id, poster_path} = movieItem;
  const CARD_SIZE = 'w200';

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPressMovie(id)}>
      <Image
        style={styles.imageStyle}
        source={{uri: getImagePath(CARD_SIZE, poster_path)}}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
