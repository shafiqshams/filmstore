import React, {FC} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from '../Favorite/FavoriteStyles';

const Favorite: FC<any> = ({isFav, addToFavorite, removeFavorite}) => {
  return (
    <>
      {isFav ? (
        <TouchableOpacity
          style={[styles.iconTouchWrapper]}
          onPress={removeFavorite}>
          <Image
            source={require('../../assets/icons/filled_fav.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.iconTouchWrapper]}
          onPress={addToFavorite}>
          <Image
            source={require('../../assets/icons/outline_fav.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Favorite;
