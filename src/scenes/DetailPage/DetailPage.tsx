import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import styles from './DetailPageStyles';

const DetailPage: FC<any> = ({navigation}) => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.textStyle}>DetailPage</Text>
      <Button
        title="Click to go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default DetailPage;
