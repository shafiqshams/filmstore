import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './HeaderStyles';

interface Header {
  title: string;
}

const HeaderComponent: FC<Header> = ({title}) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.boundryContainer}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
