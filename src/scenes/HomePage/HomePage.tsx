import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import styles from './HomePageStyles';

const HomeScene: FC<any> = ({navigation}) => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.textStyle}>HomeScene</Text>
      <Button
        title="Click to navigate"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScene;
