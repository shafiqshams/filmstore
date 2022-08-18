import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './CarouselStyles';
import MovieCard from '../MovieCard/MovieCard';

const CARD_SIZE = 200;
const Carousel = (props: any) => {
  const {movies} = props;

  useEffect(() => {
    console.log('Carousel mounted', movies);
  }, [movies]);

  return (
    <FlatList
      data={movies}
      renderItem={({item}) => <MovieCard movieItem={item} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces={false}
      snapToInterval={CARD_SIZE}
      decelerationRate={2}
    />
  );
};

export default Carousel;
