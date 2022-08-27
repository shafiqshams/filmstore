import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from '../Favorite/FavoriteStyles';
import {FavoriteProps} from '../../typings';
const Favorite = (props: FavoriteProps) => {
  const {isFav, addToFavorite, removeFavorite} = props;
  return (
    <TouchableOpacity
      style={[styles.iconTouchWrapper]}
      onPress={isFav ? removeFavorite : addToFavorite}>
      <Image
        source={
          isFav
            ? require('../../assets/icons/filled_fav.png')
            : require('../../assets/icons/outline_fav.png')
        }
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

export default Favorite;
