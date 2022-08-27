import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './FavoritesPageStyles';
import Carousel from '../../components/Carousel/Carousel';
import Headline from '../../components/Headline/Headline';
import TextHeader from '../../components/TextHeader/TextHeader';
import {APP_NAME} from '../../services/helpers/config';
import useFavHook from '../../hooks/useFavHook';
import {useIsFocused} from '@react-navigation/native';
import {NavigationProps} from '../../typings';

const FavoritesPage = ({navigation}: NavigationProps) => {
  const {favMovies, getFavs} = useFavHook();
  const isFocused = useIsFocused();

  useEffect(() => {
    // Call only when screen open or when back on screen
    if (isFocused) {
      getFavs();
    }
  }, [isFocused, getFavs]);

  const handlePressMovie = (movieId: number) => {
    navigation.navigate('Details', {
      movieId: movieId,
    });
  };

  const renderFavorites = () => {
    return (
      <View style={styles.carouselWrapper}>
        <Headline title={'Favorites'} />
        <Carousel movies={favMovies} onPressMovie={handlePressMovie} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainWrapper}>
      <TextHeader
        headerText={APP_NAME}
        onPressBack={() => navigation.goBack()}
      />
      {renderFavorites()}
    </ScrollView>
  );
};

export default FavoritesPage;
