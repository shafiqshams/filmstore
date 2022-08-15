import {Button, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import styles from './HomePageStyles';
import HeaderComponent from '../../components/Header/Header';

const HomePage: FC<any> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <HeaderComponent title="Film Store" />

      <Button
        title="Click to navigate"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

export default HomePage;
