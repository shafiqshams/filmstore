import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextHeaderProps} from '../../typings';
import styles from './TextHeaderStyles';

const TextHeader = (props: TextHeaderProps) => {
  const {headerText, onPressBack, onPressFav} = props;
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.iconWrapper}>
        {onPressBack && (
          <TouchableOpacity
            style={styles.iconTouchWrapper}
            onPress={onPressBack}>
            <Image
              source={require('../../assets/icons/back_arrow.png')}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>{headerText?.toUpperCase()}</Text>
      </View>

      <View style={styles.iconWrapper}>
        {onPressFav && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              style={styles.iconTouchWrapper}
              onPress={onPressFav}>
              <Image
                source={require('../../assets/icons/favorites.png')}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TextHeader;
