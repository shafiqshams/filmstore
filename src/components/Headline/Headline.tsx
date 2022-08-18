import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './HeadlineStyles';
import {Title} from '../../typings';

const Headline: FC<Title> = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.underLineStyle} />
    </View>
  );
};

export default Headline;
