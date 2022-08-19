import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './TextHeaderStyles';
// import { IHeader } from '../../typings';

const TextHeader: FC<any> = ({
  headerText,
  onPressBack,
  onPressFav,
  textStyle,
}) => {
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
        <Text style={[styles.headerText, textStyle]}>
          {headerText?.toUpperCase()}
        </Text>
      </View>

      <View style={styles.iconWrapper}>
        {onPressFav && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              style={[styles.iconTouchWrapper]}
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
