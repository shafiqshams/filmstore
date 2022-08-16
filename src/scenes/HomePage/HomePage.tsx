import {Button, SafeAreaView} from 'react-native';
import React, {FC, useEffect} from 'react';
import styles from './HomePageStyles';
import HeaderComponent from '../../components/Header/Header';
import {getMoviesByCategoryId} from '../../services/movies/movies';

const HomePage: FC<any> = ({navigation}) => {
  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async () => {
    const result = await getMoviesByCategoryId(28);
    console.log('result: ', result);
  };

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
