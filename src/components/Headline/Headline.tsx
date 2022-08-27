import {View, Text} from 'react-native';
import React from 'react';
import styles from './HeadlineStyles';
import {Title} from '../../typings';

const Headline = ({title}: Title) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.underLineStyle} />
    </View>
  );
};

export default Headline;
