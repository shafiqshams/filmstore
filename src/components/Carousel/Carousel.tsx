import {View, FlatList, useWindowDimensions} from 'react-native';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
const CARD_SIZE = 200;
const Carousel = (props: any) => {
  const {movies, onPressMovie} = props;

  return (
    <View style={{width: useWindowDimensions().width}}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movieItem={item} onPressMovie={onPressMovie} />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        snapToInterval={CARD_SIZE}
        decelerationRate={2}
      />
    </View>
  );
};

export default Carousel;
