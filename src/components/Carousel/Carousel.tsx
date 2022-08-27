import {SafeAreaView, FlatList, useWindowDimensions} from 'react-native';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {CarouselProps} from '../../typings';

const Carousel = (props: CarouselProps) => {
  const {movies, onPressMovie} = props;

  return (
    <SafeAreaView style={{width: useWindowDimensions().width - 15}}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movieItem={item} onPressMovie={onPressMovie} />
        )}
        keyExtractor={item => `key-${item.id}`}
        horizontal
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default Carousel;
